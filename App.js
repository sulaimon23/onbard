import React from "react";
import { NativeBaseProvider, Text, Box, extendTheme } from "native-base";
import theme from "./helpers/themeConfig";

export default function App() {
    //
    const customTheme = extendTheme({
        ...theme,
    });

    //
    return (
        <NativeBaseProvider theme={customTheme}>
            <Box
                flex={1}
                bg="primary.main"
                alignItems="center"
                justifyContent="center"
            >
                <Text>Open up App.js to start working on your app!</Text>
            </Box>
        </NativeBaseProvider>
    );
}
