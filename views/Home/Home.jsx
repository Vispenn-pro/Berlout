import {View, Button} from "react-native";
import Logo from "../../components/logo/Logo";
import Homestyle from './Home.scss';

const Home = () => {
    return(
        <View style={Homestyle.container}>
            <Logo />
            <Button
                title={"On mange où ?"}
            ></Button>
        </View>
    )
}

export default Home;
