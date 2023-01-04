import 'react-native-gesture-handler';
import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';
import Appstyles from './App.scss';
import Home from "./views/Home/Home";
import AnimatedSplash from "react-native-animated-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './components/Drawer';

const App = () => {
    const [loaded, setLoaded] = useState(false);

    setTimeout(() => {
        setLoaded(true);
    }, 500);

    return (
        <NavigationContainer>
            <Drawer/>
        </NavigationContainer>
        // <AnimatedSplash
        //     translucent={true}
        //     isLoaded={loaded}
        //     logoImage={require("./assets/images/logo.png")}
        //     backgroundColor={"#e3e3e3"}
        //     logoWidth={256}
        // >
        //     <View style={Appstyles.container}>
        //         <Home />
        //         <StatusBar style="auto" />
        //     </View>
        // </AnimatedSplash>
    );
}
export default App;
