import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

class Search extends Component {
    render() {
        return (
            <View>
                <Header/>
                <Text>Search</Text>
            </View>
        )
    }
}

export default Search;