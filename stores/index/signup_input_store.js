import create from "zustand";
import { createWorkSpace } from "../../constants/api/workspace";
import { createStandaloneToast } from "@chakra-ui/react";

const signUpInputStore = create((set) => ({
  specialChars: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
  firstname_input: "",
  lastname_input: "",
  email_input: "",
  workspace_input: "",
  password_input: "",
  password_notice: "Your password is too weak!",
  password_notice_color: "vimdesk_red",
  password_level: 0,

  password_condition1: false,
  password_condition2: false,
  password_condition3: false,
  password_condition4: false,

  set_firstname_input: (value) =>
    set((state) => ({ firstname_input: value.target.value })),

  set_lastname_input: (value) =>
    set((state) => ({ lastname_input: value.target.value })),

  set_email_input: (value) =>
    set((state) => ({ email_input: value.target.value })),

  set_workspace_input: (value) =>
    set((state) => ({ workspace_input: value.target.value })),

  set_password_input: (value) =>
    set((state) => {
      state.password_input = value.target.value;
      if (state.password_input.match(/[A-Z]/)) {
        if (!state.password_condition1) {
          state.password_condition1 = true;
          if (state.password_level != 4) {
            state.password_level++;
          }
        }
      } else {
        if (state.password_condition1) {
          if (state.password_level != 0) {
            state.password_level--;
          }
          state.password_condition1 = false;
        }
      }

      if (state.password_input.match(/[0-9]/)) {
        if (!state.password_condition2) {
          state.password_condition2 = true;
          if (state.password_level != 4) {
            state.password_level++;
          }
        }
      } else {
        if (state.password_condition2) {
          state.password_condition2 = false;
          if (state.password_level != 0) {
            state.password_level--;
          }
        }
      }

      if (state.password_input.length >= 8) {
        if (!state.password_condition3) {
          state.password_condition3 = true;
          if (state.password_level != 4) {
            state.password_level++;
          }
        }
      } else {
        if (state.password_condition3) {
          state.password_condition3 = false;
          if (state.password_level != 0) {
            state.password_level--;
          }
        }
      }

      if (state.specialChars.test(state.password_input)) {
        if (!state.password_condition4) {
          state.password_condition4 = true;
          if (state.password_level != 4) {
            state.password_level++;
          }
        }
      } else {
        if (state.password_condition4) {
          state.password_condition4 = false;
          if (state.password_level != 0) {
            state.password_level--;
          }
        }
      }
      state.set_password_notice();
    }),

  set_password_notice: () =>
    set((state) => {
      console.log("password_level: " + state.password_level);
      if (state.password_level < 3) {
        state.password_notice = "Your password is too weak!";
        state.password_notice_color = "vimdesk_red";
      } else if (state.password_level == 3) {
        state.password_notice = "Seems good, we suggest to make it stronger!";
        state.password_notice_color = "vimdesk_yellow";
      } else {
        state.password_notice = "Very good, your password is very strong!";
        state.password_notice_color = "vimdesk_green";
      }
    }),

  //-------------------------------

  create_workspace: () =>
    set((state) => {
      const toast = createStandaloneToast();
      if (
        state.firstname_input != "" &&
        state.lastname_input != "" &&
        state.email_input != "" &&
        state.password_input != "" &&
        state.workspace_input != "" &&
        state.password_level == 4
      ) {
        createWorkSpace({
          first_name: state.firstname_input,
          last_name: state.lastname_input,
          email: state.email_input,
          password: state.password_input,
          workspace_name: state.workspace_input,
        });
      } else if (state.password_level < 4) {
        toast({
          title: "Invalid",
          description: "Make your password stronger",
          status: "error",
          duration: 2500,
          position: "top",
          isClosable: true,
        });
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
export default signUpInputStore;
