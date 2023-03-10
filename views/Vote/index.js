import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../../components/Card';
import CardsSwipe from 'react-native-cards-swipe';
import { RedirectToResult } from '../../components/ResultChart/RedirectToResult';
import { Cache } from "react-native-cache";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Vote = () => {
  const cache = new Cache({
    namespace: "berlout",
    policy: {
        maxEntries: 1, // if unspecified, it can have unlimited entries
        stdTTL: 0 // the standard ttl as number in seconds, default: 0 (unlimited)
    },
    backend: AsyncStorage
  });

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
    let username = Promise.resolve(cache.get("name"));
    const card = cardsData.at(index)
    const vote = {
      date: new Date(),
      name:username,
      restaurant:card.title,
      response:swipe,
    }
  }

  return (
    <View style={styles.container}>
      <CardsSwipe
        loop={false}
        cards={cardsData}
        cardContainerStyle={styles.cardContainer}
        renderCard={(data) => (
          <Card restaurant={data}/>
        )}
        renderNoMoreCard={() => (
          <RedirectToResult/>
        )}
        onSwipedLeft={(index) => handleSwipe(index, false)}
        onSwipedRight={(index) => handleSwipe(index, true)}
      />
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
  }
});

export default Vote