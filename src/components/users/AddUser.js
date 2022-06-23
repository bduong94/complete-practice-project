import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const usernameInputHandler = (e) => {
    setUsernameInput(e.target.value);
  };

  const ageInputHandler = (e) => {
    setAgeInput(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(usernameInput, ageInput);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          // value={usernameInput}
          onChange={usernameInputHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          // value={ageInput}
          onChange={ageInputHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
