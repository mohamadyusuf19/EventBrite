import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, Alert } from 'react-native';
import Header from '../../components/Header';
import { deleteBookmark } from '../../actions/deleteBookmarkActions';
import { getBookmark } from '../../actions/getBookmark';
import { methodUpdate, methodGet } from '../../actions/methodGetActions';
import { connect } from 'react-redux';

const getHeight = Dimensions.get('window').height*0.4;
const getWidth = Dimensions.get('window').width
const brokenImage = require('../../Assets/brokenImage.png')
const dustbinIcon = require('../../Assets/dustbin.png')

class DetailBookmark extends Component {
    constructor() {
        super()
        this.state = {
            onButtonClicked: false,
            color: false
        }
        this.onButtonDelete = this.onButtonDelete.bind(this)
    }

    onButtonPress() {
        this.setState({
            onButtonClicked: !this.state.onButtonClicked
        })
    }

    componentWillUnmount() {
        this.props.getBookmark()
        this.props.methodGet()
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

    onButtonDelete() {        
        const name = this.props.detail[0]                          
        const description= this.props.detail[1]
        const register= this.props.detail[2]
        const date= this.props.detail[3]
        const images= this.props.detail[4]
        const place= this.props.detail[5]
        const id = this.props.detail[6]
        const day= this.props.detail[7]
        const { color } = this.state

        Alert.alert(
            'Perhatian',
            'Hapus Data Bookmark',
            [                                        
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},   
                {text: 'OK', onPress: () => [
                    this.props.deleteBookmark({id}), 
                    this.props.methodUpdate({
                        id, name, description, date, register, images, place, color, day
                    })
                ]},
            ],
            { cancelable: false }
        )
    }

    render() {
        console.log(this.props.detail)
        return (
            <ScrollView style={styles.container}> 
                <View style={styles.container}>
                    <Header
                        textHeader="Bookmark"                        
                    />      
                    {this.renderImages()}                                         
                    <View style={styles.field}>                            
                        <Text style={styles.title}>{this.props.detail[0]}</Text>                    
                        <Text style={styles.containDes}>{this.props.detail[1]}</Text>
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
                </View>
            </ScrollView>                
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
        fontSize: 15        
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
        flexDirection: 'row'
    },
    key: {
        marginRight: 10
    }
})

const mapStateToProps = state => {
    const { data, loading, error } = state.deleteBookmarkReducer;
    return {
        data,
        loading,
        error
    }
}

export default connect(null, { deleteBookmark, getBookmark, methodUpdate, methodGet })(DetailBookmark);