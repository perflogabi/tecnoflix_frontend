import styles from "../styles/search.module.scss";
import Head from "next/head";
import HeaderAuth from "../src/components/commom/headerAuth";
import { useRouter } from "next/router";
import courseService, { CourseType } from "@/services/courseService";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import SearchCard from "@/components/searchCArd";
import Footer from "@/components/commom/footer";

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
            <main className={styles.main}>
                <div className={styles.header}>
                    <HeaderAuth />
                </div>
                {searchResult.length >= 1 ? (
                    <div className={styles.searchResult}>
                        <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
                            {searchResult?.map((course) => (
                                <SearchCard key={course.id} course={course} />
                            ))}
                        </Container>
                    </div>
                ) : (
                    <p className={styles.noSearchText}>Nenhum resultado encontrado!</p>
                )}
                <div className={styles.footer}>
                    <Footer />
                </div>
            </main>
        </>
    );
};

export default Search;