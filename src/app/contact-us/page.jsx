'use client';

import { useState } from "react";
import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button} from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'


const contact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    // Create the mailto link
    const subject = encodeURIComponent("Contact Us Form Submission");
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:inbox@natasaestudio.com?subject=${subject}&body=${body}`;
  };

  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
      <div className='items-center flex justify-center py-4'>
            <Image 
                        src='/natasae-logo-2.png'
                        width={40}
                        height={40}
                        alt="natasae logo"
            />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6 text-neutral-900">Hubungi Kami</h2>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nama
            </label>
            <Input
              type="text"
              placeholder="Nama Anda"
              className="mt-1 block w-full text-gray-700"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nomor Handphone
            </label>
            <Input
              type="tel"
              placeholder="(+62) XXX"
              className="mt-1 block w-full text-gray-700"
              onChange={(e) => setPhone(e.target.value)}
              required

            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pesan
            </label>
            <Textarea
              placeholder="Sampaikan Pesan Anda"
              className="mt-1 block w-full text-gray-700"
              rows={4}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <Button className="w-full">Kirim Pesan</Button>
        </form>

        <div className="mt-8">
          <h3 className="text-center font-semibold text-lg">Follow Us</h3>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact