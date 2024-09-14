"use client";

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const teamMembers = Array.from({ length: 8 }).map((_, index) => ({
    name: `Team Member ${index + 1}`,
    role: `Role ${index + 1}`,
    image: `https://via.placeholder.com/800x600?text=Person+${index + 1}`,
    bio: `Brief bio for team member ${index + 1}. Describe their role and contributions.`
  }));

  return (
    <section className='relative bg-neutral-950 text-white py-12'>
      {/* Company Profile Section */}
      <div className='container flex flex-col-reverse lg:flex-row items-center gap-12 mt-24 lg:mt-18'>
        <div
          className="flex flex-1 flex-col items-center lg:items-start gap-4 py-4"
          data-aos="fade-up"
        >
          <h2 className='text-bold text-4xl mb-4 border-l-4 border-red-700 px-2'>Tentang Natasae Studio</h2>
          <p className='text-gray-100'>
          <span className='font-bold'>PT NATASAE PADU SERASI </span>merupakan Perusahaan yang bergerak di bidang Jasa Desain Arsitektur dan Interior yang menerapkan konsep <span className='font-bold'>LESS IS MORE</span>  "Keindahan dalam Kesederhanaan". 
          </p>
          <p className='text-gray-100 pb-4'>
          Kami akan memberikan solusi, Keinginan, Harapan, Serta kebutuhan klien dalam mewujudkan rumah impian nya.
          </p>
          {/* <Button variant="outline" className="text-white border-white bg-neutral-950" data-aos="fade-up">
            Learn More
          </Button> */}
        </div>
        <div
          className="flex flex-1 flex-col justify-center lg:items-start"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <iframe className='w-full h-[300px] lg:w-[400px] aspect-video' src="https://www.youtube.com/embed/r9jwGansp1E" title="Company Video"></iframe>
        </div>
      </div>

      {/* Location Section */}
      <div className='container mt-24'>
        <div className='flex justify-start py-8'>
          <h2 className='text-bold text-3xl mb-4 border-l-4 border-red-700 px-2' data-aos="fade-up">Lokasi</h2>
        </div>
        <div className='grid grid-cols-2'>
          <div className="items-center justify-center flex col-span-1 " data-aos="fade-up">
                  <iframe className="w-full h-[300px]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.0317310881008!2d107.67085524287766!3d-6.979345089168915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c30ae9785db1%3A0x56e2c91b07bed6f6!2sNatasae%20Studio%20Desain%20Arsitektur%26Interior!5e0!3m2!1sen!2sid!4v1724472262687!5m2!1sen!2sid">
                  </iframe>
          </div>
          <div className='col-span-1 container' data-aos="fade-up">
            <p className='text-gray-100 text-left px-4'>
              Natasae Studio berlokasi di Bentang artha residence, Blok p22, Bojongsoang, Kabupaten Bandung
            </p>
          </div>
        </div>
        
      </div>

      {/* Vision & Mission Section */}
      <div className='container mt-24'>
        <dir className='flex justify-center py-8'>
          <h2 className='text-bold text-3xl mb-4 border-l-4 border-red-700 px-2' data-aos="fade-up">Visi & Misi</h2>
        </dir>
        <div className='flex flex-col lg:flex-row gap-12'>
          <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 flex-1' data-aos="fade-right">
            <img src="https://source.unsplash.com/600x800/?architecture" alt="Stylized Image 1" className='w-full lg:w-1/2 h-auto object-cover rounded-lg' />
            <img src="https://source.unsplash.com/600x800/?design" alt="Stylized Image 2" className='w-full lg:w-1/2 h-auto object-cover rounded-lg' />
          </div>
          <div className='flex flex-col justify-center lg:pl-8 flex-1' data-aos="fade-left">
            <div className='mb-8'>
              <h3 className='text-xl font-semibold mb-4'>Visi</h3>
              <p className='text-gray-300'>
              Menjadikan NATASAe sebagai wadah untuk memberikan solusi, keinginan, harapan, serta kebutuhan klien dalam mewujudkan rumah impian nya.
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold mb-4'>Misi</h3>
              <p className='text-gray-300'>
              NATASAE ADALAH JASA ARISTEK YANG MENONJOLKAN DESIGN FLEKSIBEL DAN FUNGSIONAL dengan penerapan konsep LESS is MOre yang dapat memberikan desain terbaik sesuai kebutuhan klien dengan material pilihan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Motto Section */}
      <div className='container mt-24 text-center'>
        <div className='flex justify-center py-8'>
          <h2 className='text-bold text-3xl mb-4 border-l-4 border-red-700 px-2' data-aos="fade-up">Slogan</h2>
        </div>
        <p className='text-gray-100 italic text-xl' data-aos="fade-up">
        "Kenyamanan ruang, tumbuh didalam keserasiaan antara kebutuhan dan keinginan ruang hunian anda"
        </p>
      </div>

     

      {/* Our Team Section */}
      <div className='container mt-24 pb-24'>
        <div className='flex justify-center py-8'>
          <h2 className='text-bold text-3xl mb-4 border-l-4 border-red-700 px-2' data-aos="fade-up">Tim Kami</h2>
        </div>        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="relative flex flex-col items-center text-center bg-cover bg-center"
              style={{ backgroundImage: `url(${member.image})`, height: '300px' }}
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Stagger the animations
            >
              <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4'>
                <div className='text-white'>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className='text-white bg-transparent border border-white'>
                        <h3 className='text-xl font-semibold'>{member.name}</h3>
                        <p className='text-gray-300'>{member.role}</p>
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle>{member.name}</DialogTitle>
                      <DialogDescription>
                        <p><strong>Position:</strong> {member.role}</p>
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
