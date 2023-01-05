import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native';

const Card = (props) => {
  const { restaurant } = props
  return (
    <View style={styles.card}>
        <Image
            style={styles.cardImg}
            source={{uri:restaurant.uri}}
        />
        <Text>{restaurant.title}</Text>
        <Text>{restaurant.desc}</Text>
        <Text>{restaurant.adress}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    card: {
      width: '100%',
      height: '100%',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.07,
      shadowRadius: 3.3,
    },
    cardImg: {
      width: '100%',
      height: '100%',
      borderRadius: 13,
    },
  });
export default Card;