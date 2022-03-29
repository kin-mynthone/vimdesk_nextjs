import {
  Button,
  ChakraProvider,
  Container,
  Flex,
  Spacer,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { THEME_DATA, pageTitles } from "../constants/";
import "@fontsource/poppins";
import Image from "next/image";
import Router from "next/router";

import { useWindowSize } from "../custom_hooks";
import NextNProgress from "nextjs-progressbar";
import { signInInputStore, navigationBarStore } from "../stores/index";
import {
  ArrowRight,
  InactiveDashboard,
  InactiveDeals,
  InactiveEstimates,
  InactiveFiles,
  InactiveInvoice,
  InactivePeriodic,
  InactiveProducts,
  InactiveProjectManagement,
  InactiveRelations,
  InactiveTickets,
  InactiveDocuments,
  ActiveDashboard,
  ActiveDeals,
  ActiveEstimates,
  ActiveFiles,
  ActiveInvoice,
  ActivePeriodic,
  ActiveProducts,
  ActiveProjectManagement,
  ActiveRelations,
  ActiveTickets,
  ActiveDocuments,
  VimDeskLogo,
  InactiveSales,
  ActiveSales,
  Workspace,
  Todo,
  Calendar,
  Notification,
} from "../assets/";

import { MotionButton } from "../constants/components/motion";
import { FloatingActionButton } from "../constants/components/floating_action_button";

const VerticalLine = () => {
  return (
    <Container w={2}>
      <Box borderRadius="full" bg="white" h={"20px"} w={1} />
    </Container>
  );
};
const NavigationBar = () => {
  const active_tab_index = navigationBarStore(
    (state) => state.active_tab_index
  );
  const setActiveIndex = navigationBarStore(
    (state) => state.set_active_tab_index
  );
  const active_sales_sub_tab_index = navigationBarStore(
    (state) => state.active_sales_sub_tab_index
  );
  const setActiveSalesSubIndex = navigationBarStore(
    (state) => state.set_active_sales_sub_tab_index
  );
  const { width } = useWindowSize();
  const { height } = useWindowSize();
  return (
    <Flex
      sx={{
        position: "-webkit-sticky",
        position: "sticky",
        bottom: "0",
      }}
      flexDirection={"column"}
      paddingY={"5"}
      backgroundColor={"vimdesk_bg"}
      h={height}
      w={width * 0.18}
      bgColor={"vimdesk_bg"}
      alignItems={"center"}
      paddingTop={"5"}
    >
      <Image src={VimDeskLogo} alt="vimdesk_logo" height={height * 0.06} />

      <Flex
        flexDirection={"column"}
        justifyItems={"start"}
        marginTop={10}
        maxHeight={height * 0.75}
        style={{
          overflow: "auto",
        }}
      >
        <Accordion borderColor={"transparent"} index={active_tab_index}>
          <AccordionItem>
            <AccordionButton
              _focus={{ border: "none" }}
              border={"none"}
              _hover={{
                backgroundColor: "transparent",
              }}
              onClick={() => {
                setActiveIndex(0);
                Router.push({
                  pathname: "/dashboard",
                });
              }}
            >
              <Flex
                w={width * 0.16}
                justifyContent={"start"}
                paddingY={"20px"}
                paddingLeft={5}
                borderRadius={13}
                backgroundColor={
                  active_tab_index != 0 ? "transparent" : "vimdesk_blue"
                }
                _focus={{ border: "none" }}
                _hover={{
                  backgroundColor: "vimdesk_blue",
                  cursor: "pointer",
                }}
              >
                <Image
                  alt="vimdesk"
                  src={
                    active_tab_index != 0 ? InactiveDashboard : ActiveDashboard
                  }
                  height={20}
                  width={20}
                />

                <Text
                  fontSize={12}
                  marginLeft={3}
                  fontWeight={600}
                  textColor={
                    active_tab_index != 0 ? "vimdesk_faded_text" : "white"
                  }
                >
                  {pageTitles[0].title}
                </Text>
                <Spacer />
                {active_tab_index == 0 && <VerticalLine />}
              </Flex>
            </AccordionButton>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              _focus={{ border: "none" }}
              border={"none"}
              _hover={{
                backgroundColor: "transparent",
              }}
              onClick={() => {
                setActiveIndex(1);
                switch (active_sales_sub_tab_index) {
                  case 0:
                    Router.push({
                      pathname: "/sales/deals",
                    });
                    break;
                  case 1:
                    Router.push({
                      pathname: "/sales/estimates",
                    });
                    break;
                  case 2:
                    Router.push({
                      pathname: "/sales/invoices",
                    });
                    break;
                  case 3:
                    Router.push({
                      pathname: "/sales/periodics",
                    });
                    break;
                  default:
                  // code block
                }
              }}
            >
              <Flex
                w={width * 0.16}
                justifyContent={"start"}
                paddingY={"20px"}
                paddingLeft={5}
                borderRadius={13}
                backgroundColor={
                  active_tab_index != 1 ? "transparent" : "vimdesk_blue"
                }
                _focus={{ border: "none" }}
                _hover={{
                  backgroundColor: "vimdesk_blue",
                  cursor: "pointer",
                }}
              >
                <Image
                  alt="vimdesk"
                  src={active_tab_index != 1 ? InactiveSales : ActiveSales}
                  height={20}
                  width={20}
                />

                <Text
                  fontSize={12}
                  marginLeft={3}
                  fontWeight={600}
                  textColor={
                    active_tab_index != 1 ? "vimdesk_faded_text" : "white"
                  }
                >
                  {pageTitles[1].title}
                </Text>
                <Spacer />
                {active_tab_index == 1 && <VerticalLine />}
              </Flex>
            </AccordionButton>

            <AccordionPanel>
              <Flex
                marginTop={-5}
                flexDirection={"column"}
                paddingY={"5"}
                backgroundColor={"vimdesk_bg"}
                w={width * 0.16}
                borderBottomStartRadius={20}
                borderBottomEndRadius={20}
                bgColor={"#EFEFEF"}
                alignItems={"center"}
                paddingTop={"5"}
              >
                <Button
                  w={width * 0.14}
                  marginTop={3}
                  justifyContent={"start"}
                  paddingY={"28px"}
                  borderRadius={13}
                  backgroundColor={"transparent"}
                  _focus={{ border: "none" }}
                  _hover={{
                    backgroundColor:
                      active_sales_sub_tab_index == 0
                        ? "#EFEFEF"
                        : "vimdesk_blue",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setActiveSalesSubIndex(0);
                    Router.push({
                      pathname: "/sales/deals",
                    });
                  }}
                >
                  <Image
                    alt="vimdesk"
                    src={
                      active_sales_sub_tab_index != 0
                        ? InactiveDeals
                        : ActiveDeals
                    }
                    height={20}
                    width={20}
                  />

                  <Text
                    fontSize={12}
                    marginLeft={3}
                    fontWeight={600}
                    textColor={
                      active_sales_sub_tab_index != 0
                        ? "vimdesk_faded_text"
                        : "vimdesk_blue"
                    }
                  >
                    {pageTitles[1].sub_page_title[0].title}
                  </Text>
                </Button>
                <Button
                  w={width * 0.14}
                  marginTop={3}
                  justifyContent={"start"}
                  paddingY={"28px"}
                  borderRadius={13}
                  backgroundColor={"transparent"}
                  _focus={{ border: "none" }}
                  _hover={{
                    backgroundColor:
                      active_sales_sub_tab_index == 1
                        ? "#EFEFEF"
                        : "vimdesk_blue",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setActiveSalesSubIndex(1);
                    Router.push({
                      pathname: "/sales/estimates",
                    });
                  }}
                >
                  <Image
                    alt="vimdesk"
                    src={
                      active_sales_sub_tab_index != 1
                        ? InactiveEstimates
                        : ActiveEstimates
                    }
                    height={20}
                    width={20}
                  />

                  <Text
                    fontSize={12}
                    marginLeft={3}
                    fontWeight={600}
                    textColor={
                      active_sales_sub_tab_index != 1
                        ? "vimdesk_faded_text"
                        : "vimdesk_blue"
                    }
                  >
                    {pageTitles[1].sub_page_title[1].title}
                  </Text>
                </Button>
                <Button
                  w={width * 0.14}
                  marginTop={3}
                  justifyContent={"start"}
                  paddingY={"28px"}
                  borderRadius={13}
                  backgroundColor={"transparent"}
                  _focus={{ border: "none" }}
                  _hover={{
                    backgroundColor:
                      active_sales_sub_tab_index == 2
                        ? "#EFEFEF"
                        : "vimdesk_blue",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setActiveSalesSubIndex(2);

                    Router.push({
                      pathname: "/sales/invoices",
                    });
                  }}
                >
                  <Image
                    alt="vimdesk"
                    src={
                      active_sales_sub_tab_index != 2
                        ? InactiveInvoice
                        : ActiveInvoice
                    }
                    height={20}
                    width={20}
                  />

                  <Text
                    fontSize={12}
                    marginLeft={3}
                    fontWeight={600}
                    textColor={
                      active_sales_sub_tab_index != 2
                        ? "vimdesk_faded_text"
                        : "vimdesk_blue"
                    }
                  >
                    {pageTitles[1].sub_page_title[2].title}
                  </Text>
                </Button>
                <Button
                  w={width * 0.14}
                  marginTop={3}
                  justifyContent={"start"}
                  paddingY={"28px"}
                  borderRadius={13}
                  backgroundColor={"transparent"}
                  _focus={{ border: "none" }}
                  _hover={{
                    backgroundColor:
                      active_sales_sub_tab_index == 3
                        ? "#EFEFEF"
                        : "vimdesk_blue",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setActiveSalesSubIndex(3);
                    Router.push({
                      pathname: "/sales/periodics",
                    });
                  }}
                >
                  <Image
                    alt="vimdesk"
                    src={
                      active_sales_sub_tab_index != 3
                        ? InactivePeriodic
                        : ActivePeriodic
                    }
                    height={20}
                    width={20}
                  />

                  <Text
                    fontSize={12}
                    marginLeft={3}
                    fontWeight={600}
                    textColor={
                      active_sales_sub_tab_index != 3
                        ? "vimdesk_faded_text"
                        : "vimdesk_blue"
                    }
                  >
                    {pageTitles[1].sub_page_title[3].title}
                  </Text>
                </Button>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              _focus={{ border: "none" }}
              border={"none"}
              _hover={{
                backgroundColor: "transparent",
              }}
              onClick={() => {
                setActiveIndex(2);
                Router.push({
                  pathname: "/relations",
                });
              }}
            >
              <Flex
                w={width * 0.16}
                justifyContent={"start"}
                paddingY={"20px"}
                paddingLeft={5}
                borderRadius={13}
                backgroundColor={
                  active_tab_index != 2 ? "transparent" : "vimdesk_blue"
                }
                _focus={{ border: "none" }}
                _hover={{
                  backgroundColor: "vimdesk_blue",
                }}
              >
                <Image
                  alt="vimdesk"
                  src={
                    active_tab_index != 2 ? InactiveRelations : ActiveRelations
                  }
                  height={20}
                  width={20}
                />

                <Text
                  fontSize={12}
                  marginLeft={3}
                  fontWeight={600}
                  textColor={
                    active_tab_index != 2 ? "vimdesk_faded_text" : "white"
                  }
                >
                  {pageTitles[2].title}
                </Text>
                <Spacer />
                {active_tab_index == 2 && <VerticalLine />}
              </Flex>
            </AccordionButton>
          </AccordionItem>
          {/* <AccordionItem>
            <AccordionButton
              _focus={{ border: "none" }}
              border={"none"}
              _hover={{
                backgroundColor: "transparent",
              }}
              onClick={() => {
                setActiveIndex(3);
                Router.push({
                  pathname: "/products",
                });
              }}
            >
              <Flex
                w={width * 0.16}
                justifyContent={"start"}
                paddingY={"20px"}
                paddingLeft={5}
                borderRadius={13}
                backgroundColor={
                  active_tab_index != 3 ? "transparent" : "vimdesk_blue"
                }
                _focus={{ border: "none" }}
                _hover={{
                  backgroundColor: "vimdesk_blue",
                  cursor: "pointer",
                }}
              >
                <Image
                  alt="vimdesk"
                  src={
                    active_tab_index != 3 ? InactiveProducts : ActiveProducts
                  }
                  height={20}
                  width={20}
                />

                <Text
                  fontSize={12}
                  marginLeft={3}
                  fontWeight={600}
                  textColor={
                    active_tab_index != 3 ? "vimdesk_faded_text" : "white"
                  }
                >
                  {pageTitles[3].title}
                </Text>
                <Spacer />
                {active_tab_index == 3 && <VerticalLine />}
              </Flex>
            </AccordionButton>
          </AccordionItem> */}
          <AccordionItem>
            <AccordionButton
              _focus={{ border: "none" }}
              border={"none"}
              _hover={{
                backgroundColor: "transparent",
              }}
              onClick={() => {
                setActiveIndex(4);
                Router.push({
                  pathname: "/documents",
                });
              }}
            >
              <Flex
                w={width * 0.16}
                justifyContent={"start"}
                paddingY={"20px"}
                paddingLeft={5}
                borderRadius={13}
                backgroundColor={
                  active_tab_index != 4 ? "transparent" : "vimdesk_blue"
                }
                _focus={{ border: "none" }}
                _hover={{
                  backgroundColor: "vimdesk_blue",
                  cursor: "pointer",
                }}
              >
                <Image
                  alt="vimdesk"
                  src={
                    active_tab_index != 4 ? InactiveDocuments : ActiveDocuments
                  }
                  height={20}
                  width={20}
                />

                <Text
                  fontSize={12}
                  marginLeft={3}
                  fontWeight={600}
                  textColor={
                    active_tab_index != 4 ? "vimdesk_faded_text" : "white"
                  }
                >
                  {pageTitles[4].title}
                </Text>
                <Spacer />
                {active_tab_index == 4 && <VerticalLine />}
              </Flex>
            </AccordionButton>
          </AccordionItem>
          {/* <AccordionItem>
            <AccordionButton
              _focus={{ border: "none" }}
              border={"none"}
              _hover={{
                backgroundColor: "transparent",
              }}
              onClick={() => {
                setActiveIndex(5);
                Router.push({
                  pathname: "/project_management",
                });
              }}
            >
              <Flex
                w={width * 0.16}
                justifyContent={"start"}
                paddingY={"20px"}
                paddingLeft={5}
                borderRadius={13}
                backgroundColor={
                  active_tab_index != 5 ? "transparent" : "vimdesk_blue"
                }
                _focus={{ border: "none" }}
                _hover={{
                  backgroundColor: "vimdesk_blue",
                  cursor: "pointer",
                }}
              >
                <Image
                  alt="vimdesk"
                  src={
                    active_tab_index != 5
                      ? InactiveProjectManagement
                      : ActiveProjectManagement
                  }
                  height={20}
                  width={20}
                />

                <Text
                  fontSize={12}
                  marginLeft={3}
                  fontWeight={600}
                  textColor={
                    active_tab_index != 5 ? "vimdesk_faded_text" : "white"
                  }
                >
                  {pageTitles[5].title}
                </Text>
                <Spacer />
                {active_tab_index == 5 && <VerticalLine />}
              </Flex>
            </AccordionButton>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              _focus={{ border: "none" }}
              border={"none"}
              _hover={{
                backgroundColor: "transparent",
              }}
              onClick={() => {
                setActiveIndex(6);
                Router.push({
                  pathname: "/files",
                });
              }}
            >
              <Flex
                w={width * 0.16}
                justifyContent={"start"}
                paddingY={"20px"}
                paddingLeft={5}
                borderRadius={13}
                backgroundColor={
                  active_tab_index != 6 ? "transparent" : "vimdesk_blue"
                }
                _focus={{ border: "none" }}
                _hover={{
                  backgroundColor: "vimdesk_blue",
                  cursor: "pointer",
                }}
              >
                <Image
                  alt="vimdesk"
                  src={active_tab_index != 6 ? InactiveFiles : ActiveFiles}
                  height={20}
                  width={20}
                />

                <Text
                  fontSize={12}
                  marginLeft={3}
                  fontWeight={600}
                  textColor={
                    active_tab_index != 6 ? "vimdesk_faded_text" : "white"
                  }
                >
                  {pageTitles[6].title}
                </Text>
                <Spacer />
                {active_tab_index == 6 && <VerticalLine />}
              </Flex>
            </AccordionButton>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              _focus={{ border: "none" }}
              border={"none"}
              _hover={{
                backgroundColor: "transparent",
              }}
              onClick={() => {
                setActiveIndex(7);
                Router.push({
                  pathname: "/tickets",
                });
              }}
            >
              <Flex
                w={width * 0.16}
                justifyContent={"start"}
                paddingY={"20px"}
                paddingLeft={5}
                borderRadius={13}
                backgroundColor={
                  active_tab_index != 7 ? "transparent" : "vimdesk_blue"
                }
                _focus={{ border: "none" }}
                _hover={{
                  backgroundColor: "vimdesk_blue",
                  cursor: "pointer",
                }}
              >
                <Image
                  alt="vimdesk"
                  src={active_tab_index != 7 ? InactiveTickets : ActiveTickets}
                  height={20}
                  width={20}
                />

                <Text
                  fontSize={12}
                  marginLeft={3}
                  fontWeight={600}
                  textColor={
                    active_tab_index != 7 ? "vimdesk_faded_text" : "white"
                  }
                >
                  {pageTitles[7].title}
                </Text>
                <Spacer />
                {active_tab_index == 7 && <VerticalLine />}
              </Flex>
            </AccordionButton>
          </AccordionItem> */}
        </Accordion>
      </Flex>
      <Spacer />

      <MotionButton
        backgroundColor={"transparent"}
        _focus={{ border: "none" }}
        w={width * 0.16}
        _focusWithin={{ backgroundColor: "transparent" }}
        _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
        flexDirection={"row"}
        whileTap={{
          scale: 0.8,
        }}
        whileHover={{
          scale: 1.1,
        }}
        onClick={null} //update this
      >
        <Flex
          height={"35px"}
          width={"35px"}
          flexDirection={"row"}
          style={{ overflow: "hidden" }}
          borderRadius={"full"}
        >
          <Image
            alt="vimdesk"
            src={
              "https://firebasestorage.googleapis.com/v0/b/itsy-39bff.appspot.com/o/RDJ-Tony-Stark.jpeg?alt=media&token=facd6754-838b-4e2c-ae59-e898f8cdde01"
            }
            height={50}
            width={50}
          />
        </Flex>

        <Text
          fontSize={12}
          marginLeft={3}
          fontWeight={600}
          textColor={"vimdesk_blue"}
        >
          Tony Stark
        </Text>
        <Spacer />
        <Image alt="profile" src={ArrowRight} height={10} width={10} />
      </MotionButton>
    </Flex>
  );
};

const HeaderMenu = () => {
  const setActiveIndex = navigationBarStore(
    (state) => state.set_active_tab_index
  );
  return (
    <Flex flexDirection={"row"} justifyContent={"space-around"}>
      {/* <MotionButton
        backgroundColor={"transparent"}
        _focus={{ border: "none" }}
        _focusWithin={{ backgroundColor: "transparent" }}
        _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
        flexDirection={"row"}
        whileTap={{
          scale: 0.8,
        }}
        whileHover={{
          scale: 1.3,
        }}
        onClick={() => {}}
      >
        <Image alt="profile" src={Notification} height={18} width={18} />
      </MotionButton> */}
      <MotionButton
        backgroundColor={"transparent"}
        _focus={{ border: "none" }}
        _focusWithin={{ backgroundColor: "transparent" }}
        _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
        flexDirection={"row"}
        whileTap={{
          scale: 0.8,
        }}
        whileHover={{
          scale: 1.3,
        }}
        onClick={() => {}}
      >
        <Image alt="profile" src={Todo} height={18} width={18} />
      </MotionButton>
      <MotionButton
        backgroundColor={"transparent"}
        _focus={{ border: "none" }}
        _focusWithin={{ backgroundColor: "transparent" }}
        _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
        flexDirection={"row"}
        whileTap={{
          scale: 0.8,
        }}
        whileHover={{
          scale: 1.3,
        }}
        onClick={() => {
          setActiveIndex(10);
          Router.push({
            pathname: "/reminders",
          });
        }}
      >
        <Image alt="profile" src={Calendar} height={18} width={18} />
      </MotionButton>

      <MotionButton
        backgroundColor={"transparent"}
        _focus={{ border: "none" }}
        _focusWithin={{ backgroundColor: "transparent" }}
        _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
        flexDirection={"row"}
        whileTap={{
          scale: 0.8,
        }}
        whileHover={{
          scale: 1.3,
        }}
        onClick={() => {}}
      >
        <Image alt="profile" src={Workspace} height={18} width={18} />
      </MotionButton>
    </Flex>
  );
};

const HeaderTitle = () => {
  const active_tab_index = navigationBarStore(
    (state) => state.active_tab_index
  );

  const active_sales_sub_tab_index = navigationBarStore(
    (state) => state.active_sales_sub_tab_index
  );
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"space-around"}
      alignItems={"start"}
    >
      <Text
        fontSize={"25px"}
        fontWeight={"600"}
        textColor={"vimdesk_faded_text"}
      >
        {pageTitles[active_tab_index].title}
      </Text>

      {active_tab_index == 1 && (
        <Flex flexDirection={"row"} justifyContent={"space-around"}>
          <Text fontSize={"15px"} textColor={"vimdesk_faded_text"}>
            {pageTitles[active_tab_index].title}&nbsp;&gt;&nbsp;
          </Text>
          <Text fontSize={"15px"} textColor={"vimdesk_blue"}>
            {
              pageTitles[active_tab_index].sub_page_title[
                active_sales_sub_tab_index
              ].title
            }
          </Text>
        </Flex>
      )}
    </Flex>
  );
};
const Header = () => {
  const { height } = useWindowSize();
  const { width } = useWindowSize();
  return (
    <Flex
      flexDirection={"row"}
      marginTop={"20px"}
      width={width * 0.82}
      alignItems={"center"}
      paddingX={"20px"}
      justifyContent={"space-between"}
      height={height * 0.07}
    >
      <HeaderTitle />
      <HeaderMenu />
    </Flex>
  );
};

function MyApp({ Component, pageProps }) {
  const IS_CREDENTIAL_VALID = signInInputStore(
    (state) => state.is_credential_valid
  );
  const { width } = useWindowSize();
  const { height } = useWindowSize();
  return (
    <ChakraProvider theme={THEME_DATA}>
      <Flex
        w={width}
        h={height}
        alignItems={"stretch"}
        flexDirection={"row"}
        bgColor={"vimdesk_main_bg"}
        style={{
          overflow: "hidden",
        }}
      >
        {IS_CREDENTIAL_VALID && <NavigationBar />}
        <Flex flexDirection={"column"}>
          {IS_CREDENTIAL_VALID && <Header />}
          <Flex marginTop={IS_CREDENTIAL_VALID && "20px"}>
            <Component {...pageProps} />
            {/* <FloatingActionButton /> */}
          </Flex>
        </Flex>
        <NextNProgress height={5} color="#8947DD" />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
