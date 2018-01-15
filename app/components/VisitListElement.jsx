import React from 'react';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

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
        let fechaArreglada = fecha.slice(0, 10);
        let nombreVendedor = vendedor.fullname;
        let nombreCliente = cliente.name;
        return (
                <div>
                    <Button className="boton" bsStyle="default" onClick={this.visitaClick}>
                        <p className="textoBoton"><Glyphicon glyph="shopping-cart" className="glyphVisits"/> Fecha: {fechaArreglada}</p>
                        <p className="textoBoton"><Glyphicon glyph="briefcase" className="glyphVisits"/> Vendedor: {nombreVendedor}</p>
                        <p className="textoBoton"><Glyphicon glyph="calendar" className="glyphVisits"/> Cliente: {nombreCliente}</p>
                    </Button>
                </div>
        );

    }
}

