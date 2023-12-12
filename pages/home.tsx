import HeaderAuth from "@/components/commom/headerAuth";
import FeaturedSection from "@/components/homeAuth/featuresSection";
import NewestCategory from "@/components/homeAuth/newestCategory";
import Head from "next/head";

const HomeAuth = function () {
    return (
        <>
            <Head>
                <title>Techflix - Home</title>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            </Head>
            <main>
               <FeaturedSection/>
               <NewestCategory />
            </main>
        </>
    );
};

export default HomeAuth;