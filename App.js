import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function App() {
  const [text,onChangeText] = useState("Search");

 
  return (
    <View style={styles.container}>
      
       <TextInput inlineImageLeft="username"
       inlineImagePadding={2}
       underlineColorAndroid="transparent"  style={styles.searchbar}  onChangeText={onChangeText}
       value={text}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbar : {
    margin : 15,
    width : '80%',
    borderBottomWidth : 1,
    borderBottomColor : 'lightgrey',
    
  }
});
