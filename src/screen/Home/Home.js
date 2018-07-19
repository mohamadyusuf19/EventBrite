import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import CardSection from '../../components/CardSection';
import { methodGet } from '../../actions/methodGetActions';
import Loading from '../../components/Loading';
import { Actions } from 'react-native-router-flux';

const addIcon = require('../../Assets/plus.png')

class Home extends Component {
    componentWillMount() {
        this.props.methodGet()
    }

    renderAll() {
        if(this.props.loading) {
            return (
                <Loading/>
            )
        }
        return (
            <View style={{ flex: 1 }}>
                <Header
                    onPress={() => Actions.add()}
                    source={addIcon}
                /> 
                <FlatList
                    data={this.props.data}
                    keyExtractor={(x,i) => i.toString() }
                    renderItem={this._renderItem}
                />
            </View>
        )
    }

    render() {        
        console.log(this.props.loading)
        return (
            <View style={{ flex: 1 }}>
                {this.renderAll()}        
            </View>                 
        )
    }

    _renderItem = ({ item, index }) => {        
        const renderImages = () => {
            if(!item.images) {
                return (
                    <View style={{ height: 150, marginBottom: 10, marginTop: 10, justifyContent:'center', alignItems: 'center' }}>
                        <Text>Gambar Tidak Ada</Text>
                    </View>
                )
            }
            return (
                <Image source={{ uri: item.images }} style={{ height: 150, marginBottom: 10, marginTop: 10 }}/>
            )
        }
        return (            
                <CardSection>             
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.avatar} onPress={() => console.log(item.id)}></TouchableOpacity>
                        <View style={{ flexDirection:'column', alignItems: 'flex-end', marginRight: 5 }}>
                            <Text style={styles.title}>{item.name}</Text>                    
                            <Text>{item.day}</Text>
                        </View>                    
                    </View>                         
                    {renderImages()}
                    <View>                                            
                        <Text style={styles.bold}>Description: </Text>
                        <Text>{item.description}</Text>
                    </View>      
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginRight: 5 }}>                                            
                            <Text style={styles.bold}>Start Event </Text>
                            <Text style={styles.bold}>Register Until </Text>                        
                        </View>                
                        <View>                                            
                            <Text>: {item.date}</Text>
                            <Text>: {item.register}</Text>
                        </View>
                    </View>                                           
                    <View style={{ flexDirection: 'row' }}>                                            
                        <Text style={styles.bold}>Tiket Available: </Text>
                        <Text>{item.ticket}/{item.ticket}</Text>
                    </View>                   
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Registration</Text>
                    </TouchableOpacity>                                  
                </CardSection>            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'        
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#f1f1f1'
    },
    title: {
        fontSize: 18,
        color: '#000',                
    },
    button: {
        height: 30,
        width: 100,
        backgroundColor: '#000',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',        
        alignSelf: 'center',
        marginBottom: 8
    },
    textButton: {
        color: '#fff',
        fontSize: 16
    },
    bold: {
        color: '#000',
        fontSize: 14
    }
})

const mapStateToProps = state => {
    const { data, loading, error } = state.methodGetReducer;
    return {
        data,
        loading,
        error
    }
}

export default connect(mapStateToProps, { methodGet })(Home);