import React from 'react';
import BaseComponent from '../BaseComponent';
import {quantitySelectorStore} from '../../airflux/stores/QuantitySelectorStore';

export default class DynamicInputPanel extends BaseComponent {

    constructor(props){
        super(props);
        this.state = {numberOfInputs: props.numberOfInputs};
    }

    onChange(quantitySelected) {
        this.log("hello base!");
        this.setState({
            numberOfInputs: quantitySelected
        });
    }

    componentDidMount() {
        // bind(this), otherwise it would be quantitySelectorStore
        // instead of the DynamicInput panel (with its setState method)
        this.unsubscribe = quantitySelectorStore.listen(this.onChange.bind(this));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        var inputs = [];
        for (var i = 1; i <= this.state.numberOfInputs; i++) {
            inputs.push(<div key={i}><input type="text" name="input"/></div>)
        }
        return (
            <div id="dynamic-input-panel">
                <h2>DynamicInputPanel</h2>
                {inputs}
            </div>
        );
    }
}

DynamicInputPanel.propTypes = {
    numberOfInputs: React.PropTypes.number
};

DynamicInputPanel.defaultProps = {
    numberOfInputs: 1
};