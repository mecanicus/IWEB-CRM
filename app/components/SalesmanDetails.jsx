import React from 'react';
import { Image, Glyphicon } from 'react-bootstrap';

export default class SalesmanDetails extends React.Component {
    render() {
        let salesman = this.props.salesmanDetail;
        let salesmanName = salesman.fullname;
        let salesmanEmail = salesman.email1;
        let salesmanNotes = salesman.notes;
        return (
            <div id = 'salesman'>
                <p id="vendedorTitulo"><Glyphicon glyph="briefcase"/><strong> Vendedor</strong></p>
                <p><Glyphicon glyph="user"/> Nombre: {salesmanName}</p>
                <p><Glyphicon glyph="envelope"/> Email: {salesmanEmail}</p>
                <p><Glyphicon glyph="info-sign"/> Notas: {salesmanNotes}</p>
                <p>{salesman.Photo ? <Image id = "imagen" circle alt="Vendedor" src={salesman.Photo.url}/> : null}</p>
            </div>
        );
    }
}
