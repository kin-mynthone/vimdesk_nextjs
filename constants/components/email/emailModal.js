import React from "react";
import { emailStore } from "../../../stores/email";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  Flex,
  Spacer,
  Input,
  InputGroup,
  InputRightElement,
  HStack,
  Textarea,
} from "@chakra-ui/react";
import { MotionButton } from "../motion";
import { Close, Minimize, TrashWhite, AttachedFile } from "../../../assets";
import Image from "next/image";
const EmailModal = () => {
  const emailActiveStatus = emailStore((state) => state.active_status);
  const setEmailActiveStatus = emailStore((state) => state.set_active_status);

  const receiver = emailStore((state) => state.receiver);
  const setReceiver = emailStore((state) => state.set_receiver);

  const subject = emailStore((state) => state.subject);
  const setSubject = emailStore((state) => state.set_subject);

  const content = emailStore((state) => state.content);
  const setContent = emailStore((state) => state.set_content);

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={emailActiveStatus}
      isCentered
      size={"xxl"}
    >
      <ModalOverlay />

      <ModalContent
        justifyContent={"center"}
        alignItems={"center"}
        width={"50%"}
        height={"60%"}
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
            New Message
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
                setEmailActiveStatus(!emailActiveStatus);
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
          paddingTop={3}
          paddingX={1}
          paddingBottom={3}
          borderBottomRadius={13}
        >
          <Flex flexDirection={"column"} paddingX={4}>
            <InputGroup>
              <Input
                fontSize={"13px"}
                variant={"flushed"}
                placeholder="Recipient"
                onChange={setReceiver}
              />
              <InputRightElement>
                <HStack marginRight={9}>
                  <MotionButton
                    marginRight={2}
                    backgroundColor={"transparent"}
                    _focus={{ border: "none" }}
                    size="xxs"
                    _focusWithin={{ backgroundColor: "transparent" }}
                    _hover={{
                      backgroundColor: "transparent",
                      cursor: "pointer",
                    }}
                    whileTap={{
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    onClick={() => {}} //update this
                  >
                    <Text
                      fontSize={13}
                      fontWeight={"bold"}
                      color={"vimdesk_faded_blue"}
                    >
                      CC
                    </Text>
                  </MotionButton>
                  <MotionButton
                    backgroundColor={"transparent"}
                    _focus={{ border: "none" }}
                    size="xxs"
                    _focusWithin={{ backgroundColor: "transparent" }}
                    _hover={{
                      backgroundColor: "transparent",
                      cursor: "pointer",
                    }}
                    whileTap={{
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    onClick={() => {}} //update this
                  >
                    <Text
                      fontSize={13}
                      fontWeight={"bold"}
                      color={"vimdesk_faded_blue"}
                    >
                      Bcc
                    </Text>
                  </MotionButton>
                </HStack>
              </InputRightElement>
            </InputGroup>

            <InputGroup>
              <Input
                fontSize={"13px"}
                variant={"flushed"}
                placeholder="Subject"
                onChange={setSubject}
              />
              <InputRightElement>
                <HStack marginRight={20}>
                  <MotionButton
                    backgroundColor={"transparent"}
                    _focus={{ border: "none" }}
                    size="xxs"
                    _focusWithin={{ backgroundColor: "transparent" }}
                    _hover={{
                      backgroundColor: "transparent",
                      cursor: "pointer",
                    }}
                    whileTap={{
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    onClick={() => {}} //update this
                  >
                    <Text
                      fontSize={13}
                      fontWeight={"bold"}
                      color={"vimdesk_faded_blue"}
                    >
                      Select Template
                    </Text>
                  </MotionButton>
                </HStack>
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Textarea
            fontSize={"13px"}
            marginTop={5}
            height={"100%"}
            border={"none"}
            _focus={{ border: "none" }}
            placeholder="Here is a sample placeholder"
            resize={"none"}
          />
          <Flex
            flexDirection={"row"}
            paddingX={4}
            marginTop={"40px"}
            justifyContent={"space-between"}
          >
            <HStack>
              <MotionButton
                size="xxs"
                marginY={"10px"}
                paddingX={10}
                height={"40px"}
                backgroundColor={"vimdesk_blue"}
                _focus={{ border: "none" }}
                _focusWithin={{ backgroundColor: "vimdesk_blue" }}
                _hover={{ backgroundColor: "vimdesk_blue", cursor: "pointer" }}
                borderRadius={15}
                whileTap={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.1,
                }}
                onClick={null} //update this
              >
                <Text fontSize={"15px"}>Send</Text>
              </MotionButton>

              <MotionButton
                size="xxs"
                marginY={"10px"}
                paddingX={5}
                height={"40px"}
                backgroundColor={"vimdesk_blue"}
                _focus={{ border: "none" }}
                _focusWithin={{ backgroundColor: "vimdesk_blue" }}
                _hover={{ backgroundColor: "vimdesk_blue", cursor: "pointer" }}
                borderRadius={15}
                whileTap={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.1,
                }}
                onClick={null} //update this
              >
                <Image alt="vimdesk" src={AttachedFile} width={20} />
              </MotionButton>
            </HStack>

            <MotionButton
              size="xxs"
              marginY={"10px"}
              paddingX={5}
              height={"40px"}
              backgroundColor={"vimdesk_red"}
              _focus={{ border: "none" }}
              _focusWithin={{ backgroundColor: "vimdesk_red" }}
              _hover={{ backgroundColor: "vimdesk_red", cursor: "pointer" }}
              borderRadius={15}
              whileTap={{
                scale: 1,
              }}
              whileHover={{
                scale: 1.1,
              }}
              onClick={null} //update this
            >
              <Image alt="vimdesk" src={TrashWhite} width={20} />
            </MotionButton>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
export default EmailModal;
