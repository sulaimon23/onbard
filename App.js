import React from "react";
import { NativeBaseProvider, Text, Box, extendTheme } from "native-base";
import theme from "./helpers/themeConfig";
import { useFonts } from "expo-font";
//
//
export default function App() {
    //
    const customTheme = extendTheme({
        ...theme,
    });
    //
    const [fontsLoaded] = useFonts({
        bold: require("./assets/fonts/Georama-Bold.ttf"),
        semi: require("./assets/fonts/Georama-SemiBold.ttf"),
        medium: require("./assets/fonts/Georama-Medium.ttf"),
        regular: require("./assets/fonts/Georama-Regular.ttf"),
        light: require("./assets/fonts/Georama-Light.ttf"),
    });
    //
    if (!fontsLoaded) {
        return null;
    }
    //
    return (
        <NativeBaseProvider theme={customTheme}>
            <Box
                flex={1}
                bg="primary.main"
                alignItems="center"
                justifyContent="center"
            >
                <Text fontFamily="light" color="text.white">
                    Open up App.js to start working on your app!
                </Text>
                <Text fontFamily="bold" color="text.white">
                    Open up App.js to start working on your app!
                </Text>
            </Box>
        </NativeBaseProvider>
    );
}
