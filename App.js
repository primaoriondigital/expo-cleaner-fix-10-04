import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Pressable, TextInput, } from 'react-native';
import React, { useEffect, useState } from 'react'
import Router from './src/router/router';


export default function App() {

  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <NavigationContainer>
    //     <Router/>
    //   </NavigationContainer>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
