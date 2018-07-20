import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

class Event extends Component {
    render() {
        return (
            <View>
                <Header
                    textHeader="Event Brite"                   
                /> 
                <Text>Event</Text>
            </View>
        )
    }
}

export default Event;