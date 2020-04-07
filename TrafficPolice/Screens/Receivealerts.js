import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet
  } from 'react-native';

  function Receivealerts(){
      return (
          <View> 
            <Text style={styles.text}> Receive Alert </Text>
          </View>
      );
}

const styles = StyleSheet.create({
  text: {
    borderColor: "red",
    marginTop: 250,
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold"
  }
})

export default Receivealerts;