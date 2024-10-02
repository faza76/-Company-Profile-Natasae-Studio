'use client';
import portolist from "@/data/data.json"
import Image from "next/image";

const PortoCarousel = () => {

  return (
    <div className="overflow-hidden relative pt-12">
        <div className="container flex py-8">
            <h2 className='text-bold text-4xl mb-4 border-l-4 border-red-700 px-2'>Proyek Terbaik Kami</h2>
        </div>
    <div className="flex w-max animate-marquee">
        <a href="/portfolio" className="flex w-max animate-marquee">
      {portolist.map((data, index) => (
        <div key={index} className="flex-shrink-0">
          <Image
            src={`${data.imgDir}/0.png`}
            alt={`Project ${index + 1}`}
            className="h-64 w-auto object-cover mx-2"
            width="768" height="400"
            sizes="(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px"
          />
        </div>
      ))}
      {/* Duplicate images to create the infinite effect */}
      {portolist.map((data, index) => (
        <div key={index + portolist.length} className="flex-shrink-0">
          <Image
            src={`${data.imgDir}/1.png`}
            alt={`Project duplicate ${index + 1}`}
            className="h-64 w-auto object-cover mx-2"
            width="768" height="400"
            sizes="(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px"
          />
        </div>
      ))}
      </a>
    </div>
    
  </div>
  )
}

export default PortoCarousel