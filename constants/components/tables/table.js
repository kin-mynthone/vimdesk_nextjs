import React from "react";
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
} from "@chakra-ui/react";

const MyTable = ({ width, jsonData }) => {
  return (
    <Flex
      borderRadius={13}
      width={width}
      marginLeft={"10px"}
      marginBottom={"10px"}
      backgroundColor={"vimdesk_bg"}
      padding={5}
      style={{
        boxShadow: "0px 0px 5px 0px #CCCCCC",
      }}
    >
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Numbers</Th>
            <Th>Client</Th>
            <Th>Amount</Th>
            <Th>Send Date</Th>
            <Th>Due Date</Th>
            <Th>Sign Date</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr
            _hover={{ backgroundColor: "#DFF5FF", cursor: "pointer" }}
            onClick={() => {
              alert("adasd");
            }}
          >
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
          </Tr>
          <Tr
            _hover={{ backgroundColor: "#DFF5FF", cursor: "pointer" }}
            onClick={() => {
              alert("adasd");
            }}
          >
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td>30.48</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
          </Tr>
          <Tr
            _hover={{ backgroundColor: "#DFF5FF", cursor: "pointer" }}
            onClick={() => {
              alert("adasd");
            }}
          >
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td>0.91444</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
            <Td>25.4</Td>
          </Tr>
        </Tbody>
      </Table>
    </Flex>
  );
};
export default MyTable;
