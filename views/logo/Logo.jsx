import {Image, View} from "react-native";
import Appstyles from './Logo.scss';
import logo from '../../assets/images/logo.png';

const Logo = () => {
    return(
        <View>
            <Image style={Appstyles.logo} source={logo}></Image>
        </View>
    )
}

export default Logo;
