import courseService from "@/services/courseService";
import useSWR from "swr";
import SlideComponent from "@/components/commom/slideComponent";
import styles from "../../../../styles/slideCategory.module.scss";
import PageSpinner from "@/components/commom/spinner";

const NewestCategory = function () {
    const { data, error } = useSWR("/newest", courseService.getNewestCourses);

    if (error) return error;
    if (!data)
        return (
            <PageSpinner />
        );


    return (
        <>
            <p className={styles.titleCategory}>LANÇAMENTOS</p>
            <SlideComponent course={data.data} />
        </>
    )
};

export default NewestCategory;