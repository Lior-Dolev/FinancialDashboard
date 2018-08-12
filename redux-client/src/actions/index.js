import axios from 'axios';
const GET_FINANCIAL_UNITS_POSITIONS_URL = "http://localhost:3001/getFinancialUnitsPositions/";

export const FETCH_FINANCIAL_UNITS_POSITIONS = 'FETCH_FINANCIAL_UNITS_POSITIONS';

export function fetchFinancialUnitsPositions() {
    const request = axios.get(GET_FINANCIAL_UNITS_POSITIONS_URL);

    return {
        type: FETCH_FINANCIAL_UNITS_POSITIONS,
        payload: request
    }
}