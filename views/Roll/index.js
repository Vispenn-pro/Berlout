import React, {useState} from 'react'
import { View, StyleSheet, Button, Image, Text } from 'react-native'
import Logo from '../../components/Logo';
import loader from '../../assets/images/loader.gif';
import dummyPicture from '../../assets/images/fff.png';

const Roll = () => {
  const [areResultsDisplayed, setResultsDisplayed] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const onPressRoll = async() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setResultsDisplayed(true);
        }, 2000)
    }

    return isLoading ?
        (
            <View style={styles.loaderContainer}>
                <Image source={loader} style={styles.loader}/>
            </View>
        ) : (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Logo />
                </View>
                <View style={styles.rollContainer}>
                    { areResultsDisplayed &&
                        <View style={styles.rollResults}>
                            <Image source={dummyPicture} style={styles.restaurantPicture}/>
                            <View style={styles.restaurantInfos}>
                                <Text>3 rue Thomas Portau</Text>
                                <Text>79000 Niort</Text>
                            </View>
                            <Text style={styles.restaurantInfos}>05 16 25 50 08</Text>
                            <Text style={styles.restaurantInfos}>Ouvert</Text>
                        </View>
                    }
                </View>
                {
                    areResultsDisplayed ?
                        <View style={styles.buttons}>
                            <Button
                                title={"Lancer un vote"}
                                onPress={onPressRoll}
                            ></Button>
                            <Button
                                title={"Relancer"}
                                onPress={onPressRoll}
                            ></Button>
                        </View>
                    :
                        <View style={styles.buttons}>
                            <Button
                                title={"On mange où ?"}
                                onPress={onPressRoll}
                            ></Button>
                        </View>
                }
            </View>
        );
}

const styles = StyleSheet.create({
  container: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center"
  },
  logoContainer: {
      width: "100%",
      display: "flex",
      flex: 2,
      justifyContent: "center",
      alignItems: "center"
  },
  loaderContainer: {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
  },
  loader: {
      height: 128,
      width: 128
  },
  rollContainer: {
      display: "flex",
      flex: 4,
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%"
  },
  buttons: {
      display: "flex",
      flexDirection: "column",
      flex: 2
  },
  rollResults: {
      marginLeft: 10,
      marginRight: 10,
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      maxHeight: 400,
      fontSize: 20
  },
  restaurantPicture: {
      maxWidth: 250,
      maxHeight: 150,
      border: "solid 2pt #1d1d1d",
      borderRadius: 10,
      marginBottom: 10
  },
  restaurantInfos: {
      marginTop: 24,
      marginBottom: 24
  }
})

export default Roll