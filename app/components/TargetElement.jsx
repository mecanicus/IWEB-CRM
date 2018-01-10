import React from 'react';

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

                <h4> Compañía : {companyName}</h4>
                <h4> Notes: {notes}</h4>
                <h4> Web: {companyWeb}</h4>

            </div>
        );
    }
}
