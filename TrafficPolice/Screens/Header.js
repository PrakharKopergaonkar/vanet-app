import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native'
import { Icon } from 'react-native-elements'
export default function Header({navigation}){
    const handlepress = () => {
        navigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <View styles={styles.header}>
                <Icon name='menu' color='#00ac' iconStyle={styles.icon} onPress={handlepress}/>
                <Text style={styles.headerText}> VanetSim </Text>
            </View> 
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        textAlign: 'center'
    },
    icon:{
        position: 'absolute',
        left: -130,
        top:3
    }
})