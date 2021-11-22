import {primary} from 'config/Pallete';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

const styles = StyleSheet.create({
  text_input_container: {
    paddingHorizontal: '6%',
  },
  text_input: {
    backgroundColor: 'white',
  },
});

interface Props {
  hint: string;
  onChange: (data: string) => void;
}

const TextFormField = (props: Props) => (
  <View style={styles.text_input_container}>
    <TextInput
      label={props.hint}
      outlineColor={'gray'}
      underlineColor={'gray'}
      selectionColor={primary}
      activeUnderlineColor={primary}
      style={styles.text_input}
      onChangeText={props.onChange}
    />
  </View>
);

export default TextFormField;
