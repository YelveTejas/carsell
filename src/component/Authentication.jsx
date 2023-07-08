import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
const signin = {
  name: "",
  email: "",
  password: "",
};
const Authentication = () => {
  const [data, setData] = useState(signin);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const sendData = () => {
    console.log(data)
    axios.post('http://localhost:4000/signup',data)
    .then((res)=>{
      if(res.status==200){
        alert('Signup Successfull')
       navigate('/login')
      }
    }).catch((err)=>{
      console.log(err)
  })
  };
  return (
    <Box>
      <Box
        w="30%"
        margin="auto"
        mt="2cm"
        padding="15px"
        border="2px solid #319795"
        borderRadius="md"
        boxShadow="md"
      >
        <Text fontSize='2xl' fontWeight='bold' align='center' color='#319795'>Signup</Text>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            onChange={(e) => handleChange(e)}
            placeholder="Enter Your Name"
          ></Input>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="Enter Your Email"
          ></Input>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            onChange={(e) => handleChange(e)}
            placeholder="Enter Your password"
          ></Input>
          <Button mt="10px" w="full" onClick={() => sendData()}>
            Signup
          </Button>
          <Text>
            If you already have an accout{" "}
            <span>
              <Link to="/login">login</Link>
            </span>
          </Text>{" "}
        </FormControl>
      </Box>
    </Box>
  );
};

export default Authentication;
