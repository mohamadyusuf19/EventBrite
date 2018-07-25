import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import Header from '../../components/Header';

class Event extends Component {
    render() {    
        return (
            <View>
                <Header
                    textHeader="Event Brite"                   
                />  
                <Text>Hello</Text>                
            </View>
        )
    }
}

export default Event;