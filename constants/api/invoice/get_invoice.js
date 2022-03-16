import {API} from '../index';

const update_invoice = ({workspace_id, invoices_id}) => {

    const endpoint = `/workspace/${workspace_id}/invoices/${invoices_id}`;
    
    API.get(endpoint)
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

export default update_invoice;