import React, { useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService from '../connection/auth';
import Loading from './Loading';

export default function Protected({children, authentication = true, restricted = false}){

    const navigate = useNavigate()
    const [loader, setLoader ] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    
    useEffect(() => {
        // TODO : Make it more easy
        if(authentication && authStatus != authentication){
            navigate('/signin')
        } 
        if(restricted && authStatus != authentication){
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    return loader ? <Loading/> : <>{children}</>
}