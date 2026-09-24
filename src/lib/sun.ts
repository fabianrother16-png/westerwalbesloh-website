/**
 * Sun position for a place and local clock time (NOAA solar calculator equations, accurate to well under a degree -
 * plenty for explaining when the sun reaches a window).
 */

export type SunPosition = {
  /** Height above the horizon in degrees (negative = below). */
  elevation: number;
  /** Compass direction in degrees, clockwise from north (90 = east, 180 = south, 270 = west). */
  azimuth: number;
};

const rad = (degrees: number) => (degrees * Math.PI) / 180;
const deg = (radians: number) => (radians * 180) / Math.PI;

function dayOfYear(month: number, day: number) {
  const days = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  return (days[month - 1] ?? 0) + day;
}

/** Central European time: summer time (UTC+2) roughly from April to October, otherwise UTC+1. */
export function utcOffset(month: number) {
  return month >= 4 && month <= 10 ? 2 : 1;
}

export function sunPosition({
  latitude,
  longitude,
  month,
  day,
  hour,
}: {
  latitude: number;
  longitude: number;
  month: number;
  day: number;
  /** Local clock time in hours, e.g. 13.5 = 13:30. */
  hour: number;
}): SunPosition {
  const offset = utcOffset(month);
  const gamma = ((2 * Math.PI) / 365) * (dayOfYear(month, day) - 1 + (hour - offset - 12) / 24);
  const equationOfTime =
    229.18 *
    (0.000075 +
      0.001868 * Math.cos(gamma) -
      0.032077 * Math.sin(gamma) -
      0.014615 * Math.cos(2 * gamma) -
      0.040849 * Math.sin(2 * gamma));
  const declination =
    0.006918 -
    0.399912 * Math.cos(gamma) +
    0.070257 * Math.sin(gamma) -
    0.006758 * Math.cos(2 * gamma) +
    0.000907 * Math.sin(2 * gamma) -
    0.002697 * Math.cos(3 * gamma) +
    0.00148 * Math.sin(3 * gamma);

  const trueSolarMinutes = hour * 60 + equationOfTime + 4 * longitude - 60 * offset;
  const hourAngle = rad(trueSolarMinutes / 4 - 180);
  const lat = rad(latitude);

  const cosZenith = Math.sin(lat) * Math.sin(declination) + Math.cos(lat) * Math.cos(declination) * Math.cos(hourAngle);
  const elevation = 90 - deg(Math.acos(Math.min(1, Math.max(-1, cosZenith))));
  // Measured from south, positive towards west - shifted by 180° to a compass bearing.
  const fromSouth = Math.atan2(Math.sin(hourAngle), Math.cos(hourAngle) * Math.sin(lat) - Math.tan(declination) * Math.cos(lat));
  const azimuth = (deg(fromSouth) + 180 + 360) % 360;

  return { elevation, azimuth };
}

/**
 * How directly the sun shines onto a vertical window facing `facing` degrees:
 * 1 = straight on, 0 = grazing or behind the facade / below the horizon.
 */
export function facadeIncidence(sun: SunPosition, facing: number) {
  if (sun.elevation <= 0) return 0;
  return Math.max(0, Math.cos(rad(sun.elevation)) * Math.cos(rad(sun.azimuth - facing)));
}
