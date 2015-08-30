import Airflux from 'airflux';
import {actions} from './../actions/Actions';

var quantitySelectorStore = new class QuantitySelectorStore extends Airflux.Store {

    constructor() {
        super();
        var action = actions.getAction("quantitySelectorAction");
        this.listenTo(action, this.manageInputs);
    }

    manageInputs(quantitySelected) {
        // The store will 'Listen To' actions and this
        // callback will fire when it 'hears' one.
        this.triggerSync(quantitySelected);
    }
}();

export var quantitySelectorStore;