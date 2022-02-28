import {API} from '../index';

const create_relation = ({
    workspace_id,
    title,
    first_name,
    last_name,
    email,
    relation_type,
    contacts,
    phone,
    address,
    relation_meta
}) => {

    const endpoint = `workspace/${workspace_id}/relations`;
    
    const data = 
    {
        title:                        title,
        first_name:                   first_name,
        last_name:                    last_name,
        email:                        email,
        relation_type:                relation_type,
        contacts:                     contacts,
        phone:                        phone,
        address:                      address,
        relation_meta:                relation_meta
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

export default create_relation;