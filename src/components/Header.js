import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Event Brite</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    textHeader: {
        fontSize: 18,
        color: '#000'
    }
})

export default Header