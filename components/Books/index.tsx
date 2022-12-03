import { Box, Flex, Icon, Image, Text, Button } from "@chakra-ui/react";
import { FiBook } from "react-icons/fi";
import { HiBookmark } from "react-icons/hi";

interface BookProps {
  title: string;
  author: string;
  image: string;
  imageDescription: string;
  description: string;
}

export function Book({
  title,
  author,
  image,
  imageDescription,
  description,
}: BookProps) {
  return (
    <Flex
      boxShadow="lg"
      p="6"
      rounded="md"
      bg="white"
      gap="1rem"
      maxWidth={"27.6875rem"}
      alignItems="flex-start"
      direction={"column"}
    >
      <Flex gap="1rem">
        <Image src={image} alt={imageDescription} />
        <Box>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Icon as={FiBook} fontSize="20" color="orangeX.600" />
              <Icon as={FiBook} fontSize="20" color="orangeX.600" />
              <Icon as={FiBook} fontSize="20" color="orangeX.600" />
              <Icon as={FiBook} fontSize="20" color="orangeX.600" />
              <Icon as={FiBook} fontSize="20" color="orangeX.600" />
            </Box>
            <Icon as={HiBookmark} fontSize="20" color="orangeX.600" />
          </Flex>
          <Flex direction={"column"} gap="1rem" width={"full"}>
            <Flex direction={"column"} gap="0.3rem">
              <Text
                fontFamily={"Poppins"}
                fontWeight="semibold"
                fontSize="0.875rem"
                color="#0F241D"
              >
                {title}
              </Text>
              <Text
                fontFamily={"Poppins"}
                fontWeight="semibold"
                fontSize="0.6875rem"
                color="#AAAAAA"
              >
                {author}
              </Text>
              <Text
                fontFamily={"Dm Sans"}
                fontWeight="normal"
                fontSize="0.875rem"
                color="#767676"
              >
                {description}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Button width="100%" background={"orangeX.600"} color="#F9F9F9" borderRadius={"1.25rem"}>Visualizar o livro</Button>
    </Flex>
  );
}
