import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import {styles} from './../styles/style';

const GrouptItem = () => {
  const [active, setActive] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => setActive(false)}>
      <View>
        <View>
          <TouchableOpacity
            onPress={() => setActive(!active)}
            style={StyleBody.ItemMenu}>
            <Text style={styles.TextCenter}>MENU</Text>
          </TouchableOpacity>
        </View>
        {active && (
          <View
            style={{...styles.FlexCenter,backgroundColor:'#2C5369',borderRadius:5,padding:5}}>
            <TouchableOpacity >
              <Text style={styles.TextCenter}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={styles.TextCenter}>Option 2</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

function Body({style}: any) {
  return (
    <SafeAreaView style={style}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'stretch',
          flexWrap: 'wrap',
        }}>
        {new Array(15).fill(0).map((item, index) => {
          return (
            <View key={index} style={{width: 100}}>
              <GrouptItem  />
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
const StyleBody = StyleSheet.create({
  ItemMenu: {
    width: 75,
    height: 75,
    margin: 5,
    backgroundColor: '#2C5364',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 10,
  },
});

export default Body;
