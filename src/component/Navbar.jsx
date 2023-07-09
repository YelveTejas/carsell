import { Box, Button, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvide";

const Navbar = () => {
  const {user} = useContext(DataContext)
  const handleClick=()=>{
       user.name = ''
  }
  return (
    <Box
      w="full"
      backgroundColor="#319795"
      display="flex"
      padding="10px"
      justifyContent="space-around"
    >
      <Link to='/home'>
        <Text>Home</Text>
      </Link>
      <Link to='/create'>
        <Text>Add Car</Text>
      </Link>
      <Link to='/login'>
        <Box onClick={handleClick}>
        <Text>Logout</Text>
        </Box>
      </Link>
    </Box>
  );
};

export default Navbar;
