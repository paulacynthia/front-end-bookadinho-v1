import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../components/Chat/Header";
import Footer from "../components/Chat/Footer";
import Messages from "../components/Chat/Messages";
import Divider from "../components/Chat/Divider";
import { Layout } from "../layout/Bookadinho/Layout";

const Chat = () => {
  const [messages, setMessages] = useState([
    { from: "computer", text: "Hi, My Name is HoneyChat" },
    { from: "me", text: "Hey there" },
    { from: "me", text: "Myself Ferin Patel" },
    {
      from: "computer",
      text:
        "Nice to meet you. You can send me message and i'll reply you with same message."
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");

    setTimeout(() => {
      setMessages((old) => [...old, { from: "computer", text: data }]);
    }, 1000);
  };

  return (
   <Layout title={"Chat"}>
     <Flex w={'60rem'} justify="center" align="center">
      <Flex flexDir="column">
        <Header />
        <Divider />
        <Messages messages={messages} />
        <Divider />
        <Footer
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Flex>
    </Flex>
   </Layout>
  );
};

export default Chat;
