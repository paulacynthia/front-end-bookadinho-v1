import { Avatar, Box, Card, CardBody, Flex, Image, Link, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { chatsPreview } from "../utils/routes/routes";
import { Layout } from "../layout/Bookadinho/Layout";


const Chats = () => {
  const [loading, setLoading] = useState(true);
  const [previews, setPreviews] = useState([])

  useEffect(() => {
    const localStorage = window.localStorage.getItem("profile");
    const profile = JSON.parse(localStorage)
    const getChatsPreview = async () => {
      const request = await chatsPreview({profileid: profile.id})
      setPreviews(request.result)
      setLoading(false);
    }

    getChatsPreview()
  }, []);

  return (
    loading ? (
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
      <Layout title={"Chats"} titleTag={"Chat"}>
        <SimpleGrid  width="100%" columns={1} grid-template-rows={1} spacing={10}>
          {
            previews.map((preview) => (
              <Link _hover={{textDecation: "none", background: '#E4E4E4', borderRadius: "5px"}} key={preview.id}>
                <Card>
                  <CardBody display="flex" justifyContent="space-between" alignItems="center" >
                    <Flex alignItems="center" gap="10px">
                      <Avatar name={preview.lastMessage.origin} src={preview.lastMessage.photo} />
                      <Text
                        as="p"
                        fontFamily="Dm Sans"
                        fontWeight="500"
                        fontSize="1rem"
                        color="#0F241D"
                      >
                        {console.log('preview', preview)}
                        {preview.lastMessage.origin}
                      </Text>
                    </Flex>

                    <Text
                      as="p"
                      fontFamily="Dm Sans"
                      fontWeight="500"
                      fontSize="1rem"
                      color="#0F241D"
                    >
                      {preview.lastMessage.message}
                    </Text>

                    <Text
                      as="p"
                      fontFamily="Dm Sans"
                      fontWeight="500"
                      fontSize="1rem"
                      color="#0F241D"
                    >
                      {`${new Date(preview.lastMessage.time).getUTCDay('DD')}/${new Date(preview.lastMessage.time).getUTCMonth()}/${new Date(preview.lastMessage.time).getUTCFullYear()}`}
                    </Text>
                  </CardBody>
                </Card>
              </Link>
            ))
          }
        </SimpleGrid>
      </Layout>
    )
  );
};

export default Chats;
