import { Flex, Input } from "@chakra-ui/react";

export function InputPattern() {
  return (
    <Flex align={"center"}>
      <Input placeholder="Pesquisar..." variant={"filled"} />
    </Flex>
  );
}
