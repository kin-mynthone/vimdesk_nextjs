import { extendTheme } from "@chakra-ui/react";

const themeData = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    vimdesk_bg: "#F7FAFB",
    vimdesk_main_bg: "#EDF2F6",
    vimdesk_blue: "#47ADDD",
    vimdesk_faded_blue: "#7DC0DF",
    vimdesk_faded_text: "#656262",
    vimdesk_gray: "#9F9D9D",
    vimdesk_lightgray: "#F2F5F6",
    vimdesk_yellow: "#F0BE3E",
    vimdesk_green: "#3FAD7F",
    vimdesk_red: "#F38C8C",
    vimdesk_purple: "#8947DD",
  },
  components: {
    Button: {
      variants: {
        solid: {
          fontWeight: "normal",
          backgroundColor: "vimdesk_blue",
          color: "white",
          _hover: {
            backgroundColor: "vimdesk_blue",
          },
          _active: {
            backgroundColor: "vimdesk_blue",
          },
        },
        outline: {
          fontWeight: "normal",
          color: "vimdesk_blue",
          borderColor: "vimdesk_blue",
          _hover: {
            backgroundColor: "vimdesk_faded_blue",
            color: "white",
          },
          _active: {
            backgroundColor: "vimdesk_faded_blue",
            color: "white",
          },
        },
      },
    },
  },
});

export default themeData;
