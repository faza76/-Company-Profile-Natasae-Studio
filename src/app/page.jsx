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
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Link from 'next/link';

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
            <FloatingWhatsApp
            // allowClickAway="true"
            chatMessage='Hai! ada yang bisa kami bantu?'
            accountName='Natasae Studio'
            phoneNumber='6281111119572'
            messageDelay={1}
            avatar='/natasase-logo-2.png'
            className='text-black'
            />

     <main>
      <div className="preloader">
        <p className="preloader__text space-y-2 italic">
          <span className='text-md text-accent md:text-2xl font-normal text-center text-nowrap'>"Kenyamanan ruang, tumbuh didalam</span>
          <span className='text-md text-accent md:text-2xl font-semibold text-center'>keserasiaan antara kebutuhan dan</span>
          <span className='text-md text-accent md:text-2xl font-normal text-center'>keinginan ruang hunian anda"</span>
        </p>
        <div className="preloader__background"></div>
      </div>
      {/* <div> */}
        <div className='absolute w-full h-[90vh] items-center bg-[url("/hero-image.jpeg")] bg-cover bg-center bg-fixed brightness-50'>
          <div className='absolute inset-0 bg-gradient-to-b from-black/50 to-transparent'></div>
        </div>
        <div className='container flex flex-col justify-center items-start h-[90vh] relative space-y-8'>
          <div className='max-w-3xl space-y-6' data-aos="fade-up">
            <p className='text-white opacity-75 text-sm'>ARCHITECTURE / INTERIOR</p>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-playfair font-thin text-white leading-tight'>
              Wujudkan Ruang Impian Anda Bersama Kami
            </h1>
            <div className='flex items-center space-x-4'>
              <div className='w-20 h-1 bg-accent'></div>
              <p className='text-lg md:text-xl text-white/90'>Jasa Desain Arsitektur dan Interior</p>
            </div>
            <p className='text-lg text-white/80 max-w-2xl'>
              Kami memberikan <span className='font-bold text-accent'>Solusi</span>, 
              <span className='font-bold text-accent'> Keinginan</span>, 
              <span className='font-bold text-accent'> Harapan</span>, serta 
              <span className='font-bold text-accent'> Kebutuhan</span> dalam mewujudkan ruang hunian yang sesuai dengan gaya hidup Anda.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <Link href="/contact-us" className="w-full sm:w-auto">
                <Button className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-6 w-full sm:w-auto">
                  Mulai Konsultasi
                </Button>
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button variant="outline" className="border-2 bg-white/10 border-white text-white hover:bg-white/10 px-8 py-6 w-full sm:w-auto">
                  Lihat Portfolio
                </Button>
              </Link>
            </div>
          </div>
          <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
            <div className='w-8 h-12 rounded-full border-2 border-white/50 flex justify-center items-start p-2'>
              <div className='w-1 h-3 bg-white/50 rounded-full'></div>
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
          <iframe className='w-full h-[300px] lg:w-[400px] aspect-video' src="https://www.youtube.com/embed/2KjOBvr8frk?si=r06LC1VYvB_GG3JP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
          
          {/* Content 2*/}
          <div className="flex flex-1 flex-col items-center lg:items-start gap-4 py-4">
            <h2 className='font-playfair text-4xl mb-4 border-l-4 border-accent px-2'>About Us</h2>
            <p className='text-gray-300'>
            <span className='font-bold'>PT NATASAE PADU SERASI </span>merupakan Perusahaan yang bergerak di bidang Jasa Desain Arsitektur dan Interior yang menerapkan konsep <span className='font-bold'>LESS IS MORE</span>  "Keindahan dalam Kesederhanaan". 
            </p>
            <p className='text-gray-300 pb-4'>
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
