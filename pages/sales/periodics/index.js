import React from "react";
import { useState, useEffect } from "react";
import { useWindowSize } from "../../../custom_hooks";
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
  InputGroup,
  InputLeftElement,
  handle,
  color,
} from "@chakra-ui/react";
import { MyTable } from "../../../constants/components/tables";
import {
  signInInputStore,
  navigationBarStore,
} from "../../../stores/index/index";

export default function Home() {
  const { height, width } = useWindowSize();

  const setIsCredentialValid = signInInputStore(
    (state) => state.set_is_credential_valid
  );

  const setActiveTabIndex = navigationBarStore(
    (state) => state.set_active_tab_index
  );

  const setActiveSalesSubIndex = navigationBarStore(
    (state) => state.set_active_sales_sub_tab_index
  );

  function showDetails() {
    //add function
  }

  useEffect(() => {
    setIsCredentialValid(true);
    setActiveTabIndex(1);
    setActiveSalesSubIndex(3);
  });

  return (
    <Flex
      alignItems={"stretch"}
      flexDirection={"column"}
      padding={"20px"}
      width={width}
      bgColor={"vimdesk_main_bg"}
      maxWidth={width * 0.81}
      style={{
        overflow: "auto",
      }}
    >
      <MyTable width={width * 0.78} onClickData={showDetails} />
    </Flex>
  );
}
