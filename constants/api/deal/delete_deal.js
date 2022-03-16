import {API} from '../index';

const delete_deal = ({workspace_id,deal_id}) => {

    const endpoint = `/workspace/${workspace_id}/deals/${deal_id}`;

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

export default delete_deal;