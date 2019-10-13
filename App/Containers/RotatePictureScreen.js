import React, { Component } from 'react';
import { ScrollView, TextInput, View, Text } from 'react-native';
import { connect } from 'react-redux';
import Button from '../Components/Button';
import Box from '../Components/Box';
import styles from './Styles/RotatePictureScreenStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
class RotatePictureScreen extends Component {
  static navigationOptions = {
    title: 'Rotate Picture'
  };

  constructor(props) {
    super(props);
    this.state = {
      n: null,
      nMatrix: null,
      // matrix: [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
      matrix: new Array(3)
    };
  }

  addMatrix = () => {
    const { n } = this.state;
    if (isNaN(n) || n < 2) {
      this.setState({ nMarix: null });
      alert('Please insert proper value');
    } else {
      let generatArray = JSON.parse(
        JSON.stringify(Array(parseInt(n)).fill(Array(parseInt(n)).fill('')))
      );

      for (var i = 0; i < parseInt(n); i++) {
        for (var j = 0; j < parseInt(n); j++) {
          generatArray[i][j] = Math.floor(Math.random() * 255) + 0;
        }
      }
      this.setState({ nMatrix: n, matrix: generatArray });
    }
  };

  rotateImage = () => {
    const { matrix } = this.state;
    const n = matrix.length;
    const x = Math.floor(n / 2);
    const y = n - 1;
    for (let i = 0; i < x; i++) {
      for (let j = i; j < y - i; j++) {
        k = matrix[i][j];
        matrix[i][j] = matrix[y - j][i];
        matrix[y - j][i] = matrix[y - i][y - j];
        matrix[y - i][y - j] = matrix[j][y - i];
        matrix[j][y - i] = k;
      }
    }
    this.setState({ matrix });
  };

  renderAddMatrixView() {
    const { n } = this.state;
    return (
      <View style={styles.addMatrixViewStyle}>
        <TextInput
          placeholder="n value"
          keyboardType="number-pad"
          style={styles.textInputStyle}
          onChangeText={text => this.setState({ n: text })}
          value={n}
          maxLength={1}
        />
        <Button
          name="Add"
          onPress={this.addMatrix}
          style={styles.addButtonStyle}
          disabled={!n}
        />
      </View>
    );
  }
  renderNote() {
    return <Text style={styles.noteTextStyle}>Note : Please add n value </Text>;
  }

  renderMatrix() {
    const { nMatrix, matrix } = this.state;
    return (
      <View style={styles.matrixViewStyle}>
        {matrix.map(row => {
          return (
            <View style={styles.matrixRowStyle}>
              {row.map(column => {
                return <Box value={column} nMatrix={nMatrix} />;
              })}
            </View>
          );
        })}
      </View>
    );
  }

  renderRotateImage() {
    return (
      <Button
        name="Rotate"
        onPress={this.rotateImage}
        style={styles.rotateImageButtonStyle}
      />
    );
  }

  render() {
    const { nMatrix } = this.state;
    return (
      <ScrollView style={styles.container}>
        {this.renderAddMatrixView()}
        {this.renderNote()}
        {nMatrix && this.renderMatrix()}
        {nMatrix && this.renderRotateImage()}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RotatePictureScreen);
