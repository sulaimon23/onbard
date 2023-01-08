import React from "react";
import { Image, Center, NativeBaseProvider } from "native-base";
const logo = require("../assets/logo.png");

const LoadingScreen = () => {
    return (
        <NativeBaseProvider>
            <Center flex={1}>
                <Image
                    source={logo}
                    ml="2"
                    alt="LoadingScreen"
                    style={{
                        height: 50,
                        width: 50,
                        resizeMode: "contain",
                    }}
                />
            </Center>
        </NativeBaseProvider>
    );
};

export default LoadingScreen;
