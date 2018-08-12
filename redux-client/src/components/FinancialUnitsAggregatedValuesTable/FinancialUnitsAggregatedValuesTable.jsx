import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'reactstrap';
import './styles.css';

class FinancialUnitsAggregatedValuesTable extends Component {
    renderRows() {
        if(this.props.calculatedValSumByFinUnit) {
            return Object.keys(this.props.calculatedValSumByFinUnit).map((key, index) => {
                return (
                    <tr key={index}>
                        <td>
                            {key}
                        </td>
                        <td>
                            {this.props.calculatedValSumByFinUnit[key]}
                        </td>
                    </tr>
                );
            });
        }
    }

    render() {
        return (
            <Table bordered>
                <thead>
                    <tr>
                        <th>
                            Financial Unit Name
                        </th>
                        <th>
                            Aggregated Value (in USD)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </Table>
        );
    }
}

export default FinancialUnitsAggregatedValuesTable;