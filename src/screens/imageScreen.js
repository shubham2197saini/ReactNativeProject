import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const imageScreen = () =>{
    return (
      <View>
          <ImageDetail 
          title="Forest"
          imageSource={require('../../assets/forest.jpg')}
          Score={9}
          />
          <ImageDetail 
          title="Beach" 
          imageSource={require('../../assets/beach.jpg')}
          Score={8}
          />
          <ImageDetail 
          title="mountain" 
          imageSource={require('../../assets/mountain.jpg')}
          Score={8}
          />
      </View>
    );
};

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });

export default imageScreen;