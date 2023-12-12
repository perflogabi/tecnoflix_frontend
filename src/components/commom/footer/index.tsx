import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = function () {
    return (
        <>
            <Container className={styles.footer}>
                <img src="/logo2.png" alt="logoFooter" className={styles.footerLogo} />
                <a href="https://techflix.com" target={"blank"} className={styles.footerLink}>TECHFLIX.COM</a>
            </Container>
        </>)
};

export default Footer