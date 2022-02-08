import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { useState } from "react";
import { useWindowSize } from "../custom_hooks/";
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
} from "@chakra-ui/react";
import { VimDeskLogo, IndexBanner } from "../assets/";

export default function Home() {
  const { height, width } = useWindowSize();
  const [isSigningIn, setIsSigningIn] = useState(true);

  const SignInForm = (
    <VStack alignItems={"flex-start"} padding={"10"} width={"100%"}>
      <Text color={"vimdesk_faded_text"}>Workspace</Text>
      <Input variant={"flushed"} placeholder="workspace-name" />

      <Text color={"vimdesk_faded_text"}>Password</Text>
      <Input variant={"flushed"} type={"password"} placeholder="password" />
    </VStack>
  );

  const SignUpForm = (
    <VStack alignItems={"flex-start"} paddingX={10} spacing={5} width={"100%"}>
      <HStack>
        <VStack alignItems={"flex-start"}>
          <Text color={"vimdesk_faded_text"}>Firstname</Text>
          <Input variant={"flushed"} placeholder="Firstname" />
        </VStack>

        <VStack alignItems={"flex-start"}>
          <Text color={"vimdesk_faded_text"}>Lastname</Text>
          <Input variant={"flushed"} placeholder="Lastname" />
        </VStack>
      </HStack>

      <VStack alignItems={"flex-start"} width={"100%"}>
        <Text color={"vimdesk_faded_text"}>Email</Text>
        <Input variant={"flushed"} placeholder="Email" />
      </VStack>

      <VStack alignItems={"flex-start"} width={"100%"}>
        <Text color={"vimdesk_faded_text"}>Workspace</Text>
        <Input variant={"flushed"} placeholder="workspace-name" />
      </VStack>

      <VStack alignItems={"flex-start"} width={"100%"}>
        <Text color={"vimdesk_faded_text"}>Password</Text>
        <Input variant={"flushed"} type={"password"} placeholder="Password" />
      </VStack>

      <Text color={"vimdesk_faded_text"} fontSize={"xs"}>
        Password should contain a{" "}
        <b>number, uppercase and lowercase, and special characters.</b>
      </Text>
    </VStack>
  );

  const FormNavigator = (
    <VStack padding={"10"}>
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
            width={"50%"}
            background={"white"}
            shadow={"lg"}
            borderRadius={"3xl"}
            alignItems={"flex-start"}
          >
            {FormNavigator}

            {isSigningIn ? SignInForm : SignUpForm}

            <Spacer />

            <VStack width={"100%"} spacing={"5"} padding={"10"}>
              <Button variant={"solid"} width={"100%"} paddingY={"7"}>
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
              backgroundColor={"vimdesk_gray"}
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
