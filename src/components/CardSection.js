import React from 'react'
import { View, StyleSheet } from 'react-native'

const CardSection = ({children}) => (
    <View style={styles.row}>
        {children}
    </View>
)

const styles = StyleSheet.create({
    row: {
        flex: 1,        
        padding: 5,  
        margin: 5,      
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
        backgroundColor: '#fff',              
        borderRadius: 5,        
    }
})

export default CardSection;