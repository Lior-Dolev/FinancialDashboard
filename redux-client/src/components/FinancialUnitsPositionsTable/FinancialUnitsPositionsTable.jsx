import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'reactstrap';
import './styles.css';

class FinancialUnitsPositionsTable extends Component {
    renderRows() {
        if(this.props.financialUnitsPositions) {
            return this.props.financialUnitsPositions.map((row, index) => {
                return (
                    <tr key={index}>
                        <td>
                            {row.finUnit}
                        </td>
                        <td>
                            {row.notationalVal}
                        </td>
                        <td>
                            {row.rate}
                        </td>
                        <td>
                            {row.currency}
                        </td>
                        <td>
                            {row.calculatedVal}
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
                            Notational Value Positions
                        </th>
                        <th>
                            Rate
                        </th>
                        <th>
                            Currency
                        </th>
                        <th>
                            Calculated Value (in USD)
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

export default FinancialUnitsPositionsTable;