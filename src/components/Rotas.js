import Navigation from './Navigation.js';
import { 
    Home,
    Mercados,
    Produtos,
    NovoAlimento,
    Sobre,
} from '.'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Rotas() {
    return (
        <>
            <Router>
                <Navigation/>
                <Switch>   
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route  path='/mercados'>
                        <Mercados/>
                    </Route>
                    <Route  path='/produtos'>
                        <Produtos/>
                    </Route>
                    <Route path='/novo_alimento'>
                        <NovoAlimento/>
                    </Route>
                    <Route path='/sobre'>
                        <Sobre/>
                    </Route>              
                </Switch>
            </Router> 
        </>
     );
} 

export default Rotas;