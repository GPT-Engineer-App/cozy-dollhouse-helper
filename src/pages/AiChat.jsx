import React from "react";
import { Flex } from "@chakra-ui/react";
import EditorPanel from "../components/EditorPanel";
import { Box, Text } from "@chakra-ui/react";

function AiChat() {
  return (
    <Flex>
      <Box w="50%" p={5}>
        <Text fontSize="xl">Welcome to AI Chat!</Text>
      </Box>
      <EditorPanel />
    </Flex>
  );
}

export default AiChat;
