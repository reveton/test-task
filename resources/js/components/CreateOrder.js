import React, { Component } from 'react';
import {Button, Modal, Form} from 'react-bootstrap'
import axios from 'axios'

export default class CreateOrder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            products: [1, 2, 3, 4, 5],
            name: '',
            email: '',
            phone: '',
            product: 1,
            validated: false
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleProduct = this.handleProduct.bind(this)
    }

    handleName(e){
        this.setState({name: e.target.value.trim()})
    }

    handleEmail(e){
        this.setState({email: e.target.value.trim()})
    }

    handlePhone(e){
        this.setState({phone: e.target.value.trim()})
    }

    handleProduct(e){
        this.setState({product: e.target.value.trim()})
    }

    openModal(){
        this.setState({ isOpen: true })
    }

    renderProducts(){
        return this.state.products.map(product => {
            return <option key={product} value={product}>{product}</option>
        })
    }

    closeModal(){
        this.setState({isOpen: false})
    }

    handleSubmit(e){
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            this.setState({validated: true})
        }
        else {
            e.preventDefault();
            let insertData = {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                product_id: this.state.product
            }
            axios.post('/api/orders', insertData).then(res => {
                alert(res.data.message)
            }).catch(err => {
                alert(err.response.data.message)
            })
        }
    }

    render(){
        return(
            <div className="new-order d-flex justify-content-end pb-4 pt-4">
                <Button onClick={this.openModal}>New Order</Button>
                <Modal
                    show={this.state.isOpen}
                    onHide={this.closeModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Create New Order</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate validated={this.state.validated} id="new-order" onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Name: </Form.Label>
                                <Form.Control required type="text"  placeholder="Name" onChange={this.handleName}/>
                                <Form.Control.Feedback type="invalid">
                                    Please enter name.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Email: </Form.Label>
                                <Form.Control required type="email"  placeholder="Email" onChange={this.handleEmail}/>
                                <Form.Control.Feedback type="invalid">
                                    Please enter email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Phone: </Form.Label>
                                <Form.Control required type="text"  placeholder="Phone" onChange={this.handlePhone}/>
                                <Form.Control.Feedback type="invalid">
                                    Please enter phone.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Product: </Form.Label>
                                <Form.Select aria-label="Select product" onChange={this.handleProduct}>
                                    {this.renderProducts()}
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button form="new-order" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
