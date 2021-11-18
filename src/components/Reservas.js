import React, {useState, useEffect} from 'react';
import { Table, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { Link, useHistory } from "react-router-dom";
import Reserva from '../models/Reserva';
import ReservaAdapter from '../adapters/ReservaAdapter';


function Reservas () {
    const history = useHistory();
    const [reservas, setReservas] = useState([]);
    const reservaAdapter = new ReservaAdapter()


    useEffect(() =>{
        carregaReservas();
    }, [])

    function carregaReservas(){
        reservaAdapter.fetchResources(setReservas);
    }

    function deletarReserva(reserva){
        if (window.confirm("Deseja mesmo deletar a Reserva?")) {
            new Reservas(reserva).destroy(confirmaReservaDeletado)
        }
    }

    function confirmaReservaDeletado(reserva){
        carregaReservas();

    }

    function renderReserva(reserva){
        if(reserva.length < 1) {
            return null
        }

        return (
            <tr>
                <th scope="row">
                    {reserva.id}
                </th>
                <td>
                    {reserva.nome}
                </td>

                <td>
                    <UncontrolledButtonDropdown>
                        <DropdownToggle caret>
                            Ações 
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>
                                Opções
                            </DropdownItem>
                            <DropdownItem onClick={(e) => {
                            e.preventDefault();
                            history.push("/editar_reserva/" + reserva.id);
                            }}>
                                Editar
                            </DropdownItem>
                            <DropdownItem onClick={(e) => {
                                e.preventDefault();
                                deletarReserva(reserva)
                            }}>
                                Deletar
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                </td> 
            </tr>
        )
    }

    return ( 
        <>  
            <div className="row">
                <div className="col">
                    <h1>Lista de Reserva</h1>
                </div>
                <div className="col">
                    <Link className="float-right btn btn-default" to="/novo_reserva"> Nova reserva </Link>
                </div>
            </div>    
            <Table
                dark
                size=""
                striped
                >
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map(reserva => {
                        return renderReserva(reserva);
                    })}
                </tbody>
            </Table>
        </>   
     );
}

export default Reservas;