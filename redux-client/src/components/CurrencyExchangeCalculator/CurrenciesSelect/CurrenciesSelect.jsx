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
        let options = [];
        
        Object.keys(this.props.options).forEach(key => {
            options.push({
                value: this.props.options[key],
                label: key
            });
        });

        return options;
    }

    render() {
        
        return (
            <div>
                {this.props.options &&
                <Select 
                    value={this.state.selectedOption}
                    onChange={this.onSelectionChange}
                    options={
                        this.convertOptions()
                    }
                />}
            </div>
        );
    }
}

export default CurrenciesSelect;