import React, {useState} from 'react';
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'


function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (enteredName, enteredAge) => {
    setUsersList((prevUsers) => {
      return [...prevUsers, {name: enteredName, age: enteredAge, id: Math.random()}]
    })
  }

  return (<React.Fragment>
        <AddUser onAddUser={addUserHandler}></AddUser>
        <UsersList users={usersList}></UsersList>
    </React.Fragment>
  );
}

export default App;
