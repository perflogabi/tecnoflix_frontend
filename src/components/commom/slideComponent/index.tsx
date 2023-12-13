import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Certifique-se de importar o estilo do Swiper
import SlideCard from '../slideCard';
import { CourseType } from '@/services/courseService';
import styles from "./styles.module.scss"

interface props {
    course: CourseType[];
}

const SlideComponent = function ({ course }: props) {
    let slideCount = 0;

    if (Array.isArray(course) && course.length > 4) {
        slideCount = 4;
    } else if (Array.isArray(course)) {
        slideCount = course.length;
    }

    return (
        <>
            <div className={styles.swiperContainer}>
                <Swiper
                    spaceBetween={8}
                    slidesPerView={3}
                    navigation
                    loop
                    pagination={false}
                    width={slideCount * 300}
                    breakpoints={{
                        1200: {
                            slidesPerView: slideCount >= 2 ? 2 : 1,
                            width: slideCount >= 2 ? 640 : 300,
                        },
                        640: {
                            slidesPerView: 1,
                            width: 300,
                        },
                        300: {
                            width: 250,
                        },
                    }}
                    className={styles.swiper}
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