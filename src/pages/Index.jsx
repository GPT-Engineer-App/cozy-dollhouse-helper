import { Box, Button, Container, Input, Text, VStack, Image, useToast } from "@chakra-ui/react";
import { FaUpload, FaBook, FaHome } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleFileUpload = () => {
    toast({
      title: "File uploaded.",
      description: "We're processing your file for editing.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  const handleTextPaste = () => {
    toast({
      title: "Text pasted.",
      description: "Let's start editing your story, Carol!",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={5}>
        <Box as="header" bg="pink.100" w="full" p={5} rounded="md" boxShadow="md">
          <Text fontSize="2xl" fontWeight="bold" color="pink.600">
            Welcome to Your Dollhouse, Carol!
          </Text>
          <Text fontSize="md" color="gray.600">
            Your cozy nook to craft your autobiography with a little help from your AI friend.
          </Text>
        </Box>

        <Image src="https://images.unsplash.com/photo-1600626336264-60ef2a55bd33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGRvbGxob3VzZXxlbnwwfHx8fDE3MTU0OTcxMzF8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />

        <Box as="section" bg="purple.100" w="full" p={5} rounded="md" boxShadow="md">
          <Text fontSize="xl" fontWeight="bold" color="purple.600">
            Upload Your Manuscript or Photos
          </Text>
          <Input type="file" onChange={handleFileUpload} accept=".txt, .docx, .jpg, .png" p={2} mt={3} />
          <Button leftIcon={<FaUpload />} colorScheme="purple" mt={3} onClick={handleFileUpload}>
            Upload Files
          </Button>
        </Box>

        <Box as="section" bg="green.100" w="full" p={5} rounded="md" boxShadow="md">
          <Text fontSize="xl" fontWeight="bold" color="green.600">
            Paste Your Text Here
          </Text>
          <Input placeholder="Paste your text here..." p={2} mt={3} />
          <Button leftIcon={<FaBook />} colorScheme="green" mt={3} onClick={handleTextPaste}>
            Paste Text
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
