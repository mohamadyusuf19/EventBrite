import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

class Home extends Component {
    render() {
        return (
            <View>
                <Header/>
                <Text>Home</Text>
            </View>
        )
    }
}

export default Home;