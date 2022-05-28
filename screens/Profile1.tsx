import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FormContent, HOST} from '../data/data';
import store from '../store/store';
import storage from './../storage/storage';
import {styles} from './../styles/style';

const Profile = () => {
  const [isEdit, setEdit] = useState(false);
    const [infor,setInfor]:any=useState({});
  useEffect(() => {
    const getdata = async () => {
        const data:any = await storage.getStorageAsync();
        const res =await fetch(`${HOST}infor/${(JSON.parse(data)).information}`)
        const json=await res.json()
        console.log('JSON',json)
        await setInfor(json)
    };
    getdata();
  }, []);
  return (
    <SafeAreaView>
    <View>
        {FormContent.information.map((item, index) => {
        return (
            <TextInput
            key={index}
            value={item.value(infor)}
            editable={isEdit}
            onChangeText={text => {
                item.action(text);
                console.log(store.information);
            }}
            placeholder={item.title}
            />
        );
        })}
        {/* <TextInput editable={isEdit} placeholder="Birth Day" />
        <TextInput editable={isEdit} placeholder="Age" />
        <TextInput editable={isEdit} placeholder="Skill" />
        <TextInput editable={isEdit} placeholder="Position" /> */}
      </View>
      <View>
        <View style={styles.FlexCenter}>
          {!isEdit ? (
            <TouchableOpacity
              style={{...styles.Button, width: 100}}
              onPress={() => {
                  console.log(infor)
                  setEdit(true)}}>
              <Text style={styles.TextCenter}>Edit</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setEdit(false)}
              style={{...styles.Button, width: 100}}>
              <Text style={styles.TextCenter}>Save</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
