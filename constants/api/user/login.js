import { createStandaloneToast } from '@chakra-ui/react';
import Router from 'next/router';
import {API} from '../index';

const login = ({email,password}) => {

    const endpoint = "/login";
    
    const headers = 
    {
        headers:{
            Accept: "application/json"
        }
    }
    
    const data = 
    {
        email:email,
        password:password,
    };

    API.post(endpoint,data,headers)
    .then(responseCallback)
    .catch(errorHandlingCallback);
}

const responseCallback = (response) => {
    alert(response.body);
    Router.push({
            pathname: "/sales/deals",
    });
}

const errorHandlingCallback = (error) => {
    const toast = createStandaloneToast();
    toast({
        title: "Invalid Code",
        description: "Email or password is incorrect",
        status: "error",
        duration: 2500,
        isClosable: true,
    });
}

export default login;