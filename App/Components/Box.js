import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './Styles/BoxStyle';

const Box = props => {
  const { value, nMatrix } = props;
  return (
    <View
      style={[
        styles.boxViewStyle,
        {
          height: 210 / nMatrix,
          width: 210 / nMatrix,
          backgroundColor: `rgb(255,200,${value})`
        }
      ]}
    >
      <Text>{value}</Text>
    </View>
  );
};

export default Box;
