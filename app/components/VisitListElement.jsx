import React from 'react';

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
        let nombreVendedor = vendedor.fullname;
        let nombreCliente = cliente.name;
        return (
                <div>
                    <button onClick={this.visitaClick}>
                        <h3>Fecha: {fecha}</h3>
                        <h3>Vendedor: {nombreVendedor}</h3>
                        <h3>Cliente: {nombreCliente}</h3>
                    </button>
                    <h3 />
                </div>
        );

    }
}
