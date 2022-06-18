import React, { Component } from 'react';
import MaterialTable from 'material-table'

/* Main Component */
class Table extends Component {

    constructor() {

        super();
        //Initialize the state in the constructor
        this.state = {
            orders: [],
        }
    }
    /*componentDidMount() is a lifecycle method
     * that gets called after the component is rendered
     */
    componentDidMount() {
        /* fetch API in action */
        fetch('/api/orders')
            .then(response => {
                return response.json();
            })
            .then(result => {
                let orders = result.data
                //Fetched product is stored in the state
                this.setState({ orders });
            });
    }

    renderOrders() {
        return this.state.orders.map(order => {
            return (
                {
                    'id' : order.id,
                    'uuid' : order.uuid,
                    'client_name': order.client.name,
                    'product_name': order.product.name,
                    'product_price': order.product.price,
                    'product_id' : order.product.id,
                    'manager_id' : order.product.manager_id
                }
                /* When using list you need to specify a key
                 * attribute that is unique for each list item
                */
            );
        });
    }

    render() {
        /* Some css code has been removed for brevity */
        return (
            <div style={{ maxWidth: '100%' }}>
                <MaterialTable
                    columns={[
                        { title: 'ID', field: 'id', },
                        { title: 'UUID', field: 'uuid' },
                        { title: 'Client Name', field: 'client_name' },
                        { title: 'Product Name', field: 'product_name' },
                        { title: 'Product ID', field: 'product_id' },
                        { title: 'Price', field: 'product_price' },
                        { title: 'Manager ID', field: 'manager_id' }
                    ]}
                    data={this.renderOrders()}
                    title="Orders"
                    options={{
                        filtering: true
                    }}
                />
            </div>
        );
    }
}

export default Table;
