import useSWR from 'swr';
import styles from '../../../../styles/slideCategory.module.scss'
import courseService from '@/services/courseService';
import SlideComponent from '@/components/commom/slideComponent';

const FeaturedCategory = function () {
    const { data, error } = useSWR("/favorites", courseService.getFeaturedCourses);

    if (error) return error;
    if (!data)
        return (
            <>
                <p>Loading</p>
            </>

        );
    return (
        <>
            <p className={styles.titleCategory}>EM DESTAQUE</p>
            <SlideComponent course={data.data} />
        </>
    );
}

    export default FeaturedCategory;