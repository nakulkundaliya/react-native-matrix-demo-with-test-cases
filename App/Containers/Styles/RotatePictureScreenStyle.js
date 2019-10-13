import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  addMatrixViewStyle: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 20
  },
  textInputStyle: {
    height: 50,
    width: 150,
    borderColor: Colors.charcoal,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  addButtonStyle: {
    width: 150,
    marginVertical: 0,
    marginLeft: 10
  },
  noteTextStyle: {
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  matrixViewStyle: {
    backgroundColor: '#ede2e1',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: 'center'
  },
  matrixRowStyle: {
    flexDirection: 'row'
  },
  rotateImageButtonStyle: {
    width: 70,
    height: 70,
    borderRadius: 40,
    alignSelf: 'center'
  }
});
