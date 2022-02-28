import {API} from '../index';

const delete_estimate = ({workspace_id,estimate_id}) => {
    
    const endpoint = `/workspace/${workspace_id}/estimates/${estimate_id}`;

    API.delete(endpoint)
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

export default delete_estimate;