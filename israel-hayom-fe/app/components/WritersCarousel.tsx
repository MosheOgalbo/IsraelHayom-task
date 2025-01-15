"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useEffect } from "react";

interface Writer {
  id: number;
  name: string;
  imageUrl: string;
  latestPost: {
    id: number;
    title: string;
  };
}

const WritersCarousel = () => {
  const router = useRouter();
  const [writersData, setWritersData] = useState<Writer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWriters = async () => {
      try {
        const response = await fetch("/api/writers");
        if (!response.ok) {
          throw new Error("Failed to fetch writers");
        }
        const data = await response.json();
        setWritersData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch writers");
      } finally {
        setLoading(false);
      }
    };
    fetchWriters();
  }, []);

  if (loading) return <div>טוען...</div>;
  if (error)
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-red-500">קרוסלת כותבים</h2>
        <div>שגיאה: {error}</div>
      </div>
    );

    const navigateToWriterPage = (writerId: string) => {
        router.push(`/writers/${writerId}`);
      };

      const navigateToArticlePage = (articleId: string) => {
        router.push(`/articles/${articleId}`);
      };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-[#FF5252] mb-6 text-center">כותבי הטורים</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        pagination={{ clickable: true }}
        navigation
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {writersData.map((writer) => (
          <SwiperSlide key={writer.id}>
            <div className="p-5 border-2 border-red-500 rounded-lg shadow-md">
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={writer.imageUrl}
                  alt={writer.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-red-500"
                />
              </div>
              <h3
                className="text-lg font-semibold text-gray-800 cursor-pointer"
                style={{ fontSize: "22px" }}
                onClick={() => navigateToWriterPage(`${writer.id}`)}
              >
                {writer.name}
              </h3>
              <p
                className="text-sm text-gray-600 cursor-pointer"
                style={{ fontSize: "16px" }}
                onClick={() => navigateToArticlePage(`${writer.latestPost.id}`)}
              >
                {writer.latestPost.title}
              </p>
              <button
                onClick={() => navigateToArticlePage(`${writer.latestPost.id}`)}
                className="text-red-500 text-sm mt-2"
                style={{ fontSize: "14px" }}
              >
                קרא עוד
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WritersCarousel;
