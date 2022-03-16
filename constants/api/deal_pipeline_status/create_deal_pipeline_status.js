import {API} from '../index';

const create_deal_pipeline_status = (
    {
      workspace_id,
      deal_pipeline_id,
      status_id,
      position,
      rules,
      properties
    }
  ) => {

    const endpoint = `/workspace/${workspace_id}/deal_pipelines/${deal_pipeline_id}/status`;
    
    const data = 
    {
      status_id:          status_id,
      deal_pipeline_id:   deal_pipeline_id,
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

export default create_deal_pipeline_status;