import React from 'react';

export default class BaseComponent extends React.Component {

    constructor(props){
        super(props);
    }

    log(msg){
        console.log(msg);
    }

}
