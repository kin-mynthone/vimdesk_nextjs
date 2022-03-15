import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { useWindowSize } from "../../../custom_hooks/";
import { DragDropContext, resetServerContext } from "react-beautiful-dnd";
import {
  Box,
  Button,
  Flex,
  Container,
  HStack,
  Input,
  Link,
  Spacer,
  Text,
  VStack,
  InputGroup,
  InputLeftElement,
  handle,
  color,
} from "@chakra-ui/react";

import { signInInputStore, navigationBarStore } from "../../../stores/index";
import { AddDealModal } from "../../../constants/components/deals";
import initialData from "../../../constants/data/initial-data";
import Column from "../../../constants/components/deals/column";
import {
  Search,
  Filter,
} from "../../../constants/components/search_and_filter";

export default function Home() {
  const { height, width } = useWindowSize();

  const setIsCredentialValid = signInInputStore(
    (state) => state.set_is_credential_valid
  );

  const setActiveTabIndex = navigationBarStore(
    (state) => state.set_active_tab_index
  );

  const setActiveSalesSubIndex = navigationBarStore(
    (state) => state.set_active_sales_sub_tab_index
  );

  useEffect(() => {
    setIsCredentialValid(true);
    setActiveTabIndex(1);
    setActiveSalesSubIndex(0);
  });
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setState(newState);
  };

  const Kanban = () => {
    return (
      <Flex height={height * 0.85}>
        <DragDropContext onDragEnd={onDragEnd}>
          {state.columnOrder.map((columnId) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </DragDropContext>
      </Flex>
    );
  };
  resetServerContext();

  const SearchFilter = () => {
    return (
      <Flex flexDirection={"row"}>
        <Search />
        <Filter />
      </Flex>
    );
  };

  return (
    <Flex
      alignItems={"stretch"}
      flexDirection={"column"}
      paddingX={"20px"}
      bgColor={"vimdesk_main_bg"}
      maxWidth={width * 0.81}
      style={{
        overflow: "auto",
      }}
    >
      <SearchFilter />
      <Kanban />
      <AddDealModal />
    </Flex>
  );
}
