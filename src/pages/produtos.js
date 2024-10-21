
import Footer from "./modulos/footer";
import Menu from "./modulos/navbar";
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
export default function Index() {
    var produtos =
        [
            {
                id: 1,
                produto: "Tênis de Corrida",
                descricao: "O tênis de corrida SpeedRun é ideal para atletas que buscam desempenho e conforto. Com uma tecnologia de amortecimento avançada, ele proporciona uma corrida suave, reduzindo o impacto nas articulações. Seu design leve e respirável garante que os pés se mantenham frescos, mesmo em longas distâncias. Perfeito para treinos diários ou competições, esse tênis combina estilo e funcionalidade."
            },
            {
                id: 2,
                produto: "Bola de Futebol",
                descricao: "A bola de futebol ProKick é confeccionada com materiais de alta qualidade, garantindo durabilidade e excelente controle durante as partidas. Com um design aerodinâmico, ela proporciona precisão nos passes e chutes. Ideal para jogadores amadores e profissionais, essa bola é testada em condições rigorosas, assegurando que você tenha a melhor performance em campo, seja em treinos ou competições."
            },
            {
                id: 3,
                produto: "Raquete de Tênis",
                descricao: "A raquete de tênis PowerGrip é projetada para jogadores que buscam potência e controle em suas jogadas. Com um quadro leve e um padrão de cordas otimizado, ela oferece uma ótima resposta ao impacto, permitindo que você jogue com confiança. Seu design ergonômico e confortável reduz a fadiga nas mãos, tornando-a perfeita para longas sessões de treino ou torneios intensos."
            },
            {
                id: 4,
                produto:" Canoas de Caiaque",
                descricao: "A canoa de caiaque AquaAdventure é feita para aqueles que buscam emoção e aventura nas águas. Com um design estável e leve, ela é fácil de manobrar em rios e lagos. Seu material resistente à água e UV assegura durabilidade, enquanto os assentos confortáveis proporcionam uma experiência agradável durante longos períodos. Perfeita para passeios em família ou expedições emocionantes na natureza."
            },
            {
                id: 5,
                produto: "Equipamento de Skate",
                descricao:" O equipamento de skate XtremeBoard é a escolha perfeita para skaters de todos os níveis. Com um design moderno e robusto, ele garante segurança e estilo. A lixa antiderrapante proporciona uma melhor aderência, enquanto as rodas de alta performance asseguram velocidade e estabilidade. Ideal para manobras em parques ou nas ruas, este equipamento é essencial para quem deseja se destacar no mundo do skate."
            }
        ]
        

    return <>
        <Menu />
        <Container>
            <Accordion defaultActiveKey="0">
            {produtos.map(item =>
                <Accordion.Item Key={item.id}>
                    <Accordion.Header>
                        {item.produto}
                    </Accordion.Header>
                    <Accordion.Body>     
                        {item.descricao}           
                    </Accordion.Body>
                </Accordion.Item>
            )}
            </Accordion>
        </Container>

        <Footer />
    </>
}

