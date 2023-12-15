import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import HeaderAuth from '@/components/commom/headerAuth';
import { CourseType } from '@/services/courseService';

const CoursePage = () => {
    const [course, setCourse] = useState<CourseType>();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/courses/${id}`);
                const data = await res.json();
        
                console.log('Raw API Response:', res);
        
                if (res.status === 200) {
                    console.log('Course Data:', data);
                    setCourse(data);
                } else if (res.status === 404) {
                    router.push('/home'); 
                    return;
                } else {
                    console.error(`Unexpected status code: ${res.status}, ${data.message}`);
                }
            } catch (error) {
                console.error('Error fetching course data:', error);
            }
        
        };

        if (id) {
            fetchCourse();
        }
    }, [id]);
    console.log('Render Course Page. Course:', course);

    return (
        <>
            <Head>
                <title>Techflix - {course?.name}</title>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            </Head>
            <main>
                <HeaderAuth />
                {course && <p>{course.name}</p>}
            </main>
        </>
    );
    
};

export default CoursePage;