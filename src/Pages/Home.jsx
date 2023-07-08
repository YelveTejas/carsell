import React, { useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
 useEffect(()=>{
    axios
    .get("http://localhost:4000/getpost")
    .then((res) => {
      console.log(res.data.data);
      setData(res.data.data)
    })
    .catch((err) => {
      console.log(err);
    });
 },[])
   console.log(data,'data')
  return (
    <>
      <Navbar />
      <Box w="90%" margin="auto" mt='1cm'>
        <SimpleGrid columns={[1, 2, 3]} columnGap='10px' gap='10px'>
          {
            data.map((e)=>(
                <Box key={e._id} boxShadow='md' align='left' padding='10px'>
                   <Image src={e.image} h='7cm' w='full' alt='error'></Image>
                   <Text fontSize='xl'fontFamily='sans-serif' fontWeight='bold'>{e.title}</Text>
                   <Text>Description:{e.desc}</Text>
                   <Text>Dealer:{e.name}</Text>
                </Box>
            ))
          }
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Home;
