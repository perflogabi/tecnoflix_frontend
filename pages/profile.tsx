import Head from "next/head";
import styles from "../styles/profile.module.scss";
import UserForm from "@/components/profile/user";
import HeaderAuth from "@/components/commom/headerAuth";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "@/components/commom/footer";
import { useState } from "react";
import PasswordForm from "@/components/profile/password";

const UserInfo = function () {
    const [form, setForm] = useState("userForm");

    return (
        <>
            <Head>
                <title>Techflix - Meus Dados</title>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            </Head>
            <main className={styles.main}>
                <div className={styles.header}>
                    <HeaderAuth />
                </div>
                <Container className={styles.gridContainer}>
                    <p className={styles.title}>Minha Conta</p>
                    <Row className="pt-3 pb-5">
                        <Col md={4} className={styles.btnColumn}>
                            <Button
                                outline
                                className={styles.renderFormBtn}
                                style={{ color: form === "userForm" ? "#3e48ff" : "white" }}
                                onClick={() => {
                                    setForm("userForm");
                                }}
                            >
                                DADOS PESSOAIS
                            </Button>
                            <Button
                                outline
                                className={styles.renderFormBtn}
                                style={{ color: form === "passwordForm" ? "#3e48ff" : "white" }}
                                onClick={() => {
                                    setForm("passwordForm");
                                }}
                            >
                                SENHA
                            </Button>
                        </Col>
                        <Col md>
                            {form === "userForm"? <UserForm /> : <PasswordForm />}
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