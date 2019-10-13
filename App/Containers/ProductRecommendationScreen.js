import React, { Component } from 'react';
import { ScrollView, View, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import RadioForm from 'react-native-simple-radio-button';
import Button from '../Components/Button';
import bundles from '../Fixtures/bundles.json';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProductRecommendationScreenStyle';
const RADIO_PARAMS = [
  { label: 'Yes ', value: 'Yes' },
  { label: 'No', value: 'No' }
];

class ProductRecommendationScreen extends Component {
  static navigationOptions = {
    title: 'Product Recommendation'
  };

  constructor(props) {
    super(props);
    this.state = {
      age: '',
      isStudent: 'Yes',
      income: '',
      bundles,
      bundle: null
    };
  }

  submit = () => {
    const {
      age,
      income,
      isStudent,
      bundles: { juniorSaver, student, classic, classicPlus, gold }
    } = this.state;
    const disable = isNaN(age) || isNaN(income) || !age || !income;

    if (disable) {
      alert('Pleaae enter proper value');
      return;
    }
    if (age < 18) {
      this.setState({
        bundle: juniorSaver
      });
    } else if (isStudent === 'Yes') {
      this.setState({
        bundle: student
      });
    } else if (income > 0 && income <= 12000) {
      this.setState({
        bundle: classic
      });
    } else if (income > 12000 && income <= 40000) {
      this.setState({
        bundle: classicPlus
      });
    } else if (income > 40000) {
      this.setState({
        bundle: gold
      });
    }
  };

  updateFormValue = (key, value) => {
    this.setState({ [key]: value });
  };

  renderForm() {
    const { age, income, isStudent } = this.state;
    const disable = !age || !income || !isStudent;
    return (
      <View>
        <TextInput
          placeholder="Enter age"
          keyboardType="number-pad"
          style={styles.textInputStyle}
          onChangeText={value => this.updateFormValue('age', value)}
          value={age}
        />
        <View>
          <Text style={styles.studentTextStyle}>Are you student ?</Text>
          <RadioForm
            radio_props={RADIO_PARAMS}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={'#2196f3'}
            animation={true}
            onPress={value => this.updateFormValue('isStudent', value)}
          />
        </View>

        <TextInput
          placeholder="Enter Income"
          keyboardType="number-pad"
          style={styles.textInputStyle}
          onChangeText={value => this.updateFormValue('income', value)}
          value={income}
        />
        <Button
          name="Submit"
          onPress={this.submit}
          style={{ width: '100%' }}
          disable={disable}
        />
      </View>
    );
  }

  renderOutput() {
    const { bundle } = this.state;
    if (!bundle) return;
    return (
      <View>
        <Text style={{ fontWeight: '800', fontSize: 18 }}>Bundle Output</Text>
        <Text>Bundle Name : {bundle.name}</Text>
        <Text>Products : {bundle.products.join(',')}</Text>
        <Text>Value: {bundle.value}</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderForm()}
        {this.renderOutput()}
      </ScrollView>
    );
  }
}

export default ProductRecommendationScreen;
