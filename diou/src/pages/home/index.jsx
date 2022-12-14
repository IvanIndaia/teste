import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

const Home = () => {
    return (<> 
    <h1>Home</h1>
    <Button title="Teste 1"/>
    <Button title="Teste 2" variant="secondary"/>
    <Link to="/login">Fazer Login</Link>
   </>)
}

export { Home }