import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
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
} from "@chakra-ui/react";

import { signInInputStore, navigationBarStore } from "../../stores/index";

export default function Home() {
  const { height, width } = useWindowSize();

  const setIsCredentialValid = signInInputStore(
    (state) => state.set_is_credential_valid
  );

  useEffect(() => {
    setIsCredentialValid(true);
  });

  return (
    <Flex
      alignItems={"stretch"}
      flexDirection={"column"}
      paddingX={"20px"}
      bgColor={"vimdesk_main_bg"}
      maxWidth={width * 0.81}
      style={{
        overflow: "auto",
      }}
    ></Flex>
  );
}
