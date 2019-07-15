import React from 'react';
import ReactDOM from 'react-dom';
import './css/login.css';
import Logout from './components/Logout';
import PacienteLogin from './components/PacienteLogin';
import MedicoLogin from './components/MedicoLogin';
import HomeMedico from './components/HomeMedico';
import homePaciente from './components/HomePaciente';
import * as serviceWorker from './serviceWorker';
import { Router, Route, browserHistory } from 'react-router';
import Start from './components/Start';

function verificaAutenticacao(nextState, replace){
    if(localStorage.getItem('auth-token') === null){
        replace('/');
    }
}

ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={Start} />
            <Route path="/pacienteLogin" component={PacienteLogin} />
            <Route path="/medicoLogin" component={MedicoLogin} />
            <Route path="/logout" component={Logout} />
            <Route path="/homeMedico" component={HomeMedico} onEnter={verificaAutenticacao} />
            <Route path="/homePaciente" component={homePaciente} onEnter={verificaAutenticacao} />
        </Router>
    )
    , document.getElementById('root'));

serviceWorker.unregister();

