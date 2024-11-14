import { Container } from "react-bootstrap";
import Menu from "./modulos/navbar";
import Footer from "./modulos/footer";

export default function Pesportes(){
    return <>
        <Menu/>
        <Container>
            <Container className="border border-success rounded-pill text-center col-sm-6">
                Lista de Produtos de esportes
            </Container> 
            <Container className="">
                Os Produtos
            </Container>
        </Container>
        <Footer/>
    </>
}