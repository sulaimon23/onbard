import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OnboardingScreen from "../screens/OnboardingScreen";
import LogInScreen from "../screens/LogInScreen";
//
// create Navigation
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
//
//
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="OnboardingScreen">
                    {(drawerProps) => (
                        <OnboardingScreen
                            {...drawerProps}
                            setIsAppFirstLaunched={() => dispatch(onboard())}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name="LogInScreen" component={LogInScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
