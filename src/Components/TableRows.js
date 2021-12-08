import React from "react";
import { useDispatch } from "react-redux";
import {DELETE_EMPLOYEE,START_EDITING} from "../redux/actions/ActionObjects"
const TableRows = ({user}) => {
  let dispatch = useDispatch()

let deleteHandler=()=>{
  dispatch(DELETE_EMPLOYEE(user.id))
}

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.website}</td>      
      <td><span onClick={()=>{dispatch(START_EDITING(user.id))}} class="material-icons ">edit</span>
      <span onClick={deleteHandler}class="material-icons">delete</span></td>
    </tr>
  );
};

export default TableRows;
