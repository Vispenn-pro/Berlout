import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import Card from '../../components/Card';
import CardsSwipe from 'react-native-cards-swipe';

const Vote = () => {
  const [temp, setTemp] = useState('');
  const [name,setName] = useState('');

  //cas test
  const cardsData = [
    {
      title: "nyan cat",
      adress: "outer space",
      desc:"you're drunk dude",
      uri: "https://img.20mn.fr/SjJEHpi8QSmS8EaBs76Eow/1200x768_le-mythique-nyan-cat-est-mis-aux-encheres"
    },
    {
      title: "unicorn cat",
      adress: "mordor",
      desc:"srsly wtf ?!",
      uri: "https://media.istockphoto.com/id/1029922006/fr/photo/chat-chevauche-la-licorne.jpg?s=612x612&w=0&k=20&c=FyFFNF0t1SparcawSPsLmnZErYlnKKgPBJnUobMypgY="
    },
    {
      title: "shark cat",
      adress: "atlantide",
      desc:"I quit",
      uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/28b39121410615.56300c157af49.jpg"
    },
  ];

  const handleSwipe = (index, swipe) => {
    const card = cardsData.at(index)
    const vote = {
      date: new Date(),
      name:name,
      restaurant:card.title,
      response:swipe,
    }
  }

  return (
    <View style={styles.container}>
      {name !== '' ? <Text>Hello {name}</Text> : null}
      {name !== '' ?
      <CardsSwipe
        loop={false}
        cards={cardsData}
        cardContainerStyle={styles.cardContainer}
        renderCard={(data) => (
          <Card restaurant={data}/>
        )}
        renderNoMoreCard={() => (
          <Text>plus de propositions</Text>
        )}
        onSwipedLeft={(index) => handleSwipe(index, false)}
        onSwipedRight={(index) => handleSwipe(index, true)}
      />
      :
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='votre nom'
          onChange={(event) => setTemp(event.target.value)}
        />
        <Button
            title='Ajouter'
            onPress={() => setName(temp)}
            color='blue'
        />
      </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '92%',
    height: '70%',
  },
  input:{
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    width:'70%',
    height:40
  },
  form:{
    //style for form
  }
});

export default Vote