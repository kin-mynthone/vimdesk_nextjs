import React from "react";
import { addDealModalStore } from "../../../stores/deals";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  Flex,
  Checkbox,
  Input,
  Spacer,
  Text,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { MotionButton } from "../motion";
import { dealPriorityData, dealStatusData, initialData } from "../../";
import { Close, Minimize, Check } from "../../../assets";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import Select from "react-select";

const addDealModal = () => {
  const addDealsModalActiveStatus = addDealModalStore(
    (state) => state.active_status
  );

  const setAddDealsModalActiveStatus = addDealModalStore(
    (state) => state.set_active_status
  );

  //----------------------------------------------------------

  const title = addDealModalStore((state) => state.title);

  const setTitle = addDealModalStore((state) => state.set_title);

  const amount = addDealModalStore((state) => state.amount);

  const setAmount = addDealModalStore((state) => state.set_amount);

  const client = addDealModalStore((state) => state.client);

  const setClient = addDealModalStore((state) => state.set_client);

  const salesAgent = addDealModalStore((state) => state.sales_agent);

  const setSalesAgent = addDealModalStore((state) => state.set_sales_agent);

  const dealsPriority = addDealModalStore((state) => state.deals_priority);

  const setDealsPriority = addDealModalStore(
    (state) => state.set_deals_priority
  );

  const dealsStatus = addDealModalStore((state) => state.deals_status);

  const setDealsStatus = addDealModalStore((state) => state.set_deals_status);

  const closeDate = addDealModalStore((state) => state.close_date);

  const setCloseDate = addDealModalStore((state) => state.set_close_date);

  const archiveDeal = addDealModalStore((state) => state.archive_deal);

  const setArchiveDeal = addDealModalStore((state) => state.set_archive_deal);

  const activeCalendar = addDealModalStore((state) => state.active_calendar);

  const setActiveCalendar = addDealModalStore(
    (state) => state.set_active_calendar
  );

  const clearData = addDealModalStore((state) => state.clear_date);

  function DealProrityList() {
    const options = [];
    dealPriorityData.map((value, index) => {
      options.push({
        value: value.name,
        label: value.name,
      });
    });

    return options;
  }

  const DealPrioritySelect = () => {
    const handleChange = (event) => {
      setDealsPriority(event.target.value);
    };

    return (
      <Select
        variant="flushed"
        height={"38.5px"}
        textColor={"vimdesk_faded_text"}
        fontWeight={300}
        fontSize={13}
        value={dealsPriority}
        onChange={handleChange}
        iconColor="vimdesk_gray"
        options={DealProrityList()}
      />
    );
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const SelectClientLead = () => <Select options={options} />;

  function DealStatusList() {
    const options = [];
    dealStatusData.map((value, index) => {
      options.push({
        value: value.name,
        label: value.name,
      });
    });

    return options;
  }

  const DealStatusSelect = () => {
    const handleChange = (event) => {
      setDealsStatus(event.target.value);
    };
    return (
      <Select
        variant="flushed"
        height={"38.5px"}
        textColor={"vimdesk_faded_text"}
        fontWeight={300}
        fontSize={13}
        value={dealsStatus}
        onChange={handleChange}
        iconColor="vimdesk_gray"
        options={DealStatusList()}
      />
    );
  };

  const CloseDateCalendar = () => {
    return (
      <Flex
        position={"absolute"}
        zIndex={1000}
        marginTop={"60px"}
        style={{
          boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Datetime
          input={false}
          timeFormat={false}
          onChange={(value) => {
            setCloseDate(value);
          }}
          onClose={() => {
            setActiveCalendar(!activeCalendar);
          }}
        />
      </Flex>
    );
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={addDealsModalActiveStatus}
      isCentered
      size={"xl"}
    >
      <ModalOverlay />

      <ModalContent
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={13}
      >
        <Flex
          flexDirection={"row"}
          width={"100%"}
          justifyContent={"center"}
          alignContent={"center"}
          paddingY={1.5}
          paddingX={5}
          bgGradient="linear(to-r, vimdesk_blue -5%,vimdesk_purple 100% )"
          borderTopRadius={13}
        >
          <Text
            color={"white"}
            fontSize={"13px"}
            fontWeight={"bold"}
            paddingLeft={6}
            flex={1}
            textAlign={"center"}
          >
            New Deal
          </Text>

          <Flex
            flexDirection={"row"}
            width={"30px"}
            alignItems={"end"}
            paddingBottom={1}
          >
            <MotionButton
              size="xxs"
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
              <Image alt="vimdesk" src={Minimize} width={10} />
            </MotionButton>

            <Spacer />
            <MotionButton
              size="xxs"
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
                clearData();
              }} //update this
            >
              <Image alt="vimdesk" src={Close} height={10} width={10} />
            </MotionButton>
          </Flex>
        </Flex>
        <Flex
          flexDirection={"column"}
          width={"100%"}
          height={"100%"}
          paddingX={8}
          paddingTop={3}
          paddingBottom={6}
          borderBottomRadius={13}
        >
          <Flex
            flexDirection={"row"}
            width={"100%"}
            height={"100%"}
            paddingY={5}
            justifyContent={"space-between"}
          >
            <Flex flexDirection={"column"} width={"100%"} marginRight={"10px"}>
              <Text fontSize={"13px"} textColor={"vimdesk_blue"}>
                Title
              </Text>

              <Input
                value={title}
                fontSize={"13px"}
                variant={"flushed"}
                onChange={setTitle}
              />
            </Flex>

            <Flex flexDirection={"column"} width={"100%"} marginLeft={"10px"}>
              <Text fontSize={"13px"} textColor={"vimdesk_blue"}>
                Amount
              </Text>

              <Input
                value={amount}
                fontSize={"13px"}
                variant={"flushed"}
                onChange={setAmount}
              />
            </Flex>
          </Flex>
          <Flex
            flexDirection={"row"}
            width={"100%"}
            height={"100%"}
            paddingY={5}
            justifyContent={"center"}
          >
            <Flex flexDirection={"column"} width={"100%"} marginRight={"10px"}>
              <Text fontSize={"13px"} textColor={"vimdesk_blue"}>
                Client/Lead
              </Text>

              {/* <Input
                value={client}
                fontSize={"13px"}
                variant={"flushed"}
                onChange={(value) => {
                  setClient(value.target.value);
                }}
                onClick={() => {
                  setActiveClientSelect(!activeClientSelect);
                }}
              /> */}
              <SelectClientLead />
            </Flex>
            <Flex flexDirection={"column"} width={"100%"} marginLeft={"10px"}>
              <Text fontSize={"13px"} textColor={"vimdesk_blue"}>
                Sales Agent
              </Text>

              <Input
                value={salesAgent}
                fontSize={"13px"}
                variant={"flushed"}
                onChange={setSalesAgent}
              />
            </Flex>
          </Flex>

          <Flex
            flexDirection={"row"}
            width={"100%"}
            height={"100%"}
            paddingY={5}
            justifyContent={"center"}
          >
            <Flex flexDirection={"column"} width={"100%"} marginRight={"10px"}>
              <Text fontSize={"13px"} textColor={"vimdesk_blue"}>
                Deal Priority
              </Text>

              <DealPrioritySelect />
            </Flex>
            <Flex flexDirection={"column"} width={"100%"} marginLeft={"10px"}>
              <Text fontSize={"13px"} textColor={"vimdesk_blue"}>
                Deal Status
              </Text>
              <DealStatusSelect />{" "}
            </Flex>
          </Flex>

          <Flex flexDirection={"column"} paddingY={5}>
            <Text fontSize={"13px"} textColor={"vimdesk_blue"}>
              Close date
            </Text>
            <Input
              fontSize={"13px"}
              variant={"flushed"}
              value={new Date(closeDate).toDateString()}
              onClick={() => {
                setActiveCalendar(!activeCalendar);
              }}
            />

            {activeCalendar && <CloseDateCalendar />}
          </Flex>
          <Stack spacing={1} direction="row">
            <Checkbox
              colorScheme="green"
              onChange={() => {
                setArchiveDeal(!archiveDeal);
              }}
            >
              <Text
                color={"vimdesk_faded_text"}
                fontSize={"13px"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                Archive deal
              </Text>
            </Checkbox>
          </Stack>

          <Button
            leftIcon={<Image alt="vimdesk" src={Check} width={10} />}
            marginTop={"30px"}
            variant={"solid"}
            width={"20%"}
            paddingY={"5"}
            alignSelf={"end"}
          >
            Save
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
export default addDealModal;
