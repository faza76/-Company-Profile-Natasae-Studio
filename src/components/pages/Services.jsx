import { TfiWrite } from "react-icons/tfi";
import { School, HousePlus, CircuitBoard, FileCheck2 } from "lucide-react";

const Services = () => {
  return (
    <div className="relative bg-gray-100 flex flex-col justify-center">
        <div className="container relative max-w-4xl mx-auto my-20 md:py-28">
          <h1 className="font-playfair text-4xl text-black mb-12 border-l-4 border-accent px-2">Jasa dan Layanan Kami</h1>
            
            <div className="py-10 mx-auto">
                <div className="mx-auto text-black">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="flex flex-col items-center text-center" data-aos="fade-up">
                            <div className="mb-6">
                                <HousePlus className="w-16 h-16 text-accent stroke-[1.5]" />
                            </div>
                            <h2 className="font-playfair text-2xl text-gray-800 mb-3">Konsultan Perencanaan Arsitek dan Interior</h2>
                            <p className="text-gray-500">
                              Desain interior dan eksterior rumah, Gedung, Ruko dan bangunan lainnya.
                            </p>     
                        </div>
                        
                        <div className="flex flex-col items-center text-center" data-aos="fade-up">
                            <div className="mb-6">
                                <FileCheck2 className="w-16 h-16 text-accent stroke-[1.5]" />
                            </div>
                            <h2 className="font-playfair text-2xl text-gray-800 mb-3">Pembuatan Estimasi Biaya / RAB</h2>
                            <p className="text-gray-500">
                              Hitung RAB bangunan rumah, ruko dan bangunan lainnya.
                            </p>
                        </div>
                        
                        <div className="flex flex-col items-center text-center" data-aos="fade-up">
                            <div className="mb-6">
                                <School className="w-16 h-16 text-accent stroke-[1.5]" />
                            </div>
                            <h2 className="font-playfair text-2xl text-gray-800 mb-3">Konsultan Perencanaan Struktur Konstruksi</h2>
                            <p className="text-gray-500">
                              Hitung Struktur Bangunan Rumah, Ruko dan Bangunan lainnya.
                            </p>
                        </div>
                        
                        <div className="flex flex-col items-center text-center" data-aos="fade-up">
                            <div className="mb-6">
                                <CircuitBoard className="w-16 h-16 text-accent stroke-[1.5]" />
                            </div>
                            <h2 className="font-playfair text-2xl text-gray-800 mb-3">Perencanaan Mekanikal Elektrikal Plumbing</h2>
                            <p className="text-gray-500">
                              Merencanakan ME dan plumbing bangunan rumah, ruko dan bangunan lainnya.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services