import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles/ButtonStyle';

const Button = props => {
  const { name, onPress, style, disabled } = props;
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, style]}
      onPress={() => onPress()}
      disabled={disabled}
    >
      <Text style={styles.buttonTextStyle}>{name}</Text>
    </TouchableOpacity>
  );
};
export default Button;
