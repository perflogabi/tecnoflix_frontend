import type { AppProps } from "next/app";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Myapp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default Myapp