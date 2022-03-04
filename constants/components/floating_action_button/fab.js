import React from "react";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { PlusSignWhite } from "../../../assets";
import Image from "next/image";
const FloatingActionButton = () => {
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
      alwaysShowTitle={true}
    >
      <Action
        text="Email"
        style={{
          backgroundImage: "linear-gradient(30deg, #47ADDD,#9475EC)",
        }}
      />
      <Action text="Help"></Action>
    </Fab>
  );
};
export default FloatingActionButton;
