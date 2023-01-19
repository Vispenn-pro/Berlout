import React, { useEffect, useState } from 'react';
import {Button, StyleSheet, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Cache } from "react-native-cache";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = () => {
    const [temp, setTemp] = useState('');
    const navigation = useNavigation();
    const cache = new Cache({
        namespace: "berlout",
        policy: {
            maxEntries: 1, // if unspecified, it can have unlimited entries
            stdTTL: 0 // the standard ttl as number in seconds, default: 0 (unlimited)
        },
        backend: AsyncStorage
    });

    useEffect(() => {
        Promise.resolve(cache.get("name")).then((value) => {
            if(value !== undefined){
                navigation.navigate('Drawer');
            }
        });
    }, [])

    const handlePress = async () => {
        await cache.set("name", temp).then(()=>{
            navigation.navigate('Drawer');
        });
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='votre nom'
                onChange={(event) => setTemp(event.target.value)}
            />
            <Button
                title='Ajouter'
                onPress={handlePress}
                color='blue'
            />
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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