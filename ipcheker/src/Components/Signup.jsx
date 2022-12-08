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
import { signUpAction } from "../Store/Users/user.actions";
import { useEffect } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { data, msg, error } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  console.log("msg", data, msg);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(signUpAction(creds));
  };

  return (
    <>
      <Text fontSize="33px" color="teal">
        User Signup
      </Text>
      <FormControl
        w="20%"
        m="auto"
        p="2rem"
        border="2px solid teal"
        color="teal"
      >
        <FormLabel mt="1rem">Enter Name</FormLabel>
        <Input
          type="text"
          placeholder="Enter Name"
          name="name"
          onChange={handleChange}
        />
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
          onClick={handleSubmit}
        />
      </FormControl>
      <Link to="/signin">
      <Button mt="1rem" colorScheme="green" borderRadius="none">
        Already have an account ? Sigin
      </Button>
      </Link>
      <Text fontSize="23px" fontWeight="bold" letterSpacing="3px" mt="3rem">
        {" "}
        {msg}{" "}
      </Text>
    </>
  );
};

export default SignUp;
