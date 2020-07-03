import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, Dimensions} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Constants from 'expo-constants';


const Texto = () => {
  return (<Text>Componentes iniciales</Text>);
}

export default function App() {
  const [locacion, setLocation] = useState({});
  const buscarLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if(status !== 'granted'){
      return Alert.alert('Error', 'No tenemos los permisos necesarios')
    }
    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }
  useEffect(() => {
    buscarLocation()
  })

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapView 
        style={styles.map}
      >
        {locacion.coords ? 
        <Marker 
          coordinate={locacion.coords} 
          title={'Titulo'}
          description={'Descripci[on del punto'}
          />
        :
        null
        }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
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
