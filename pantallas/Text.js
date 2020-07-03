import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textFont: {
        fontFamily: 'Nunito-Regular'
    }
});
export default (props) => {
    const { style, ...rest } = props;
    return <Text 
        {...rest} 
        style={[style, styles.textFont]}
    />
}