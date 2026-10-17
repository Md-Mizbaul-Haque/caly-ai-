import Image from "next/image";
import { DeviceMobile } from "@phosphor-icons/react/dist/ssr";

export default function PhoneFrame({
  src,
  label,
  priority = false,
}: {
  src?: string;
  label: string;
  priority?: boolean;
}) {
  return (
    <div className="relative w-[240px] shrink-0 rounded-[2.5rem] border border-line bg-surface p-3 shadow-[0_24px_50px_-30px_rgba(26,26,26,0.3)] sm:w-[272px]">
      <div
        className="relative overflow-hidden rounded-[2rem] bg-[#fffdfb]"
        style={{ aspectRatio: "941 / 1672" }}
      >
        {src ? (
          <Image
            src={src}
            alt={`${label} screen`}
            fill
            priority={priority}
            className="object-contain"
            sizes="272px"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
            <DeviceMobile size={30} className="text-muted" />
            <span className="text-sm font-semibold">{label}</span>
            <span className="text-xs text-muted">Screenshot coming soon</span>
          </div>
        )}
      </div>
    </div>
  );
}
