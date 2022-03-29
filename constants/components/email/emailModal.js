import React from "react";
import { emailStore } from "../../../stores/email";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { MotionButton } from "../motion";
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
import Image from "next/image";
const EmailModal = () => {
  const emailActiveStatus = emailStore((state) => state.active_status);
  const setEmailActiveStatus = emailStore((state) => state.set_active_status);

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
          paddingX={8}
          paddingTop={3}
          paddingBottom={6}
          borderBottomRadius={13}
        ></Flex>
      </ModalContent>
    </Modal>
  );
};
export default EmailModal;
