import { Box, Divider, Flex, Input, Text } from "@chakra-ui/react";

export default function Register() {
  return (
    <Box minH="100vh" bg="#F7F8FA">
      <Flex
        justify="center"
        height="100vh"
        paddingY="2.9375rem"
        marginLeft="15rem"
      >
        <Box bgColor="whiteX.700" borderRadius="0.5rem">
          <Flex padding="1.875rem 30rem 1.875rem 1.875rem">
            <Text
            as="a"
            href="/"
            color="orangeX.600"
            fontWeight="800"
            fontSize="1.5rem"
            textAlign="center"
          >
            Bookadinho
          </Text>
          </Flex>
          <Divider borderColor="whiteX.500" />
          <Flex padding="1.875rem" bgColor="whiteX.700">
            Bola
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
