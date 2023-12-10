import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

const HeaderNoAuth = function () {
    return <>
        <div className={styles.ctaSection}>
            <img src="/homeNotAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
            <p>Se cadastre para ter acesso aos cursos</p>
            <img src="/homeNotAuth/logoCta.png" alt="logoCta" className={styles.imgCta} />
        </div>
        <Container className={styles.nav}>
            <img src="/logo2.png" alt="logotechflix" className={styles.imgLogoNav} />
            <Link href="/login">
                <Button className={styles.navBtn} outline>Entrar</Button>
            </Link>
            <Link href="/register">
                <Button className={styles.navBtn} outline>Quero fazer parte</Button>
            </Link>
        </Container>
    </>;
};

export default HeaderNoAuth;