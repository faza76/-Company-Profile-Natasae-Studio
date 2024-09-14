import { TfiWrite } from "react-icons/tfi";
import { School, HousePlus, CircuitBoard, FileCheck2 } from "lucide-react";

const Services = () => {
  return (
    <div className="relative bg-gray-100 flex flex-col justify-center">
        <div className="container relative max-w-4xl mx-auto my-20 md:py-28">
        <h1 className="font-bold text-4xl text-black mb-4 border-l-4 border-red-700 px-2">Jasa dan Layanan Kami</h1>

            
            <div className="py-10 mx-auto">
                <div className="mx-auto text-black">
                    <ul className="divide-y divide-gray-300/50 space-y-16">
                        <li className="py-8 grid grid-cols-3" data-aos="fade-up">
                            <div className="flex justify-center items-center content-center">
                                <HousePlus className="w-24 h-24 md:w-40 md:h-40 col-span-1" />
                            </div>
                            <div className="col-span-2">
                                <h2 className="font-bold md:text-3xl text-xl">Konsultan Perencanaan Arsitek
                                dan Interior</h2>
                                <p className="pt-2 text-md">
                                 Desain interior dan eksterior rumah, Gedung, Ruko dan bangunan lainnya.
                                </p> 
                            </div>      
                        </li>
                        <li className="py-8 grid grid-cols-3" data-aos="fade-up">
                            <div className="flex justify-center items-center content-center">
                                <FileCheck2 className="w-24 h-24 md:w-40 md:h-40 col-span-1" />
                            </div>                            
                            <div className="col-span-2">                                
                                <h2 className="font-bold md:text-3xl text-xl">PEMBUATAN ESTIMASI BIAYA / RAB</h2>
                                <p className="pt-2">
                                Hitung RAB bangunan rumah, ruko dan bangunan lainnya.
                                </p> 
                            </div>
                               
                        </li>
                        <li className="py-8 grid grid-cols-3" data-aos="fade-up">
                            <div className="flex justify-center items-center content-center">
                                <School className="w-24 h-24 md:w-40 md:h-40 col-span-1" />
                            </div>
                            <div className="col-span-2">                                
                                <h2 className="font-bold md:text-3xl text-xl">KONSULTAN PERENCANAAN STRUKTUR KONTRUKSI</h2>
                                <p className="pt-2">
                                Hitung Struktur Bangunan Rumah, Ruko dan Bangunan lainnya.

                                </p> 
                            </div>
                               
                        </li>
                        <li className="py-8 grid grid-cols-3" data-aos="fade-up">
                            <div className="flex justify-center items-center content-center">
                                <CircuitBoard className="w-24 h-24 md:w-40 md:h-40 col-span-1" />
                            </div>
                            <div className="col-span-2">                                
                                <h2 className="font-bold md:text-3xl text-xl">PERENCANAAN MEKANIKAL ELEKTRIKAL PLUMBING</h2>
                                <p className="pt-2">
                                merencanakan ME dan plumbing bangunan rumah, ruko dan bangunan lainnya.
                                </p> 
                            </div>
                               
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services