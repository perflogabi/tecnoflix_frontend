import "../styles/globals.scss";
import type { AppProps } from "next/app";

function Myapp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default Myapp