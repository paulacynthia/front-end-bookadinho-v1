import {
  Box,
  BoxProps,
  CloseButton,
  Divider,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FiMenu } from "react-icons/fi";
import { MenuLinks } from "../../components/Navigation/MenuLinks";

interface LayoutProps {
  title: string | any;
  children: ReactNode;
}

export function Layout({ title, children }: LayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg="#F7F8FA">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Flex
        justify="center"
        height="100vh"
        paddingTop="2.9375rem"
        marginLeft="15rem"
      >
        <Box bgColor="whiteX.700" borderRadius="0.5rem" height="100vh">
          <Flex padding="1.875rem 30rem 1.875rem 1.875rem">
            <Text
              fontFamily="Dm Sans"
              fontWeight="400"
              fontSize="1rem"
              color="#0F241D"
              width="full"
            >
              {title}
            </Text>
          </Flex>
          <Divider borderColor="whiteX.500" />
          <Flex padding="1.875rem" bgColor="whiteX.700">
            {children}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

/* Logo e Links */
interface SidebarProps extends BoxProps {
  onClose: () => void;
}
const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg="whiteX.700"
      borderRadius="0.5rem"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        padding="2rem"
        gap="3.625rem"
        direction="column"
        justifyContent="space-between"
      >
        <Flex direction="row" justify="space-between">
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
          <CloseButton
            display={{ base: "flex", md: "none" }}
            variant="ghost"
            color="orangeX.600"
            onClick={onClose}
          />
        </Flex>
        <MenuLinks />
      </Flex>
    </Box>
  );
};

/* Mobile */
interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      justifyContent="space-between"
      {...rest}
    >
      <Text
        color="orangeX.600"
        fontWeight="800"
        fontSize="1.5rem"
        textAlign="center"
      >
        Bookadinho
      </Text>

      <IconButton
        variant="ghost"
        color="orangeX.600"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};
