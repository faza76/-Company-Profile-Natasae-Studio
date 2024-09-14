'use client';
import React, { useEffect , useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import imageManifest from "@/data/data.json"
import { getImagePaths, getManifest } from '../lib/getImagePaths';




const SwiperComp = (folderId) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [images, setImages] = useState([]);
    const [info, setInfo] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState({});
    console.log(folderId.folderId);
    useEffect(() => {
        const manifest = getManifest();
        const item = manifest.find(entry => entry.imgDir === folderId.folderId);
        console.log(manifest);
        console.log(item.imgDir);
        if (item) {
          const loadedImages = getImagePaths(item.imgDir, item.imgFile);
          setImages(loadedImages);
          console.log(loadedImages);
          setTitle(item.title);
          setDesc(item.desc);
          setInfo(item.info);
        }
      }, [folderId.folderId]);
    
    //console.log(images);

    return (
    <div className="pt-5 swiper-container">
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
         {images.length === 0 ? (
          <p>No images available.</p>
        ) : (
          images.map(({ name, path }) => (
            <SwiperSlide>
                <img key={name} src={path} alt={name} />
            </SwiperSlide>
          ))
        )}
       
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={4}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.length === 0 ? (
          <p>No images available.</p>
        ) : (
            
          images.map(({ name, path }) => (
            <SwiperSlide>
                <img key={name} src={path} alt={name} />
            </SwiperSlide>
            
          ))
        )}
        {/* {Object.keys(images).map((image, index) => (
            <SwiperSlide>
                <img key={index} src={image.default.src} alt={`image-${index}`} />
            </SwiperSlide>
        ))} */}
      </Swiper>
      
    </div>
    
  )
}

export default SwiperComp