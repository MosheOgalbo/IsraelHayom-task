"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const WritersCarousel = () => {
  const router = useRouter();

  // נתוני דמה
  const writersData = [
    {
      id: 1,
      name: "כותב א",
      imageUrl: "/images/writer1.jpg",
      latestPost: {
        id: 101,
        title: "כותרת המאמר הראשון",
        content: "תוכן מלא של המאמר הראשון...",
      },
    },
    {
      id: 2,
      name: "כותב ב",
      imageUrl: "/images/writer2.jpg",
      latestPost: {
        id: 102,
        title: "כותרת המאמר השני",
        content: "תוכן מלא של המאמר השני...",
      },
    },
    {
      id: 3,
      name: "כותב ג",
      imageUrl: "/images/writer3.jpg",
      latestPost: {
        id: 103,
        title: "כותרת המאמר השלישי",
        content: "תוכן מלא של המאמר השלישי...",
      },
    },
    {
      id: 4,
      name: "כותב ד",
      imageUrl: "/images/writer4.jpg",
      latestPost: {
        id: 104,
        title: "כותרת המאמר הרביעי",
        content: "תוכן מלא של המאמר הרביעי...",
      },
    },
    // ניתן להוסיף כותבים נוספים כאן
  ];



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
        modules={[Virtual, Navigation, Pagination]}
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
        virtual
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {writersData.map((writer) => (
          <SwiperSlide key={writer.id}>
            <div className="p-5 border-2 border-red-500 rounded-lg shadow-md">
              <Image
                src={writer.imageUrl}
                alt={writer.name}
                width={100}
                height={100}
                className="w-full h-auto mb-4 rounded-full border-4 border-red-500"
              />
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
