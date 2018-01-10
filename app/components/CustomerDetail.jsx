import React from 'react';

export default class CustomerDetail extends React.Component {
    render() {
        let customer = this.props.customerDetail;
        let customerName = customer.name;
        let customerAdress = customer.address1;
        let customerCity = customer.city;
        let customerPhone = customer.phone1;
        return (
            <div id = 'customer'>

                <h4> Nombre cliente: {customerName}</h4>
                <h4> Dirección cliente: {customerAdress}</h4>
                <h4> Ciudad Cliente: {customerCity}</h4>
                <h4> Teléfono Cliente: {customerPhone}</h4>

            </div>
        );
    }
}
