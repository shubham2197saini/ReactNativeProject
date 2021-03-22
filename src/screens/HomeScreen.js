import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
  <Text style={styles.text}>hi there!</Text>
  <Button 
    onPress={() => navigation.navigate('Components')}
   title="go to components demo"></Button> 
   <Button onPress={() => navigation.navigate('List')}
     title="go to List demo">
   </Button>
   <Button onPress={() => navigation.navigate('Image')}
     title="go to image demo">
   </Button>
   <Button onPress={() => navigation.navigate('Counter')}
     title="go to Counter demo">
   </Button>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;