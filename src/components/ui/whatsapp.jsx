'use client';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Whatsapp = () => {
  return (
    <>
    <FloatingWhatsApp
            // allowClickAway="true"
            chatMessage='Hai! ada yang bisa kami bantu?'
            accountName='Natasae Studio'
            phoneNumber='6281111119572'
            messageDelay={1}
            avatar='/natasase-logo-2.png'
            className='text-black'
    />
    </>
  )
}

export default Whatsapp