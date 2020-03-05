import React, { Component } from 'react';
import { Table,ButtonToolbar,Button } from 'react-bootstrap';
import AddDepartmentModal from './AddDepartmentModal'

export default class Home extends Component {

  state={
    UsersList:[],
    addModalshow: false,
  }
  componentDidMount() {
    this.refreshList()
  }
  
  refreshList = () =>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res=>res.json())
    .then(data=>{
    this.setState({
      UsersList: data
    })
  })
}
componentDidUpdate() {
  this.refreshList()
}
addModalClose = () => {
  this.setState({
    addModalshow:false
    })
}

  render() {     
    return (
      <div>
        <h1 className="d-flex m-3 justify-content-center"> this is home page</h1>
        <Table  bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
          {this.state.UsersList.map((user) =>{
           return( <tr key={user.id}>
             <td >{user.id}</td>
               <td>
                 {user.name}
               </td>
               <td>
                 {user.email}
               </td>
             </tr>)
            })}
          </tbody>
        </Table>
        <ButtonToolbar className="mb-3">
            <Button variant="primary" onClick={()=>this.setState({
              addModalshow:true
            })}>Add Details</Button>
        </ButtonToolbar>
        <AddDepartmentModal show={this.state.addModalshow} onHide={this.addModalClose}/>
      </div>
    )
  }
}
