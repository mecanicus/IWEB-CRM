import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default class TargetElement extends React.Component {
    render() {
        let target = this.props.target;
        let notes = target.notes;
        let company = target.Company;
        let companyName = company.name;
        let companyWeb = company.web1;
        if (companyWeb === null) {
            companyWeb = "No hay página web";
        }
        if (notes === "") {
            notes = "No hay notas";
        }
        return (
            <div>

                <p><Glyphicon glyph="briefcase"/> Compañía : {companyName}</p>
                <p><Glyphicon glyph="info-sign"/> Notes: {notes}</p>
                <p><Glyphicon glyph="globe"/> Web: {companyWeb}</p>

            </div>
        );
    }
}
