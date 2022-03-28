import React from "react";

import { Draggable } from "react-beautiful-dnd";
import { Flex, Text, Container, Box, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import { User, CreatedAt, DueDate } from "../../../assets";

const MyTask = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Flex
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Flex
            paddingY={"15px"}
            paddingX={"15px"}
            width={"250px"}
            borderRadius={13}
            flexDirection={"column"}
            alignItems={"start"}
            marginBottom={"20px"}
            backgroundColor={"#F7FAFB"}
            style={{
              boxShadow: "0px 0px 5px 0px #DDDDDD",
            }}
          >
            <Flex flexDirection={"row"}>
              <Text
                fontWeight={700}
                fontSize={15}
                textColor={"vimdesk_faded_text"}
              >
                {task.num}
              </Text>
              <Text
                marginLeft={"10px"}
                fontWeight={700}
                fontSize={15}
                textColor={"vimdesk_faded_text"}
              >
                {task.title}
              </Text>
            </Flex>
            <Flex
              flexDirection={"column"}
              marginLeft={"23px"}
              marginTop={"5px"}
            >
              <Flex flexDirection={"row"} alignItems={"center"}>
                <Image src={User} alt="vimdesk_user" height={"22px"} />
                <Text
                  marginLeft={"10px"}
                  fontSize={10}
                  textColor={"vimdesk_faded_text"}
                >
                  {task.company}
                </Text>
              </Flex>
              <Flex flexDirection={"row"} alignItems={"center"}>
                <Image src={DueDate} alt="vimdesk_user" height={"22px"} />
                <Text
                  marginLeft={"10px"}
                  fontSize={10}
                  textColor={"vimdesk_faded_text"}
                >
                  {task.due_date}
                </Text>
              </Flex>
              <Flex flexDirection={"row"} alignItems={"center"}>
                <Image src={CreatedAt} alt="vimdesk_user" height={"22px"} />
                <Text
                  marginLeft={"10px"}
                  fontSize={10}
                  textColor={"vimdesk_faded_text"}
                >
                  {task.created_at}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Draggable>
  );
};

export default MyTask;
