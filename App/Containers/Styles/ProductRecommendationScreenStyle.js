import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  textInputStyle: {
    height: 50,
    width: '100%',
    borderColor: Colors.charcoal,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 10
  },
  studentTextStyle: {
    marginVertical: 5
  }
});
