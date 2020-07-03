import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
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

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
