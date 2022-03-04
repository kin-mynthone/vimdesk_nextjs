import React from "react";
import { MyTask } from "./";
import { Flex, Text, Container, Box, Spacer } from "@chakra-ui/react";
import { Droppable } from "react-beautiful-dnd";
import { HKebab, PlusSign } from "../../../assets";
import Image from "next/image";
import { MotionButton } from "../motion";
import { addDealModalStore } from "../../../stores/deals";

const Column = ({ column, tasks }) => {
  const addDealsModalActiveStatus = addDealModalStore(
    (state) => state.active_status
  );
  const setAddDealsModalActiveStatus = addDealModalStore(
    (state) => state.set_active_status
  );

  return (
    <Flex margin={"8px"} flexDirection={"column"}>
      <Flex
        paddingY={"15px"}
        paddingX={"15px"}
        marginRight={"10px"}
        width={"250px"}
        height={"60px"}
        borderRadius={13}
        marginBottom={"20px"}
        flexDirection={"row"}
        alignItems={"center"}
        backgroundColor={"#F7FAFB"}
        style={{
          boxShadow: "0px 0px 5px 0px #CCCCCC",
        }}
      >
        <Box
          borderRadius="full"
          bg="vimdesk_blue"
          h={"20px"}
          w={1}
          marginRight={"10px"}
        />

        <Text textColor={"vimdesk_blue"} fontWeight={700} fontSize={15}>
          {column.title}
        </Text>
        <Spacer />

        <MotionButton
          size="xs"
          backgroundColor={"transparent"}
          _focus={{ border: "none" }}
          _focusWithin={{ backgroundColor: "transparent" }}
          _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
          flexDirection={"row"}
          whileTap={{
            scale: 0.4,
          }}
          whileHover={{
            scale: 1.1,
          }}
          onClick={null} //update this
        >
          <Image src={HKebab} alt="vimdesk_h_kebab" />
        </MotionButton>

        <MotionButton
          size="xs"
          backgroundColor={"transparent"}
          _focus={{ border: "none" }}
          _focusWithin={{ backgroundColor: "transparent" }}
          _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
          flexDirection={"row"}
          whileTap={{
            scale: 0.4,
          }}
          whileHover={{
            scale: 1.1,
          }}
          onClick={() => {
            setAddDealsModalActiveStatus(!addDealsModalActiveStatus);
          }} //update this
        >
          <Image src={PlusSign} alt="vimdesk_h_kebab" />
        </MotionButton>
      </Flex>

      <Droppable droppableId={column.id}>
        {(provided) => (
          <Flex
            width={"250px"}
            height={"100%"}
            flexDirection={"column"}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <MyTask key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </Flex>
        )}
      </Droppable>
    </Flex>
  );
};
export default Column;
