import { API } from "../index";
import { createStandaloneToast } from "@chakra-ui/react";
import Router from "next/router";
import { spinnerStore } from "../../../stores/spinner";

const create_workspace = ({
  first_name,
  last_name,
  email,
  password,
  workspace_name,
}) => {
  spinnerStore.setState({ active_status: true });

  const endpoint = "/create-workspace";

  const data = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
    workspace_name: workspace_name,
  };

  API.post(endpoint, data).then(responseCallback).catch(errorHandlingCallback);
};

const responseCallback = (response) => {
  spinnerStore.setState({ active_status: false });

  Router.push({
    pathname: "/sales/deals",
  });
};

const errorHandlingCallback = (error) => {
  spinnerStore.setState({ active_status: false });

  const toast = createStandaloneToast();
  toast({
    title: "Invalid",
    description: error.toString(),
    status: "error",
    duration: 2500,
    position: "top",
    isClosable: true,
  });
};

export default create_workspace;
