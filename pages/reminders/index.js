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

import { MotionButton } from "../../constants/components/motion";

import { signInInputStore, navigationBarStore } from "../../stores/index";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ThinArrowLeft, ThinArrowRight, CalendarToday } from "../../assets";

export default function Reminders() {
  const { height, width } = useWindowSize();

  const setIsCredentialValid = signInInputStore(
    (state) => state.set_is_credential_valid
  );

  useEffect(() => {
    setIsCredentialValid(true);
  });
  const localizer = momentLocalizer(moment);

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
        alignItems={"center"}
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
          width={width * 0.55}
          marginBottom={"50px"}
          alignItems={"center"}
        >
          <Flex
            paddingY={"10px"}
            paddingX={"30px"}
            marginLeft={"8px"}
            borderRadius={10}
            borderWidth={1}
            borderColor={"vimdesk_blue"}
            flexDirection={"row"}
            justifyContent={"start"}
            alignItems={"center"}
            backgroundColor={"#F7FAFB"}
            style={{
              boxShadow: "0px 0px 5px 0px #DDDDDD",
            }}
          >
            <Image
              src={CalendarToday}
              alt="vimdesk_logo"
              height={15}
              width={15}
            />
            <Text
              textColor={"vimdesk_faded_text"}
              marginLeft={"10px"}
              fontWeight={300}
              fontSize={13}
            >
              Sunday, Mar 6, 2021
            </Text>
          </Flex>
          <Spacer />
          <Flex
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
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
              onClick={null} //update this
            >
              <Image
                src={ThinArrowLeft}
                alt="vimdesk_logo"
                height={15}
                width={15}
              />
            </MotionButton>

            <Text
              textColor={"vimdesk_faded_text"}
              fontWeight={300}
              fontSize={18}
              marginX={"25px"}
            >
              February
            </Text>

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
              onClick={null} //update this
            >
              <Image
                src={ThinArrowRight}
                alt="vimdesk_logo"
                height={15}
                width={15}
              />
            </MotionButton>
          </Flex>
          <Spacer />
          <Flex
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <MotionButton
              backgroundColor={"transparent"}
              size="xs"
              _focus={{ border: "none" }}
              _focusWithin={{ backgroundColor: "transparent" }}
              _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
              whileTap={{
                scale: 0.4,
              }}
              whileHover={{
                scale: 1.1,
              }}
              onClick={null} //update this
            >
              <Flex
                padding={"12px"}
                width={"70px"}
                borderRadius={10}
                flexDirection={"row"}
                alignItems={"center"}
                backgroundColor={"white"}
                justifyContent={"center"}
                alignContent={"center"}
                borderColor={"vimdesk_blue"}
                borderWidth={1}
              >
                <Text
                  textColor={"vimdesk_faded_text"}
                  fontWeight={300}
                  fontSize={13}
                >
                  Year
                </Text>
              </Flex>
            </MotionButton>
            <MotionButton
              size="xs"
              backgroundColor={"transparent"}
              _focus={{ border: "none" }}
              _focusWithin={{ backgroundColor: "transparent" }}
              _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
              whileTap={{
                scale: 0.4,
              }}
              whileHover={{
                scale: 1.1,
              }}
              onClick={null} //update this
            >
              <Flex
                padding={"12px"}
                width={"70px"}
                borderRadius={10}
                flexDirection={"row"}
                alignItems={"center"}
                backgroundColor={"white"}
                justifyContent={"center"}
                alignContent={"center"}
                borderColor={"vimdesk_blue"}
                borderWidth={1}
              >
                <Text
                  textColor={"vimdesk_faded_text"}
                  fontWeight={300}
                  fontSize={13}
                >
                  Month
                </Text>
              </Flex>
            </MotionButton>
          </Flex>
        </Flex>

        <Flex
          flexDirection={"row"}
          justifyContent={"space-around"}
          marginBottom={"15px"}
          width={width * 0.55}
        >
          <Text textColor={"vimdesk_faded_text"} fontWeight={300} fontSize={13}>
            Sun
          </Text>
          <Text textColor={"vimdesk_faded_text"} fontWeight={300} fontSize={13}>
            Mon
          </Text>
          <Text textColor={"vimdesk_faded_text"} fontWeight={300} fontSize={13}>
            Tue
          </Text>
          <Text textColor={"vimdesk_faded_text"} fontWeight={300} fontSize={13}>
            Wed
          </Text>
          <Text textColor={"vimdesk_faded_text"} fontWeight={300} fontSize={13}>
            Thu
          </Text>
          <Text textColor={"vimdesk_faded_text"} fontWeight={300} fontSize={13}>
            Fri
          </Text>
          <Text textColor={"vimdesk_faded_text"} fontWeight={300} fontSize={13}>
            Sat
          </Text>
        </Flex>

        <Calendar
          localizer={localizer}
          // events={events}
          popup
          startAccessor="start"
          endAccessor="end"
          components={{
            toolbar: "Hide",
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
      <MyCalendar />
    </Flex>
  );
}
