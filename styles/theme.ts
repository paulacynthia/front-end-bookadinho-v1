import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    whiteX: {
      700: "#FFFFFF",
      600: "#F7F8FA",
      500: "#E4E4E4",
    },
    blackX: {
      600: "#0F241D",
      500: "#989B9A"
    },
    orangeX: {
      600: "#E97558",
    },
  },
  fonts: {
    heading: "Poppins, Dm Sans, sans-serif",
    body: "Poppins, Dm Sans, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "whiteX.600",
        color: "blackX.600",
      },
    },
  },
});
