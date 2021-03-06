import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import React, { useState, useCallback, memo, useEffect } from 'react';
import { StyleSheet, Text, View,  Button} from 'react-native';

// Use memo retorna un calor ya calculado
//useCallback retorna la referencia de la misma funcion
const Title = memo(({title}) => {
  console.log('Renderizando');
  return <Text style={styles.titulo}>{title}</Text>
})

export default function App() {
  const [cont, setCont] = useState(0);

  const handleIncremet = useCallback(() => {
    setCont(cont + 1)
  }, [cont]);
  const handleDecrement = useCallback(
    () => {setCont(cont - 1)},
    [cont]
  )
  
  const setFont = async () => {
    await Font.loadAsync({
      'Nunito-Light': require('./assets/fonts/Nunito-Light.ttf'),
      'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    })
  }

  useEffect(() => {
    setFont();
  }, []);
   
  return (
    <View style={styles.container}>
      <Button onPress={handleIncremet} title='+' />
      <Text style={styles.text}>
        {cont}
      </Text>
      <Button onPress={handleDecrement} title='-' />
      <Title title='Hola soy el titulo' />
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Nunito-Light'
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
