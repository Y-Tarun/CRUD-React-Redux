import React,{useState} from 'react'
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch} from 'react-redux';
import { END_EDITING, update_details } from '../redux/actions/ActionObjects';

const EditCard = () => {
let currentUser= useSelector(state=>state.data.filter(user=>user.id===state.user))[0]
const [user, setUser] = useState(currentUser)
   
    let dispatch=useDispatch()
    const onChangeListener=(event)=>{
        console.log(user)
      let id=event.target.id;
      let value=event.target.value;  
     setUser({...user,[id]:value})
    
    }

    const updateDetails=()=>{

        dispatch(update_details(user));
        
    }



    return (
        <div className='update-card'>
             <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>
          <th> </th>
        </tr>       
      </thead>
      <tbody>
      <tr>
        <td><input className="input-field" autocomplete="off" id="id" onChange={(event)=>{onChangeListener(event)}}className="input-field" type="text" value={user.id} readOnly/></td>
        <td><input className="input-field" id="name" onChange={(event)=>{onChangeListener(event)}}className="input-field" type="text" placeholder="Enter Name" value={user.name}/></td>
        <td><input className="input-field" id="email" onChange={(event)=>{onChangeListener(event)}}className="input-field" type="email" placeholder="Enter Email" value={user.email}/></td>
        <td><input className="input-field" id="website" onChange={(event)=>{onChangeListener(event)}}className="input-field" type="text" placeholder="Enter Website" value={user.website}/></td>
        <td><Button onClick={updateDetails}>Update</Button></td>
      </tr>
        
      </tbody>
    </Table>
        </div>
    )
}

export default EditCard
