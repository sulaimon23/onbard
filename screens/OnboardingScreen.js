import React, { useState } from "react";
import { Text, View, Flex, Button } from "native-base";
import { ImageBackground, SafeAreaView, TouchableOpacity } from "react-native";
import CustomButton from "../components/Button";
import { MaterialIcons } from "@expo/vector-icons";

//
//
const OnboardingScreen = () => {
    const [bg, setBg] = useState(0);
    const pageInfo = [
        {
            title: "Quality Service",
            label: "Get quality and professional service right to your doorsteps.",
        },
        {
            title: "Work Faster",
            label: "Get more hands on board to help you do work faster and cleaner.",
        },
        {
            title: "Get Acquainted",
            label: "Get discovered right from home and get paid for what you love doing",
        },
    ];
    const overlay = require("../assets/overlay.png");
    const logo =
        bg === 0
            ? require("../assets/splash1.png")
            : bg === 1
            ? require("../assets/splash2.png")
            : require("../assets/splash3.png");
    //
    const isProceed = () => {
        if (bg === 2) {
            return;
        }
        setBg((prev) => prev + 1);
    };
    //
    return (
        <ImageBackground style={{ flex: "1" }} source={logo} resizeMode="cover">
            <Flex
                style={{ flex: "1" }}
                justify="space-between"
                direction="column"
            >
                <View px="5" h="1/4">
                    <SafeAreaView style={{ flex: "1", alignItems: "flex-end" }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: 50,
                            }}
                        >
                            <Text fontSize="md" lineHeight={22} color="white">
                                Skip
                            </Text>
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                size={24}
                                color="white"
                            />
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
                <ImageBackground
                    style={{ flex: "1" }}
                    source={overlay}
                    resizeMode="cover"
                >
                    <SafeAreaView style={{ flex: "1" }}>
                        <Flex
                            style={{ flex: "1" }}
                            justify="flex-end"
                            direction="column"
                            px="5"
                        >
                            <Text
                                fontSize="3xl"
                                mb="2"
                                color="white"
                                textAlign="center"
                            >
                                {pageInfo[bg].title}
                            </Text>
                            <Text
                                fontSize="md"
                                color="white"
                                textAlign="center"
                                mb="5"
                            >
                                {pageInfo[bg].label}
                            </Text>
                            <CustomButton
                                title={bg === 2 ? "Get Started" : "Next"}
                                isIcon
                                onPress={() => isProceed()}
                            />
                        </Flex>
                    </SafeAreaView>
                </ImageBackground>
            </Flex>
        </ImageBackground>
    );
};

export default OnboardingScreen;
