import React from 'react';
import './../assets/scss/main.scss';
import VisitList from './VisitList';
import Detail from "./Detail";
import { Navbar, Row, Col } from 'react-bootstrap';
import $ from 'jquery';
import { connect } from 'react-redux';
import { botonClick } from './../reducers/actions';

class App extends React.Component {

    componentDidMount() {
        let url = this.editaParametros();
        this.peticionWeb(url);
    }
    constructor(props) {
        super(props);
        this.state = {
            visits: null,
        };
        this.visitaClickApp = this.visitaClickApp.bind(this);
        this.editaParametros = this.editaParametros.bind(this);
        this.peticionWeb = this.peticionWeb.bind(this);
    }
    visitaClickApp(index) {
        this.props.dispatch(botonClick(index));
    }

    editaParametros() {
        let URL = 'https://dcrmt.herokuapp.com/api/visits/flattened?token=232a6ff08c235306c577';
        let parametros = location.search;
        let parametrosEditados = parametros.replace("?", "&");
        return URL + parametrosEditados;
    }
    peticionWeb(url) {
        $.ajax({
            url: url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({
                    visits: data,
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(url, status, err.toString());
            },
        });
    }

    render() {
        if (this.state.visits === null) {
            return (
                <div id= 'cargando'>
                    <img
                        src="./assets/loader.svg"
                        height="inherit"
                        width="inherit"
                        alt="Cargando..."
                    />
                </div>
            );
        }
        return (
            <div>
                <Navbar inverse collapseOnSelect className="navbar">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a>CRM <small>IWEB</small></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>
                    <Row>
                        <Col xs={12} md={4} lg={4}>
                            <VisitList visits = {this.state.visits} visitaClickApp = {this.visitaClickApp}/>
                        </Col>
                        <Col xs={12} md={8} lg={8}>
                            <Detail visits = {this.state.visits} indexVisita = {this.props.indexVisitaSeleccionada} />
                        </Col>
                    </Row>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        indexVisitaSeleccionada: state.indexVisitaSeleccionada,
    };
}
export default connect(mapStateToProps)(App);
