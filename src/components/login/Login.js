import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layout/Layout";
import { logInUser } from "../../bookData";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { logInActionCreator } from "../../redux/userState";

const Form = (props) => {
  const { setError } = props;

  const [{ email, password }, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    logInUser(email, password)
      .then((user) => dispatch(logInActionCreator(user)))
      .catch((e) => {
        console.log("error: ", e);
        setError(e.message);
      });
  };

  return (
    <Box>
      <Box>
        <TextField
          //   id="standard-basic"
          label="email"
          variant="standard"
          value={email}
          onChange={(event) => {
            setCredentials({ password, email: event.target.value });
          }}
        />
      </Box>
      <Box>
        <TextField
          //   id="standard-basic"
          label="password"
          variant="standard"
          type="password"
          value={password}
          onChange={(event) => {
            setCredentials({ password: event.target.value, email });
          }}
        />
      </Box>
      <Box>
        <Button onClick={onSubmit}>Log in</Button>
      </Box>
    </Box>
  );
};

const LoginPage = () => {
  const [error, setError] = useState();
  const user = useSelector((state) => state.user);

  return (
    <Layout>
      {error}
      {user ? `Welcome back ${user.name}!` : <Form setError={setError} />}
    </Layout>
  );
};

export default LoginPage;
