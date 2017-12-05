import React from 'react';

export default class VisitDetail extends React.Component {

    render() {
        let visita = this.props.visita;
        let fechaPlanned = visita["plannedFor"];
        console.log({fechaPlanned});
        let fechaFulfilled = visita["fulfilledAt"];
        if(fechaFulfilled === null){
            fechaFulfilled = "No hay fecha";
        }
        return (
            <div>
                    <h3>Fecha Planeada: {fechaPlanned}</h3>
                    <h3>Fecha Completada: {fechaFulfilled}</h3>
                <h3></h3>
            </div>
        );

    }
}