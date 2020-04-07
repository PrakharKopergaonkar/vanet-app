import React, {useState} from 'react'
import {
    View,
    Text,
    Button,
    FlatList,
    TouchableOpacity,
  } from 'react-native';
  import { WebView } from 'react-native-webview';


  function ViewCurrenScenario(){
      return (
            <WebView
          
   source={{html: '<iframe width="100%" height="100%"  min; frameborder="0" src="https://prakharkopergaonkar.carto.com/builder/eeb90e8e-97c5-4586-8eb4-d1c27f19df82/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>'}}
/>
      );
}

export default ViewCurrenScenario;