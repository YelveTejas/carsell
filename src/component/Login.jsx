import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { DataContext } from "./DataProvide";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const login ={
  email:'',
  password:''
}
const Login = () => {
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState(login)
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const {setUser} = useContext(DataContext)
  const handleClick = () => setShow(!show);


  const handlechage=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  
  const handlelogin=()=>{
    setLoading(true)
    axios.post('https://carsapp-3.onrender.com/login',data)
    .then((res)=>{
       if(res.status==200){
        setLoading(false)
        console.log(res)
        setUser({name:res.data.name})
         toast.success("Login Successful")
        navigate('/home')
       }
    }).catch((err)=>{
      toast.info("Email or Password is wrong")
      setLoading(false)
      console.log(err)
    })
  }
  return (
    <Box
      w="30%"
      margin="auto"
      mt="2cm"
      padding="10px"
      border="2px solid #319795"
      borderRadius="md"
      boxShadow="md"
    >
        <Text fontSize='2xl' fontWeight='bold' align='center' color='#319795'>Login</Text>
        <FormControl></FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
           name = 'email'
          onChange={(e)=>handlechage(e)}
          placeholder="Enter Your Email"
        ></Input>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input name='password'  onChange={(e)=>handlechage(e)}  type={show ? "text" : "password"} placeholder="Enter Your password" px='10px'></Input>
          <InputRightElement padding='10px'>
            <Button h="1.75rem" size="sm" onClick={handleClick} >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button mt="10px" w="full" onClick={()=>handlelogin()} isLoading={loading}>
          login
        </Button>
        <Text >
          If you don't have an account{" "}
          <span>
            <Link to="/">
              signup</Link>
          </span>
        </Text>{" "}
      </FormControl>
    </Box>
  );
};

export default Login;
