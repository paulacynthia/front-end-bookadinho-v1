import { Avatar, Badge, Flex, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Layout } from "../layout/Bookadinho/Layout";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [users, setUser] = useState({});

  useEffect(() => {
    const localStorage = window.localStorage.getItem("profile");
    setUser(JSON.parse(localStorage));
    setLoading(false);
  }, []);

  return loading ? (
    <Flex alignItems="center" justifyContent="center" height="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="orangeX.600"
        size="xl"
      />
    </Flex>
  ) : (
    <Layout title={"Seu perfil"}>
      <Flex flexDirection="column" align={"center"} justify="center" gap="0.5rem" widht="full">
        <Avatar src="" name={users.name} />
        <Text>{users.userName}</Text>
        <Text>{users.description}</Text>
        <Flex>
          <Text>Gostos:</Text>
          <Flex align={"center"}>
            {users.likes.map((like) => (
              <Badge
                colorScheme={"orange"}
                borderRadius="full"
                px="2"
                ml="2"
                key={like}
              >
                {like}
              </Badge>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
