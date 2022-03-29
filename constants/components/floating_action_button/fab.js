import React from "react";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { PlusSignWhite, SendMessage } from "../../../assets";
import Image from "next/image";
import { emailStore } from "../../../stores/email";
import { Flex } from "@chakra-ui/react";
const FloatingActionButton = () => {
  const emailActiveStatus = emailStore((state) => state.active_status);
  const setEmailActiveStatus = emailStore((state) => state.set_active_status);
  return (
    <Fab
      // mainButtonStyles={}
      mainButtonStyles={{
        backgroundImage: "linear-gradient(30deg, #47ADDD,#9475EC)",
      }}
      actionButtonStyles={{
        backgroundImage: "linear-gradient(30deg, #47ADDD,#9475EC)",
      }}
      // style={style}
      icon={
        <Image src={PlusSignWhite} alt="vimdesk_icon" height={15} width={15} />
      }
      alwaysShowTitle={false}
    >
      <Action
        text="Email"
        onClick={() => {
          setEmailActiveStatus(!emailActiveStatus);
        }}
        style={{
          backgroundImage: "linear-gradient(30deg, #47ADDD,#9475EC)",
        }}
      >
        <Flex marginRight={"3px"} marginTop={"3px"}>
          <Image src={SendMessage} alt="vimdesk_icon" height={18} width={18} />
        </Flex>
      </Action>
    </Fab>
  );
};
export default FloatingActionButton;
