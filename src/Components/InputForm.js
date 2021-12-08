import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { ADD_EMPLOYEE } from "../redux/actions/ActionObjects";


const InputForm = () => {
  let user={};
let dispatch=useDispatch()
const onChangeListener=(event)=>{
  let id=event.target.id;
  let value=event.target.value;  
  user={
    ...user,
    [id]:value
  }

}
const addUser=()=>{
  dispatch(ADD_EMPLOYEE(user))
  document.getElementById("id").value ="";
  document.getElementById("name").value ="";
  document.getElementById("email").value ="";
  document.getElementById("website").value ="";
  // document.getElementsByClassName("input-field").value ="";
}
  return (
    <tr>
        <td><input className="input-field" autocomplete="off" id="id" onChange={(event)=>{onChangeListener(event)}}className="input-field" type="text" placeholder="Enter ID"/></td>
        <td><input className="input-field" id="name" onChange={(event)=>{onChangeListener(event)}}className="input-field" type="text" placeholder="Enter Name"/></td>
        <td><input className="input-field" id="email" onChange={(event)=>{onChangeListener(event)}}className="input-field" type="email" placeholder="Enter Email"/></td>
        <td><input className="input-field" id="website" onChange={(event)=>{onChangeListener(event)}}className="input-field" type="text" placeholder="Enter Website"/></td>
        <td><Button onClick={addUser}>Add User</Button></td>
      </tr>
  );
};

export default InputForm;
