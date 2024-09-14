"use client";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Services from '@/components/pages/Services';
import Head from "next/head";
import portolist from "@/data/data.json"
import PortoCarousel from '@/components/PortoCarousel';
import SEO from '@/components/pages/SEO';

export default function Home() {
  useGSAP(() => {
    gsap.registerPlugin(Flip);
    
    const preloaderBg = document.querySelector('.preloader__background');
    const preloaderText = document.querySelectorAll('.preloader__text span');
    // const navbar = document.querySelector('.anim_head');

    const master = gsap.timeline();
    const setInitialState = () => {
        gsap.set(preloaderText, {
            y:100,
            opacity:0
        });

        // gsap.set(navbar)

    };

    const preloaderAnimate = () => {
        const tl = gsap.timeline({
            defaults: {
                ease: 'power2.out'
            }
        });

        tl.to(preloaderText, {
            y:0,
            duration: 1,
            opacity: 1,
            stagger: 0.2,
            delay: 0.3   
        })
        .to(preloaderText, {
            y:-110,
            opacity: 0,
            delay: 0.5  
        })
        .to(preloaderBg, {
            yPercent:-100,
            duration: 1,
            ease: 'power4.inOut' 
        })

        return tl;
    }
    master
      .add(setInitialState())
      .add(preloaderAnimate())
  });
  return (
    <>
      <SEO
        title="Natasase Studio"
        description="Jasa Desain Arsitektur dan Interior."
        image="https://www.natasaestudio.com/preview.png"
        url="https://natasaestudio.com/"
      />
      
     <main>
      <div className="preloader">
        <p className="preloader__text space-y-2 italic">
          <span className='text-md md:text-2xl font-normal text-center text-nowrap'>"Kenyamanan ruang, tumbuh didalam</span>
          <span className='text-md md:text-2xl font-semibold text-center'>keserasiaan antara kebutuhan dan</span>
          <span className='text-md md:text-2xl font-normal text-center'>keinginan ruang hunian anda"</span>
        </p>
        <div className="preloader__background"></div>
      </div>
      {/* <div> */}
        <div className='absolute w-full h-[80vh] items-center bg-[url("/hero-image.jpeg")] bg-cover object-cover bg-fixed brightness-50'>
        </div>
        <div className='container sm:flex justify-center items-center h-[80vh] p-8 md:p-36 relative'>
          <div className='md:flex justify-center items-center py-10 relative'>
              <h1 className='text-6xl font-bold align-top text-right px-2'>Jasa Desain Arsitektur dan Interior</h1>
              <div className='px-2 flex md:py-0 '>
                <div className='px-2 py-16 md:py-24 border-l-4 border-red-800 hidden sm:block'>
                </div>
                <h1 className='text-md font-medium text-left justify-center hidden sm:block'>Kami memberikan <span className='font-bold'>Solusi</span>, <span className='font-bold'>Keinginan</span>, <span className='font-bold'>Harapan</span>, serta <span className='font-bold'>Kebutuhan</span> Dalam Mewujudkan Rumah Impian Anda.</h1>
              </div>
          </div>
        </div>
      {/* </div> */}
      <PortoCarousel />
      
      <section className='relative'>
        <div className='container flex flex-col-reverse lg:flex-row items-center gap-12 py-24 lg:mt-18'>
        
          {/* Content 1*/}
          <div
          className="flex flex-1 flex-col justify-center lg:items-start"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <iframe className='w-full h-[300px] lg:w-[400px] aspect-video' src="https://www.youtube.com/embed/r9jwGansp1E" title="Company Video"></iframe>
        </div>
          
          {/* Content 2*/}
          <div className="flex flex-1 flex-col items-center lg:items-start gap-4 py-4">
            <h2 className='text-bold text-4xl mb-4 border-l-4 border-red-700 px-2'>About Us</h2>
            <p className='text-gray-100'>
            <span className='font-bold'>PT NATASAE PADU SERASI </span>merupakan Perusahaan yang bergerak di bidang Jasa Desain Arsitektur dan Interior yang menerapkan konsep <span className='font-bold'>LESS IS MORE</span>  "Keindahan dalam Kesederhanaan". 
            </p>
            <p className='text-gray-100 pb-4'>
            Kami akan memberikan solusi, Keinginan, Harapan, Serta kebutuhan klien dalam mewujudkan rumah impian nya.
            </p>
            <a href="/about">
              <Button variant="outline" className="text-black">
                Selengkapnya
              </Button>
            </a>
            
          </div>
        </div>
      </section>
      <section>
        <Services />
      </section>
      
    </main>
    </>
   
  );
}
