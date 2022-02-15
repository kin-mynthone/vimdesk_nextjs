import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { useWindowSize } from "../../custom_hooks/";
import {
  Box,
  Button,
  Flex,
  Container,
  HStack,
  Input,
  Link,
  Spacer,
  Text,
  VStack,
  Hide,
} from "@chakra-ui/react";

import { signInInputStore, navigationBarStore } from "../../stores/index";

import { Calendar, momentLocalizer } from "react-big-calendar";
//import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function Reminders() {
  const { height, width } = useWindowSize();

  const setIsCredentialValid = signInInputStore(
    (state) => state.set_is_credential_valid
  );

  useEffect(() => {
    setIsCredentialValid(true);
  });
  //const localizer = momentLocalizer();

  const QuickView = () => {
    return (
      <Flex
        alignItems={"stretch"}
        flexDirection={"row"}
        padding={"30px"}
        flex={1}
        borderRadius={13}
        height={"100%"}
        marginRight={"30px"}
        bgColor={"vimdesk_bg"}
        style={{
          boxShadow: "0px 0px 5px 0px #DDDDDD",
        }}
      ></Flex>
    );
  };

  const MyCalendar = () => {
    return (
      <Flex
        alignItems={"stretch"}
        flexDirection={"column"}
        padding={"30px"}
        height={"100%"}
        borderRadius={13}
        bgColor={"vimdesk_bg"}
        style={{
          boxShadow: "0px 0px 5px 0px #DDDDDD",
        }}
      >
        <Flex
          marginTop={"10px"}
          flexDirection={"row"}
          justifyContent={"center"}
          width={"100%"}
          marginBottom={"50px"}
        >
          <Text textColor={"vimdesk_faded_text"} fontWeight={300} fontSize={20}>
            February
          </Text>
        </Flex>

        <Flex
          flexDirection={"row"}
          justifyContent={"space-around"}
          marginBottom={"15px"}
        >
          <Text textColor={"vimdesk_faded_text"} fontWeight={300} fontSize={15}>
            Sun
          </Text>
          <Text textColor={"vimdesk_faded_text"} fontWeight={300} fontSize={15}>
            Mon
          </Text>
          <Text textColor={"vimdesk_faded_text"} fontWeight={300} fontSize={15}>
            Tue
          </Text>
          <Text textColor={"vimdesk_faded_text"} fontWeight={300} fontSize={15}>
            Wed
          </Text>
          <Text textColor={"vimdesk_faded_text"} fontWeight={300} fontSize={15}>
            Thu
          </Text>
          <Text textColor={"vimdesk_faded_text"} fontWeight={300} fontSize={15}>
            Fri
          </Text>
          <Text textColor={"vimdesk_faded_text"} fontWeight={300} fontSize={15}>
            Sat
          </Text>
        </Flex>

        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          startAccessor="start"
          endAccessor="end"
          bgColor={"black"}
          components={{
            toolbar: Hide,
            header: Hide,
          }}
          // events={this.state.events}
          style={{ height: "60vh", width: width * 0.55 }}
        />
      </Flex>
    );
  };
  return (
    <Flex
      flexDirection={"row"}
      padding={"20px"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      bgColor={"vimdesk_main_bg"}
      maxWidth={width * 0.81}
      style={{
        overflow: "auto",
      }}
    >
      <QuickView />
      {/* <MyCalendar /> */}
    </Flex>
  );
}
