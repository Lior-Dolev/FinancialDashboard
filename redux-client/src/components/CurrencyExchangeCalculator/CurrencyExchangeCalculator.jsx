import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'reactstrap';
import CurrenciesSelect from './CurrenciesSelect/CurrenciesSelect.jsx'

class CurrencyExchangeCalculator extends Component {
    render() {
        return (
            <div>
                <CurrenciesSelect
                    options={this.props.currencies}
                />
                <Input />
                <Input disabled/>
            </div>
        );
    }
}

export default CurrencyExchangeCalculator;