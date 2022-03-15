import React from "react";
import "react-tiny-fab/dist/styles.css";
import { Flex, Text } from "@chakra-ui/react";
import { MotionButton } from "../motion";
import Image from "next/image";
import { Filter, SortBy } from "../../../assets";

import { SearchAndFilterStore } from "../../../stores/search_and_filter";
const Search = () => {
  const numberOfFilters = SearchAndFilterStore(
    (state) => state.number_of_filters
  );

  return (
    <Flex flexDirection={"row"} marginLeft={"20px"}>
      <MotionButton
        size="xxs"
        marginY={"10px"}
        marginRight={"10px"}
        width={"80px"}
        height={"40px"}
        marginBottom={"20px"}
        backgroundColor={"#818181"}
        _focus={{ border: "none" }}
        _focusWithin={{ backgroundColor: "#818181" }}
        _hover={{ backgroundColor: "#818181", cursor: "pointer" }}
        flexDirection={"row"}
        borderRadius={10}
        whileTap={{
          scale: 1,
        }}
        whileHover={{
          scale: 1.1,
        }}
        onClick={null} //update this
      >
        <Image alt="vimdesk" src={Filter} width={20} height={20} />

        <Text marginLeft={1} fontSize={"15px"}>
          {numberOfFilters}
        </Text>
      </MotionButton>
      <MotionButton
        size="xxs"
        marginY={"10px"}
        width={"120px"}
        height={"40px"}
        marginBottom={"20px"}
        backgroundColor={"#818181"}
        _focus={{ border: "none" }}
        _focusWithin={{ backgroundColor: "#818181" }}
        _hover={{ backgroundColor: "#818181", cursor: "pointer" }}
        flexDirection={"row"}
        borderRadius={10}
        whileTap={{
          scale: 1,
        }}
        whileHover={{
          scale: 1.1,
        }}
        onClick={null} //update this
      >
        <Image alt="vimdesk" src={SortBy} width={20} height={20} />

        <Text marginLeft={1} fontSize={"15px"}>
          Sort by
        </Text>
      </MotionButton>
    </Flex>
  );
};

export default Search;
