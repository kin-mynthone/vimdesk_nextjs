import {API} from '../index';

const list_deal_pipeline_statuses = ({workspace_id}) => {

    const endpoint = `/workspace/${workspace_id}/deal_pipelines`;

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

export default list_deal_pipeline_statuses;