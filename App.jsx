import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';
import Appstyles from './App.scss';
import Home from "./components/Home/Home";
import AnimatedSplash from "react-native-animated-splash-screen";

const App = () => {
    const [loaded, setLoaded] = useState(false);

    setTimeout(() => {
        setLoaded(true);
    }, 500);

    return (
        <AnimatedSplash
            translucent={true}
            isLoaded={loaded}
            logoImage={require("./assets/images/logo.png")}
            backgroundColor={"#e3e3e3"}
            logoWidth={256}
        >
            <View style={Appstyles.container}>
                <Home />
                <StatusBar style="auto" />
            </View>
        </AnimatedSplash>
    );
}
export default App;