import Navigation from './Navigation.js';
import { 
    Home,
    Mercados,
    Produtos,
    Instituicoes,
    Estoques,
    Reservas,
    NovoEstoque,
    NovoAlimento,
    NovoReserva,
    NovoInstituicao,
    EditarAlimento,
    EditarEstoque,
    EditarMercado,
    EditarReserva,
    EditarInstituicao,
    NovoMercado,
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
                    <Route  path='/instituicoes'>
                        <Instituicoes/>
                    </Route>
                    <Route  path='/estoques'>
                        <Estoques/>
                    </Route>
                    <Route  path='/reservas'>
                        <Reservas/>
                    </Route>
                    <Route path='/novo_alimento'>
                        <NovoAlimento/>
                    </Route>
                    <Route path='/novo_estoque'>
                        <NovoEstoque/>
                    </Route>
                    <Route path='/novo_mercado'>
                        <NovoMercado/>
                    </Route>
                    <Route path='/novo_instituicao'>
                        <NovoInstituicao/>
                    </Route>
                    <Route path='/novo_reserva'>
                        <NovoReserva/>
                    </Route>
                    <Route 
                        path='/editar_alimento/:id'
                        render={({match}) => {
                            return <EditarAlimento id={match.params.id} />
                        }}>
                    </Route>
                    <Route 
                        path='/editar_reserva/:id'
                        render={({match}) => {
                            return <EditarReserva id={match.params.id} />
                        }}>
                    </Route>
                    <Route 
                        path='/editar_estoque/:id'
                        render={({match}) => {
                            return <EditarEstoque id={match.params.id} />
                        }}>
                    </Route>
                    <Route 
                        path='/editar_instituicao/:id'
                        render={({match}) => {
                            return <EditarInstituicao id={match.params.id} />
                        }}>
                    </Route>
                    <Route 
                        path='/editar_mercado/:id'
                        render={({match}) => {
                            return <EditarMercado id={match.params.id} />
                        }}>
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