import React from 'react';
import './../assets/scss/main.scss';
import VisitList from './VisitList';
import { visits } from "./../assets/mock-data";

export default class App extends React.Component {
    render(){
        return (
            <div>
                <VisitList visits = {visits}/>
            </div>
        );
    }
}


