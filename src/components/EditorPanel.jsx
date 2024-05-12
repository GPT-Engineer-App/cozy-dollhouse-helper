import React from "react";
import { Box, Textarea } from "@chakra-ui/react";

const EditorPanel = () => {
  return (
    <Box w="50%" p={5} borderLeft="1px" borderColor="gray.200">
      <Textarea placeholder="Edit your book here..." minHeight="90vh" />
    </Box>
  );
};

export default EditorPanel;
