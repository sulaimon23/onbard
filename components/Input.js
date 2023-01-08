import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { View, Text } from "native-base";
import PropTypes from "prop-types";

import COLORS from "../helpers/constants";
import Ionicons from "@expo/vector-icons/Ionicons";

const CustomInput = ({
    label,
    iconName,
    error,
    password,
    onFocus = () => {},
    ...props
}) => {
    const [hidePassword, setHidePassword] = React.useState(password);
    const [isFocused, setIsFocused] = React.useState(false);
    return (
        <View style={{ marginBottom: 20 }}>
            <Text fontFamily="regular" color="text.main">
                {label}
            </Text>
            <View
                style={[
                    style.inputContainer,
                    {
                        borderColor: error
                            ? COLORS.red
                            : isFocused
                            ? COLORS.darkBlue
                            : COLORS.light,
                        alignItems: "center",
                    },
                ]}
            >
                <Ionicons
                    name={iconName}
                    style={{
                        color: COLORS.grey,
                        fontSize: 22,
                        marginRight: 10,
                    }}
                />
                <TextInput
                    autoCorrect={false}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    secureTextEntry={hidePassword}
                    style={{ color: COLORS.grey, flex: 1 }}
                    {...props}
                />
                {password && (
                    <Ionicons
                        onPress={() => setHidePassword(!hidePassword)}
                        name={hidePassword ? "eye-outline" : "eye-off-outline"}
                        style={{ color: COLORS.grey, fontSize: 22 }}
                    />
                )}
            </View>
            {error && (
                <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>
                    {error}
                </Text>
            )}
        </View>
    );
};

const style = StyleSheet.create({
    inputContainer: {
        height: 55,
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        marginTop: 5,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderRadius: 8,
    },
});
//
CustomInput.propTypes = {
    iconName: PropTypes.string,
    label: PropTypes.string,
    password: PropTypes.bool,
    error: PropTypes.string,
};

export default CustomInput;
