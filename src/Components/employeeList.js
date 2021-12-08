import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import TableRows from "./TableRows";
import InputForm from "./InputForm";

const EmployeeList = () => {

  let users= useSelector(state=>state.data)
  
  return (
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
      <InputForm />
       { users.map(user => <TableRows key={user.id} user={user} />
        )}
        
      </tbody>
    </Table>
  );
};

export default EmployeeList;
