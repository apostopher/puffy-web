import Image from "next/image";
const logoIconAspectRatio = 868 / 751;
const logoTextAspectRatio = 436 / 153;

export function Logo({
  showName = false,
  height = 24,
}: {
  showName?: boolean;
  height?: number;
}) {
  const iconHeight = height;
  const textHeight = height;

  const iconWidth = iconHeight * logoIconAspectRatio;
  const textWidth = textHeight * logoTextAspectRatio;

  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo-icon.png"
        alt="Logo"
        height={iconHeight}
        width={iconWidth}
      />
      {showName && (
        <Image
          src="/logo-text.svg"
          alt="Logo"
          height={textHeight}
          width={textWidth}
        />
      )}
    </div>
  );
}
