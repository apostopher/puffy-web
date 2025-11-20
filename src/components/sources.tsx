import Image from "next/image";

const sources = [
  {
    name: "Notion",
    icon: "/notion.png",
    width: 20,
    height: 20,
  },
  {
    name: "Zoom transcript",
    icon: "/zoom.png",
    width: 20,
    height: 20,
  },
  {
    name: "Google Meet transcript",
    icon: "/google.png",
    height: 20,
    width: 24.43,
  },
  {
    name: "Linear tickets",
    icon: "/linear.png",
    height: 20,
    width: 20,
  },
];
export function Sources() {
  return (
    <div className="flex items-center gap-4">
      {sources.map((source) => (
        <div
          key={source.name}
          className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2"
        >
          <Image
            src={source.icon}
            alt={source.name}
            width={source.width}
            height={source.height}
          />
          <span className="text-sm font-medium">{source.name}</span>
        </div>
      ))}
    </div>
  );
}
