import React from "react";
import { addInvoiceModalStore } from "../../../stores/invoice";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  Flex,
  Textarea,
  Input,
  Spacer,
  Text,
  Table,
  Thead,
  Tbody,
  TableCaption,
  Tr,
  Th,
  Td,
  Divider,
  Select,
} from "@chakra-ui/react";
import Image from "next/image";
import { MotionButton } from "../motion";
import { dealPriorityData, initialData } from "../..";
import SelectSearch, { fuzzySearch } from "react-select-search";
import {
  Close,
  Minimize,
  Check,
  Discount,
  Trash,
  TextField,
  Burger,
  PlusSign,
} from "../../../assets";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
const AddInvoiceModal = () => {
  const addInvoiceModalActiveStatus = addInvoiceModalStore(
    (state) => state.active_status
  );

  const setAddInvoiceModalActiveStatus = addInvoiceModalStore(
    (state) => state.set_active_status
  );

  //----------------------------------------------------------

  const title = addInvoiceModalStore((state) => state.title);

  const setTitle = addInvoiceModalStore((state) => state.set_title);

  const amount = addInvoiceModalStore((state) => state.amount);

  const setAmount = addInvoiceModalStore((state) => state.set_amount);

  const client = addInvoiceModalStore((state) => state.client);

  const setClient = addInvoiceModalStore((state) => state.set_client);

  const salesAgent = addInvoiceModalStore((state) => state.sales_agent);

  const setSalesAgent = addInvoiceModalStore((state) => state.set_sales_agent);

  const estimatePriority = addInvoiceModalStore(
    (state) => state.estimate_priority
  );

  const setEstimatePriority = addInvoiceModalStore(
    (state) => state.set_estimate_priority
  );

  const estimateStatus = addInvoiceModalStore((state) => state.estimate_status);

  const setEstimateStatus = addInvoiceModalStore(
    (state) => state.set_estimate_status
  );

  const closeDate = addInvoiceModalStore((state) => state.close_date);

  const setCloseDate = addInvoiceModalStore((state) => state.set_close_date);

  const archiveDeal = addInvoiceModalStore((state) => state.archive_deal);

  const setArchiveDeal = addInvoiceModalStore(
    (state) => state.set_archive_deal
  );

  const activeCalendar = addInvoiceModalStore((state) => state.active_calendar);

  const setActiveCalendar = addInvoiceModalStore(
    (state) => state.set_active_calendar
  );

  const clearData = addInvoiceModalStore((state) => state.clear_date);

  const activeClientSelect = addInvoiceModalStore(
    (state) => state.active_client_select
  );

  const setActiveClientSelect = addInvoiceModalStore(
    (state) => state.set_active_client_select
  );

  const DealPrioritySelect = () => {
    const handleChange = (event) => {
      setEstimatePriority(event.target.value);
    };

    return (
      <Select
        variant="flushed"
        height={"38.5px"}
        textColor={"vimdesk_faded_text"}
        fontWeight={300}
        fontSize={13}
        value={estimatePriority}
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

  const DealStatusSelect = () => {
    const handleChange = (event) => {
      setEstimateStatus(event.target.value);
    };
    return (
      <Select
        variant="flushed"
        height={"38.5px"}
        textColor={"vimdesk_faded_text"}
        fontWeight={300}
        fontSize={13}
        value={estimateStatus}
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
      isOpen={addInvoiceModalActiveStatus}
      isCentered
      size={"xxl"}
    >
      <ModalOverlay />

      <ModalContent
        justifyContent={"center"}
        alignItems={"center"}
        width={"80%"}
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
            New Invoice
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
                setAddInvoiceModalActiveStatus(!addInvoiceModalActiveStatus);
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
                Select Company
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
                Select Contact
              </Text>

              <Input
                value={amount}
                fontSize={"13px"}
                variant={"flushed"}
                onChange={setAmount}
              />
            </Flex>

            <Flex flexDirection={"column"} width={"100%"} marginLeft={"10px"}>
              <Text fontSize={"13px"} textColor={"vimdesk_blue"}>
                Due date
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

              <Flex
                flexDirection={"column"}
                width={"100%"}
                marginTop={"10px"}
                paddingY={5}
              >
                <Text fontSize={"13px"} textColor={"vimdesk_blue"}>
                  Reference
                </Text>

                <Input
                  value={salesAgent}
                  fontSize={"13px"}
                  variant={"flushed"}
                  onChange={setSalesAgent}
                />
              </Flex>
            </Flex>
          </Flex>

          <Flex
            flexDirection={"row"}
            width={"100%"}
            height={"100%"}
            borderRadius={10}
            justifyContent={"space-between"}
            style={{
              boxShadow: "0px 0px 3px 0px #DDDDDD",
              overflow: "auto",
            }}
          >
            <Table variant="simple">
              <Thead bgColor={"#F3F9FF"}>
                <Tr>
                  <Th></Th>
                  <Th>Title</Th>
                  <Th>Quantity</Th>
                  <Th>Description</Th>
                  <Th>Unit Price</Th>
                  <Th>Tax</Th>
                  <Th>Total</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Flex>
                      <Image alt="vimdesk" src={Burger} width={13} />
                    </Flex>
                  </Td>

                  <Td>
                    <Input
                      // value={amount}
                      fontSize={"13px"}
                      variant={"outline"}
                      borderColor={"lightgray"}
                      focusBorderColor={"#47ADDD"}
                      //  onChange={setAmount}
                    />
                  </Td>
                  <Td>
                    <Input
                      // value={amount}
                      fontSize={"13px"}
                      variant={"outline"}
                      borderColor={"lightgray"}
                      focusBorderColor={"#47ADDD"}
                      // onChange={setAmount}
                    />
                  </Td>
                  <Td>
                    <Input
                      //  value={amount}
                      fontSize={"13px"}
                      variant={"outline"}
                      borderColor={"lightgray"}
                      focusBorderColor={"#47ADDD"}
                      // onChange={setAmount}
                    />
                  </Td>
                  <Td>
                    <Input
                      //  value={amount}
                      fontSize={"13px"}
                      variant={"outline"}
                      borderColor={"lightgray"}
                      focusBorderColor={"#47ADDD"}
                      // onChange={setAmount}
                    />
                  </Td>
                  <Td>
                    <Input
                      //  value={amount}
                      fontSize={"13px"}
                      variant={"outline"}
                      borderColor={"lightgray"}
                      focusBorderColor={"#47ADDD"}
                      // onChange={setAmount}
                    />
                  </Td>
                  <Td>25.4</Td>
                  <Td>
                    <MotionButton
                      size="xxs"
                      backgroundColor={"transparent"}
                      _focus={{ border: "none" }}
                      _focusWithin={{ backgroundColor: "transparent" }}
                      _hover={{
                        backgroundColor: "transparent",
                        cursor: "pointer",
                      }}
                      flexDirection={"row"}
                      whileTap={{
                        scale: 0.4,
                      }}
                      whileHover={{
                        scale: 1.1,
                      }}
                      onClick={null} //update this
                    >
                      <Image alt="vimdesk" src={TextField} width={20} />
                    </MotionButton>

                    <MotionButton
                      size="xxs"
                      marginLeft={2}
                      backgroundColor={"transparent"}
                      _focus={{ border: "none" }}
                      _focusWithin={{ backgroundColor: "transparent" }}
                      _hover={{
                        backgroundColor: "transparent",
                        cursor: "pointer",
                      }}
                      flexDirection={"row"}
                      whileTap={{
                        scale: 0.4,
                      }}
                      whileHover={{
                        scale: 1.1,
                      }}
                      onClick={null} //update this
                    >
                      <Image alt="vimdesk" src={Discount} width={20} />{" "}
                    </MotionButton>
                    <MotionButton
                      size="xxs"
                      marginLeft={5}
                      backgroundColor={"transparent"}
                      _focus={{ border: "none" }}
                      _focusWithin={{ backgroundColor: "transparent" }}
                      _hover={{
                        backgroundColor: "transparent",
                        cursor: "pointer",
                      }}
                      flexDirection={"row"}
                      whileTap={{
                        scale: 0.4,
                      }}
                      whileHover={{
                        scale: 1.1,
                      }}
                      onClick={null} //update this
                    >
                      <Image alt="vimdesk" src={Trash} width={20} />
                    </MotionButton>
                  </Td>
                </Tr>
              </Tbody>
              <TableCaption bgColor={"#F3F9FF"}>
                <MotionButton
                  size="xxs"
                  backgroundColor={"transparent"}
                  _focus={{ border: "none" }}
                  _focusWithin={{ backgroundColor: "transparent" }}
                  _hover={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                  flexDirection={"row"}
                  whileTap={{
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  onClick={null} //update this
                >
                  <Image alt="vimdesk" src={PlusSign} width={15} />
                  <Text
                    color={"vimdesk_blue"}
                    fontSize={"13px"}
                    fontWeight={"bold"}
                    paddingLeft={3}
                    flex={1}
                    textAlign={"center"}
                  >
                    Add Item
                  </Text>
                </MotionButton>
              </TableCaption>
            </Table>
          </Flex>

          <Flex
            flexDirection={"row"}
            width={"100%"}
            height={"100%"}
            paddingY={5}
            justifyContent={"space-between"}
          >
            <Flex flexDirection={"column"} width={"30%"}>
              <Text
                fontSize={"13px"}
                textColor={"vimdesk_blue"}
                marginBottom={1}
              >
                Notes:
              </Text>

              <Textarea placeholder="Enter here" size="sm" borderRadius={10} />
            </Flex>

            <Flex
              flexDirection={"column"}
              borderRadius={10}
              padding={5}
              width={"20%"}
              height={"100%"}
              bgColor={"#C0A5E3"}
              style={{
                boxShadow: "0px 0px 3px 0px #DDDDDD",
                overflow: "auto",
              }}
            >
              <Flex flexDirection={"row"} width={"100%"}>
                <Text
                  fontSize={"13px"}
                  textColor={"white"}
                  fontWeight={"bold"}
                  marginBottom={1}
                >
                  Subtotal:
                </Text>
                <Spacer />
                <Text
                  fontSize={"13px"}
                  textColor={"white"}
                  fontWeight={"bold"}
                  marginBottom={1}
                >
                  € 100.00
                </Text>
              </Flex>
              <Flex flexDirection={"row"} width={"100%"}>
                <Text
                  fontSize={"13px"}
                  textColor={"white"}
                  fontWeight={"bold"}
                  marginBottom={1}
                >
                  Tax 6%:
                </Text>
                <Spacer />
                <Text
                  fontSize={"13px"}
                  textColor={"white"}
                  fontWeight={"bold"}
                  marginBottom={1}
                >
                  € 6.00
                </Text>
              </Flex>
              <Divider orientation="horizontal" />
              <Flex flexDirection={"row"} width={"100%"} marginTop={4}>
                <Text
                  fontSize={"15px"}
                  textColor={"white"}
                  fontWeight={"bold"}
                  marginBottom={1}
                >
                  Total:
                </Text>
                <Spacer />
                <Text
                  fontSize={"15px"}
                  textColor={"white"}
                  fontWeight={"bold"}
                  marginBottom={1}
                >
                  € 100.00
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Button
            leftIcon={<Image alt="vimdesk" src={Check} width={10} />}
            marginTop={"30px"}
            variant={"solid"}
            width={"20%"}
            paddingY={"5"}
            alignSelf={"end"}
          >
            Save Invoice
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
export default AddInvoiceModal;
