import React, {useContext, useState} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {AuthContext, UserLogin} from '../../../../core/context/AuthProvider';
import {primary} from '../../../../config/Pallete';
import {AppButton} from '../components/AppButton';
import TextFormField from '../components/TextFormField';
import {RootStackParamList} from 'Route';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const LoginTitle = () => (
  <AuthContext.Consumer>
    {({user}) => (
      <View style={styles.login_title_container}>
        <Text style={styles.login_title}>Login - {user.name}</Text>
      </View>
    )}
  </AuthContext.Consumer>
);

const ForgotPassword = () => (
  <View style={styles.forgot_password}>
    <Text>Lupa password?</Text>
  </View>
);

const LoginForm = (props: Props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {fn} = useContext(AuthContext);

  async function login() {
    let result = await UserLogin(username, password);
    if (result.isRight()) {
      console.log('success');
      fn(result.value);
      props.navigation.navigate('Menu');
    } else {
      console.log('fail');
    }
  }

  return (
    <View style={styles.login_form}>
      <LoginTitle />
      <TextFormField hint="Username" onChange={data => setUsername(data)} />
      <TextFormField hint="Password" onChange={data => setPassword(data)} />
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

const LoginScreen = (props: Props) => {
  return (
    <ImageBackground
      style={styles.image}
      source={{
        uri: 'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      }}>
      <View style={styles.screen_color_layer}>
        <View style={styles.screen} />
        <LoginForm navigation={props.navigation} route={props.route} />
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
