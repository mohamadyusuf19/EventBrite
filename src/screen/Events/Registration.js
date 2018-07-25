import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import ReadMore from 'react-native-read-more-text';

const getHeight = Dimensions.get('window').height*0.4;
const getWidth = Dimensions.get('window').width
const brokenImage = require('../../Assets/brokenImage.png')

class Registration extends Component {
    constructor() {
        super()
        this.state = {
            onButtonClicked: false
        }
    }

    onButtonPress() {
        this.setState({
            onButtonClicked: !this.state.onButtonClicked
        })
    }

    renderImages() {
        if(!this.props.detail[4]) {
            return(
                <Image source={brokenImage} style={styles.imagesZero} />                
            )
        }
        return (
            <Image source={{ uri: this.props.detail[4] }} style={styles.images} />                
        )        
    }

    render() {
        console.log(this.props.detail)
        return (
            <View style={styles.container}>
                <Header
                    textHeader="Form Register"
                />                
                <ScrollView style={{ flex: 1 }}>
                    {this.renderImages()}
                    <View style={styles.field}>
                        <Text style={styles.title}>{this.props.detail[0]}</Text>                    
                        <ReadMore
                            numberOfLines={4}
                            onReady={this._handleTextReady}>
                            <Text style={styles.containDes}>
                                {this.props.detail[1]}
                            </Text>
                        </ReadMore>
                        <View style={styles.row}>
                            <View style={styles.key}>
                                <Text style={styles.contain}>Register Until</Text>
                                <Text style={styles.contain}>Start Event</Text>                                        
                                <Text style={styles.contain}>Place</Text>    
                            </View>
                            <View>
                                <Text style={styles.contain}>: {this.props.detail[2]}</Text>
                                <Text style={styles.contain}>: {this.props.detail[3]}</Text>                                        
                                <Text style={styles.contain}>: {this.props.detail[5]}</Text>
                            </View>
                        </View>                                           
                    </View>   
                    <TouchableOpacity style={[styles.button, this.state.onButtonClicked && styles.button2]} onPress={() => this.onButtonPress()}>
                        <Text style={styles.textButton}>Buy Ticket</Text>
                    </TouchableOpacity>             
                </ScrollView>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    images: {
        height: getHeight,
        width: getWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagesZero: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    field: {
        padding: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: '#000',
        marginBottom: 20        
    },
    contain: {
        color: '#000',
        fontSize: 15,     
    },
    containDes: {
        color: '#000',
        fontSize: 15,     
        marginBottom: 20
    },
    button: {
        height: 40,
        width: 100,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        alignSelf: 'center',
        marginBottom: 20
    },
    button2: {
        backgroundColor: 'red'
    },
    textButton: {
        fontSize: 16,
        color: '#fff'
    },
    row: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    key: {
        marginRight: 10
    }
})

export default Registration;