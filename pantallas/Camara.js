import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, Button} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Camera } from 'expo-camera';


const Texto = () => {
  return (<Text>Componentes iniciales</Text>);
}

export default function App() {
  const [permisos, setPermisos] = useState(null);
  const [tipo, setTipo] = useState(Camera.Constants.Type.back);

  const getPermisos = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setPermisos(status == 'granted');
    console.log(status);
  }

  useEffect(() => {
    getPermisos()
  })

  if(permisos === null) {
    return <View>
      <Text>Esperando permisos...</Text>
    </View>
  }
  if(permisos === false){
    return <View>
      <Text>No tenemos acceso a la camara...</Text>
    </View>
  }
  return (
    <View style={styles.container}>
      <Text>Esto es la c[amara</Text>
      <Camera style={styles.camera} type={tipo}>
        <Button 
          title={'voltear'}
          onPress={() => {
            const { front, back } = Camera.Constants.Type;
            const nuevoTipo = tipo === back ? front: back;
            setTipo(nuevoTipo);
          }}
        />
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    
  },
  content: {
    backgroundColor: '#eee',
    flex: 1,
    width: '100%',
    alignItems: 'stretch',
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
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
