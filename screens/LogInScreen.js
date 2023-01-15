//

import { Flex, Image, Text, View } from "native-base";
import { SafeAreaView } from "react-native";
import CustomButton from "../components/Button";
import CustomInput from "../components/Input";
const logo = require("../assets/logo.png");

//
//
const LogInScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View px="8" pt="8">
                <Flex
                    flexDirection={"row"}
                    justifyContent="space-between"
                    alignItems={"center"}
                    mb="10"
                >
                    <Text color="text.main" fontFamily="semi" fontSize="2xl">
                        Log In
                    </Text>
                    <Image
                        w="6"
                        h="6"
                        alt="logo"
                        resizeMode="contain"
                        source={logo}
                    />
                </Flex>
                <Text color="text.main" mb="10">
                    Fill in your login details or continue with your social
                    media
                </Text>
                <CustomInput
                    label="Email Address"
                    placeholder="Email address"
                    iconName="mail-outline"
                    error="Invalid email address"
                />
                <CustomInput
                    label="Password"
                    placeholder="Password"
                    password
                    iconName="ios-lock-closed-outline"
                />
                <Text fontWeight={"medium"} textAlign={"right"} mt="0">
                    Forgot Password
                </Text>
                <CustomButton
                    title={"Login"}
                    mt="10"
                    onPress={() => alert("hello")}
                />
                <Text fontWeight={"semi"} textAlign={"center"} mt="5">
                    New User?{" "}
                    <Text color={"text.orange"} fontWeight={"medium"}>
                        {" "}
                        Create Account
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default LogInScreen;
