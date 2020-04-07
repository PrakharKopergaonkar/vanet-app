import React, {useState} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
  } from 'react-native';
import { Card, ListItem, Button, Icon, SocialIcon } from 'react-native-elements'
  function Aboutus(){
      return (
        <View style={styles.fullcontainer}>
           <Card
        image={require('./logo.png')} imageStyle={{marginTop: 100}}>
        <Text>
            VanetSim is a traffic managment app which connects
            mobiles in a traffic in a offline mesh network to pass on critical information such as 
            vehicles allignment, emergency vehicle struck. We are continously working on providing different 
            features which can help a lot to drivers as well traffic police at congestion point, toll point etc.
        </Text>
</Card>
        <View style={styles.container}>
        <SocialIcon
          type='twitter'
        />
        <SocialIcon
        raised={false}
        type='github'
        />
        <SocialIcon
        raised={false}
        type='facebook'
        />
        <SocialIcon
        raised={false}
        type='instagram'
        />
        </View>
        </View>
    );
}

const styles= StyleSheet.create({
  fullcontainer: {
      marginTop: 40,
      justifyContent: 'center'
  },  
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    textAlign: 'center',
    justifyContent: 'center'
  }
})


export default Aboutus;