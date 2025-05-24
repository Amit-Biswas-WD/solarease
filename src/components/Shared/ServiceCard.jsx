import Image from "next/image";

export default function ServiceCard({ title, description, cardImg }) {
  return (
    <div className="relative se-card-height overflow-hidden group">
      {/* Background Image */}
      <Image
        src={cardImg}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-se-white px-4">
        {/* Title */}
        <h3 className="se-h3 mb-4">{title}</h3>

        {/* Divider - Centered horizontally */}
        <div className="h-[2px] w-4/5 bg-se-primary group-hover:bg-se-secondary mb-4 self-center transition-all duration-300"></div>

        {/* Description */}
        <p className="se-p text-center">{description}</p>
      </div>
    </div>
  );
}
