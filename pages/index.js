import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { useWindowSize } from "../custom_hooks/";
import { signInInputStore, signUpInputStore } from "../stores/index";

import { SpinnerModal } from "../constants/components/spinner";
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
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import {
  VimDeskLogo,
  IndexBanner,
  ShowPassword,
  HidePassword,
} from "../assets/";
import { MotionButton } from "../constants/components/motion";

export default function Home() {
  const { height, width } = useWindowSize();
  const [isSigningIn, setIsSigningIn] = useState(true);

  const setSignInWorkspaceInput = signInInputStore(
    (state) => state.set_workspace_input
  );

  const setSignInPasswordInput = signInInputStore(
    (state) => state.set_password_input
  );

  const validateCredentialInput = signInInputStore(
    (state) => state.validate_credential_input
  );

  const setIsCredentialValid = signInInputStore(
    (state) => state.set_is_credential_valid
  );

  const setShowPasswordSignIn = signInInputStore(
    (state) => state.set_show_password
  );

  const showPasswordSignIn = signInInputStore((state) => state.show_password);

  //---------------------------------------------------

  const setSignUpFirstnameInput = signUpInputStore(
    (state) => state.set_firstname_input
  );

  const setSignUpLastnameInput = signUpInputStore(
    (state) => state.set_lastname_input
  );

  const setSignUpEmailInput = signUpInputStore(
    (state) => state.set_email_input
  );

  const setSignUpWorkspaceInput = signUpInputStore(
    (state) => state.set_workspace_input
  );

  const setSignUpPasswordInput = signUpInputStore(
    (state) => state.set_password_input
  );

  const CreateWorkspace = signUpInputStore((state) => state.create_workspace);

  const signUpPasswordNoticeColor = signUpInputStore(
    (state) => state.password_notice_color
  );

  const signUpPasswordNotice = signUpInputStore(
    (state) => state.password_notice
  );

  const signUpPasswordCondition1 = signUpInputStore(
    (state) => state.password_condition1
  );

  const signUpPasswordCondition2 = signUpInputStore(
    (state) => state.password_condition2
  );

  const signUpPasswordCondition3 = signUpInputStore(
    (state) => state.password_condition3
  );

  const signUpPasswordCondition4 = signUpInputStore(
    (state) => state.password_condition4
  );

  const setShowPasswordSignUp = signUpInputStore(
    (state) => state.set_show_password
  );

  const showPasswordSignUp = signUpInputStore((state) => state.show_password);
  //---------------------------------------------------

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
        onChange={setSignInWorkspaceInput}
      />

      <Text color={"vimdesk_faded_text"} fontSize={"13px"}>
        Password
      </Text>
      <HStack alignItems={"center"} width={"100%"}>
        <InputGroup>
          <Input
            fontSize={"13px"}
            variant={"flushed"}
            type={showPasswordSignIn ? "text" : "password"}
            placeholder="password"
            onChange={setSignInPasswordInput}
          />
          <InputRightElement>
            <MotionButton
              backgroundColor={"transparent"}
              _focus={{ border: "none" }}
              size="xxs"
              _focusWithin={{ backgroundColor: "transparent" }}
              _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
              flexDirection={"row"}
              whileTap={{
                scale: 0.8,
              }}
              whileHover={{
                scale: 1.1,
              }}
              onClick={() => {
                setShowPasswordSignIn(!showPasswordSignIn);
              }} //update this
            >
              <Image
                alt="vimdesk"
                src={showPasswordSignIn ? ShowPassword : HidePassword}
                height={20}
                width={20}
              />
            </MotionButton>
          </InputRightElement>
        </InputGroup>
      </HStack>
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
            onChange={setSignUpFirstnameInput}
          />
        </VStack>
        <Spacer />
        <VStack alignItems={"flex-start"} width={"100%"}>
          <Text color={"vimdesk_faded_text"} fontSize={"13px"}>
            Lastname
          </Text>
          <Input
            variant={"flushed"}
            placeholder="Lastname"
            fontSize={"13px"}
            onChange={setSignUpLastnameInput}
          />
        </VStack>
      </HStack>
      <HStack w={"100%"}>
        <VStack alignItems={"flex-start"} width={"100%"}>
          <Text color={"vimdesk_faded_text"} fontSize={"13px"}>
            Email
          </Text>

          <Input
            variant={"flushed"}
            placeholder="Email"
            fontSize={"13px"}
            onChange={setSignUpEmailInput}
          />
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
            onChange={setSignUpWorkspaceInput}
          />
        </VStack>
      </HStack>
      <VStack alignItems={"flex-start"} width={"100%"}>
        <Text color={"vimdesk_faded_text"} fontSize={"13px"}>
          Password
        </Text>

        <HStack alignItems={"center"} width={"100%"}>
          <InputGroup>
            <Input
              fontSize={"13px"}
              variant={"flushed"}
              type={showPasswordSignUp ? "text" : "password"}
              placeholder="password"
              onChange={setSignUpPasswordInput}
            />
            <InputRightElement>
              <MotionButton
                backgroundColor={"transparent"}
                _focus={{ border: "none" }}
                size="xxs"
                _focusWithin={{ backgroundColor: "transparent" }}
                _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
                flexDirection={"row"}
                whileTap={{
                  scale: 0.8,
                }}
                whileHover={{
                  scale: 1.1,
                }}
                onClick={() => {
                  setShowPasswordSignUp(!showPasswordSignUp);
                }} //update this
              >
                <Image
                  alt="vimdesk"
                  src={showPasswordSignUp ? ShowPassword : HidePassword}
                  height={20}
                  width={20}
                />
              </MotionButton>
            </InputRightElement>
          </InputGroup>
        </HStack>

        <Text
          color={signUpPasswordNoticeColor}
          fontSize={"13px"}
          fontWeight={"extrabold"}
        >
          {signUpPasswordNotice}
        </Text>
      </VStack>

      <VStack alignItems={"flex-start"}>
        <HStack>
          {signUpPasswordCondition1 ? <CircleIconGreen /> : <CircleIconGray />}
          <Text
            color={signUpPasswordCondition1 ? "vimdesk_green" : "vimdesk_gray"}
            fontSize={"xs"}
          >
            Contains at least one uppercase
          </Text>
        </HStack>
        <HStack>
          {signUpPasswordCondition2 ? <CircleIconGreen /> : <CircleIconGray />}
          <Text
            color={signUpPasswordCondition2 ? "vimdesk_green" : "vimdesk_gray"}
            fontSize={"xs"}
          >
            Contains at least one number
          </Text>
        </HStack>
        <HStack>
          {signUpPasswordCondition3 ? <CircleIconGreen /> : <CircleIconGray />}
          <Text
            color={signUpPasswordCondition3 ? "vimdesk_green" : "vimdesk_gray"}
            fontSize={"xs"}
          >
            Character must be equal or more than 8 character
          </Text>
        </HStack>
        <HStack>
          {signUpPasswordCondition4 ? <CircleIconGreen /> : <CircleIconGray />}
          <Text
            color={signUpPasswordCondition4 ? "vimdesk_green" : "vimdesk_gray"}
            fontSize={"xs"}
          >
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
      <SpinnerModal />
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
                onClick={() => {
                  isSigningIn == true
                    ? validateCredentialInput()
                    : CreateWorkspace();
                }}
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
