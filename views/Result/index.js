import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ResultChart } from '../../components/ResultChart';

export const Result = () => {
  //vvv sample data vvv
  const votes = [
    {
      date: new Date(),
      name:'carlos',
      restaurant:'krab\'s croustillant',
      response:true,
    },
    {
      date: new Date(),
      name:'carlos',
      restaurant:'krusty burger',
      response:true,
    },
    {
      date: new Date(),
      name:'bob',
      restaurant:'krusty burger',
      response:true,
    },
    {
      date: new Date(),
      name:'bob',
      restaurant:'central perk',
      response:true,
    },
    {
      date: new Date(),
      name:'patrick',
      restaurant:'central perk',
      response:true,
    },
  ]
  const propositions = [
    {
      date: new Date(),
      name: 'carlos',
      restaurant:'krab\'s croustillant',
    },
    {
      date: new Date(),
      name: 'bob',
      restaurant:'krusty burger',
    },
    {
      date: new Date(),
      name: 'patrick',
      restaurant:'central perk',
    },
  ]
  return (
    <View style={styles.container}>
      <ResultChart propositions={propositions} votes={votes}/>
    </View>
  )
}

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})