import {API} from '../index';

const decline_estimate = ({
    workspace_id,
    estimate_id,
    status,
    items,
    accepted_items
}) => {

    const endpoint = `/workspace/${workspace_id}/estimates/${estimate_id}/decline`;
    
    const data = 
    {
        status:             status,
        items:              items,
        accepted_items:     accepted_items
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

export default decline_estimate;