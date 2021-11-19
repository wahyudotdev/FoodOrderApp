import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {primary} from '../../../../config/Pallete';
import {LoginRepositoryImpl} from '../../data/repositories/LoginRepositoryImpl';
import {GetUserData, GetUserParams} from '../../domain/usecases/GetUserData';
import {AppButton} from '../components/AppButton';
import TextFormField from '../components/TextFormField';

const LoginTitle = () => (
  <View style={styles.login_title_container}>
    <Text style={styles.login_title}>Login</Text>
  </View>
);

const ForgotPassword = () => (
  <View style={styles.forgot_password}>
    <Text>Lupa password?</Text>
  </View>
);

const LoginForm = () => {
  async function login() {
    let repository = new LoginRepositoryImpl();
    let usecase = new GetUserData(repository);
    let result = await usecase.call(new GetUserParams('demo1', '123456'));
    if (result.isRight()) {
      console.log(result.value);
    } else {
      console.log(result.value);
    }
  }
  return (
    <View style={styles.login_form}>
      <LoginTitle />
      <TextFormField hint="Username" />
      <TextFormField hint="Password" />
      <AppButton
        bgColor={'white'}
        hint="Masuk"
        onPress={() => login()}
        padding={10}
        marginHorizontal={20}
        marginTop={20}
        borderRadius={10}
        height={50}
        textColor={primary}
      />
      <AppButton
        bgColor={primary}
        hint="Daftar"
        onPress={() => {}}
        padding={10}
        marginHorizontal={20}
        marginTop={10}
        borderRadius={10}
        height={50}
      />
      <ForgotPassword />
    </View>
  );
};

const LoginScreen = () => {
  return (
    <ImageBackground
      style={styles.image}
      source={{
        uri: 'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      }}>
      <View style={styles.screen_color_layer}>
        <View style={styles.screen} />
        <LoginForm />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screen_color_layer: {
    backgroundColor: '#00000080',
    flex: 1,
  },
  image: {
    flex: 1,
    backgroundColor: '#00000080',
  },
  login_form: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 2,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  empty_screen: {
    flex: 1,
  },
  login_title_container: {
    padding: 20,
  },
  login_title: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  forgot_password: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
