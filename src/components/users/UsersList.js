import React from "react";
import User from "./User";

const UsersList = (props) => {
  const usersList = props.users.map((user) => <User />);
  return <ul>{props.users}</ul>;
};

export default UsersList;
