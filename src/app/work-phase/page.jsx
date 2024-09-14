import React from 'react'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Konsultasi & Pengisian Form',
  },
  {
    label: 'Deal Project Desai & Pembayaran komitmen Fee',
  },
  {
    label: 'Site visit & Pengukuran lokasi serta Brief Desain',
  },
  {
    label: 'Fiksasi Luasan, Surat Penawaran & Down Payment',
  },
  {
    label: 'Proses Desain, Layouting & 3D Modeling',
  },
  {
    label: 'Proses gambar kerja & RAB',
  },
  {
    label: 'Preview akhir & penulasan',
  },
  {
    label: 'Finishing & pengiriman berkas',
  },
];

const work_phase = () => {
  return (
    <div className='container py-16'>
      <div className='py-4 space-y-8'>
        <dir className='flex justify-center'>         
          <h1 className='font-bold text-3xl mb-8 border-l-4 border-red-700 px-2'>Tahapan Kerja</h1>
        </dir>
        <p className='text-lg'>
        Kami memahami bahwa setiap orang memiliki kebutuhan yang berbeda terkait dengan desain
rumahnya. Oleh karena itu, kami selalu bekerja sama dengan klien kami untuk mengetahui keinginan
dan preferensi mereka sebelum memulai proyek. Kami juga terbuka terhadap saran dan masukan dari
klien kami selama proses desain agar hasil akhir sesuai dengan keinginan mereka
        </p>
        <p className='text-lg'>
        Kami mempercayai bahwa kerja tim adalah kunci untuk mencapai hasil terbaik. Oleh karena itu, kami
selalu bekerja sama dengan tim yang terdiri dari ahli-ahli di berbagai bidang, seperti arsitek, interior
designer, dan kontraktor, untuk memastikan bahwa setiap proyek desain rumah kami diselesaikan
dengan baik.
        </p>
        
      </div>
      {/* <div className='py-4 container'>
        <Box sx={{ maxWidth: 400 }}>
          <Stepper orientation='vertical'>
            {steps.map((step, index) => (
              <Step key={step.label} active = {true} data-aos="fade-up" data-aos-delay={index * 100}>
                <StepLabel>
                  <span className="font-bold text-xl text-white">{step.label}</span>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        
      </div> */}
      <div className='timeline container py-12'>
        {steps.map((step, index) => (
          <div className='relative' key={step.label} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className='dot h-12 w-12 sm:h-14 sm:w-14 sm:-left-11 flex justify-center'>
                <span className='text-3xl sm:text-4xl absolute top-1 '>{index+1}</span>
                {/* <div className='dot h-10 w-10 top-0 left-0 animate-ping'></div> */}
              </div>
              <div className='pl-10' key={step.label}>
                <h1 className='timeline-title text-3xl sm:text-4xl'>{step.label}</h1>
              </div>
            </div>
        ))}
            
      </div>
    </div>
  )
}

export default work_phase