import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = (props) =>{
    return (
        <View>
        <Image source={props.imageSource}></Image>
    <Text>{props.title}</Text>
    <Text> image Score -{props.Score}</Text>
    </View>
    );
};


const styles = StyleSheet.create({});

export default ImageDetail;