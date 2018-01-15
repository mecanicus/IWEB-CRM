import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default class CustomerDetail extends React.Component {
    render() {
        let customer = this.props.customerDetail;
        let customerName = customer.name;
        let customerAdress = customer.address1;
        let customerCity = customer.city;
        let customerPhone = customer.phone1;
        return (
            <div id = 'customer'>
                <p id="clienteTitulo"><Glyphicon glyph="shopping-cart"/><strong> Cliente</strong></p>
                <p><Glyphicon glyph="user"/> Nombre: {customerName}</p>
                <p><Glyphicon glyph="home" className="infocustomer"/> Dirección: {customerAdress}</p>
                <p><Glyphicon glyph="record"/> Ciudad: {customerCity}</p>
                <p><Glyphicon glyph="earphone"/> Teléfono: {customerPhone}</p>

            </div>
        );
    }
}
