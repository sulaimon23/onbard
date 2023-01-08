import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider, extendTheme } from "native-base";
import theme from "./helpers/themeConfig";
import { useFonts } from "expo-font";
import { View } from "react-native";
import LoadingScreen from "./screens/LoadingScreen";
import Navigation from "./navigation/Navigation";

//
//
export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
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
    useEffect(() => {
        async function prepare() {
            try {
                // Artificially delay for two seconds to simulate a slow loading
                await new Promise((resolve) => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);
    //
    // Check if the fonts are loaded and app is ready
    if (!appIsReady || !fontsLoaded) {
        return <LoadingScreen />;
    }
    //
    return (
        <NativeBaseProvider theme={customTheme}>
            <View
                style={{
                    flex: 1,
                }}
                onLayout={onLayoutRootView}
            >
                <Navigation />
            </View>
        </NativeBaseProvider>
    );
}
