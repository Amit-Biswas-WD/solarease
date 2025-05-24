import Image from "next/image";
import Link from "next/link";

export default function ServicesCard({ title, description, cardImg }) {
  return (
    <div className="relative overflow-hidden group">
      {/* Background Image */}
      <Image
        src={cardImg}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-se-primary bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center h-full text-se-white px-4 pt-8 pb-10">
        {/* Title */}
        <h3 className="se-h3 mb-4">{title}</h3>

        {/* Divider - Centered horizontally */}
        <div className="h-[2px] w-4/5 bg-se-white group-hover:bg-se-secondary mb-4 self-center transition-all duration-300"></div>

        {/* Description */}
        <p className="se-p text-center">{description}</p>

        {/* Buttons with Full Width */}
        <div className="text-center mt-10 w-full">
          <Link href="#" className="se-button-primary block w-full text-center">
            Learn More
          </Link>
        </div>

        <div className="text-center mt-4 w-full">
          <Link
            href="#"
            className="se-button-secondary block w-full text-center"
          >
            Enquire Now <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
