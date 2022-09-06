import React, {useState} from 'react';

import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
     return
    } else if (+enteredAge < 1 || +enteredAge > 100) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (age should be > 0).'
      })
      return
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredAge('')
    setEnteredUsername('')
  };

  const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = event => {
      setEnteredAge(event.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (<Wrapper>
    {error && <ErrorModal title={error.title} message={error.message} onCloseModal={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}/>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}/>
        <Button type='submit'>add user</Button>
      </form>
    </Card>
    </Wrapper>
  );
};

export default AddUser;
