import React from 'react';
import VisitListElement from './VisitListElement';

export default class VisitList extends React.Component {

    render() {

        let visitas = this.props.visits;
        let id = visitas.map((visita,index) => {
            let mykey = "" + index;
            let unaVariable = visita["id"];
            return (
                <li> {unaVariable}</li>
            );
        });
        return (
            <div>
                <ul>
                    {id}
                </ul>
            </div>
        );
    }
}