import React from 'react';
import Airflux from 'airflux';
import QuantitySelector from './components/QuantitySelector/QuantitySelector.js';
import DynamicInputPanel from './components/DynamicInputPanel/DynamicInputPanel.js';

export class App extends React.Component {

    render() {

        return (
            <div>
                <h1>Component Communication</h1>
                <QuantitySelector optionsLength="20" selectLabel="How Many Inputs?"/>
                <DynamicInputPanel/>
            </div>
        );
    }
}

React.render(<App/>, document.querySelector("#myApp"));