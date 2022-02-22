import {API} from '../index';

const update_user = ({first_name,last_name,email}) => {

    const endpoint = "/me/update";
    
    const headers = 
    {
        headers:{
            Accept: "application/json"
        }
    }
    
    const data = 
    {
        first_name:first_name,
        last_name:last_name,
        email:email
    };

    API.post(endpoint,data,headers)
    .then(responseCallback)
    .catch(errorHandlingCallback);
}

const responseCallback = (response) => {
    alert(response.body); //TODO: remove this line of code once your done with this callback
    //handle successful response here
}

const errorHandlingCallback = (error) => {
    alert(error.toString()); //TODO: remove this line of code once your done with this callback
    //handle error response here
}

export default update_user;