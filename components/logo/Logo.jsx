import {Image, StyleSheet} from "react-native";
import logo from '../../assets/images/logo.png';

const Logo = () => {
    return <Image source={logo} style={styles.logo}></Image>;
}

const styles = StyleSheet.create({
    logo: {
        maxHeight: 40,
        maxWidth: 256
    }
})

export default Logo;
