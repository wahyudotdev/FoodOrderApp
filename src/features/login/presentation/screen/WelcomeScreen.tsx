import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {RootStackParamList} from '../../../../../Route';
import {AppButton} from '../components/AppButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 40,
    marginTop: -50,
  },
  subtitle: {
    marginTop: 20,
    color: 'gray',
    marginBottom: 20,
  },
  bottom_container: {
    flex: 2,
    backgroundColor: '#010101AA',
    borderTopRightRadius: 100,
    padding: 20,
  },
  text_container: {
    width: '70%',
  },
});

const WelcomeScreen = (props: Props) => (
  <View style={styles.container}>
    <ImageBackground
      style={styles.image}
      source={{
        uri: 'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      }}>
      <View style={styles.container} />
      <View style={styles.bottom_container}>
        <View style={styles.text_container}>
          <Text style={styles.title}>Cooking a Delicious Food Easily</Text>
        </View>
        <Text style={styles.subtitle}>
          Discover more than 1200 food recipes in your hands and cooking it
          easily!
        </Text>
        <AppButton
          bgColor={'#26AD89FF'}
          hint={'Login'}
          onPress={() => props.navigation.navigate('Login')}
          marginTop={20}
        />
        <AppButton
          bgColor={'#000'}
          hint={'Sign Up'}
          onPress={() => props.navigation.navigate('Menu')}
          marginTop={20}
        />
      </View>
    </ImageBackground>
  </View>
);

export default WelcomeScreen;
