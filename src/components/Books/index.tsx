import { Box, Flex, Icon, Text, Button, chakra } from "@chakra-ui/react";
import { FiBook } from "react-icons/fi";
import { HiBookmark } from "react-icons/hi";

import NextImage from "next/image";

const Image = chakra(NextImage, {
  baseStyle: { maxH: 149, maxW: 107 },
  shouldForwardProp: (prop) =>
    [
      "width",
      "height",
      "src",
      "alt",
      "quality",
      "placeholder",
      "blurDataURL",
      "loader ",
    ].includes(prop),
});

interface BookProps {
  id: number | string;
  title: string;
  author: string;
  image: string;
  imageDescription: string;
  description: string;
}

export function Book({
  id,
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
      justifyContent="space-between"
    >
      <Flex gap="1rem">
        <Image
          src={image}
          alt={imageDescription}
          width="107"
          height="149"
          borderRadius={"md"}
        />
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
              color="blackX.400"
              noOfLines={3}
            >
              {description}
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Button
        width="100%"
        background={"orangeX.600"}
        color="#F9F9F9"
        letterSpacing="1px"
        borderRadius={"1.25rem"}
        _hover={{
          color: "orangeX.600",
          background: "#F9E0D9",
        }}
        transition="all 0.2s"
        _active={{ backgroundColor: "orangeX.600", color: "#F9E0D9" }}
        onClick={() => (window.location.href = `/livro/${id}`)}
      >
        Visualizar o livro
      </Button>
    </Flex>
  );
}
