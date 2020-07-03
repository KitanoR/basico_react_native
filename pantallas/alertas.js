import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

const Texto = () => {
  return (<Text>Componentes iniciales</Text>);
}

const crearDialogo = () => Alert.alert(
  'Titulo', 
  'Mensaje de descripcion de dialogo',
  [
    {
      text: 'Cancelar',
      onPress: () => {

      },
      style: 'cancel'
    },
    {
      text: 'Aceptar',
      onPress: () => {
        console.log('Boton presionado')
      },
      style: 'confirm'
    }
  ],
  {
    cancelable: false
  }
)

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Texto/>
      <StatusBar style="auto" />
      <Button onPress={crearDialogo} title={'Abrir dialogo'} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#eee',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
  },
  center: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
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
