import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View,  Button} from 'react-native';

// Use memo retorna un calor ya calculado
//useCallback retorna la referencia de la misma funcion

export default function App() {
  const [cont, setCont] = useState(0);

  const handleIncremet = useCallback(() => {
    setCont(cont + 1)
  }, [cont]);
  const handleDecrement = useCallback(
    () => {setCont(cont - 1)},
    [cont]
  )
   
  return (
    <View style={styles.container}>
      <Button onPress={handleIncremet} title='+' />
      <Text style={styles.text}>
        {cont}
      </Text>
      <Button onPress={handleDecrement} title='-' />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    textAlign: 'center'
  },  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
