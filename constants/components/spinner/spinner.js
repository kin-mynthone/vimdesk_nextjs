import React from "react";
import { spinnerStore } from "../../../stores/spinner";

import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import PulseLoader from "react-spinners/PulseLoader";

const MySpinner = () => {
  const spinnerActiveStatus = spinnerStore((state) => state.active_status);

  return (
    <Modal closeOnOverlayClick={false} isOpen={spinnerActiveStatus} isCentered>
      <ModalOverlay />
      <ModalContent
        width={"180px"}
        height={"105px"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={20}
      >
        <PulseLoader
          color={"#A78BF5"}
          loading={true}
          size={12}
          margin={5}
          speedMultiplier={0.5}
        />
      </ModalContent>
    </Modal>
  );
};
export default MySpinner;
