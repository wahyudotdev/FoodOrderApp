import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {IconButton} from 'react-native-paper';

interface TextFieldProps {
  hint: string;
  fn: (arg: string) => void;
}

const Searchbar = (props: TextFieldProps) => {
  return (
    <View style={style.container}>
      <IconButton
        icon={'search-web'}
        color={'white'}
        size={20}
        style={style.icon}
      />
      <TextInput
        autoFocus={true}
        placeholder={props.hint}
        placeholderTextColor="grey"
        onChangeText={data => props.fn(data)}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#F6F7FCFF',
    borderRadius: 10,
    padding: 5,
    margin: 20,
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: '#8D92AB80',
  },
});
export default Searchbar;
