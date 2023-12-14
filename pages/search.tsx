import styles from "../styles/search.module.scss";
import Head from "next/head";
import HeaderAuth from "../src/components/commom/headerAuth";
import { useRouter } from "next/router";
import courseService, { CourseType } from "@/services/courseService";
import { useEffect, useState } from "react";

const Search = function () {
    const router = useRouter();
    const searchName: any = router.query.search;
    const [searchResult, setSearchResult] = useState<CourseType[]>([]);

    const searchCourses = async function () {
        if (typeof searchName === "string") {
            try {
                console.log('searchName:', searchName);
                const res = await courseService.getSearch(searchName);

                setSearchResult(res.data.courses);
                console.log('res.data.courses:', res.data.courses);
            } catch (error) {
                console.error('Erro ao buscar cursos:', error);
            }
        }
    };

    useEffect(() => {
        console.log('Before searchCourses');
        searchCourses();
    }, [searchName]);

    return (
        <>
            <Head>
                <title>Techtflix - {searchName}</title>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            </Head>
            <main>
                <HeaderAuth />
                {searchResult?.map((course) => (
                    <div key={course.id}>
                        <p>{course.name}</p>
                    </div>
                ))}
            </main>
        </>
    );
};

export default Search;