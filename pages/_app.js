import { ChakraProvider } from "@chakra-ui/react";
import { THEME_DATA } from "../constants/";
import "@fontsource/poppins";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={THEME_DATA}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
