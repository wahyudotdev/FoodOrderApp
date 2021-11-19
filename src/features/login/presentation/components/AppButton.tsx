import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

const styles = (props: Props) =>
  StyleSheet.create({
    container: {
      marginHorizontal: props.marginHorizontal,
      marginTop: props.marginTop,
      backgroundColor: props.bgColor,
      height: props.height == null ? 75 : props.height,
      borderRadius: props.borderRadius == null ? 25 : props.borderRadius,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#26AD89FF',
      borderWidth: 1,
      padding: props.padding,
    },
    text: {
      color: props.textColor == null ? 'white' : props.textColor,
      fontWeight: 'bold',
      fontSize: 15,
    },
  });

interface Props {
  bgColor: string;
  hint: string;
  onPress: () => void;
  width?: number;
  height?: number;
  padding?: number;
  marginTop?: number;
  marginHorizontal?: number;
  borderRadius?: number;
  textColor?: string;
}

export const AppButton = (props: Props) => (
  <TouchableOpacity style={styles(props).container} onPress={props.onPress}>
    <Text style={styles(props).text}>{props.hint}</Text>
  </TouchableOpacity>
);
