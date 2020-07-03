import { StatusBar } from 'expo-status-bar';
import React, { useReducer, useMemo } from 'react';
import { StyleSheet, Text, View,  Button} from 'react-native';

const initialState = {
  cont: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return { cont: state.cont + 1 }
    }
    case 'decrement': {
      return { cont: state.cont - 1 }
    }
    default: {
      return state
    }
  }
}

const users = [
  {name: 'John', age: 2},
  {name: 'Doe', age: 3}
]
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const totalAge = useMemo(() => {
    let age = 0;
    console.log('Calculando...');
    users.forEach(x => age += x.age);
    return age;
  }, [user])
  console.log('Edad total: ', totalAge);
  handleIncremet = () => dispatch({type: 'increment'});
  handleDecrement = () => dispatch({type: 'decrement'});
  
  return (
    <View style={styles.container}>
      <Button onPress={handleIncremet} title='+' />
      <Text style={styles.text}>
        {state.cont}
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
