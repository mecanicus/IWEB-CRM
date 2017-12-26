import React from 'react';
import VisitListElement from './VisitListElement';

export default class VisitList extends React.Component {

    render() {
        let visitas = this.props.visits;
        let id = visitas.map((visita, index) => {
            let mykey = "" + index;
            return (
                <VisitListElement visita = {visita} key={mykey} visitaClickApp ={this.props.visitaClickApp} index={index}/>
            );
        });
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th><h2>Visitas</h2></th>
                        </tr>
                        <tr>
                            <td>{id}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
