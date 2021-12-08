import "./styles.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import EmployeeList from "./Components/employeeList";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import Loading from "./Components/Loading";
import { FETCH_USERS_FAILURE, fetch_users_success,FETCH_USERS_REQUEST,END_EDITING } from "./redux/actions/ActionObjects";
import EditCard from "./Components/EditCard";


export default function App() {

let isEditing = useSelector(state=>state.isEditing)
console.log(isEditing)
let isLoading= useSelector(state=>state.loading)
let dispatch = useDispatch();


let fetchData = async () =>{
  dispatch(FETCH_USERS_REQUEST())

  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response=>{
dispatch(fetch_users_success(response.data))
  })
  .catch(err=>{
    dispatch(FETCH_USERS_FAILURE(err.message))
  })

}


 useEffect(()=>{
   fetchData();
  //  dispatch(fetch_users_success(data));
 },[]);


  return (
    <div className="App">
    <div className="container">
    {
      isLoading?<Loading/>:<EmployeeList />
      
      }

    </div>
   
   
      {isEditing && <>
      <div onClick={()=>{dispatch(END_EDITING())}} className="overlay-styles"></div>
      <EditCard/> </>}

    </div>
  );
}

