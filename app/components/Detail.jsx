import React from 'react';
import VisitDetail from "./VisitDetail";
import TargetDetail from "./TargetDetail";
import CustomerDetail from "./CustomerDetail";
import Salesman from "./SalesmanDetails";

export default class Detail extends React.Component {
    render() {
        let visitas = this.props.visits;
        let indexVisita = this.props.indexVisita;
        if (indexVisita === null) {
            return (
                <h1>Seleccione una visita</h1>
            );
        }
        let visitaSeleccionada = visitas[indexVisita];

        let targetDetail = visitaSeleccionada.Targets;
        let customerDetail = visitaSeleccionada.Customer;
        let salesmanDetail = visitaSeleccionada.Salesman;
        return (
            <div id = 'detail'>
                <VisitDetail visita = {visitaSeleccionada}/>
                <TargetDetail targetDetail = {targetDetail}/>
                <CustomerDetail customerDetail = {customerDetail}/>
                <Salesman salesmanDetail ={salesmanDetail}/>
            </div>
        );
    }
}
