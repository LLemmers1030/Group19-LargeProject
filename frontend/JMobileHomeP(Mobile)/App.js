import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <ImageBackground source = {require('./assets/house.png')} style = {styles.image}>
        <Image source = {require('./assets/JMHP.png')} style = {styles.logo}>
        </Image> 
        </ImageBackground>   
      <StatusBar style="auto" />
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


image: 
{
 
  resizeMode: "cover", 
  justifyContent: "center", 
  width: 500, 
  height: 1000
},  
logo: 
{ 

  opacity: 2, 
  alignItems: 'center', 
  marginLeft: 150, 
  marginBottom: 550

}
});
