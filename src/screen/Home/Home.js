import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import CardSection from '../../components/CardSection';
import { methodGet } from '../../actions/index';

class Home extends Component {
    componentWillMount() {
        this.props.methodGet()
    }

    render() {        
        console.log(this.props.loading)
        return (
            <View style={{ flex: 1 }}>
                <Header/>
                <FlatList
                    data={this.props.data}
                    keyExtractor={(x,i) => i.toString() }
                    renderItem={this._renderItem}
                />
            </View>
        )
    }
    
    _renderItem = ({ item, index }) => {
        return (            
                <CardSection>             
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.avatar}></TouchableOpacity>
                        <View style={{ flexDirection:'column', alignItems: 'flex-end', marginRight: 5 }}>
                            <Text style={styles.title}>{item.name}</Text>                    
                            <Text>{item.date}</Text>
                        </View>                    
                    </View>                         
                    <Image source={{ uri: item.images }} style={{ height: 250, marginBottom: 10, marginTop: 10 }}/>
                    <View>                                            
                        <Text>Description: {item.description}</Text>
                        <Text>Tiket Available: {item.ticket}/{item.ticket}</Text>
                    </View>                
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Ticket</Text>
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
    }
})

const mapStateToProps = state => {
    const { data, loading, error } = state.methodReducer;
    return {
        data,
        loading,
        error
    }
}

export default connect(mapStateToProps, { methodGet })(Home);