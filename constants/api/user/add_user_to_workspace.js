import {API} from '../index';

const add_user_to_workspace = ({workspace_id,first_name,last_name,email,password}) => {

    const endpoint = `/workspace/${workspace_id}/useradd`;

    const data = 
    {
        first_name:     first_name,
        last_name:      last_name,
        email:          email,
        password:       password
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

export default add_user_to_workspace;