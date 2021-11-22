import {AuthContext} from 'core/context/AuthProvider';
import {Food} from 'features/home/data/entities/FoodList';
import {getFoodList} from 'features/home/domain/usecases/FoodUsecase';
import React, {useContext, useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import FoodCard from '../component/FoodCard';
import Searchbar from '../component/SearchBar';
import Trivia from '../component/Trivia';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: '#12947CFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  caption: {
    color: 'gray',
    fontSize: 15,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  profile_pict: {
    width: 50,
    height: 50,
  },
  favorite: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    fontSize: 18,
  },
  food_group: {
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
  },
});

const FoodGroup = () => {
  let [foods, setFoods] = useState<Food[]>([]);
  useEffect(() => {
    const getFoods = async () => {
      let result = await getFoodList();
      if (result.isRight()) {
        setFoods(result.value);
      }
    };
    getFoods();
  }, []);
  return (
    <View style={styles.food_group}>
      {foods.length > 0 ? (
        foods.map(food => (
          <FoodCard
            key={food.id}
            name={food.name}
            price={food.price}
            photo={food.photo}
            description={food.description}
          />
        ))
      ) : (
        <Text>Empty</Text>
      )}
    </View>
  );
};

const HomeScreen = () => {
  const {user} = useContext(AuthContext);
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Halo {user.name},</Text>
          <Text style={styles.caption}>Mau makan apa hari ini?</Text>
        </View>
        <Image
          style={styles.profile_pict}
          source={{
            uri: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
          }}
        />
      </View>
      <Searchbar hint={'Cari masakan'} fn={data => console.log(data)} />
      <Trivia />
      <Text style={styles.favorite}>Trending recipe</Text>
      <FoodGroup />
    </ScrollView>
  );
};

export default HomeScreen;
