import React from 'react';
import VisitDetail from "./VisitDetail";
import TargetDetail from "./TargetDetail";
import CustomerDetail from "./CustomerDetail";
import Salesman from "./SalesmanDetails";
import { Row, Col, Glyphicon } from 'react-bootstrap';

export default class Detail extends React.Component {
    render() {
        let visitas = this.props.visits;
        let indexVisita = this.props.indexVisita;
        if (indexVisita === null) {
            return (
                <h1 id ="noVisitas">Seleccione una visita</h1>
            );
        }
        let visitaSeleccionada = visitas[indexVisita];

        let targetDetail = visitaSeleccionada.Targets;
        let customerDetail = visitaSeleccionada.Customer;
        let salesmanDetail = visitaSeleccionada.Salesman;
        return (
            <div id = 'detalles'>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <p role="heading" aria-level="1" id="info"><Glyphicon glyph="info-sign" className="info"/><strong> Info</strong></p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <VisitDetail visita = {visitaSeleccionada}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <TargetDetail targetDetail = {targetDetail}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <CustomerDetail customerDetail = {customerDetail}/>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <Salesman salesmanDetail ={salesmanDetail}/>
                    </Col>
                </Row>

            </div>
        );
    }
}
