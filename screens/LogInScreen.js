//

import { SafeAreaView } from "react-native";
import CustomInput from "../components/Input";

//
const LogInScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomInput label="Email Address" placeholder="Email address" />
        </SafeAreaView>
    );
};

export default LogInScreen;
