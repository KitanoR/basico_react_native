import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, TextInput, TouchableNativeFeedback, TouchableOpacity} from 'react-native';

const Texto = () => {
  return (<Text>Componentes iniciales</Text>);
}
export default function App() {
  const [text, setText] = useState('Valor inidial');

  return (
    <View style={styles.container}>
      <Texto/>

      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        placeholder='Escribe aqui'
        onChangeText={t => setText(t)}
        defaultValue={text}
      />
      <Button title={'hola mundo'} />
      <TouchableHighlight
        underlayColor={'#999'}
        activeOpacity={0.2}
        onPress={() => {

        }}
        >
        <Text>Aceptar</Text>
      </TouchableHighlight>

      <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('#00F')}
        onPress={() => {

        }}
        >
        <Text style={styles.view}>Aceptar</Text>
      </TouchableNativeFeedback>

      <TouchableOpacity 
        style={styles.TouchableOpacity}
        onPress={() => {}}>
        <Text style={styles.view}>Aceptar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  TouchableOpacity:{
    backgroundColor: '#eee'
  },
  view: {
    height: 40,
    width: 300,
  },  
  input: {
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
