import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/presentationSection";
import CardsSection from "@/components/homeNoAuth/cardsSection";

const HomeNotAuth = function () {
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
      </main>
		</>
  )
};

export default HomeNotAuth;