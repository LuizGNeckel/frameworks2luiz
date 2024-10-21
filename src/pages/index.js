import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import { Container, Row, Col } from 'react-bootstrap';


export default function Index() {
  return <div>
    <Menu />
    <Container className=".bg-success.bg-gradient">
    Bem Vindos a disciplina
    </Container>
    <Footer />
  </div>;
}