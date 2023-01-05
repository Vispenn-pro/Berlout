import {Image, View, StyleSheet} from "react-native";
import logo from '../../assets/images/logo.png';

const Logo = () => {
    return(
        <View style={styles.logo}>
            <Image source={logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "256px",
        maxHeight: "40px",
    }
})

export default Logo;
