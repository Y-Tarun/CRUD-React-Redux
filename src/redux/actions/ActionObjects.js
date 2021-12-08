import {ActionTypes} from "./ActionTypes";


export const update_details = (user) => {
  return {
    type: ActionTypes.UPDATE_DETAILS,
    payload: {user}
  };
};
export const DELETE_EMPLOYEE = (id) => {
  return {
    type: ActionTypes.DELETE_EMPLOYEE,
    payload: {
      id
    }
  };
};
export const ADD_EMPLOYEE = (user) => {
  return {
    type: ActionTypes.ADD_EMPLOYEE,
    payload: {
     user
    }
  };
};

export const FETCH_USERS_REQUEST=()=>{
  return{type:ActionTypes.FETCH_USERS_REQUEST}
}
export const fetch_users_success =users=>{
  return { 
    type: ActionTypes.FETCH_USERS_SUCCESS,
    payload:users
  }
}
export const FETCH_USERS_FAILURE =error=>{
  return { 
    type: ActionTypes.FETCH_USER_FAILURE,
    payload:error
  }
}

export const START_EDITING = (userid)=>{
  return{
    type:ActionTypes.START_EDITING,
    payload:{userid}
  }
}
export const END_EDITING = ()=>{
  return{
    type:ActionTypes.END_EDITING,
    payload:{}
  }
}