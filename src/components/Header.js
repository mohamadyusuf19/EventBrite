import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.container}>            
            <Text style={styles.textHeader}>{props.textHeader}</Text>
            <TouchableOpacity style={styles.images} onPress={props.onPress}>
                <Image style={styles.images} source={props.source} />
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
    },
    textHeader: {
        fontSize: 18,
        color: '#000',
        marginLeft: 8
    },
    images: {
        height: 22,
        width: 22,        
        marginRight: 8
    }
})

export default Header