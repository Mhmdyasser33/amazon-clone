import { useNavigate } from "react-router-dom";
import {useAuth} from '../context/GlobalContext'
import React, { useEffect } from 'react'

const ProtectedRoutes = ({children}) => {
    const navigate = useNavigate() ;
    const {user}=useAuth() ;
    useEffect(() =>{
        if(!user){
            navigate("/login")
            return ;
           }
    } , [user])
    return children ;
}

export default ProtectedRoutes