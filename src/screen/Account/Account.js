import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

class Account extends Component {
    render() {
        return (
            <View>
                <Header/>
                <Text>Account</Text>
            </View>
        )
    }
}

export default Account;