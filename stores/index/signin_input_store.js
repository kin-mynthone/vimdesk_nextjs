import { createStandaloneToast } from "@chakra-ui/react";
import Router from "next/router";
import create from "zustand";
import { login } from "../../constants/api/user";

const signInInputStore = create((set) => ({
  workspace_input: "",
  password_input: "",
  is_credential_valid: false,

  set_workspace_input: (value) =>
    set((state) => ({ workspace_input: value.target.value })),

  set_password_input: (value) =>
    set((state) => ({ password_input: value.target.value })),

  set_is_credential_valid: (value) =>
    set((state) => ({ is_credential_valid: value })),

  validate_credential_input: () =>
    set((state) => {
      const toast = createStandaloneToast();
      if (state.workspace_input != "" && state.password_input != "") {
        login({ email: state.workspace_input, password: state.password_input });
      } else {
        toast({
          title: "Invalid",
          description: "Please complete all fields",
          status: "error",
          duration: 2500,
          position: "top",
          isClosable: true,
        });
      }
    }),
}));
export default signInInputStore;
