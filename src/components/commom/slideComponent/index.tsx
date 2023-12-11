import { CourseType } from "@/services/courseService";
import SlideCard from "../slideCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Certifique-se de importar o estilo do Swiper


interface props {
  course: CourseType[];
}

const SlideComponent = function ({ course }: props) {
  return (
    <>
      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          navigation
          loop
        >
          {course?.map((course) => (
            <SwiperSlide key={course.id}>
              <SlideCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SlideComponent;