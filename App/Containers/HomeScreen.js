import React, { Component } from 'react';
import { View } from 'react-native';

// Styles
import styles from './Styles/HomeScreenStyles';
import Button from '../Components/Button';
class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  rotatePicture = () => {
    this.props.navigation.navigate('RotatePictureScreen');
  };

  productRecommendation = () => {
    this.props.navigation.navigate('ProductRecommendationScreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button name="1. Rotate Picture" onPress={this.rotatePicture} />
        <Button
          name=" 2. Product Recommendation"
          onPress={this.productRecommendation}
        />
      </View>
    );
  }
}

export default HomeScreen;
