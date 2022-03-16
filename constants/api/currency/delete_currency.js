import {API} from '../index';

const delete_currency = ({workspace_id,currency_id}) => {

    const endpoint = `/workspace/${workspace_id}/currencies/${currency_id}`;
    
    API.delete(endpoint,data)
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

export default delete_currency;