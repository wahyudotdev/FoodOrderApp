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

interface FoodCardProps {
  name: string;
  price: number;
  photo: string;
  description: string;
}

const FoodCard = (props: FoodCardProps) => (
  <View style={style.container}>
    <ImageBackground
      borderRadius={10}
      style={style.image}
      source={{
        uri: props.photo,
      }}>
      <View style={style.category}>
        <Text style={style.category_text}>{props.name}</Text>
      </View>
      <View style={style.food_info}>
        <Text style={style.food_name}>{props.name}</Text>
        <Text style={style.food_price}>Rp. {props.price} ,-</Text>
      </View>
    </ImageBackground>
  </View>
);

export default FoodCard;
