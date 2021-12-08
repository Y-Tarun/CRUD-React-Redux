import { ActionTypes } from "../actions/ActionTypes";

export const reducers = (
  state = {
    isEditing:false,
    user:'',
    loading:true,
    data:[],
    error:""
    
  },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.UPDATE_DETAILS:
      return{...state,
      data:state.data.map(user=>user.id===state.user?payload.user:user),isEditing:false,user:''}
      

    case ActionTypes.DELETE_EMPLOYEE:
      return {...state,data:state.data.filter((user) => user.id !== payload.id)};

    case ActionTypes.ADD_EMPLOYEE:
      if(!state.data.find(user=>user.id===Number(payload.user.id))){
            let newUser={
                          ...payload.user,
                          id:Number(payload.user.id)
                        }
            return {...state, data:[...state.data, newUser], loading:false};
         }
      alert("invalid ID");
      return state;
    case ActionTypes.FETCH_USERS_REQUEST:
      return{...state, loading:true}

    case ActionTypes.FETCH_USERS_SUCCESS:
      return{ ...state,loading:false, data:[...state.data,...payload] ,error:''}
    case ActionTypes.FETCH_USERS_fAILURE:
      return {...state, loading:false, error:payload}
    case ActionTypes.START_EDITING:
      return {...state, isEditing:true,user:payload.userid}

    case ActionTypes.END_EDITING:
      return {...state, isEditing:false,user:''}
    default:
      return state;
  }
};
