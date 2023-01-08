import React, { useState } from "react";
import { Text } from "native-base";
import { ImageBackground, SafeAreaView } from "react-native";

//
//
const OnboardingScreen = () => {
    const [bg, setBg] = useState(1);
    const logo =
        bg === 0
            ? require("../assets/splash1.png")
            : bg === 1
            ? require("../assets/splash2.png")
            : require("../assets/splash3.png");

    return (
        <ImageBackground style={{ flex: "1" }} source={logo} resizeMode="cover">
            <SafeAreaView style={{ flex: "1" }}>
                <Text>Inside</Text>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default OnboardingScreen;
