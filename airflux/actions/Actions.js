import Airflux from 'airflux';

var actions = new class Actions {

    constructor() {
        this.action = [];
        this.action["quantitySelectorAction"] = new Airflux.Action();
    }

    getAction(actionName) {
        return this.action[actionName];
    }

    getAsyncFunction(actionName) {
        return this.action[actionName].asFunction;
    }

    getSyncFunction(actionName) {
        return this.action[actionName].asSyncFunction;
    }
}();

export var actions;

