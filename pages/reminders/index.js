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
} from "@chakra-ui/react";

import { signInInputStore, navigationBarStore } from "../../stores/index";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function Reminders() {
  const { height, width } = useWindowSize();

  const setIsCredentialValid = signInInputStore(
    (state) => state.set_is_credential_valid
  );

  useEffect(() => {
    setIsCredentialValid(true);
  });
  const localizer = momentLocalizer(moment);
  return (
    <Flex
      alignItems={"stretch"}
      flexDirection={"column"}
      paddingX={"20px"}
      bgColor={"vimdesk_main_bg"}
      maxWidth={width * 0.81}
      style={{
        overflow: "auto",
      }}
    >
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        startAccessor="start"
        endAccessor="end"
        // events={this.state.events}
        style={{ height: "80vh", width: width * 0.6 }}
      />
    </Flex>
  );
}
