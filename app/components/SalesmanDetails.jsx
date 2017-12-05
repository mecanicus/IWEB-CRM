import React from 'react';

export default class SalesmanDetails extends React.Component {
    render() {
        let salesman = this.props.salesmanDetail;
        let salesmanName = salesman["fullname"];
        let salesmanEmail = salesman["email1"];
        let salesmanNotes = salesman["notes"];
        return (
            <div id = 'salesman'>

                <h4> Nombre vendedor: {salesmanName}</h4>
                <h3></h3>
                <h4> Email vendedor: {salesmanEmail}</h4>
                <h3></h3>
                <h4> Notas vendedor: {salesmanNotes}</h4>
                <h3></h3>

            </div>
        );
    }
}