import {API} from '../index';

const create_invoice = (
    {
      workspace_id,
      invoice_nr,
      currency_id,
      reference,
      note,
      invoice_meta,
      sent_date,
      due_date,
      send_method,
      tags,
      items,
      associated_with
    }
  ) => {

    const endpoint = `/workspace/${workspace_id}/invoices`;
    
    const data = 
    {
      invoice_nr:             invoice_nr,
      currency_id:            currency_id,
      reference:              reference,
      note:                   note,
      invoice_meta:           invoice_meta,
      sent_date:              sent_date,
      due_date:               due_date,
      send_method:            send_method,
      tags:                   tags,
      items:                  items,
      associated_with:        associated_with
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

export default create_invoice;