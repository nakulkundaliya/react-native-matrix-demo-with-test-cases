import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  buttonStyle: {
    height: 50,
    width: 250,
    backgroundColor: Colors.primary,
    marginVertical: 20,
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonTextStyle: {
    color: Colors.snow,
    alignSelf: 'center'
  }
});
