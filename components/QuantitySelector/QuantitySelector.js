import React from 'react';
import Airflux from 'airflux';
import {actions} from '../../airflux/actions/Actions';

export default class QuantitySelector extends React.Component {

    handleClick() {
        var quantitySelected = React.findDOMNode(this.refs.quantitySelectorSelect).value;
        if (quantitySelected > 0) {
            // Use the action
            var action = actions.getAsyncFunction("quantitySelectorAction");
            action(quantitySelected);
        }
    }

    render() {
        var options = [];
        for (var i = 1; i <= this.props.optionsLength; i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }
        return (
            <div id="quantity-selector">
                <h2>QuantitySelector</h2>
                <select ref="quantitySelectorSelect">
                    <option key="0" value="">{this.props.selectLabel}</option>
                    {options}
                </select>
                <button onClick={this.handleClick.bind(this)}>Add</button>
            </div>
        );
    }
}

QuantitySelector.propTypes = {
    selectLabel: React.PropTypes.string,
    optionsLength: React.PropTypes.number
};

QuantitySelector.defaultProps = {
    selectLabel: "Choose Quantity",
    optionsLength: 3
};




