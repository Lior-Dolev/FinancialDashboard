import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loader from 'react-loader-spinner';
import FinancialUnitsPositionsTable from '../../components/FinancialUnitsPositionsTable/FinancialUnitsPositionsTable.jsx';
import FinancialUnitsAggregatedValues from '../../components/FinancialUnitsAggregatedValuesTable/FinancialUnitsAggregatedValuesTable.jsx';
import FinancialUnitsPositionsToCSV from '../../components/FinancialUnitsPositionsToCSV/FinancialUnitsPositionsToCSV.jsx'
import {fetchFinancialUnitsPositions} from '../../actions/index';
import './styles.css';

class FinancialDashboard extends Component {
    constructor(props) {
        super(props);

        this.loaderNeeded = true;
    }

    componentDidMount() {
        setTimeout(() => {
            this.loaderNeeded = false;
            this.forceUpdate();
        }, 3000);

        this.props.fetchFinancialUnitsPositions();
        
        this.timer = setInterval(() => {
            this.props.fetchFinancialUnitsPositions();
        }, 10000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <div id="dashboard">
                
                {
                    this.loaderNeeded && 
                    <Loader 
                        type="Oval"
                        color="#00BFFF"
                        height="50"	
                        width="50"
                    />
                }
                <FinancialUnitsPositionsTable 
                    financialUnitsPositions={this.props.financialUnitsData.financialUnitsPositions}
                />
                <FinancialUnitsPositionsToCSV 
                    financialUnitsPositions={this.props.financialUnitsData.financialUnitsPositions}
                />
                <FinancialUnitsAggregatedValues 
                    calculatedValSumByFinUnit={this.props.financialUnitsData.calculatedValSumByFinUnit}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        financialUnitsData: state.financialUnitsData
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchFinancialUnitsPositions
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancialDashboard);