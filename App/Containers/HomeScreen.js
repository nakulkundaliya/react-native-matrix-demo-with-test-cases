import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
