import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'reactstrap';
import CurrenciesSelect from './CurrenciesSelect/CurrenciesSelect.jsx'

class CurrencyExchangeCalculator extends Component {
    render() {
        return (
            <div>
                <CurrenciesSelect class="currencyInput"
                    options={this.props.currencies}
                />
                <Input className="currencyInput"/>
                <Input disabled className="currencyInput"/>
            </div>
        );
    }
}

export default CurrencyExchangeCalculator;