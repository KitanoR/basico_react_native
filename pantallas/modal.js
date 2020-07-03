import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';

const Texto = () => {
  return (<Text>Componentes iniciales</Text>);
}
export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Texto/>
      <StatusBar style="auto" />
      <Modal
        animationType='slide'
        transparent={true}
        visible={modal}
      >
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>Soy un modal</Text>
            <Button title={'Cerrar modal'} onPress={() => setModal(!modal)}/>
          </View>
        </View>
      </Modal>
      <Button title={'Abrir modal'} onPress={() => setModal(!modal)} />
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
