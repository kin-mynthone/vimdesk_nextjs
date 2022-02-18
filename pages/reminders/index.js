import Image from "next/image";
import React from "react";
import { useState, useEffect, useCallback } from "react";
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

import { signInInputStore } from "../../stores/index";
import { remindersStore } from "../../stores/Reminders";

import {
  Calendar as BigCalendar,
  momentLocalizer,
  Toolbar,
} from "react-big-calendar";
import moment from "moment";
import events from "../../constants/data/events";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ThinArrowLeft, ThinArrowRight, CalendarToday } from "../../assets";

export default function Reminders() {
  const { height, width } = useWindowSize();
  const DnDCalendar = withDragAndDrop(BigCalendar);
  const dateNow = new Date();
  const monthNowIndex = dateNow.getMonth();
  const setIsCredentialValid = signInInputStore(
    (state) => state.set_is_credential_valid
  );

  const setActiveCalendarView = remindersStore(
    (state) => state.set_active_calendar_view
  );
  const ActiveCalendarView = remindersStore(
    (state) => state.active_calendar_view
  );

  const setSelectedMonthDate = remindersStore(
    (state) => state.set_selected_month_date
  );

  const setSelectedMonthIndex = remindersStore(
    (state) => state.set_selected_month_index
  );

  const selectedMonthDate = remindersStore(
    (state) => state.selected_month_date
  );

  const selectedMonthIndex = remindersStore(
    (state) => state.selected_month_index
  );

  const selectedMonth = remindersStore((state) => state.selected_month);

  const [myEvent, setmyEvent] = useState(events);

  const eventStyleGetter = (event) => {
    var backgroundColor = "#" + event.hexColor;
    var style = {
      backgroundColor: backgroundColor,
      borderRadius: "30px",
      opacity: 0.8,
      color: "white",
      padding: "3px",
      border: "0px",
      width: "95%",
      marginLeft: "3%",
      display: "block",
      paddingLeft: "10px",
      paddingRight: "10px",
    };
    return {
      style: style,
    };
  };

  // const onEventResize = (data) => {
  //   const { start, end } = data;

  //   setState((state) => {
  //     state.events[0].start = start;
  //     state.events[0].end = end;
  //     return { events: [...state.events] };
  //   });
  // };

  // const onEventDrop = (data) => {
  //   console.log(data);
  // };

  useEffect(() => {
    if (selectedMonth == "none") {
      setSelectedMonthIndex(monthNowIndex);
    }

    setIsCredentialValid(true);
  });
  const localizer = momentLocalizer(moment);

  const getSelectedMonth = ({ selected_month }) => {
    const date = new Date();
    date.setMonth(selected_month);

    const firstDayOfMonth = moment(
      new Date(date.getFullYear(), date.getMonth())
    ).format("MM/DD/YYYY");

    setSelectedMonthDate(firstDayOfMonth);
  };

  const onNavigatePrev = () => {
    if (selectedMonthIndex != 0) {
      setSelectedMonthIndex(selectedMonthIndex - 1);
      getSelectedMonth({
        selected_month: selectedMonthIndex - 1,
      });
    }
  };

  const onNavigateNext = () => {
    if (selectedMonthIndex != 11) {
      setSelectedMonthIndex(selectedMonthIndex + 1);

      getSelectedMonth({
        selected_month: selectedMonthIndex + 1,
      });
    }
  };

  const onNavigateToday = () => {
    setSelectedMonthIndex(monthNowIndex);

    getSelectedMonth({
      selected_month: monthNowIndex,
    });
  };

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
  // const formats = {
  //   weekdayFormat: (date, culture, localizer) =>
  //     localizer.format(date, "ddd", culture),
  // };

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
          <MotionButton
            backgroundColor={"transparent"}
            size="xs"
            _focus={{ border: "none" }}
            _focusWithin={{ backgroundColor: "transparent" }}
            _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
            whileTap={{
              scale: 0.8,
            }}
            whileHover={{
              scale: 1.1,
            }}
            onClick={onNavigateToday} //update this
          >
            <Flex
              paddingY={"10px"}
              paddingX={"30px"}
              marginLeft={"8px"}
              borderRadius={10}
              borderWidth={1}
              borderColor={"vimdesk_light_purple"}
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
                textColor={"vimdesk_light_purple"}
                marginLeft={"10px"}
                fontWeight={300}
                fontSize={13}
              >
                {moment(new Date(new Date())).format("dddd, MMM DD, yyyy")}
              </Text>
            </Flex>
          </MotionButton>
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
              onClick={onNavigatePrev} //update this
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
              width={"110px"}
              textAlign={"center"}
              marginX={"25px"}
            >
              {selectedMonth}
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
              onClick={onNavigateNext} //update this
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
              size="xxs"
              backgroundColor={"transparent"}
              _focus={{ border: "none" }}
              _focusWithin={{ backgroundColor: "transparent" }}
              _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
              whileTap={{
                scale: ActiveCalendarView != "week" ? 0.8 : 1.0,
              }}
              whileHover={{
                scale: ActiveCalendarView != "week" ? 1.1 : 1.0,
              }}
              onClick={() => {
                // setActiveCalendarView("week");
              }} //update this
            >
              <Flex
                paddingY={"10px"}
                width={"70px"}
                marginLeft={"8px"}
                borderRadius={10}
                borderWidth={1}
                borderColor={
                  ActiveCalendarView == "week" ? "vimdesk_blue" : "vimdesk_gray"
                }
                flexDirection={"column"}
                justifyContent={"start"}
                alignItems={"center"}
                backgroundColor={"#F7FAFB"}
              >
                <Text
                  textColor={
                    ActiveCalendarView == "week"
                      ? "vimdesk_blue"
                      : "vimdesk_gray"
                  }
                  fontWeight={300}
                  fontSize={13}
                >
                  Week
                </Text>
              </Flex>
            </MotionButton>
            <MotionButton
              size="xxs"
              backgroundColor={"transparent"}
              _focus={{ border: "none" }}
              _focusWithin={{ backgroundColor: "transparent" }}
              _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
              whileTap={{
                scale: ActiveCalendarView != "month" ? 0.8 : 1.0,
              }}
              whileHover={{
                scale: ActiveCalendarView != "month" ? 1.1 : 1.0,
              }}
              onClick={() => {
                setActiveCalendarView("month");
              }} //update this
            >
              <Flex
                paddingY={"10px"}
                width={"70px"}
                marginLeft={"8px"}
                borderRadius={10}
                borderWidth={1}
                borderColor={
                  ActiveCalendarView == "month"
                    ? "vimdesk_blue"
                    : "vimdesk_gray"
                }
                flexDirection={"column"}
                justifyContent={"start"}
                alignItems={"center"}
                backgroundColor={"#F7FAFB"}
              >
                <Text
                  textColor={
                    ActiveCalendarView == "month"
                      ? "vimdesk_blue"
                      : "vimdesk_gray"
                  }
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

        <BigCalendar
          localizer={localizer}
          events={myEvent}
          // onEventDrop={onEventDrop}
          // onEventResize={onEventResize}
          resizable
          views={["month", "week"]}
          popup
          //formats={formats}
          selectable
          view={ActiveCalendarView}
          onNavigate={onNavigateToday}
          defaultView="month"
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          date={selectedMonthDate}
          eventPropGetter={eventStyleGetter}
          components={{
            toolbar: "hide",
            header: "hide",
          }}
          style={{
            height: "60vh",
            width: width * 0.55,
            fontSize: 13,
            fontWeight: 300,
          }}
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
