import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity,     
    Image,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import CardSection from '../../components/CardSection';
import { 
    searchActions, 
    searchChanged, 
    getHandleContain, 
    contains,
    getDataSearch 
} from '../../actions/searchActions';
import Loading from '../../components/Loading';
import { Actions } from 'react-native-router-flux';
import ReadMore from 'react-native-read-more-text';
import TimeAgo from 'react-native-timeago';
import _ from 'lodash';

const addIcon = require('../../Assets/plus.png')
const bookmarkIcon = require('../../Assets/bookmark.png') 
const brokenImage = require('../../Assets/brokenImage.png')
const avatarIcon = require('../../Assets/avatar.png')

class Search extends Component {        

    componentWillMount() {
        this.props.searchActions()
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

    handleSearch = (text) => {    
        console.log("text", text)                
        const fulldata = _.filter(this.props.data, user => {
            return contains(user, text);
        })
        console.log(fulldata)
        this.props.getDataSearch({fulldata})          
    }
    
    renderHeader = () => {
        return <TextInput
                    placeholder="Search"                    
                    onChangeText={this.handleSearch}
                />
    }

    renderFooter = () => {
        if (!this.props.loading) return null;
    
        return (
          <Loading/>
        );
      };
    

    renderAll() {
        if(this.props.loading) {
            return (
                <Loading/>
            )
        }
        return (
            <View style={{ flex: 1 }}>            
                <FlatList                    
                    data={this.props.fulldata}
                    keyExtractor={(x,i) => i.toString() }
                    renderItem={this._renderItem}                                             
                    ListHeaderComponent={this.renderHeader}
                />
            </View>
        )
    }

    _renderItem = ({ item, index }) => {                                
        
        return (                  
                <CardSection>             
                    <View style={styles.row}>
                        <Image source={{ uri: item.images }} style={styles.images}/>
                        <View>
                            <Text>{item.name}</Text>    
                            <Text>{item.date}</Text>    
                        </View>    
                    </View>                           
                </CardSection>                        
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        height: 60,
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    images: {
        height: 40,
        width: 40,
        marginRight: 15
    }
})

const mapStateToProps = state => {
    const { data, loading, error, query, fulldata } = state.searchReducer;      
    return {
        data,
        loading,
        error,
        query,
        fulldata        
    }
}

export default connect(mapStateToProps, { searchActions, searchChanged, getHandleContain, getDataSearch })(Search);
