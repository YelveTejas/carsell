import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { CloudinaryContext, Widget } from 'cloudinary-react';
import axios from 'axios';
import Navbar from '../component/Navbar';
import { DataContext } from '../component/DataProvide';


const post = {
    image:'',
    title:'',
    desc:'',
    name:''
}
const Create = () => {
    const {user} = useContext(DataContext)
    const [photo,setPhoto] = useState('')
    const [data,setData] = useState(post)
    const handleImageUpload=(e)=>{
      const image = e.target.files[0]
      const formData = new FormData()
      formData.append('file',image)
      formData.append('upload_preset','i3s54nhg ')
      console.log(formData)
      axios.post('https://api.cloudinary.com/v1_1/ds1miblwi/image/upload',formData)
      .then((res)=>{
        const imageurl = res.data.secure_url
      
        setPhoto(imageurl)
        alert('Image Added')
      }).catch((error) => {
        console.error('Error uploading image to Cloudinary:', error);
      });
    }
    useEffect(()=>{
        data.name = user.name
    },[])

    const handleSubmit =()=>{
        const postData = {
            ...data,
            image: photo, // Replace the image field with the uploaded image URL
          };
          console.log(postData)
        axios.post('http://localhost:4000/carpost',postData)
        .then((res)=>{
            console.log(res)
            if(res.status==200){
                alert('Data Posted Successfully')
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <>
    <Navbar/>
    <Box 
    w="30%"
    margin="auto"
    mt="2cm"
    padding="15px"
    border="2px solid #319795"
    borderRadius="md"
    boxShadow="md"
    >
    <CloudinaryContext cloudName="your-cloud-name"> {/* Replace with your Cloudinary cloud name */}
        <FormControl>
          <FormLabel>Upload Image</FormLabel>
          <Input type="file" onChange={handleImageUpload} border='none' />
          <FormLabel>Title</FormLabel>
          <Input
            placeholder="Provide title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          <FormLabel>Add Description</FormLabel>
          <Input
            placeholder="Add Description about car"
            value={data.desc}
            onChange={(e) => setData({ ...data, desc: e.target.value })}
          />
          <Button mt="10px" w="full" onClick={handleSubmit}>
            Post
          </Button>
        </FormControl>
      </CloudinaryContext>
    </Box>
    </>
  )
}

export default Create
/*

Unsigned uploading enabled
Name	Mode	Settings	
i3s54nhg 
*/