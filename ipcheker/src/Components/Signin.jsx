import React from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select,
  Button,
  useToast,
  Text,
} from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, signUpAction } from "../Store/Users/user.actions";
import { useEffect } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const { data, msg, name, error } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  console.log("msg", data, name);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(loginAction(creds));
  };

  return (
    <>
      <Text fontSize="33px" color="teal">
        User Signin
      </Text>
      <FormControl
        w="20%"
        m="auto"
        p="2rem"
        border="2px solid teal"
        color="teal"
      >
        <FormLabel mt="1rem">Enter Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />
        <FormLabel mt="1rem">Enter Password</FormLabel>
        <Input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={handleChange}
        />
        <Input
          type="Submit"
          colorScheme="blue"
          mt="4rem"
          mb="1rem"
          bg="blue.400"
          color="white"
          borderRadius="none"
          value="Login"
          onClick={handleSubmit}
        />
      </FormControl>
      <Link to="/">
        <Button mt="1rem" colorScheme="green" borderRadius="none">
          Don't have an account ? SignUp
        </Button>
      </Link>
      <Link to="/ipcheck">
        <Button mt="1rem" colorScheme="orange" borderRadius="none">
          Go To - IP Address Validator
        </Button>
      </Link>
      <Text fontSize="23px" fontWeight="bold" letterSpacing="3px" mt="3rem">
        {" "}
        {msg}{" "}
      </Text>
    </>
  );
};

export default SignIn;
