import React from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';

export default class VisitDetail extends React.Component {

    render() {
        let visita = this.props.visita;
        let fechaPlanned = visita.plannedFor;
        let fechaPlannedArreglada = fechaPlanned.slice(0, 10);
        let fechaFulfilled = visita.fulfilledAt;
        let fechaFulfilledArreglada;
        if(fechaFulfilled === null) {
            fechaFulfilledArreglada = "No hay fecha";
        }
        else{
            fechaFulfilledArreglada = fechaFulfilled.slice(0, 10);
        }
        return (
            <div id = "fechaaas">
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <p className="fechas"><Glyphicon glyph="calendar" className="info"/> Fecha Planeada: {fechaPlannedArreglada}</p>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <p className="fechas"><Glyphicon glyph="calendar" className="info"/> Fecha Completada: {fechaFulfilledArreglada}</p>
                    </Col>
                </Row>

            </div>
        );

    }
}
