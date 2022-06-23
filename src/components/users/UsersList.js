import React from "react";
import User from "./User";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  const usersList = props.users.map((user) => (
    <User key={user.id} name={user.name} age={user.age} />
  ));
  return (
    <Card className={classes.users}>
      <ul>{usersList}</ul>
    </Card>
  );
};

export default UsersList;
