import React from 'react';
import VisitListElement from './VisitListElement';
import { Table } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
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
            <div id ="lista">

                <ButtonGroup vertical block>
                    {id}
                </ButtonGroup>

            </div>
        );
    }
}
