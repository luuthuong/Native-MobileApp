import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  FlexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FullSrcreen: {
    width:Dimensions.get('screen').width,
    height:Dimensions.get('screen').height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextCenter:{
    textAlign:'center',
    color:'#fff'
  },
});
