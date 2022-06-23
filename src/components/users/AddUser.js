import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState();

  const usernameInputHandler = (e) => {
    setUsernameInput(e.target.value);
  };

  const ageInputHandler = (e) => {
    setAgeInput(e.target.value);
  };

  const clearErrorHandler = () => {
    setError(null);
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    if (usernameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (Number(ageInput) < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (greater than 0).",
      });
      return;
    }

    props.addNewUserHandler({
      id: Math.random().toString(),
      name: usernameInput,
      age: ageInput,
    });

    //Reset states
    setUsernameInput("");
    setAgeInput("");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onClick={clearErrorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={usernameInput}
            onChange={usernameInputHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={ageInput}
            onChange={ageInputHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
