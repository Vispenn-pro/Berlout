import 'react-native-gesture-handler';
import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import AnimatedSplash from "react-native-animated-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './components/StackNavigation';

const App = () => {
    const [loaded, setLoaded] = useState(false);

    setTimeout(() => {
        setLoaded(true);
    }, 500);

    return (
        <NavigationContainer>
            <AnimatedSplash
                translucent={true}
                isLoaded={loaded}
                logoImage={require("./assets/images/logo.png")}
                backgroundColor={"#e3e3e3"}
                logoWidth={256}
            >
                <StackNavigation/>
                <StatusBar style="auto" />
            </AnimatedSplash>
        </NavigationContainer>
    );
}
export default App;