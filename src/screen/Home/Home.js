import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity, 
    TouchableWithoutFeedback,
    Image 
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import CardSection from '../../components/CardSection';
import { methodGet } from '../../actions/methodGetActions';
import { selectId } from '../../actions/selectActions';
import Loading from '../../components/Loading';
import { Actions } from 'react-native-router-flux';
import ReadMore from 'react-native-read-more-text';

const addIcon = require('../../Assets/plus.png')
const bookmarkIcon = require('../../Assets/bookmark.png') 
const brokenImage = require('../../Assets/brokenImage.png')

class Home extends Component {
    constructor() {
        super()
        this.state = {
            onbuttonBookmarkClicked: false
        }
    }

    componentWillMount() {
        this.props.methodGet()
    }

    showRegistration(indexDetail) {
        Actions.register({detail: indexDetail})
    }

    render() {  
        return (
            <View style={{ flex: 1 }}>
                <Header
                    textHeader="Event Brite"
                    onPress={() => Actions.add()}
                    source={addIcon}
                /> 
                {this.renderAll()}        
            </View>                 
        )
    }

    renderAll() {
        if(this.props.loading) {
            return (
                <Loading/>
            )
        }
        return (
            <View style={{ flex: 1 }}>            
                <FlatList                    
                    data={this.props.data}
                    keyExtractor={(x,i) => i.toString() }
                    renderItem={this._renderItem}
                />
            </View>
        )
    }

    _renderItem = ({ item, index }) => {                
        const renderImages = () => {
            if(!item.images) {
                return (                    
                    <Image source={brokenImage} style={{ height: 50, width: 50, marginBottom: 30, marginTop: 30, alignSelf: 'center' }}/>                    
                )
            }
            return (
                <Image source={{ uri: item.images }} style={{ height: 150, marginBottom: 10, marginTop: 10 }}/>
            )
        }        

        return (      
            <TouchableWithoutFeedback onPress={() => console.log(this.props.selectId(item.id))}>
                <CardSection>             
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.avatar}></TouchableOpacity>
                        <View style={{ flexDirection:'column', alignItems: 'flex-end', marginRight: 5 }}>
                            <Text style={styles.title}>{item.name}</Text>                    
                            <Text>{item.day}</Text>
                        </View>                    
                    </View>                         
                    {renderImages()}
                    <View style={{ marginBottom: 15 }}>                                            
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={[styles.bold, { marginTop: 10 }]}>Description: </Text>
                            <TouchableOpacity>
                                <Image source={bookmarkIcon} style={styles.bookmark1}/>
                            </TouchableOpacity>                            
                        </View>                        
                        <ReadMore
                            numberOfLines={2}
                            onReady={this._handleTextReady}>
                            <Text style={styles.bold}>
                                {item.description}
                            </Text>
                        </ReadMore>
                    </View>      
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginRight: 8 }}>                                            
                            <Text style={styles.bold}>Start Event </Text>
                            <Text style={styles.bold}>Place </Text>
                            <Text style={styles.bold}>Register Until </Text>                        
                            <Text style={styles.bold}>Tiket Available</Text>
                        </View>                
                        <View>                                            
                            <Text style={styles.bold}>: {item.date}</Text>
                            <Text style={styles.bold}>: {item.place}</Text>
                            <Text style={styles.bold}>: {item.register}</Text>
                            <Text style={styles.bold}>: {item.ticket}/{item.ticket}</Text>
                        </View>
                    </View>                                         
                    <TouchableOpacity style={styles.button} onPress={() => this.showRegistration([
                        item.name,                        
                        item.description,
                        item.date,
                        item.register,                        
                        item.images
                    ])}>
                        <Text style={styles.textButton}>Registration</Text>
                    </TouchableOpacity>                                  
                </CardSection>        
            </TouchableWithoutFeedback>      
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
        marginTop: 8,
        marginBottom: 8
    },
    textButton: {
        color: '#fff',
        fontSize: 16
    },
    bold: {
        color: '#000',
        fontSize: 14
    },
    bookmark1: {
        height: 25, width: 25, marginRight: 15,
        tintColor: '#000' 
    },
    bookmark2: {        
        tintColor: 'red',
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

export default connect(mapStateToProps, { methodGet, selectId })(Home);