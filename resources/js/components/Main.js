import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from "./Table";
import CreateOrder from "./CreateOrder";

/* Main Component */
class Main extends Component {

    constructor() {

        super();
        //Initialize the state in the constructor
        this.state = {
            loading: true
        }
    }
    /*componentDidMount() is a lifecycle method
     * that gets called after the component is rendered
     */
    componentDidMount() {
    }

    render() {
        /* Some css code has been removed for brevity */
        return (
            <div>
                <CreateOrder/>
                <Table/>
            </div>
        );
    }
}

export default Main;

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
