import React from 'react';
import { View, Text, StyleSheet} from  'react-native';
import { FlatList } from 'react-native-gesture-handler';


const ListScreen = () => {
    const friends = [ 
    {name:'friend 1', age: 20, id: 1},
    {name:'friend 2', age: 21, id: 2},
    {name:'friend 3', age: 22, id: 3},
    {name:'friend 4', age: 23, id: 4},
    {name:'friend 5', age: 24, id: 5},
    {name:'friend 6', age: 25, id: 6},
    {name:'friend 7', age: 26, id: 7}
 ];

 return(
     <FlatList
     //horizontal
     //showsHorizontalScrollIndicator={false}
     keyExtractor={friend => friend.name}
     data={friends}
     renderItem={({ item }) =>{           //element === {item: {name: 'friend #1'}, index: 0}
        return (
        <Text style={Styles.textStyle}>
        {item.name} - Age {item.age} - Id {item.id}
        </Text>
        );
     }}
     /> 

 );
  
};

const Styles = StyleSheet.create({
    textStyle: {
        marginTop: 50
    }
});

export default ListScreen;