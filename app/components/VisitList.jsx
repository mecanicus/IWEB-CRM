import React from 'react';
import VisitListElement from './VisitListElement';
import { ButtonGroup, Glyphicon } from 'react-bootstrap';
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
                <p id = "visitas"> <Glyphicon glyph="list" id="glyph"/> Visitas </p>
                <ButtonGroup vertical block id ="lista">
                    {id}
                </ButtonGroup>

            </div>
        );
    }
}
