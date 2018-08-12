const express = require("express");
const app = express();
const axios = require("axios");
const CURRENCY_API_URL = "http://www.apilayer.net/api/live?access_key=b7838ff45946ffbdc5cc35614fa69dfa";

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

function getFinancialUnits() {
    return {
        "finUnits": [
            {
                "brokerId": 13642,
                "currencyPairCutoff": 30000000,
                "id": 9158,
                "investorId": 11642,
                "limit": 250000000,
                "name": "Bank Of America Unit",
                "notionalCutoff": 30000000,
                "originId": 9203,
                "traderId": 13390,
                "type": "UNALLOCATED"
            },
            {
                "brokerId": 13542,
                "currencyPairCutoff": 50000000,
                "id": 9157,
                "investorId": 19642,
                "limit": 50000000,
                "name": "Citi Unit",
                "notionalCutoff": 60000000,
                "originId": 9201,
                "traderId": 12390,
                "type": "UNALLOCATED"
            },
            {
                "brokerId": 34314,
                "currencyPairCutoff": 50000000,
                "id": 9156,
                "investorId": 19024,
                "limit": 60000000,
                "name": "JP Morgan Unit",
                "notionalCutoff": 60000000,
                "originId": 92010,
                "traderId": 323413,
                "type": "UNALLOCATED"
            },
            {
                "brokerId": 13622,
                "currencyPairCutoff": 700050000,
                "id": 9155,
                "investorId": 11652,
                "limit": 2500500000,
                "name": "Deutsche Bank Unit",
                "notionalCutoff": 300500000,
                "originId": 92030,
                "traderId": 135390,
                "type": "UNALLOCATED"
            },
            {
                "brokerId": 13742,
                "currencyPairCutoff": 303000000,
                "id": 9154,
                "investorId": 19942,
                "limit": 500100000,
                "name": "HSBC Unit",
                "notionalCutoff": 600030000,
                "originId": 920110,
                "traderId": 12390,
                "type": "UNALLOCATED"
            },
            {
                "brokerId": 34224,
                "currencyPairCutoff": 600300000,
                "id": 9153,
                "investorId": 19124,
                "limit": 600030000,
                "name": "BNP Paribas Unit",
                "notionalCutoff": 600200000,
                "originId": 92310,
                "traderId": 32213,
                "type": "UNALLOCATED"
            }
        ]
    };
}

function getPositions() {
    return {
        "positions": [
            {
                "data": {
                    "currency": {
                        "ccy": "EUR",
                        "notionalValue": 5000
                    },
                    "fin": {
                        "MTM": 45,
                        "NOP": 7765
                    }
                },
                "fuOriginId": 9158,
                "id": 59017
            },
            {
                "data": {
                    "currency": {
                        "ccy": "JPY",
                        "notionalValue": 612412
                    },
                    "fin": {
                        "MTM": 54,
                        "NOP": 657
                    }
                },
                "fuOriginId": 9158,
                "id": 59018
            },
            {
                "data": {
                    "currency": {
                        "ccy": "CAD",
                        "notionalValue": 2312312.12
                    },
                    "fin": {
                        "MTM": 54,
                        "NOP": 657
                    }
                },
                "fuOriginId": 9158,
                "id": 59019
            },
            {
                "data": {
                    "currency": {
                        "ccy": "CHF",
                        "notionalValue": 8787645.432
                    },
                    "fin": {
                        "MTM": 544,
                        "NOP": 32132
                    }
                },
                "fuOriginId": 9158,
                "id": 49019
            },
            {
                "data": {
                    "currency": {
                        "ccy": "CAD",
                        "notionalValue": 5435876.321
                    },
                    "fin": {
                        "MTM": 654,
                        "NOP": 98723
                    }
                },
                "fuOriginId": 9158,
                "id": 39019
            },
            {
                "data": {
                    "currency": {
                        "ccy": "CZK",
                        "notionalValue": 6223501.45
                    },
                    "fin": {
                        "MTM": 67,
                        "NOP": 880
                    }
                },
                "fuOriginId": 9157,
                "id": 59020
            },
            {
                "data": {
                    "currency": {
                        "ccy": "NZD",
                        "notionalValue": 745654.43215
                    },
                    "fin": {
                        "MTM": 321.2,
                        "NOP": 765
                    }
                },
                "fuOriginId": 9157,
                "id": 59021
            },
            {
                "data": {
                    "currency": {
                        "ccy": "BGN",
                        "notionalValue": 543543.421
                    },
                    "fin": {
                        "MTM": 983.2,
                        "NOP": 534
                    }
                },
                "fuOriginId": 9157,
                "id": 59022
            }
        ]
    };
}

function getFinancialUnitsNamesById() {
    const financialUnits = getFinancialUnits();
    let financialUnitsNamesById = [];

    financialUnits.finUnits.forEach(finUnit => {
        financialUnitsNamesById[finUnit.id] = finUnit.name;
    });

    return financialUnitsNamesById;
}

function getFinancialUnitsPositionsDTO(ratesByCurrencies) {
    const financialUnitsNamesById = getFinancialUnitsNamesById();
    const positions = getPositions();

    return positions.positions.map(position => {

        const fuOriginId = position.fuOriginId;

        if(!financialUnitsNamesById[fuOriginId]) {
            next();
        }

        const notationalVal = position.data.currency.notionalValue;
        const currency = position.data.currency.ccy;

        if(!ratesByCurrencies[currency]) {
            next();
        }

        return {
            finUnit: financialUnitsNamesById[fuOriginId],
            notationalVal: notationalVal,
            rate: ratesByCurrencies[currency],
            currency: currency,
            calculatedVal: (notationalVal * ratesByCurrencies[currency])
        }
    });
}

async function getRatesByCurrencies() {
    return axios.get(CURRENCY_API_URL).then(res => {
        let ratesByCurrencies = {};
        Object.keys(res.data.quotes).forEach(key => {
            const currencyName = key.substring(3, 6);
            ratesByCurrencies[currencyName] = Number(res.data.quotes[key]);
        });

        return ratesByCurrencies;
    }).catch(error => {
        console.log("Error occured in currencies api. Details: " + error);
        return {};
    });
}

app.get('/getFinancialUnitsPositions/', async (req, res) => {
    res.send(await getRatesByCurrencies().then(ratesByCurrencies => {
        return getFinancialUnitsPositionsDTO(ratesByCurrencies);
    }));
})

app.listen(3001, () => {
    console.log('listening');
});