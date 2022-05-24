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
    backgroundColor:'#23cd',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
