import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, View } from 'react-native';

export const RedirectToResult = () => {
    //State à setup TRUE quand la personne fait sa proposition
    const [hasRolled, setHasRolled] = useState(false);
    const navigation = useNavigation();

    return (
        <View>
            <Button title='proposer un restaurant' disabled={hasRolled} onPress={() => navigation.navigate('Roll')}/>
            <Button title='voir les résultats' onPress={() => navigation.navigate('Result')}/>
        </View>
  )
}
