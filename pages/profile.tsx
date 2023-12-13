import Head from "next/head";
import styles from "../styles/profile.module.scss";
import UserForm from "@/components/profile/user";
import HeaderAuth from "@/components/commom/headerAuth";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "@/components/commom/footer";

const UserInfo = function () {
    return (
        <>
            <Head>
                <title>Techflix - Meus Dados</title>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            </Head>
            <main>
                <div className={styles.header}>
                    <HeaderAuth />
                </div>
                <Container calssName="py-5">
                    <p className={styles.title}>Minha Conta</p>
                    <Row className="pt-3 pb-5">
                        <Col md={4} className={styles.btnColumn}>
                            <Button outline className={styles.renderFormBtn}>
                                DADOS PESSOAIS
                            </Button>
                            <Button outline className={styles.renderFormBtn}>
                                SENHA
                            </Button>
                        </Col>
                        <Col md>
                            <UserForm />
                        </Col>
                    </Row>
                </Container>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </main>
        </>
    );
};

export default UserInfo;