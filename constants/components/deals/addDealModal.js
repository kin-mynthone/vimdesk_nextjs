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
  Select,
} from "@chakra-ui/react";
import Image from "next/image";
import { MotionButton } from "../motion";
import { dealPriorityData, initialData } from "../../";
import SelectSearch, { fuzzySearch } from "react-select-search";
import { Close, Minimize, Check } from "../../../assets";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
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

  const activeClientSelect = addDealModalStore(
    (state) => state.active_client_select
  );

  const setActiveClientSelect = addDealModalStore(
    (state) => state.set_active_client_select
  );

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
      >
        {dealPriorityData.map((value, index) => (
          <option key={index + 1} value={value.name}>
            {value.name}
          </option>
        ))}
      </Select>
    );
  };

  const colors = [
    { name: "Data1", value: "data1" },
    { name: "Data2", value: "data2" },
    { name: "Data3", value: "data3" },
    { name: "Data4", value: "data4" },
    { name: "Data5", value: "data5" },
  ];

  function renderFontOption(props, { name, value }, snapshot, className) {
    return (
      <Flex padding={2}>
        <Button {...props} className={className} type="button">
          {name}
        </Button>
      </Flex>
    );
  }

  const ClientSelect = () => {
    return (
      <SelectSearch
        options={colors}
        variant="flushed"
        renderOption={renderFontOption}
        search
        filterOptions={fuzzySearch}
      />
    );
  };

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
      >
        {initialData.columnOrder.map((value, index) => (
          <option key={index + 1} value={initialData.columns[value].title}>
            {initialData.columns[value].title}
          </option>
        ))}
      </Select>
    );
  };

  const CloseDateCalendar = () => {
    return (
      <Datetime
        timeFormat={false}
        open={activeCalendar}
        onChange={(value) => {
          setCloseDate(value);
        }}
      />
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

              <Input
                value={client}
                fontSize={"13px"}
                variant={"flushed"}
                onChange={setClient}
                onClick={() => {
                  setActiveClientSelect(!activeClientSelect);
                }}
              />
              <ClientSelect />
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
              // onChange={setSignInWorkspaceInput}
              onClick={() => {
                setActiveCalendar(!archiveDeal);
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
