import {API} from '../index';

const create_file = (
    {
      workspace_id,
      file,
      document_name,
      creation_by,
      public_value,
      associated_with
    }
  ) => {

    const endpoint = `/workspace/${workspace_id}/files`;
    
    const data = 
    {
      file:                 file,
      document_name:        document_name,
      creation_by:          creation_by,
      public:               public_value,
      associated_with:      associated_with
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

export default create_file;