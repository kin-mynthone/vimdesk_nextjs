import {API} from '../index';

const update_deal_pipeline_status = (
    {
      workspace_id,
      deal_pipeline_id,
      status_id,
      position,
      rules,
      properties
    }
  ) => {

    const endpoint = `/workspace/${workspace_id}/deal_pipelines/${deal_pipeline_id}/status/${status_id}`;
    
    const data = 
    {
      position:           position,
      rules:              rules,
      properties:         properties
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

export default update_deal_pipeline_status;