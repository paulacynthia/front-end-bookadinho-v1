import { Box, Flex, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { Layout } from "../layout/Bookadinho/Layout";
import { chatsPreview } from "../utils/routes/routes";


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
      <Layout title={"Chats"}>
        <SimpleGrid maxWidth="50rem" columns={1} grid-template-rows={1} spacing={10}>
          {
            previews.map((preview) => (
              <Box
                key={preview.id}
                width="100%"
              >
                <Image
                  src={preview.lastMessage.photo}
                  fallbackSrc="https://via.placeholder.com/107x149"
                  width="150px"
                />
                {console.log(preview)}
                {preview.lastMessage.message}
              </Box>
            ))
          }
        </SimpleGrid>
      </Layout>
    )
  );
};

export default Chats;
