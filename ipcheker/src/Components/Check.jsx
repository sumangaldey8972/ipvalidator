import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { postAction } from "../Store/IPCHECK/ipcheck.action";
import { useDispatch, useSelector } from "react-redux";

const Check = () => {
  const [ip1, setIp1] = useState("");
  const [ip2, setIp2] = useState("");
  const { status } = useSelector((store) => store.ip);
  console.log(status.message);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    let ipFormat =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

    if (ip1.match(ipFormat) && ip2.match(ipFormat)) {
      let data = {
        ip1: ip1,
        ip2: ip2,
      };
      dispatch(postAction(data));
      if (status.message !== "") {
        toast({
          title: "VALID IP",
          description: "ip are successfully added to the database!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "INVALID IP",
        description: "please enter correct ip address",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Heading color="teal">IP Address Validator</Heading>
      <Text>192.168.1.0 to 192.168.1.255</Text>
      <FormControl
        isRequired
        w="30%"
        p="2rem"
        m="auto"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      >
        <FormLabel>Enter First Ip Address</FormLabel>
        <Input
          placeholder="Enter First Ip Address"
          value={ip1}
          onChange={(e) => setIp1(e.target.value)}
        />
        <FormLabel>Enter Second Ip Address</FormLabel>
        <Input
          placeholder="Enter Second Ip Address"
          value={ip2}
          onChange={(e) => setIp2(e.target.value)}
        />
        <Button mt={4} colorScheme="teal" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
      <Text color="red"> {status.message === "" ? "" : status.message} </Text>
    </>
  );
};

export default Check;
