import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FinancialDashboard from '../../containers/FinancialDashboard/FinancialDashboard.jsx';
import './styles.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div id="page">
                    <img id="logo" src="https://capitolis.com/wp-content/themes/eprefix-bootstrap/img/toplogo.svg" />
                    <Switch>
                        <Route to="/" component={FinancialDashboard} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;