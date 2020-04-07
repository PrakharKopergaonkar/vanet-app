import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet
  } from 'react-native';

  function Sucessfull(){
      return (
          <View> 
            <Text style={styles.text}> Sucess </Text>
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

export default Sucessfull;