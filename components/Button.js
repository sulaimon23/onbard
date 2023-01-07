import { Button, Image } from "native-base";
const arrow = require("../assets/arrow.png");

//
const CustomButton = ({
    title,
    onPress = () => {},
    isLoading,
    isIcon,
    ...props
}) => {
    return (
        <Button
            isLoading={isLoading}
            isLoadingText={title}
            onPress={onPress}
            activeOpacity={0.7}
            borderRadius="8"
            bg="primary.main"
            style={{
                height: 55,
                width: "100%",
                marginVertical: 20,
                justifyContent: "center",
                alignItems: "center",
            }}
            endIcon={
                isIcon ? (
                    <Image
                        source={arrow}
                        ml="2"
                        alt="arrow"
                        style={{
                            height: 20,
                            width: 25,
                            resizeMode: "contain",
                        }}
                    />
                ) : null
            }
            {...props}
        >
            {title}
        </Button>
    );
};

export default CustomButton;
