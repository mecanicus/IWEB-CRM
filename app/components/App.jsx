import React from 'react';
import './../assets/scss/main.scss';
import VisitList from './VisitList';
import { visits } from "./../assets/mock-data";
import Detail from "./Detail";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexVisitaSeleccionada : 2,
        };
        this.visitaClickApp = this.visitaClickApp.bind(this);
    }
    visitaClickApp(index){
        this.setState({
            indexVisitaSeleccionada : index,
        });
    }


        render(){

        return (
            <div>
                <Detail visits = {visits} indexVisita = {this.state.indexVisitaSeleccionada} />
                <VisitList visits = {visits} visitaClickApp = {this.visitaClickApp}/>


            </div>
        );
    }
}


