import { Container, Table} from "react-bootstrap";
import Menu from "./modulos/navbar";
import Footer from "./modulos/footer";

export default function Pesportes({produtos}) {
    return <>
        <Menu />
        <Container>
            <Container className="border border-success rounded-pill text-center col-sm-6 m-2">
                Lista de Produtos de Esportes
            </Container>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Produto</th>
                            <th>Categoria</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                       {produtos.map(prodesportes => 
                        <tr>
                            <td>{prodesportes.id}</td>
                            <td>{prodesportes.titulo}</td>
                            <td>{prodesportes.categoria}</td>
                            <td>{prodesportes.descricao}</td>
                            <td>{prodesportes.preco}</td>
                        </tr>
                      )}
                    </tbody>
                </Table>
            </Container>
        </Container>
        <Footer />
    </>
}
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/produtos/data')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { produtos : repo } }
  }