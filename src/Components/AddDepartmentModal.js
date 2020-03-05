import React, { Component } from 'react';
import {Modal,Button,Form} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default class AddDepartmentModal extends Component {

    state={
      snackbarOpen:false,
      snackMessage:""
    }

    snackbarClose = ()=>{
      this.setState({snackbarOpen:false})
    }
    
  handleSubmit = (e) =>{
    e.preventDefault();
    const URL=`https://jsonplaceholder.typicode.com/users`;
    fetch(URL,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({id:null, name:e.target.name.value, email:e.target.email.value })
    })
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        snackbarOpen:true,
        snackMessage:"item added"
      })
       return this.props.hello(data)
  }).then(error => console.log(error))
  }
  render() {
    return (
      <>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={this.state.snackbarOpen}
        autoHideDuration={3000}
        onClose={this.snackbarClose}
        message={<span id="message-id">{this.state.snackMessage} </span>}
        action = {
          <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
            {this.state.snackMessage} <CloseIcon fontSize="small" />
        </IconButton>
        } />
      <Modal {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Department
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>form fields</h4>
          <Form onSubmit={this.handleSubmit}>
             <Form.Group controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" name="name" required placeholder="Enter name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" name="email" required placeholder="Enter email" />
                </Form.Group>
                      <Button variant="primary" type="submit" >
                         Submit
                      </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
    )
  }
}
