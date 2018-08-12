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
            if(action.payload.data) {
                const finUnits = action.payload.data.financialUnitsPositions || [];
                const ratesByCurrencies = action.payload.data.ratesByCurrencies || {};

                return {
                    financialUnitsPositions: finUnits,
                    ratesByCurrencies: ratesByCurrencies,
                    calculatedValSumByFinUnit: sumFinancialUnitsValues(finUnits)
                };
            } else {
                return {
                    financialUnitsPositions: [],
                    ratesByCurrencies: {},
                    calculatedValSumByFinUnit: {}
                }
            }
    }

    return state;
}