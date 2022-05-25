import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  FlexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FullSrcreen: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextCenter: {
    textAlign: 'center',
    color: '#fff',
  },
  Button: {
    backgroundColor: '#0F2027',
    paddingVertical: 10,
    marginTop: 10,
    fontWeight:'600',
    borderRadius:5
  },
});
