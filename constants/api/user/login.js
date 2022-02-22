import { createStandaloneToast } from '@chakra-ui/react';
import Router from 'next/router';
import {API} from '../index';

const login = ({email,password}) => {

    const endpoint = "/login";
    
    const data = 
    {
        email:      email,
        password:   password,
    };

    API.post(endpoint,data)
    .then(responseCallback)
    .catch(errorHandlingCallback);
}

const responseCallback = (response) => {
    alert(response.body);
    //TODO: once session_token is received, uncomment the code below and replace "token-value-here"
    //with the real session token from the reponse
    //localStorage.setItem("session_token",token-value-here);
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