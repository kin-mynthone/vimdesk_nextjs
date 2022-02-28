import {API} from '../index';

const create_estimate = ({
    workspace_id,
    currency_id,
    status,
    reference,
    note,
    estimate_meta,
    sent_date,
    due_date,
    send_method,
    create_invoice_after_sign,
    send_invoice_after_sign,
    sign_url,
    tags,
    items,
    estimate_nr,
    accepted_items,
    acceptance_status,
}) => {

    const endpoint = `workspace/${workspace_id}/estimates`;
    
    const data = 
    {
        currency_id:                    currency_id,
        status:                         status,
        reference:                      reference,
        note:                           note,
        estimate_meta:                  estimate_meta,
        sent_date:                      sent_date,
        due_date:                       due_date,
        send_method:                    send_method,
        create_invoice_after_sign:      create_invoice_after_sign,
        send_invoice_after_sign:        send_invoice_after_sign,
        sign_url:                       sign_url,
        tags:                           tags,
        items:                          items,
        estimate_nr:                    estimate_nr,
        accepted_items:                 accepted_items,
        acceptance_status:              acceptance_status,
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

export default create_estimate;