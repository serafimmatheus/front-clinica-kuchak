import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      50: "#f4f4f4",
      100: "#eee",
      200: "#d4d4d4",
      250: "#bdbdbd",
      300: "#9e9ea7",
      400: "#666665",
      600: "#282c34",
      900: "#111",
    },
    purple: {
      100: "#79579B",
      300: "#7f81b8",
      400: "#701c7a",
      500: "#570861",
    },
    red: {
      600: "#df1545",
      700: "#d40032",
    },

    green: {
      600: "#168821",
    },
  },
  fonts: {
    heading: "PT Serif, serif",
    body: "Roboto Mono,  monospace",
  },
});
