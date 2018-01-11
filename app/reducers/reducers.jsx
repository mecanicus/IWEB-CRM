import { combineReducers } from 'redux';
import indexReducer from './indexReducer';

const GlobalState = combineReducers({
    indexVisitaSeleccionada: indexReducer,
});
export default GlobalState;
