import {FETCH_FINANCIAL_UNITS_POSITIONS} from '../actions/index';

function sumFinancialUnitsValues(financialUnitsPositions) {
    let calculatedValSumByFinUnit = {};

    financialUnitsPositions.forEach(row => {
        if(calculatedValSumByFinUnit[row.finUnit]) {
            calculatedValSumByFinUnit[row.finUnit] += row.calculatedVal;
        } else {
            calculatedValSumByFinUnit[row.finUnit] = row.calculatedVal;
        }
    });

    return calculatedValSumByFinUnit;
}

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_FINANCIAL_UNITS_POSITIONS:
            const finUnits = action.payload.data || [];
            return {
                financialUnitsPositions: finUnits,
                calculatedValSumByFinUnit: sumFinancialUnitsValues(finUnits)
            };
    }

    return state;
}