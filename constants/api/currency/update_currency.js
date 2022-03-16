import {API} from '../index';

const create_currency = (
    {
      workspace_id,
      currency_id,
      name,
      asset_type,
      symbol_prefix,
      symbol_suffix,
      decimals,
      default_currency,
      active,
      currency_meta
    }
  ) => {

    const endpoint = `/workspace/${workspace_id}/currencies/${currency_id}`;
    
    const data = 
    {
      name:                     name,
      asset_type:               asset_type,
      symbol_prefix:            symbol_prefix,
      symbol_suffix:            symbol_suffix,
      decimals:                 decimals,
      default_currency:         default_currency,
      active:                   active,
      currency_meta:            currency_meta
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

export default create_currency;