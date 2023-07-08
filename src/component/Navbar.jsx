import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <Text>Logout</Text>
      </Link>
    </Box>
  );
};

export default Navbar;
