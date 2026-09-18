import { BaseIcon, type IconProps } from "./Icon";
import type { ProductIconKey, ServiceIconKey } from "@/types";

export function IconRaffstore(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
      <path d="M3.5 8h17M3.5 12h17M3.5 16h13" />
    </BaseIcon>
  );
}

export function IconRollladen(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
      <path d="M3.5 7.5h17M3.5 10.5h17M3.5 13.5h17" />
      <path d="M3.5 17.5h17" strokeOpacity={0.35} />
    </BaseIcon>
  );
}

export function IconMarkise(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3.5 6.5h17" />
      <path d="M3.5 6.5c0 4.5 3 8 8.5 8s8.5-3.5 8.5-8" />
      <path d="M6 14v4M18 14v4" />
    </BaseIcon>
  );
}

export function IconInsektenschutz(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
      <path d="M3.5 8.2h17M3.5 12h17M3.5 15.8h17M8 3.5v17M12 3.5v17M16 3.5v17" strokeWidth={1.1} />
    </BaseIcon>
  );
}

export function IconInnenSonnenschutz(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="1.5" />
      <path d="M6 3.5l2.5 4L11 3.5l2.5 4L16 3.5l2.5 4" />
      <path d="M6 20.5V9M18 20.5V9" strokeOpacity={0.35} />
    </BaseIcon>
  );
}

export function IconSonnenschirm(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3v18" />
      <path d="M3.5 12c0-4.5 3.8-8 8.5-8s8.5 3.5 8.5 8h-17Z" />
      <path d="M9.5 19a2 2 0 0 0 4 0" />
    </BaseIcon>
  );
}

export function IconSteuerung(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M10 6.5h4M9.5 11a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />
      <path d="M10.5 17.5h3" />
    </BaseIcon>
  );
}

export function IconBeratung(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 5.5h16v10.5H9l-4 3.5v-3.5H4Z" />
      <path d="m9 10.5 2 2 4-4.5" />
    </BaseIcon>
  );
}

export function IconReparatur(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14.5 6.5a4 4 0 0 1-5 5l-6 6 2 2 6-6a4 4 0 0 1 5-5l-2.5 2.5-2-2Z" />
    </BaseIcon>
  );
}

export function IconWartung(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2M12 18.5v2M20.5 12h-2M5.5 12h-2M17.8 6.2l-1.4 1.4M7.6 16.4l-1.4 1.4M17.8 17.8l-1.4-1.4M7.6 7.6 6.2 6.2" />
    </BaseIcon>
  );
}

export function IconObjektbau(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 20.5V9l6-4 6 4v11.5" />
      <path d="M16 20.5V6.5l4 2.5v11.5" />
      <path d="M7.5 12.5h5M7.5 16h5" />
    </BaseIcon>
  );
}

const productIconMap: Record<ProductIconKey, (props: IconProps) => React.ReactElement> = {
  raffstore: IconRaffstore,
  rollladen: IconRollladen,
  markise: IconMarkise,
  insektenschutz: IconInsektenschutz,
  innensonnenschutz: IconInnenSonnenschutz,
  sonnenschirm: IconSonnenschirm,
  steuerung: IconSteuerung,
};

const serviceIconMap: Record<ServiceIconKey, (props: IconProps) => React.ReactElement> = {
  beratung: IconBeratung,
  reparatur: IconReparatur,
  wartung: IconWartung,
  objektbau: IconObjektbau,
};

export function ProductIcon({ icon, ...props }: { icon: ProductIconKey } & IconProps) {
  const Comp = productIconMap[icon];
  return <Comp {...props} />;
}

export function ServiceIcon({ icon, ...props }: { icon: ServiceIconKey } & IconProps) {
  const Comp = serviceIconMap[icon];
  return <Comp {...props} />;
}
