import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout } from "../layout/Bookadinho/Layout";

import { notifications } from "../utils/routes/routes";

export default function Notifications() {
  const [notificationsProfile, setNotifications] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const locaStorage = window.localStorage.getItem("profile");
    const profile = JSON.parse(locaStorage);
    const handleNotifications = async () => {
      const reqNotifications = await notifications({ profileid: profile.id });
      setNotifications(reqNotifications.result);
    };
    handleNotifications();
  }, []);

  return (
    <Layout title={"Notificações"}>
      {/* <Flex justify="space-between" width="full">
        <Text
          fontFamily="Dm Sans"
          fontWeight="400"
          fontSize="1rem"
          color="#0F241D"
        >
          Novas
        </Text>
        <Text
          fontFamily="Dm Sans"
          fontWeight="400"
          fontSize="1rem"
          color="#0F241D"
        >
          Marcar todas como lidas
        </Text>
      </Flex>
     */}
      <Flex flexDirection={"column"} width="full">
        <Card>
          <CardBody>
            {notificationsProfile.map((notification) => (
              <>
                <Flex align="center" gap="0.5rem" width="full">
                  <Flex align="center" justify={"space-between"} width="full">
                    <Flex align="center" gap="2rem">
                      <Avatar name={notification.sender.name} src="" />
                      <Text
                        fontFamily="Dm Sans"
                        fontWeight="400"
                        fontSize="1rem"
                        color="#0F241D"
                      >
                        {notification.sender.name}
                      </Text>

                      <Flex
                        width={"full"}
                        align="center"
                        justify="space-between"
                        gap="5rem"
                      >
                        <Text
                          fontFamily="Dm Sans"
                          fontWeight="400"
                          fontSize="1rem"
                          color="#0F241D"
                        >
                          {notification.type === "follow"
                            ? "Começou a seguir você"
                            : ""}
                        </Text>
                        <Button
                          background={"orangeX.600"}
                          color="#F9F9F9"
                          letterSpacing="1px"
                          borderRadius={"1.25rem"}
                          _hover={{
                            color: "orangeX.600",
                            background: "#F9E0D9",
                          }}
                          transition="all 0.2s"
                          _active={{
                            backgroundColor: "orangeX.600",
                            color: "#F9E0D9",
                          }}
                        >
                          Seguir
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </>
            ))}
          </CardBody>
        </Card>
      </Flex>
    </Layout>
  );
}
