import React from "react";
import {
  Flex,
  Select,
  Divider,
  VStack,
  Spacer,
  List,
  Text,
  Button,
  ListItem,
  HStack,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Image from "next/image";
import { MotionButton } from "../motion";
import { useWindowSize } from "../../../custom_hooks";
import { sampleDataDetails, dealPriorityData } from "../../";
import {
  Back,
  Note,
  History,
  AttachedFileGray,
  InactiveProjectManagement,
  NotificationBlue,
  Tag,
  Copy,
} from "../../../assets";
const Details = ({ onBack }) => {
  const { height, width } = useWindowSize();

  const Actions = () => {
    return (
      <VStack>
        <HStack>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"25px"}
            alignSelf={"end"}
            borderRadius={10}
          >
            <Flex flexDirection={"row"}>
              <Image alt="vimdesk" src={Note} height={15} width={15} />

              <Text
                fontSize={13}
                variant="body"
                fontWeight={"black"}
                marginLeft={"10px"}
              >
                Notes
              </Text>
            </Flex>
          </Button>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"25px"}
            alignSelf={"end"}
            borderRadius={10}
          >
            <Flex flexDirection={"row"}>
              <Image alt="vimdesk" src={Note} height={15} width={15} />

              <Text
                fontSize={13}
                variant="body"
                fontWeight={"black"}
                marginLeft={"10px"}
              >
                Notes
              </Text>
            </Flex>
          </Button>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"25px"}
            alignSelf={"end"}
            borderRadius={10}
          >
            <Flex flexDirection={"row"}>
              <Image alt="vimdesk" src={Note} height={15} width={15} />

              <Text
                fontSize={13}
                variant="body"
                fontWeight={"black"}
                marginLeft={"10px"}
              >
                Notes
              </Text>
            </Flex>
          </Button>
        </HStack>
        <HStack>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"25px"}
            alignSelf={"end"}
            borderRadius={10}
          >
            <Flex flexDirection={"row"}>
              <Image alt="vimdesk" src={Note} height={15} width={15} />

              <Text
                fontSize={13}
                variant="body"
                fontWeight={"black"}
                marginLeft={"10px"}
              >
                Notes
              </Text>
            </Flex>
          </Button>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"25px"}
            alignSelf={"end"}
            borderRadius={10}
          >
            <Flex flexDirection={"row"}>
              <Image alt="vimdesk" src={Note} height={15} width={15} />

              <Text
                fontSize={13}
                variant="body"
                fontWeight={"black"}
                marginLeft={"10px"}
              >
                Notes
              </Text>
            </Flex>
          </Button>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"25px"}
            alignSelf={"end"}
            borderRadius={10}
          >
            <Flex flexDirection={"row"}>
              <Image alt="vimdesk" src={Note} height={15} width={15} />

              <Text
                fontSize={13}
                variant="body"
                fontWeight={"black"}
                marginLeft={"10px"}
              >
                Notes
              </Text>
            </Flex>
          </Button>
        </HStack>
      </VStack>
    );
  };

  const Status = () => {
    return (
      <Flex
        width={"100%"}
        borderRadius={13}
        backgroundColor={"#F7FAFB"}
        flexDirection={"row"}
        padding={5}
        justifyContent={"space-between"}
        style={{
          boxShadow: "0px 0px 5px 0px #DDDDDD",
        }}
      >
        <VStack alignItems={"start"}>
          <Text fontSize={13} variant="body" fontWeight={"black"}>
            Expired
          </Text>
          <Text fontSize={10} variant="body">
            Send on : 20-05-2020
          </Text>
        </VStack>

        <HStack alignItems={"center"}>
          <MotionButton
            backgroundColor={"transparent"}
            _focus={{ border: "none" }}
            size={"xxs"}
            borderRadius={"full"}
            paddingX={"20px"}
            paddingY={1.5}
            _focusWithin={{ backgroundColor: "transparent" }}
            _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
            style={{
              boxShadow: "0px 0px 5px 0px #DDDDDD",
            }}
            whileTap={{
              scale: 0.8,
            }}
            whileHover={{
              scale: 1.1,
            }}
            onClick={() => {}} //update this
          >
            <Image alt="vimdesk" src={Tag} width={"15px"} />
          </MotionButton>

          <MotionButton
            backgroundColor={"transparent"}
            _focus={{ border: "none" }}
            size={"xxs"}
            borderRadius={"full"}
            paddingX={"20px"}
            paddingY={1.5}
            _focusWithin={{ backgroundColor: "transparent" }}
            _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
            style={{
              boxShadow: "0px 0px 5px 0px #DDDDDD",
            }}
            whileTap={{
              scale: 0.8,
            }}
            whileHover={{
              scale: 1.1,
            }}
            onClick={() => {}} //update this
          >
            <Image alt="vimdesk" src={NotificationBlue} width={"15px"} />
          </MotionButton>
        </HStack>
      </Flex>
    );
  };
  const SignURL = () => {
    return (
      <Flex
        borderRadius={13}
        backgroundColor={"#F7FAFB"}
        flexDirection={"row"}
        alignItems={"center"}
        paddingX={5}
        paddingY={3}
        style={{
          boxShadow: "0px 0px 5px 0px #DDDDDD",
        }}
      >
        <VStack alignItems={"start"}>
          <Text
            fontSize={13}
            variant="body"
            fontWeight={"black"}
            color={"vimdesk_gray"}
          >
            Sign URL: https://company.vimdesk.nlasdasdasdasdd. . .
          </Text>
        </VStack>

        <HStack marginLeft={"80px"} alignItems={"center"}>
          <MotionButton
            backgroundColor={"transparent"}
            _focus={{ border: "none" }}
            size={"xxs"}
            borderRadius={"full"}
            _focusWithin={{ backgroundColor: "transparent" }}
            _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
            whileTap={{
              scale: 0.8,
            }}
            whileHover={{
              scale: 1.1,
            }}
            onClick={() => {}} //update this
          >
            <Image alt="vimdesk" src={Copy} width={"15px"} />
          </MotionButton>
        </HStack>
      </Flex>
    );
  };

  const Details = () => {
    return (
      <Flex
        width={"100%"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <VStack alignItems={"start"}>
          <Text fontSize={20} variant="body" fontWeight={"black"}>
            Nydia
          </Text>
          <Text fontSize={13} variant="body">
            843 Tennyson Avenue 59-171 Przemków Poland
          </Text>
        </VStack>
        <HStack spacing={10}>
          <VStack alignItems={"start"}>
            <Text fontSize={13} variant="body">
              Client nr
            </Text>
            <Text fontSize={10} variant="body">
              0000
            </Text>
          </VStack>
          <VStack alignItems={"start"}>
            <Text fontSize={13} variant="body">
              Send date
            </Text>
            <Text fontSize={10} variant="body">
              20-05-2020
            </Text>
          </VStack>
          <VStack alignItems={"start"}>
            <Text fontSize={13} variant="body">
              Duedate
            </Text>
            <Text fontSize={10} variant="body">
              19-06-2020
            </Text>
          </VStack>
        </HStack>
      </Flex>
    );
  };

  const SummaryTable = () => {
    return (
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    );
  };

  const MainTab = () => {
    return (
      <VStack alignItems={"start"} spacing={5}>
        <HStack justifyContent={"space-between"} width={"100%"}>
          <VStack alignItems={"start"}>
            <Status />
            <SignURL />
          </VStack>
          <Actions />
        </HStack>
        <Divider
          orientation="horizontal"
          style={{
            borderWidth: "1sp",

            borderColor: "gray",
          }}
        />
        <Details />
      </VStack>
    );
  };

  return (
    <Flex alignItems={"stretch"} flexDirection={"column"}>
      <Flex
        marginBottom={5}
        marginLeft={2}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <MotionButton
          backgroundColor={"transparent"}
          _focus={{ border: "none" }}
          size={"xxs"}
          _focusWithin={{ backgroundColor: "transparent" }}
          _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
          whileTap={{
            scale: 0.8,
          }}
          whileHover={{
            scale: 1.1,
          }}
          onClick={() => {
            onBack();
          }} //update this
        >
          <Image alt="vimdesk" src={Back} width={"30px"} />
        </MotionButton>
        <Text
          marginLeft={2}
          fontSize={20}
          variant="body"
          fontWeight={"black"}
          color={"vimdesk_blue"}
        >
          Estimate [#Number]
        </Text>
      </Flex>
      <Flex alignItems={"stretch"} flexDirection={"row"}>
        <Tabs width={"100%"}>
          <TabList>
            <Tab>
              <Image
                alt="vimdesk"
                src={InactiveProjectManagement}
                width={"18px"}
                height={"18px"}
              />
            </Tab>
            <Tab>
              <Image
                alt="vimdesk"
                src={AttachedFileGray}
                width={"18px"}
                height={"18px"}
              />
            </Tab>
            <Tab>
              <Image
                alt="vimdesk"
                src={History}
                width={"18px"}
                height={"18px"}
              />
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <MainTab />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
};
export default Details;
