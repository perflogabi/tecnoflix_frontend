import Link from "next/link";
import styles from "./styles.module.scss";
import { Container, Row, Col, Button } from "reactstrap";

const PresentationSection = function () {
    return (
        <>
            <Container className="py-4">
                <Row>
                    <Col md className="d-flex flex-column justify-content-center align-items-start">
                        <p className={styles.subTitle}>ACESSO ILIMITADO</p>
                        <p className={styles.title}>Tenha acesso aos melhores <br /> tutoriais de Programação.</p>
                        <p className={styles.description}>Estude de onde estiver a qualquer momento e continue <br />evoluindo como programador.</p>
                        <Link href="/register" className={styles.link}>
                            <Button outline className={styles.btnCta}>ACESSE AGORA <img src="/botao-play.png" alt="buttonImg" className={styles.btnImg} /></Button>
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center pt-5">
                        <img src="/bg1.png" className={styles.bgImg} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </>
    )

};

export default PresentationSection;