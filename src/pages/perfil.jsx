import {
  Avatar,
  Badge,
  Flex,
  Spinner,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
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
    <Layout title={<ProfileTest />}>
      <Flex
        align={"center"}
        justify="center"
        gap="2rem"
        minWidth={"full"}
        direction="column"
      >
        <Flex
          align={"center"}
          justify="center"
          gap="0.5rem"
          minWidth={"full"}
          direction="column"
        >
          <Avatar src="" name={users.name} />

          <Text>{users.userName}</Text>
          <Text
            fontFamily="Dm Sans"
            fontWeight="400"
            fontSize="1rem"
            color="#0F241D"
          >
            {users.description}
          </Text>
          <Flex>
            {users.likes.map((like) => (
              <Badge borderRadius="full" px="2" ml="2" key={like}>
                {like}
              </Badge>
            ))}
          </Flex>
        </Flex>
        <Flex
          align={"start"}
          minWidth={"full"}
          flexDirection={"column"}
          gap="0.5rem"
        >
          <Text>Últimas leituras:</Text>
          <Flex
            align="center"
            justify="center"
            gap="0.5rem"
            maxWidth={"full"}
            wrap="wrap"
          >
            {users.latestReadings.map((lastRead) => (
              <Badge borderRadius="full" key={lastRead}>
                {lastRead}
              </Badge>
            ))}
          </Flex>
        </Flex>
        <Flex
          align={"start"}
          minWidth={"full"}
          flexDirection={"column"}
          gap="0.5rem"
        >
          <Text>Livros para trocar:</Text>
          <Flex
            align="center"
            justify="center"
            gap="0.5rem"
            maxWidth={"full"}
            wrap="wrap"
          >
            {users.changeBooks.map((changeBook) => (
              <Tag size="lg" borderRadius="full">
                <Avatar
                  src=""
                  size="xs"
                  name={changeBook.name}
                  ml={-1}
                  mr={2}
                />
                <TagLabel>{changeBook.name}</TagLabel>
              </Tag>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}

const ProfileTest = () => {
  let profile = window.localStorage.getItem("profile");
  profile = JSON.parse(profile);

  return (
    <>
      <Flex width={"full"} gap="0.5rem">
        <Text>Seu perfil:</Text>
        <Text>{profile.name}</Text>
      </Flex>
    </>
  );
};
