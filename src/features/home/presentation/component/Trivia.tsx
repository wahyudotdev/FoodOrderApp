import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const style = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#EDF8F1FF',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  trivia: {
    width: 70,
    height: 35,
  },
  text_container: {
    width: '80%',
    padding: 5,
  },
});

const Trivia = () => (
  <View style={style.container}>
    <Image style={style.trivia} source={require('@assets/images/food.png')} />
    <View style={style.text_container}>
      <Text>You have 12 recipes that you haven't tried yet</Text>
    </View>
  </View>
);

export default Trivia;
