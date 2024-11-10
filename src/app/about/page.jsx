"use client";

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { MapPin, Clock, Phone, Award, Target, Users, Sparkles, Zap, Heart } from 'lucide-react';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const values1 = [
    {
      no: '01',
      title: 'FLEXIBLE AND FAST WORKING',
      desc: 'Cara kerja dan sistem yang di terapkan di natasae bisa cepat dan menyesuaikan dengan waktu klien'
    },
    {
      no: '02',
      title: 'REALISTIC',
      desc: 'Design yang di rencanakan oleh natasae dapat di pastikan hingga terbangun'
    },
    {
      no: '03',
      title: 'INNOVATIVE',
      desc: 'Rata rata Designer natasae berusia muda dan memiliki pemikiran inofatif dan gagasan yang selalu uptodate'
    }
  ]

  const values2 = [
    {
      no: '04',
      title: 'EFFICIENT AND EXCELLENT SERVICE',
      desc: 'karena natasae merupakan jasa design yang mengutamakan service yang baik dengan sistem yang efektif dan efisien'
    },
    {
      no: '05',
      title: 'NEAR',
      desc: 'Natasae dapat berkomunikasi layaknya seperti teman dekat sendiri untuk membanguan personal in touch lebih dekat'
    },
    {
      no: '06',
      title: 'DIFFERENT',
      desc: 'Design dan sistem yang natasae bangun bisa menjadi pembeda dengan jasa design yang lainnya'
    }
  ]

  return (
    <section className='relative bg-neutral-900 text-white'>
      {/* Hero Section */}
      <div className='relative h-[40vh] bg-[url("/about-hero.jpg")] bg-cover bg-center'>
        <div className='absolute inset-0 bg-black/50'></div>
        <div className='container h-full flex items-center relative'>
          <h1 className='font-playfair text-5xl md:text-7xl'>About Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className='container py-20'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div data-aos="fade-right" className="relative w-full h-0 pb-[56.25%]">
            <iframe 
              className="absolute top-0 left-0 w-full h-full shadow-2xl"
              src="https://www.youtube.com/embed/2KjOBvr8frk?si=r06LC1VYvB_GG3JP"
              title="Company Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className='space-y-6' data-aos="fade-left">
            <h2 className='font-playfair text-4xl text-accent'>Tentang Natasae Studio</h2>
            <p className='text-gray-200 leading-relaxed'>
              <span className='font-bold text-accent'>PT NATASAE PADU SERASI </span>
              merupakan Perusahaan yang bergerak di bidang Jasa Desain Arsitektur dan Interior yang menerapkan konsep <span className='font-bold text-accent'>LESS IS MORE "Keindahan dalam Kesederhanaan".</span> 
            </p>
            <div className='space-y-4'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0'>
                  <Target className='w-6 h-6 text-accent' />
                </div>
                <div>
                  <h3 className='font-playfair text-xl mb-2 text-white'>Desain yang Personal</h3>
                  <p className='text-gray-300'>Setiap proyek kami adalah cerminan dari kepribadian dan kebutuhan unik klien.</p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0'>
                  <Award className='w-6 h-6 text-accent' />
                </div>
                <div>
                  <h3 className='font-playfair text-xl mb-2 text-white'>Kualitas Terbaik</h3>
                  <p className='text-gray-300'>Kami berkomitmen untuk menghadirkan hasil dengan standar tertinggi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className='mt-32'>
          <div className='text-center mb-16' data-aos="fade-up">
            <h2 className='font-playfair text-4xl text-accent mb-4'>Lokasi Kami</h2>
            <p className='text-gray-300 max-w-2xl mx-auto'>
              Temukan kami di lokasi strategis yang mudah dijangkau. Kunjungi studio kami untuk konsultasi langsung dengan tim desain kami.
            </p>
          </div>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div className='bg-neutral-800 p-8 rounded-lg space-y-6' data-aos="fade-right">
              <h3 className='font-playfair text-2xl text-white'>Natasae Studio</h3>
              <div className='space-y-4 text-gray-300'>
                <div className='flex items-center gap-3'>
                  <MapPin className='w-5 h-5 text-accent' />
                  <p>Bentang Artha Residence, Blok P22</p>
                </div>
                <div className='flex items-center gap-3'>
                  <MapPin className='w-5 h-5 text-accent' />
                  <p>Bojongsoang, Kabupaten Bandung</p>
                </div>
                <div className='flex items-center gap-3'>
                  <Clock className='w-5 h-5 text-accent' />
                  <p>Senin - Jumat: 09:00 - 17:00</p>
                </div>
                <div className='flex items-center gap-3'>
                  <Phone className='w-5 h-5 text-accent' />
                  <p>+62 811-1111-9572</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <iframe 
                className="w-full h-[400px] rounded-lg shadow-lg" 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.0317310881008!2d107.67085524287766!3d-6.979345089168915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c30ae9785db1%3A0x56e2c91b07bed6f6!2sNatasae%20Studio%20Desain%20Arsitektur%26Interior!5e0!3m2!1sen!2sid!4v1724472262687!5m2!1sen!2sid">
              </iframe>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className='mt-32'>
          <div className='text-center mb-16' data-aos="fade-up">
            <h2 className='font-playfair text-4xl text-accent'>Visi & Misi</h2>
          </div>
          <div className='grid md:grid-cols-2 gap-12'>
            <div className='bg-neutral-800 p-8 rounded-lg' data-aos="fade-up">
              <h3 className='font-playfair text-2xl mb-6 text-accent'>Visi</h3>
              <p className='text-gray-300 leading-relaxed'>
                Menjadikan NATASAe sebagai wadah untuk memberikan solusi, keinginan, harapan, serta kebutuhan klien dalam mewujudkan rumah impian nya.
              </p>
            </div>
            <div className='bg-neutral-800 p-8 rounded-lg' data-aos="fade-up" data-aos-delay="100">
              <h3 className='font-playfair text-2xl mb-6 text-accent'>Misi</h3>
              <p className='text-gray-300 leading-relaxed'>
                NATASAE ADALAH JASA ARISTEK YANG MENONJOLKAN DESIGN FLEKSIBEL DAN FUNGSIONAL dengan penerapan konsep LESS is MOre yang dapat memberikan desain terbaik sesuai kebutuhan klien dengan material pilihan
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className='mt-32'>
          <div className='text-center mb-16' data-aos="fade-up">
            <h2 className='font-playfair text-4xl text-accent'>Our Values</h2>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {[...values1, ...values2].map((value, index) => (
              <div 
                key={index}
                className='bg-neutral-800 p-8 rounded-lg hover:bg-neutral-700 transition-all duration-300'
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className='text-accent font-playfair text-5xl mb-4'>{value.no}</div>
                <h3 className='font-playfair text-xl mb-3 text-white'>{value.title}</h3>
                <p className='text-gray-300'>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
