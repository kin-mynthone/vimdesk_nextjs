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
import { PlusSignWhite } from "../../../assets";
import Image from "next/image";
import { MyTable } from "../../../constants/components/tables";
import { addEstimateModalStore } from "../../../stores/estimates";
import { AddEstimateModal } from "../../../constants/components/estimates";

import { MyTable } from "../../../constants/components/tables";
import {
  Search,
  Filter,
} from "../../../constants/components/search_and_filter";
import {
  Search,
  Filter,
} from "../../../constants/components/search_and_filter";
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

  const addEstimateModalActiveStatus = addEstimateModalStore(
    (state) => state.active_status
  );
  const setAddEstimateModalActiveStatus = addEstimateModalStore(
    (state) => state.set_active_status
  );

  useEffect(() => {
    setIsCredentialValid(true);
    setActiveTabIndex(1);
    setActiveSalesSubIndex(1);
  });

  const Options = () => {
    return (
      <Flex
        flexDirection={"row"}
        alignItems={"center"}
        marginBottom={"20px"}
        justifyContent={"space-between"}
      >
        <Flex>
          <Search />
          <Filter />
        </Flex>

        <Button
          variant={"solid"}
          borderRadius={"12px"}
          height={"40px"}
          width={"180px"}
          onClick={() => {
            setAddEstimateModalActiveStatus(!addEstimateModalActiveStatus);
          }}
        >
          <Image src={PlusSignWhite} alt="vimdesk_h_kebab" width={"13px"} />{" "}
          <Text marginLeft={1} fontSize={"15px"}>
            New Estimate
          </Text>
        </Button>
      </Flex>
    );
  };

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
      {" "}
      <Options />
      <MyTable width={width * 0.78} />
      <AddEstimateModal />
    </Flex>
  );
}
