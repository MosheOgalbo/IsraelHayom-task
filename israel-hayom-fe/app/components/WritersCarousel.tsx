'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { getAllWriters } from '../api/writers';

interface Writer {
  id: number;
  name: string;
  imageUrl: string;
  latestPostTitle: string;
  writerPageUrl: string;
  postUrl: string;
}

const WritersCarousel: React.FC = () => {
  const [writers, setWriters] = useState<Writer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
//   const [expandedWriterId, setExpandedWriterId] = useState<number | null>(null);

  useEffect(() => {
    const fetchWriters = async () => {
      try {
        // const response = await fetch("./app/api/writers/write");
        // if (!response.ok) {
        //   throw new Error('Failed to fetch writers');
        // }
        const response = await  getAllWriters();
        // const data = await response.json();
        setWriters(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch writers');
      } finally {
        setLoading(false);
      }
    };

    fetchWriters();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return (<div>
    <h2 className="text-2xl font-bold mb-4 text-red-500">Writers Carousel</h2>
    <div>Error: {error}</div></div>)

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-300">Writers Carousel</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation
        modules={[Navigation]}
      >
        {writers.map((writer) => (
          <SwiperSlide key={writer.id}>
            <div className="border border-red-500 shadow-md hover:shadow-lg p-4">
              <Image
              src={writer.imageUrl}
              alt={writer.name}
              layout="fill"
              objectFit="cover"
              className="border-b-2 border-red-500"
              />
              <h3 className="text-lg font-bold text-black">{writer.name}</h3>
              <p className="text-sm text-gray-500">{writer.latestPostTitle}</p>
              <a href={writer.writerPageUrl} className="text-blue-500 text-sm">
                Read more
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WritersCarousel;
