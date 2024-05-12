import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome, FaRobot } from "react-icons/fa";

const Navigation = () => {
  return (
    <Flex as="nav" justify="space-between" wrap="wrap" p={3} bg="blue.200">
      <Box p="2">
        <Link to="/">
          <Button leftIcon={<FaHome />} colorScheme="blue">
            Home
          </Button>
        </Link>
      </Box>
      <Box p="2">
        <Link to="/chat">
          <Button leftIcon={<FaRobot />} colorScheme="teal">
            Talk to AI
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
