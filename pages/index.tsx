import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/presentationSection";
import CardsSection from "@/components/homeNoAuth/cardsSection";
import SlideSection from "@/components/homeNoAuth/slideSection";
import courseService, { CourseType } from "@/services/courseService";
import { GetStaticProps } from "next";
import { ReactNode } from "react";
import Footer from "@/components/commom/footer";

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}

const HomeNotAuth = function ({ course }: IndexPageProps) {
  return (
		<>
			<Head>
        <title>Techflix</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta property="og:title" content="Techtflix" key="title" />
				<meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil."></meta>
      </Head>
			<main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSection />
        <SlideSection newestCourses={course}/>
        <Footer />
      </main>
		</>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourses();
  return {
    props: {
      course: res.data,
    },
    revalidate: 3600 * 24,
  };
};

export default HomeNotAuth;