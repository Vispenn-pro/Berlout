import React, { useEffect, useState } from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import Logo from "../../components/Logo";
import loader from "../../assets/images/loader.gif";
import dummyPicture from "../../assets/images/fff.png";
import { gql } from "graphql-request";

const Roll = () => {
  const [areResultsDisplayed, setResultsDisplayed] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const query = gql`
        business(id: "yelp-san-francisco"){
            name
            url
        }
    `

  const fetchYelpApi = async() => {
    const options = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer 9F6FcGRFd1Jm5SlP3iuddMVV3SnofH_JDSxkN2O_xVUvKo6t_4jSy0KGTZ4Es9S-rRMVla4BfA7Da9GfW1XK8tyo-POjhKPT3t_ci50-NbjU2PMbbyOmaKGADdK2Y3Yx',
            'X-RapidAPI-Key': '09f6bf4bb2mshbf4c36ec87b263bp1cb4e1jsn4e830726d673',
            'X-RapidAPI-Host': 'yelp-graphql1.p.rapidapi.com',
            'Accept-Language': 'en_US',
        },
        body: query
    };

    let responseApi;
    
    await fetch('https://yelp-graphql1.p.rapidapi.com/v3/graphql', options)
        .then(response => response.json())
        .then(response => responseApi = response)
        .catch(err => console.error(err));

    return responseApi;
  }

  useEffect(() => {
    console.log(fetchYelpApi());
  }, []);

  const onPressRoll = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResultsDisplayed(true);
    }, 2000);
  };

  return isLoading ? (
    <View style={styles.loaderContainer}>
      <Image source={loader} style={styles.loader} />
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.rollContainer}>
        {areResultsDisplayed && (
          <View style={styles.rollResults}>
            <View>
              <Image source={dummyPicture} style={styles.restaurantPicture} />
            </View>
            <View style={styles.restaurantInfos}>
              <Text>3 rue Thomas Portau</Text>
              <Text>79000 Niort</Text>
              <Text>05 16 25 50 08</Text>
              <Text>Ouvert</Text>
            </View>
          </View>
        )}
      </View>
      {areResultsDisplayed ? (
        <View style={styles.buttonsContainer}>
          <Pressable onPress={onPressRoll} style={styles.button}>
            <Text style={styles.buttonText}>Lancer un vote</Text>
          </Pressable>
          <Pressable onPress={onPressRoll} style={styles.button}>
            <Text style={styles.buttonText}>Relancer</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.buttonsContainer}>
          <Pressable onPress={onPressRoll} style={styles.button}>
            <Text style={styles.buttonText}>On mange où ?</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  logoContainer: {
    width: "100%",
    display: "flex",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    height: 128,
    width: 128,
  },
  rollContainer: {
    display: "flex",
    flex: 5,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    flex: 3,
  },
  button: {
    marginTop: "10px",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#1d1d1d",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  rollResults: {
    marginLeft: 10,
    marginRight: 10,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    maxHeight: 400,
    fontSize: 20,
  },
  restaurantPicture: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  restaurantInfos: {
    textAlign: "center",
    marginTop: 24,
    marginBottom: 24,
  },
});

export default Roll;
