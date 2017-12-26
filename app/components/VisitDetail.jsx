import React from 'react';

export default class VisitDetail extends React.Component {

    render() {
        let visita = this.props.visita;
        let fechaPlanned = visita.plannedFor;
        let fechaPlannedArreglada = fechaPlanned.slice(0,10);
        let fechaFulfilled = visita.fulfilledAt;
        let fechaFulfilledArreglada;
        if(fechaFulfilled === null) {
            fechaFulfilledArreglada = "No hay fecha";
        }
        else{
            fechaFulfilledArreglada = fechaFulfilled.slice(0,10);
        }
        return (
            <div>
                    <h3>Fecha Planeada: {fechaPlannedArreglada}</h3>
                    <h3>Fecha Completada: {fechaFulfilledArreglada}</h3>
                <h3 />
            </div>
        );

    }
}
