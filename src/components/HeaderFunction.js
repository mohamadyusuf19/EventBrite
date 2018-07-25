import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
const arrowIcon = require('../Assets/arrow.png')

const HeaderFunction = (props) => {
    return (
        <View style={styles.container}>            
            <TouchableOpacity style={styles.images} onPress={props.onPressArrow}>
                <Image style={styles.images} source={arrowIcon} />
            </TouchableOpacity>            
            <Text style={styles.textHeader}>Event Brite</Text>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.textFunction} >{props.textFunction}</Text>
            </TouchableOpacity>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 8,
        flexDirection: 'row',
        paddingLeft: 8,
        paddingRight: 8
    },
    textHeader: {
        fontSize: 18,
        color: '#000',
        marginLeft: 8
    },
    images: {
        height: 25,
        width: 25,        
        marginRight: 8
    },
    textFunction: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600',
        color: 'blue'
    }
})

export default HeaderFunction