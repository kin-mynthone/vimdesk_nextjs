import Image from "next/image";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useWindowSize } from "../../custom_hooks/";
import {
  Button,
  Flex,
  Spacer,
  Text,
  useDisclosure,
  Collapse,
  Select,
} from "@chakra-ui/react";

import { MotionButton } from "../../constants/components/motion";

import { signInInputStore } from "../../stores/index";
import { remindersStore } from "../../stores/Reminders";

import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "../../constants/data/events";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  ThinArrowLeft,
  ThinArrowRight,
  CalendarToday,
  ArrowDown,
} from "../../assets";

export default function Reminders() {
  const { height, width } = useWindowSize();
  const DnDCalendar = withDragAndDrop(BigCalendar);
  const dateNow = new Date();
  const monthNowIndex = dateNow.getMonth();
  const yearNow = dateNow.getFullYear();
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

  const selectedMonthDate = remindersStore(
    (state) => state.selected_month_date
  );

  const setSelectedMonthIndex = remindersStore(
    (state) => state.set_selected_month_index
  );

  const selectedMonthIndex = remindersStore(
    (state) => state.selected_month_index
  );

  const setSelectedYear = remindersStore((state) => state.set_selected_year);

  const selectedYear = remindersStore((state) => state.selected_year);

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
      setSelectedYear(yearNow);
    }

    setIsCredentialValid(true);
  });
  const localizer = momentLocalizer(moment);

  const getSelectedMonth = ({ selectedMonthParam, selectedYearParam }) => {
    const date = new Date();
    date.setMonth(selectedMonthParam);

    const firstDayOfMonth = moment(
      new Date(selectedYearParam, date.getMonth())
    ).format("MM/DD/YYYY");

    setSelectedMonthDate(firstDayOfMonth);
  };

  const onNavigatePrev = () => {
    if (selectedMonthIndex != 0) {
      setSelectedMonthIndex(selectedMonthIndex - 1);
      getSelectedMonth({
        selectedMonthParam: selectedMonthIndex - 1,
        selectedYearParam: selectedYear,
      });
    }
  };

  const onNavigateNext = () => {
    if (selectedMonthIndex != 11) {
      setSelectedMonthIndex(selectedMonthIndex + 1);

      getSelectedMonth({
        selectedMonthParam: selectedMonthIndex + 1,
        selectedYearParam: selectedYear,
      });
    }
  };

  const onNavigateToday = () => {
    setSelectedMonthIndex(monthNowIndex);

    getSelectedMonth({
      selectedMonthParam: monthNowIndex,
      selectedYearParam: yearNow,
    });
    setSelectedYear(yearNow);
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

  const DateToday = () => {
    return (
      <Flex
        paddingY={"8px"}
        paddingX={"20px"}
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
        <Image src={CalendarToday} alt="vimdesk_icon" height={15} width={15} />
        <Text
          textColor={"vimdesk_light_purple"}
          marginLeft={"10px"}
          fontWeight={300}
          fontSize={13}
        >
          {moment(new Date(new Date())).format("dddd, MMM DD, yyyy")}
        </Text>
      </Flex>
    );
  };

  const TodayButton = () => {
    return (
      <MotionButton
        backgroundColor={"transparent"}
        size="xxs"
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
          paddingX={"20px"}
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
          <Text textColor={"vimdesk_blue"} fontWeight={300} fontSize={13}>
            Today
          </Text>
        </Flex>
      </MotionButton>
    );
  };

  const YearButton = () => {
    const currentYear = new Date().getFullYear(),
      years = [];
    const startYear = 2010;
    while (startYear <= currentYear + 20) {
      years.push(startYear++);
    }

    const handleChange = (event) => {
      getSelectedMonth({
        selectedMonthParam: selectedMonthIndex,
        selectedYearParam: event.target.value,
      });
      setSelectedYear(event.target.value);
    };

    return (
      <Select
        placeholder={selectedYear}
        borderRadius={10}
        borderWidth={1}
        marginLeft={"15px"}
        width={"13%"}
        height={"38.5px"}
        _focusWithin={{
          backgroundColor: "#E1F5FE",
          borderColor: "vimdesk_blue",
        }}
        _hover={{ backgroundColor: "#E1F5FE", cursor: "pointer" }}
        borderColor={"vimdesk_blue"}
        backgroundColor={"#F7FAFB"}
        textColor={"vimdesk_faded_text"}
        fontWeight={300}
        fontSize={13}
        style={{
          boxShadow: "0px 0px 5px 0px #DDDDDD",
        }}
        value={selectedYear}
        onChange={handleChange}
        icon={
          <Image
            src={ArrowDown}
            alt="vimdesk_icon"
            height={"7px"}
            width={"30px"}
          />
        }
      >
        {years.map((value, index) => (
          <option key={index + 1} value={value}>
            {value}
          </option>
        ))}
      </Select>
    );
  };

  const MonthNavigation = () => {
    return (
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
            alt="vimdesk_icon"
            height={15}
            width={15}
          />
        </MotionButton>

        <Text
          textColor={"vimdesk_faded_text"}
          fontWeight={300}
          fontSize={18}
          width={"105px"}
          textAlign={"center"}
          marginX={"10px"}
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
            alt="vimdesk_icon"
            height={15}
            width={15}
          />
        </MotionButton>
      </Flex>
    );
  };

  const WeekHeader = () => {
    return (
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
    );
  };

  const MainCalendar = () => {
    return (
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
    );
  };

  const CalendarContainer = () => {
    return (
      <>
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
            marginTop={"5px"}
            flexDirection={"row"}
            justifyItems={"space-between"}
            width={width * 0.55}
            marginBottom={"40px"}
            alignItems={"center"}
          >
            <DateToday />
            <Spacer />
            <MonthNavigation />
            <Spacer />

            <TodayButton />
            <YearButton />
          </Flex>

          <WeekHeader />
          <MainCalendar />
        </Flex>
      </>
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
      <CalendarContainer />
    </Flex>
  );
}
