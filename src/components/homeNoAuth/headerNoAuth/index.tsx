import { Button, Container } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

const HeaderNoAuth = function () {
    return <>
        <div className={styles.ctaSection}>
            <img src="/icone.png" alt="logoCta" className={styles.imgCta} />
            <p>Se cadastre para ter acesso aos cursos</p>
            <img src="/icone.png" alt="logoCta" className={styles.imgCta} />
        </div>
        <Container className={styles.nav}>
            <div className="logo">
                <img src="/logo2.png" alt="logotechflix" className={styles.imgLogoNav} />
            </div>
            <div className="btn">
                <Link href="/login">
                    <Button className={styles.navBtn} outline>Entrar</Button>
                </Link>
                <Link href="/register">
                    <Button className={styles.navBtn} outline>Quero fazer parte</Button>
                </Link>
            </div>

        </Container>
    </>;
};

export default HeaderNoAuth;