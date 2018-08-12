import {combineReducers} from 'redux';
import FinancialUnitsData from './financialUnits';

const rootReducer = combineReducers({
    financialUnitsData : FinancialUnitsData,
})

export default rootReducer;