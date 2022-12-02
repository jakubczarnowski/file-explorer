import { extendTheme } from "@chakra-ui/react";

export const colors = {
    primaryFont: "#FFF",
    lightFont: "#6D6D6D",
    yellow: "#FFD86B",
    background: "#191919",
    hover: "#4D4D4D",
};

export const theme = extendTheme({
    styles: {
        global: {
            "html, body": {
                backgroundColor: colors.background,
                lineHeight: "tall",
            },
        },
    },
    components: {
        Text: {
            baseStyle: {
                color: colors.primaryFont,
            },
        },
    },
    colors: {
        primaryFont: colors.primaryFont,
        light: colors.lightFont,
        background: colors.background,
        hover: colors.hover,
        yellow: colors.yellow,
    },
    initialColorMode: "dark",
    useSystemColorMode: false,
});
