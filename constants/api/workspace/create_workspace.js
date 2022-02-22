import {API} from '../index';

const create_workspace = ({first_name,last_name,email,password,workspace_name}) => {

    const endpoint = "/create-workspace";
    
    const data = 
    {
        first_name:         first_name,
        last_name:          last_name,
        email:              email,
        password:           password,
        workspace_name:     workspace_name,
    };

    API.post(endpoint,data)
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

export default create_workspace;