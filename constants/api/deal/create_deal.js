import {API} from '../index';

const create_deal = (
    {
      workspace_id,
      title,
      description,
      deal_value,
      relation_id,
      sales_agent_id,
      deal_priority,
      status_id,
      deal_pipeline_id,
      expected_close_date,
      archived,
      deal_meta
    }
  ) => {

    const endpoint = `/workspace/${workspace_id}/deals`;
    
    const data = 
    {
      title:                  title,
      description:            description,
      deal_value:             deal_value,
      relation_id:            relation_id,
      sales_agent_id:         sales_agent_id,
      deal_priority:          deal_priority,
      status_id:              status_id,
      deal_pipeline_id:       deal_pipeline_id,
      expected_close_date:    expected_close_date,
      archived:               archived,
      deal_meta:              deal_meta
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

export default create_deal;