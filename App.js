import React from "react";
import { NativeBaseProvider, Text, Box, extendTheme } from "native-base";
import theme from "./helpers/themeConfig";
import { useFonts } from "expo-font";
import CustomButton from "./components/Button";
//
//
export default function App() {
    // Load the theme config
    const customTheme = extendTheme({
        ...theme,
    });
    // Load fonts settings
    //
    const [fontsLoaded] = useFonts({
        bold: require("./assets/fonts/Georama-Bold.ttf"),
        semi: require("./assets/fonts/Georama-SemiBold.ttf"),
        medium: require("./assets/fonts/Georama-Medium.ttf"),
        regular: require("./assets/fonts/Georama-Regular.ttf"),
        light: require("./assets/fonts/Georama-Light.ttf"),
    });
    //
    // Check if the fonts are loaded
    if (!fontsLoaded) {
        return null;
    }
    //
    return (
        <NativeBaseProvider theme={customTheme}>
            <Box
                flex={1}
                bg="white"
                alignItems="center"
                justifyContent="center"
            >
                <Text fontFamily="light" color="text.main">
                    Open up App.js to start working on your app!
                </Text>
                <CustomButton title={"dmdkl"} />
            </Box>
        </NativeBaseProvider>
    );
}
