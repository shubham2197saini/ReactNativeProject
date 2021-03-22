import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'shubham';

    return (
    <View>
        <Text style={style.textStyle}>Getting started with react native!</Text>
        <Text style={style.textStyle1}> My name is {name}</Text>
    </View>
    );
};

const style = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    textStyle1: {
        fontSize: 20,
        backgroundColor: '#C0C0C0'
    }
});


export default ComponentsScreen;