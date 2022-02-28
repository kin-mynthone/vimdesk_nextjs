import {API} from '../index';

const create_deal_pipeline = ({workspace_id,group_name,statuses,deals_pipeline_meta}) => {

    const endpoint = `/workspace/${workspace_id}/deal_pipelines`;
    
    const data = 
    {
        group_name:             group_name,
        statuses:               statuses,
        deals_pipeline_meta:    deals_pipeline_meta,
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

export default create_deal_pipeline;