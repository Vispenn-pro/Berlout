import { Image, View, StyleSheet } from "react-native";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <View>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "256px",
    height: "40px",
  },
});

export default Logo;
