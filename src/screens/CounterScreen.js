import React, { useState } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () =>{
     const [counter, setCounter] = useState(0);

    return (
        <View>
        <Button
        onPress={() => {
            // don't do this  
            // counter++;
            setCounter(counter + 10);
        }} 
        title="Increase"></Button>
        <Button
        onPress={() => {
            setCounter(counter -10);
        }} 
        title="decrease"></Button>
        <Text>Current count: {counter}</Text>
    </View>
    );
};


const styles = StyleSheet.create({});

export default CounterScreen;