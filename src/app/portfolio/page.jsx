import portolist from "@/data/data.json"
import Image from "next/image"

const portfolio = () => {
    const porto = Object.values(portolist)
  return (
    <div>
        <div className="flex items-center min-h-screen w-full bg-neutral-950">
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {porto.map((data, index) => {
                return (
                    <div key={index} className="group relative items-center justify-center overflow-hidden cursor-pointer" data-aos="fade-right" data-aos-delay={index * 100}>
                        <a href={`/portfolio/${data.id}`} key={index}>
                            <Image className="h-72 object-cover group-hover:rotate-0 group-hover:scale-125 transition-transform duration-500 ease-in-out" src={`${data.imgDir}/1.png`} key={index} alt="img desc" width="768" height="400" sizes="(max-width: 767px) 400px, (max-width: 1023px) 768px, (max-width: 2039px) 1024px, 2040px" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 transition-all duration-1000 ease-in-out"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                                <h1 className="text-3xl font-bold text-white">{data.title}</h1>
                            </div>
                        </a>
                    </div>
                    
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default portfolio