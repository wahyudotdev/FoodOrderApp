import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {primary} from '../../../../config/Pallete';

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
    />
  </View>
);

export default TextFormField;
