import {API} from '../index';

const get_deal_pipeline_status = (
    {
      workspace_id,
      deal_pipeline_id,
      status_id
    }
  ) => {

    const endpoint = `/workspace/${workspace_id}/deal_pipelines/${deal_pipeline_id}/status/${status_id}`;

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

export default get_deal_pipeline_status;