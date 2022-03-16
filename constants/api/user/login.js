import { createStandaloneToast } from "@chakra-ui/react";
import Router from "next/router";
import { API } from "../index";
import { spinnerStore } from "../../../stores/spinner";
import { me } from "./";
const login = ({ email, password }) => {
  spinnerStore.setState({ active_status: true });
  const endpoint = "/login";

  const data = {
    email: email,
    password: password,
  };

  API.post(endpoint, data).then(responseCallback).catch(errorHandlingCallback);
};

const responseCallback = (response) => {
  //TODO: once session_token is received, uncomment the code below and replace "token-value-here"
  const data = response.data;

  localStorage.setItem("session_token", data.access_token);
  spinnerStore.setState({ active_status: false });

  alert(localStorage.getItem("session_token"));

  Router.push({
    pathname: "/sales/deals",
  });
  me();
};

const errorHandlingCallback = (error) => {
  spinnerStore.setState({ active_status: false });
  console.log(error);
  const toast = createStandaloneToast();
  toast({
    title: "Invalid Code",
    description: "Email or password is invalid",
    status: "error",
    duration: 2500,
    position: "top",
    isClosable: true,
  });
};

export default login;
