import React from 'react';
import VisitListElement from './VisitListElement';

export default class VisitList extends React.Component {

    render() {

        let visitas = this.props.visits;
        let id = visitas.map((visita,index) => {
            let mykey = "" + index;
            return (
                <VisitListElement visita = {visita} key={mykey}/>
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