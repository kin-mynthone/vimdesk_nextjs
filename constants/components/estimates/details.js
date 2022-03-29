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
} from "@chakra-ui/react";
import Image from "next/image";
import { MotionButton } from "../motion";
import { useWindowSize } from "../../../custom_hooks";
import { sampleDataDetails, dealPriorityData } from "../../";
import {
  Back,
  Note,
  Message,
  Task,
  Request,
  Project,
  Events,
  Call,
  Estimates,
  Deals,
  Invoice,
  Contacts,
  ArrowDown,
} from "../../../assets";
const Details = ({ onBack }) => {
  const { height, width } = useWindowSize();
  const ListItemComponent = ({ index }) => {
    return (
      <ListItem>
        <Flex
          borderRadius={13}
          flexDirection={"column"}
          padding={"25px"}
          backgroundColor={"vimdesk_bg"}
          style={{
            boxShadow: "0px 0px 5px 0px #DDDDDD",
          }}
        >
          <HStack width={"100%"}>
            <Text
              fontSize={15}
              variant="header"
              fontWeight={"black"}
              color={"vimdesk_blue"}
            >
              {sampleDataDetails[index].title}
            </Text>
            <Spacer />
            <Text fontSize={12} variant="body">
              {sampleDataDetails[index].date_time}
            </Text>
          </HStack>
          <Text fontSize={12} variant="body" fontWeight={400}>
            {sampleDataDetails[index].content}
          </Text>
          {sampleDataDetails[index].activity.length > 0 ? (
            <Flex flexDirection={"column"}>
              <Divider
                marginY={3}
                orientation="horizontal"
                style={{
                  borderWidth: 1,

                  borderStyle: "dashed",

                  borderColor: "gray",
                }}
              />

              <HStack width={"100%"} alignItems={"start"}>
                <Text fontSize={12} variant="body">
                  {sampleDataDetails[index].activity[0].content}
                </Text>

                <Spacer />
                <VStack alignItems={"end"}>
                  <Text fontSize={12} variant="body">
                    {sampleDataDetails[index].activity[0].date}
                  </Text>

                  <Text fontSize={12} variant="body">
                    {sampleDataDetails[index].activity[0].company}
                  </Text>
                  <Text fontSize={12} variant="body">
                    {sampleDataDetails[index].activity[0].due_date}
                  </Text>
                </VStack>
              </HStack>
            </Flex>
          ) : null}
        </Flex>
      </ListItem>
    );
  };

  const MaterialList = () => {
    return (
      <Flex
        borderRadius={13}
        marginLeft={"10px"}
        flex={2}
        marginBottom={"10px"}
        backgroundColor={"#F7FAFB"}
        flexDirection={"column"}
        padding={5}
        style={{
          overflow: "auto",
          boxShadow: "0px 0px 5px 0px #CCCCCC",
        }}
        maxHeight={height * 0.75}
      >
        <Filter />
        <List spacing={3} width={"100%"}>
          {sampleDataDetails.map((entry, index) => (
            <ListItemComponent index={index} key={index} />
          ))}
        </List>
      </Flex>
    );
  };

  const Actions = () => {
    return (
      <Flex
        borderRadius={13}
        marginLeft={"10px"}
        marginBottom={"10px"}
        backgroundColor={"#F7FAFB"}
        flexDirection={"column"}
        padding={5}
        style={{
          boxShadow: "0px 0px 5px 0px #CCCCCC",
        }}
      >
        <Text fontSize={15} variant="body" fontWeight={"black"}>
          Actions
        </Text>
        <Flex
          flexDirection={"row"}
          justifyContent={"space-around"}
          marginTop={3}
        >
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
        </Flex>
        <Flex
          flexDirection={"row"}
          justifyContent={"space-around"}
          marginTop={3}
        >
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
        </Flex>
        <Flex
          flexDirection={"row"}
          justifyContent={"space-around"}
          marginTop={3}
        >
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    );
  };

  const Options = () => {
    return (
      <Flex
        borderRadius={13}
        marginLeft={"10px"}
        marginBottom={"10px"}
        backgroundColor={"#F7FAFB"}
        flexDirection={"column"}
        padding={5}
        style={{
          boxShadow: "0px 0px 5px 0px #CCCCCC",
        }}
      >
        <Text fontSize={15} variant="body" fontWeight={"black"}>
          Options
        </Text>
        <Flex
          flexDirection={"row"}
          justifyContent={"space-around"}
          marginTop={3}
        >
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
        </Flex>
        <Flex
          flexDirection={"row"}
          justifyContent={"space-around"}
          marginTop={3}
        >
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
        </Flex>
        <Flex
          flexDirection={"row"}
          justifyContent={"space-around"}
          marginTop={3}
        >
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
          <Button
            variant={"solid"}
            width={"130px"}
            paddingY={"30px"}
            alignSelf={"end"}
          >
            <Flex flexDirection={"column"}>
              <Image alt="vimdesk" src={Note} />

              <Text fontSize={15} variant="body" fontWeight={"black"}>
                Notes
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    );
  };

  const Filter = () => {
    const handleChange = (event) => {};

    return (
      <Select
        alignSelf={"end"}
        marginBottom={5}
        placeholder={"asd"}
        borderRadius={10}
        borderWidth={1}
        marginLeft={"15px"}
        width={"18%"}
        height={"38.5px"}
        _focusWithin={{
          backgroundColor: "vimdesk_purple",
          borderColor: "vimdesk_purple",
        }}
        _hover={{ backgroundColor: "vimdesk_purple", cursor: "pointer" }}
        backgroundColor={"vimdesk_purple"}
        textColor={"white"}
        fontWeight={300}
        fontSize={13}
        style={{
          boxShadow: "0px 0px 5px 0px #DDDDDD",
        }}
        value={"asdasd"}
        onChange={handleChange}
        iconColor={"white"}
      >
        {dealPriorityData.map((value, index) => (
          <option key={index + 1} value={value}>
            {value.name}
          </option>
        ))}
      </Select>
    );
  };

  return (
    <Flex
      alignItems={"stretch"}
      flexDirection={"column"}
      bgColor={"vimdesk_main_bg"}
    >
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
          [Title]
        </Text>
        {/* <VStack alignItems={"start"} marginLeft={2} marginTop={1}>
          <Text
            fontSize={20}
            variant="body"
            fontWeight={"black"}
            color={"vimdesk_blue"}
          >
            [Title]
          </Text>
          <Text
            fontSize={12}
            variant="body"
            fontWeight={"black"}
            color={"vimdesk_faded_text"}
          >
            [description]
          </Text>
        </VStack> */}
      </Flex>
      <Flex
        alignItems={"stretch"}
        flexDirection={"row"}
        bgColor={"vimdesk_main_bg"}
      >
        <MaterialList />

        <Flex flexDirection={"column"} flex={1}>
          <Actions />
          <Options />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Details;
