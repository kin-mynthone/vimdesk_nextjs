import React from "react";
import { addRelationsModalStore } from "../../../stores/relations";
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
} from "@chakra-ui/react";
import Image from "next/image";
import { MotionButton } from "../motion";
import { dealPriorityData, initialData } from "../..";
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

import Select from "react-select";

const AddRelationsModal = () => {
  const addRelationsModalActiveStatus = addRelationsModalStore(
    (state) => state.active_status
  );

  const setAddRelationsModalActiveStatus = addRelationsModalStore(
    (state) => state.set_active_status
  );

  //----------------------------------------------------------

  const company = addRelationsModalStore((state) => state.company);

  const setCompany = addRelationsModalStore((state) => state.set_company);

  const contact = addRelationsModalStore((state) => state.contact);

  const setContact = addRelationsModalStore((state) => state.set_contact);

  const reference = addRelationsModalStore((state) => state.reference);

  const setReference = addRelationsModalStore((state) => state.set_reference);

  const dueDate = addRelationsModalStore((state) => state.due_date);

  const setDueDate = addRelationsModalStore((state) => state.set_due_date);

  const activeCalendar = addRelationsModalStore(
    (state) => state.active_calendar
  );

  const setActiveCalendar = addRelationsModalStore(
    (state) => state.set_active_calendar
  );

  //----------------------------------------------------------

  const title = addRelationsModalStore((state) => state.title);

  const setTitle = addRelationsModalStore((state) => state.set_title);

  const quantity = addRelationsModalStore((state) => state.quantity);

  const setQuantity = addRelationsModalStore((state) => state.set_quantity);

  const description = addRelationsModalStore((state) => state.description);

  const setDescription = addRelationsModalStore(
    (state) => state.set_description
  );

  const unitPrice = addRelationsModalStore((state) => state.unit_price);

  const setUnitPrice = addRelationsModalStore((state) => state.set_unit_price);

  const taxTable = addRelationsModalStore((state) => state.tax_table);

  const setTaxTable = addRelationsModalStore((state) => state.set_tax_table);

  const totalTable = addRelationsModalStore((state) => state.total_table);

  const setTotalTable = addRelationsModalStore(
    (state) => state.set_total_table
  );

  const subtotal = addRelationsModalStore((state) => state.subtotal);

  const setSubtotal = addRelationsModalStore((state) => state.set_subtotal);

  const tax = addRelationsModalStore((state) => state.tax);

  const setTax = addRelationsModalStore((state) => state.set_tax);

  const total = addRelationsModalStore((state) => state.total);

  const setTotal = addRelationsModalStore((state) => state.set_total);

  const clearData = addRelationsModalStore((state) => state.clear_date);
  const clearDataTable = addRelationsModalStore(
    (state) => state.clear_date_table
  );

  const DueDateCalendar = () => {
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
            setDueDate(value);
          }}
          onClose={() => {
            setActiveCalendar(!activeCalendar);
          }}
        />
      </Flex>
    );
  };

  function CompanyList() {
    const options = [];
    dealPriorityData.map((value, index) => {
      options.push({
        value: value.name,
        label: value.name,
      });
    });

    return options;
  }

  const CompanySelect = () => {
    const handleChange = (event) => {
      setCompany(event);
    };

    return (
      <Select
        variant="flushed"
        height={"38.5px"}
        textColor={"vimdesk_faded_text"}
        fontWeight={300}
        fontSize={13}
        value={company}
        onChange={handleChange}
        iconColor="vimdesk_gray"
        options={CompanyList()}
      />
    );
  };

  function ContactList() {
    const options = [];
    dealPriorityData.map((value, index) => {
      options.push({
        value: value.name,
        label: value.name,
      });
    });

    return options;
  }

  const ContactSelect = () => {
    const handleChange = (event) => {
      setContact(event);
    };

    return (
      <Select
        variant="flushed"
        height={"38.5px"}
        textColor={"vimdesk_faded_text"}
        fontWeight={300}
        fontSize={13}
        value={contact}
        onChange={handleChange}
        iconColor="vimdesk_gray"
        options={ContactList()}
      />
    );
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={addRelationsModalActiveStatus}
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
            New Relation
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
                setAddRelationsModalActiveStatus(
                  !addRelationsModalActiveStatus
                );
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

              <CompanySelect />
            </Flex>

            <Flex flexDirection={"column"} width={"100%"} marginLeft={"10px"}>
              <Text fontSize={"13px"} textColor={"vimdesk_blue"}>
                Select Contact
              </Text>

              <ContactSelect />
            </Flex>

            <Flex flexDirection={"column"} width={"100%"} marginLeft={"10px"}>
              <Text fontSize={"13px"} textColor={"vimdesk_blue"}>
                Due date
              </Text>
              <Input
                fontSize={"13px"}
                variant={"flushed"}
                value={new Date(dueDate).toDateString()}
                // onChange={setSignInWorkspaceInput}
                onClick={() => {
                  setActiveCalendar(!activeCalendar);
                }}
              />

              {activeCalendar && <DueDateCalendar />}

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
                  value={reference}
                  fontSize={"13px"}
                  variant={"flushed"}
                  onChange={setReference}
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
                      // value={company}
                      fontSize={"13px"}
                      variant={"outline"}
                      borderColor={"lightgray"}
                      focusBorderColor={"#47ADDD"}
                      //  onChange={setCompany}
                    />
                  </Td>
                  <Td>
                    <Input
                      // value={company}
                      fontSize={"13px"}
                      variant={"outline"}
                      borderColor={"lightgray"}
                      focusBorderColor={"#47ADDD"}
                      // onChange={setCompany}
                    />
                  </Td>
                  <Td>
                    <Input
                      //  value={company}
                      fontSize={"13px"}
                      variant={"outline"}
                      borderColor={"lightgray"}
                      focusBorderColor={"#47ADDD"}
                      // onChange={setCompany}
                    />
                  </Td>
                  <Td>
                    <Input
                      //  value={company}
                      fontSize={"13px"}
                      variant={"outline"}
                      borderColor={"lightgray"}
                      focusBorderColor={"#47ADDD"}
                      // onChange={setCompany}
                    />
                  </Td>
                  <Td>
                    <Input
                      //  value={company}
                      fontSize={"13px"}
                      variant={"outline"}
                      borderColor={"lightgray"}
                      focusBorderColor={"#47ADDD"}
                      // onChange={setCompany}
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
                Notes
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
            Save Relation
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
export default AddRelationsModal;
