import React from 'react';
import { Button } from 'react-bootstrap';

export default class VisitListElement extends React.Component {
    constructor(props) {
        super(props);
        this.visitaClick = this.visitaClick.bind(this);
    }
    visitaClick() {
        let index = this.props.index;
        this.props.visitaClickApp(index);

    }
    render() {
        let visita = this.props.visita;
        let vendedor = visita.Salesman;
        let cliente = visita.Customer;
        let fecha = visita.plannedFor;
        let fechaArreglada = fecha.slice(0,10);
        let nombreVendedor = vendedor.fullname;
        let nombreCliente = cliente.name;
        return (
                <div>
                    <Button id = "botonesVisitas" bsStyle="default" onClick={this.visitaClick}>
                        <h3>Fecha: {fechaArreglada}</h3>
                        <h3>Vendedor: {nombreVendedor}</h3>
                        <h3>Cliente: {nombreCliente}</h3>
                    </Button>
                    <h3 />
                </div>
        );

    }
}

