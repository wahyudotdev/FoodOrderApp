import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

const style = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  image: {
    width: 150,
    height: 200,
  },
  category: {
    backgroundColor: '#55525150',
    position: 'absolute',
    left: 10,
    top: 10,
    borderRadius: 10,
    padding: 5,
  },
  category_text: {
    color: 'white',
    fontSize: 15,
  },
  food_info: {
    backgroundColor: '#262727AA',
    position: 'absolute',
    borderRadius: 10,
    bottom: 10,
    left: 10,
    right: 10,
    padding: 10,
  },
  food_name: {
    color: 'white',
    fontSize: 10,
  },
  food_price: {
    color: 'grey',
    fontSize: 10,
  },
});

const Category = () => (
  <View style={style.category}>
    <Text style={style.category_text}>Pasta</Text>
  </View>
);

const FoodName = () => (
  <View style={style.food_info}>
    <Text style={style.food_name}>Sphageti with shrimp sauce</Text>
    <Text style={style.food_price}>Rp. 15 000 ,-</Text>
  </View>
);

const FoodCard = () => (
  <View style={style.container}>
    <ImageBackground
      borderRadius={10}
      style={style.image}
      source={{
        uri: 'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      }}>
      <Category />
      <FoodName />
    </ImageBackground>
  </View>
);

export default FoodCard;
