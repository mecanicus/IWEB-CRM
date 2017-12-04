import React from 'react';

export default class VisitListElement extends React.Component {
    render() {

        let visita = this.props.visita;
        let vendedor= visita["Salesman"];
        let cliente= visita["Customer"];
        let fecha= visita["plannedFor"];
        let nombreVendedor = vendedor["fullname"];
        let nombreCliente = cliente["name"];
            return (
                <div>
                    <li>Fecha: {fecha}</li>
                    <li>Vendedor: {nombreVendedor}</li>
                    <li>Cliente: {nombreCliente}</li>
                    <h3></h3>
                </div>
            );

    }
}