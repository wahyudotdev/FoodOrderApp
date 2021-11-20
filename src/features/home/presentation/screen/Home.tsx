import React, {useContext} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../../../../core/context/AuthProvider';
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

const FoodGroup = () => (
  <View style={styles.food_group}>
    <FoodCard />
    <FoodCard />
  </View>
);

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
