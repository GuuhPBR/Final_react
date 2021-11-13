import React from 'react';
import { Table, Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';


function Mercado () {
    return ( 
        <>  
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
                            Mercado
                        </th>
                        <th>
                            Quantidade de frutas 
                        </th>
                        <th>
                            Data - Entrada
                        </th>
                        <th>
                            Data - Vencimento
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            1
                        </th>
                        <td>
                            Extra
                        </td>
                        <td>
                            10 kg
                        </td>
                        <td>
                            01/06/2021
                        </td>
                        <td>
                            16/06/2021
                        </td>
                        <td>
                            <Dropdown toggle={function noRefCheck(){}}>
                                <DropdownToggle caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                    Header
                                    </DropdownItem>
                                    <DropdownItem>
                                    Action
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </td>    
                    </tr>
                    <tr>
                        <th scope="row">
                            2
                        </th>
                        <td>
                            Carrefour 
                        </td>
                        <td>
                            30 kg
                        </td>
                        <td>
                            03/04/2021
                        </td>
                        <td>
                            18/04/2021
                        </td>
                        <td>
                            <Dropdown toggle={function noRefCheck(){}}>
                                <DropdownToggle caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                    Header
                                    </DropdownItem>
                                    <DropdownItem>
                                    Action
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            3
                        </th>
                        <td>
                            Pão de Áçucar
                        </td>
                        <td>
                            20 kg
                        </td>
                        <td>
                            15/11/2021
                        </td>
                        <td>
                            30/11/2021
                        </td>
                        <td>
                            <Dropdown toggle={function noRefCheck(){}}>
                                <DropdownToggle caret>
                                    Dropdown
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                    Header
                                    </DropdownItem>
                                    <DropdownItem>
                                    Action
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>   
     );
}

export default Mercado ;

