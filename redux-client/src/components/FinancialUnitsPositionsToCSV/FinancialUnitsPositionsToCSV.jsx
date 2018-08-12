import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {CSVLink} from 'react-csv';
import {Button} from 'reactstrap';
import './styles.css';

class FinancialUnitsPositionsToCSV extends Component {

    render() {
        const csvHeaders = [  
            {
                label: 'Financial Unit', 
                key: 'finUnit'
            }, 
            {
                label: 'Notational Value Positions', 
                key: 'notationalVal'
            }, 
            {
                label: 'Rate', 
                key: 'rate'
            }, 
            {
                label: 'Currency', 
                key: 'currency'
            }, 
            {
                label: 'Calculated Value (in USD)', 
                key: 'calculatedVal'
            }
        ];

        return (
            <div>
                <CSVLink className="button"
                    headers={csvHeaders}
                    data={this.props.financialUnitsPositions || []} 
                >
                    Export to Excel
                </CSVLink>
            </div>
        );
    }
}

export default FinancialUnitsPositionsToCSV;