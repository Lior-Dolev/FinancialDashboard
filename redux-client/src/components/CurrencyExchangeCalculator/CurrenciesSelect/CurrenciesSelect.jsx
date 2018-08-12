import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

class CurrenciesSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: null
        };

        this.onSelectionChange = this.onSelectionChange.bind(this);
    }

    onSelectionChange(selectedOptione) {
        this.setState({
            selectedOption
        })
    }

    convertOptions() {
        return this.props.options.map(option => {
            return {
                value: option.rate,
                label: option.name
            }
        });
    }

    render() {
        
        return (
            <div>
                <Select 
                    value={this.state.selectedOption}
                    onChange={this.onSelectionChange}
                    options={
                        this.convertOptions()
                    }
                />
            </div>
        );
    }
}

export default CurrenciesSelect;