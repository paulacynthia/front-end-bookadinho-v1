import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Layout } from "../layout/Bookadinho/Layout";

import { notifications } from "../utils/routes/routes";

export default function Notifications() {
  const [notificationsProfile, setNotifications] = useState([]);

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
      <Card width="full">
        <CardHeader>
          <Text
            fontFamily="Dm Sans"
            fontWeight="400"
            fontSize="1rem"
            color="#0F241D"
          >
            Marcar todas como lida
          </Text>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {notificationsProfile.map((notification) => (
              <Flex align={"center"} gap="0.5rem" justify={"space-between"}>
                <Avatar name={notification.sender.name} src="" />
                <Text
                  fontFamily="Dm Sans"
                  fontWeight="400"
                  fontSize="1rem"
                  color="#0F241D"
                >
                  {notification.sender.name}
                </Text>
                <Text
                  fontFamily="Dm Sans"
                  fontWeight="400"
                  fontSize="1rem"
                  color="#0F241D"
                >
                  {notification.type === "follow"
                    ? "Começou a seguir você"
                    : "Enviou uma mensagem"}
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
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Layout>
  );
}
