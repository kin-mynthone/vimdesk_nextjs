import React from "react";
import { useState, useEffect } from "react";
import { useWindowSize } from "../../custom_hooks";
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

import { signInInputStore, navigationBarStore } from "../../stores/index/index";
import Image from "next/image";
import { MyTable } from "../../constants/components/tables";
import {
  AddRelationsModal,
  Details,
} from "../../constants/components/relations";
import { PlusSignWhite } from "../../assets";
import { Search, Filter } from "../../constants/components/search_and_filter";
import { addRelationsModalStore, relations } from "../../stores/relations";

export default function Home() {
  const { height, width } = useWindowSize();

  const setIsCredentialValid = signInInputStore(
    (state) => state.set_is_credential_valid
  );

  const setActiveTabIndex = navigationBarStore(
    (state) => state.set_active_tab_index
  );

  const addRelationsModalActiveStatus = addRelationsModalStore(
    (state) => state.active_status
  );
  const setAddRelationsModalActiveStatus = addRelationsModalStore(
    (state) => state.set_active_status
  );

  const activeDetails = relations((state) => state.active_details);

  const setActiveDetails = relations((state) => state.set_active_details);

  function showDetails() {
    setActiveDetails(!activeDetails);
  }

  useEffect(() => {
    setIsCredentialValid(true);
    setActiveTabIndex(2);
  });

  const Main = () => {
    return (
      <>
        <Options />
        <MyTable width={width * 0.78} onClickData={showDetails} />
        <AddRelationsModal />
      </>
    );
  };

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
            setAddRelationsModalActiveStatus(!addRelationsModalActiveStatus);
          }}
        >
          <Image src={PlusSignWhite} alt="vimdesk_h_kebab" width={"13px"} />{" "}
          <Text marginLeft={1} fontSize={"15px"}>
            New Relation
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
    >
      {!activeDetails ? <Main /> : <Details onBack={showDetails} />}
    </Flex>
  );
}
