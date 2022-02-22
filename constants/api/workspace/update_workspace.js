import {API} from '../index';

const update_workspace = ({
    workspace_id,
    first_name,
    last_name,
    email,
    password,
    workspace_name,
    workspace_profile_company_name,
    workspace_profile_address,
    workspace_profile_address2,
    workspace_profile_zipcode,
    workspace_profile_city,
    workspace_profile_state,
    workspace_profile_country,
    workspace_profile_vat_number,
    workspace_profile_coc_number,
    workspace_profile_account_name,
    workspace_profile_account_number,
    workspace_profile_bic_swift,
    workspace_profile_phone,
    workspace_profile_email,
    workspace_profile_website,
    workspace_profile_logo_path,
}) => {

    const endpoint = `/workspace/${workspace_id}/update`;
    
    const data = 
    {
        first_name:                                         first_name,
        last_name:                                          last_name,
        email:                                              email,
        password:                                           password,
        workspace_name:                                     workspace_name,
        "workspace_profile[company_name]":                  workspace_profile_company_name,
        "workspace_profile[address][address]":              workspace_profile_address,
        "workspace_profile[address][address2]":             workspace_profile_address2,
        "workspace_profile[address][zipcode]":              workspace_profile_zipcode,
        "workspace_profile[address][city]":                 workspace_profile_city,
        "workspace_profile[address][state]":                workspace_profile_state,
        "workspace_profile[address][country]":              workspace_profile_country,
        "workspace_profile[vat_number]":                    workspace_profile_vat_number,
        "workspace_profile[coc_number]":                    workspace_profile_coc_number,
        "workspace_profile[account][account_name]":         workspace_profile_account_name,
        "workspace_profile[account][account_number]":       workspace_profile_account_number,
        "workspace_profile[account][bic_swift]":            workspace_profile_bic_swift,
        "workspace_profile[phone]":                         workspace_profile_phone,
        "workspace_profile[email]":                         workspace_profile_email,
        "workspace_profile[website]":                       workspace_profile_website,
        "workspace_profile[logo_path]":                     workspace_profile_logo_path,
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

export default update_workspace;