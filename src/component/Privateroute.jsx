import React, { useContext } from 'react'
import { DataContext } from './DataProvide'
import { Navigate } from 'react-router-dom'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Privateroute = ({children}) => {
    const {user} = useContext(DataContext)
    if(!user.name){
        toast.info('Please Login first')
      return <Navigate to='/login'></Navigate>
    }else{
        return children
    }
 
}

export default Privateroute