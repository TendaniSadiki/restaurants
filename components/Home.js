import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { FaBars } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';


export default function Home() {
  return (
    <View style={styles.homeContainer}>
        <View style={styles.navBar}>
            <FaBars  style={styles.Bar} />
            <FaUser  style={styles.User} />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    homeContainer: {
 
      flex:1,
    
    },
    navBar: {
       
        height:80
      },
      Bar: {
        height:80,
        color:"#374151",
        marginLeft:10
      },
      User: {
        height:80,
        color:"#374151",
        position:"absolute",
        right:10
      },
  });