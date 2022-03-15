import React from "react";
import "react-tiny-fab/dist/styles.css";
import { Flex, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { SearchAndFilterStore } from "../../../stores/search_and_filter";
const Search = () => {
  const setSearchInput = SearchAndFilterStore(
    (state) => state.set_search_input
  );

  return (
    <Flex
      paddingY={"15px"}
      paddingX={"5px"}
      margin={"10px"}
      width={"250px"}
      height={"40px"}
      borderRadius={13}
      marginBottom={"20px"}
      flexDirection={"row"}
      alignItems={"center"}
      backgroundColor={"white"}
    >
      <InputGroup
        bgColor={"white"}
        borderRadius={13}
        borderColor={"transparent"}
      >
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          type={"text"}
          backgroundColor={"transparent"}
          _focus={{ border: "none" }}
          _hover={{ border: "none" }}
          border={"none"}
          placeholder="Search Here..."
          onChange={setSearchInput}
        />
      </InputGroup>
    </Flex>
  );
};

export default Search;
