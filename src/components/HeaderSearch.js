import React from 'react'
import { View, Image, StyleSheet, TextInput, Dimensions } from 'react-native'

const searchIcon = require('../Assets/search.png')

const HeaderSearch = (props) => {
    return (
        <View style={styles.header}>
            <Image source={searchIcon} style={styles.images}/>
            <TextInput
                placeholder="Search"
                onChangeText={props.onChangeText}   
                style={{ width: Dimensions.get('window').width }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1,
        elevation: 8
    },
    images: {
        height: 20,
        width: 20,
        marginRight: 15
    }
})

export default HeaderSearch