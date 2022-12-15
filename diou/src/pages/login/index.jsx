//import { Link } from "react-router-dom";
import { Input } from "../../components/Input";

//import bannerImage from "../../assets/banner.png";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import { Container, TextContent, Title, TitleHighLight } from './styles';

const Login = () => {
    return (<> 
    <Header />
    <Container>
        <div>
            <Title>
                <TitleHighLight>
                    Implemente
                    <br />
                </TitleHighLight>
                o seu futuro global agora!
            </Title>
            <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desáfio profissional, evoluindo em comunidade com os melhores experts.
            </TextContent>
            <Button title="Começar agora" variant="secondary" onClick={() => null} />
        </div>
        <div>
            <Input placeholder="email" />
        </div>
    </Container>

   </>)
}

export { Login }