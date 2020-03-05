// import React, { Component } from 'react';
// import {Modal,Button,Form} from 'react-bootstrap';
// import Snackbar from '@material-ui/core/Snackbar';
// import IconButton from '@material-ui/core/IconButton';

// export default class EditDepartmentModal extends Component {

//   state={
//     snackbarOpen:false,
//     snackMessage:""
//   }

//   snackbarClose = ()=>{
//     this.setState({snackbarOpen:false})
//   }

//   handleSubmit = (e) =>{
//     e.preventDefault();
//     const URL=`https://jsonplaceholder.typicode.com/users`;
//     fetch(URL,{
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       method: "PUT",
//       body: JSON.stringify({id:event.target. })
//     })
//     .then(res=>res.json())
//     .then(data=>{
//       this.setState({
//         snackbarOpen:true,
//         snackMessage:"item added"
//       })
//        return this.props.hello(data)
//   }).then(error => console.log(error))
// }

//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
