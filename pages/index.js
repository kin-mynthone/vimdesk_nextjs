import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { useState, useEffect } from "react";
import { useWindowSize } from "../custom_hooks/";
import { signInInputStore } from "../stores/index";

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Link,
  Spacer,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { VimDeskLogo, IndexBanner } from "../assets/";

export default function Home() {
  const { height, width } = useWindowSize();
  const [isSigningIn, setIsSigningIn] = useState(true);

  const setWorkspaceInput = signInInputStore(
    (state) => state.set_workspace_input
  );
  const setPasswordInput = signInInputStore(
    (state) => state.set_password_input
  );

  const validateCredentialInput = signInInputStore(
    (state) => state.validate_credential_input
  );
  const setIsCredentialValid = signInInputStore(
    (state) => state.set_is_credential_valid
  );

  useEffect(() => {
    setIsCredentialValid(false);
  });

  const SignInForm = (
    <VStack alignItems={"flex-start"} padding={"10"} width={"100%"}>
      <Text color={"vimdesk_faded_text"} fontSize={"13px"}>
        Workspace
      </Text>
      <Input
        fontSize={"13px"}
        variant={"flushed"}
        placeholder="workspace-name"
        onChange={setWorkspaceInput}
      />

      <Text color={"vimdesk_faded_text"} fontSize={"13px"}>
        Password
      </Text>
      <Input
        fontSize={"13px"}
        variant={"flushed"}
        type={"password"}
        placeholder="password"
        onChange={setPasswordInput}
      />
    </VStack>
  );

  const CircleIconGreen = () => {
    return (
      <Icon viewBox="0 0 210 210" color={"vimdesk_green"} marginRight={1}>
        <path
          fill="currentColor"
          d="M 100, 100 m -100, 0 a 100,100 0 1,0 200,0 a 100,100 0 1,0 -200,0"
        />
      </Icon>
    );
  };
  const CircleIconGray = () => {
    return (
      <Icon viewBox="0 0 220 220" color={"vimdesk_gray"} marginRight={1}>
        <path
          fill="none"
          strokeWidth="20"
          stroke="currentColor"
          d="M 110, 110 m -100, 0 a 100,100 0 1,0 200,0 a 100,100 0 1,0 -200,0"
        />
      </Icon>
    );
  };

  const SignUpForm = (
    <VStack alignItems={"flex-start"} padding={"10"} spacing={5} width={"100%"}>
      <HStack w={"100%"}>
        <VStack alignItems={"flex-start"} width={"100%"}>
          <Text color={"vimdesk_faded_text"} fontSize={"13px"}>
            Firstname
          </Text>
          <Input
            variant={"flushed"}
            placeholder="Firstname"
            fontSize={"13px"}
          />
        </VStack>
        <Spacer />
        <VStack alignItems={"flex-start"} width={"100%"}>
          <Text color={"vimdesk_faded_text"} fontSize={"13px"}>
            Lastname
          </Text>
          <Input variant={"flushed"} placeholder="Lastname" fontSize={"13px"} />
        </VStack>
      </HStack>
      <HStack w={"100%"}>
        <VStack alignItems={"flex-start"} width={"100%"}>
          <Text color={"vimdesk_faded_text"} fontSize={"13px"}>
            Email
          </Text>

          <Input variant={"flushed"} placeholder="Email" fontSize={"13px"} />
        </VStack>
        <Spacer />
        <VStack alignItems={"flex-start"} width={"100%"}>
          <Text color={"vimdesk_faded_text"} fontSize={"13px"}>
            Workspace
          </Text>
          <Input
            variant={"flushed"}
            placeholder="workspace-name"
            fontSize={"13px"}
          />
        </VStack>
      </HStack>
      <VStack alignItems={"flex-start"} width={"100%"}>
        <Text color={"vimdesk_faded_text"} fontSize={"13px"}>
          Password
        </Text>
        <Input
          variant={"flushed"}
          type={"password"}
          placeholder="Password"
          fontSize={"13px"}
        />
        <Text color={"vimdesk_yellow"} fontSize={"13px"} fontWeight={900}>
          Seems good, we suggest to make it stronger!
        </Text>
      </VStack>

      <VStack alignItems={"flex-start"}>
        <HStack>
          <CircleIconGreen />
          <Text color={"vimdesk_green"} fontSize={"xs"}>
            Contains at least one uppercase
          </Text>
        </HStack>
        <HStack>
          <CircleIconGreen />
          <Text color={"vimdesk_green"} fontSize={"xs"}>
            Contains at least one number
          </Text>
        </HStack>
        <HStack>
          <CircleIconGreen />
          <Text color={"vimdesk_green"} fontSize={"xs"}>
            Character must be equal or more than 8 character
          </Text>
        </HStack>
        <HStack>
          <CircleIconGray />
          <Text color={"vimdesk_gray"} fontSize={"xs"}>
            Contains at least one special character
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );

  const FormNavigator = (
    <VStack paddingX={"10"} paddingTop={"10"}>
      <HStack
        backgroundColor={"vimdesk_faded_blue"}
        borderRadius={"full"}
        padding={"1"}
      >
        <Button
          variant={"solid"}
          backgroundColor={isSigningIn ? "vimdesk_blue" : "vimdesk_faded_blue"}
          borderRadius={"full"}
          onClick={() => setIsSigningIn(!isSigningIn)}
        >
          Sign In
        </Button>
        <Button
          variant={"solid"}
          backgroundColor={!isSigningIn ? "vimdesk_blue" : "vimdesk_faded_blue"}
          borderRadius={"full"}
          onClick={() => setIsSigningIn(!isSigningIn)}
        >
          Sign Up
        </Button>
      </HStack>
    </VStack>
  );

  return (
    <Box minH={height} minW={width} bg={"vimdesk_bg"}>
      <Flex
        flexDirection={width < 1024 ? "column" : "row"}
        paddingLeft={"14"}
        alignItems={"flex-start"}
      >
        <VStack alignItems={"flex-start"} flex={"1"}>
          <VStack paddingLeft={"10"} paddingTop={"10"}>
            <Image
              src={VimDeskLogo}
              alt="vimdesk_logo"
              height={height * 0.08}
            />
          </VStack>

          <VStack alignItems={"flex-start"} pl={"48"} paddingTop={"16"}>
            <Text color={"vimdesk_faded_text"}>An application that’s</Text>
            <Heading>Made for efficiency</Heading>
            <Text color={"vimdesk_faded_text"}>
              Over 10 million workspaces are created and helped teams to
              progress faster.
            </Text>
          </VStack>
          <VStack paddingLeft={"36"}>
            <Image
              src={IndexBanner}
              alt="vimdesk_logo"
              width={width * 0.35}
              height={height * 0.5}
            />
          </VStack>
        </VStack>

        <VStack
          flex={"1"}
          height={height}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"hidden"}
        >
          <VStack
            width={"60%"}
            background={"white"}
            shadow={"lg"}
            height={height}
            marginY={"50px"}
            borderRadius={"3xl"}
            alignItems={"flex-start"}
          >
            {FormNavigator}

            {isSigningIn ? SignInForm : SignUpForm}

            <VStack width={"100%"} spacing={"5"} paddingX={"10"}>
              <Button
                variant={"solid"}
                width={"100%"}
                paddingY={"7"}
                onClick={isSigningIn && validateCredentialInput}
              >
                {"Let's Go!"}
              </Button>
              {isSigningIn && (
                <Button variant={"outline"} width={"100%"} paddingY={"7"}>
                  {"Use other workspace"}
                </Button>
              )}
            </VStack>

            <Spacer />

            <HStack
              justifyContent={"center"}
              alignItems={"flex-start"}
              backgroundColor={"vimdesk_lightgray"}
              width={"100%"}
              padding={"3"}
              borderBottomRadius={"3xl"}
            >
              <Text fontSize={"xx-small"}>
                By clicking the button above, you agree to our
              </Text>
              <Link>
                <Text fontSize={"xx-small"} color={"vimdesk_blue"}>
                  terms of use
                </Text>
              </Link>
              <Text fontSize={"xx-small"}>and</Text>
              <Link>
                <Text fontSize={"xx-small"} color={"vimdesk_blue"}>
                  conditions
                </Text>
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
}
