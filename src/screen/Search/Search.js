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
import HeaderSearch from '../../components/HeaderSearch';
import _ from 'lodash';

class Search extends Component {        

    componentWillMount() {
        this.props.searchActions()
    }

    render() {  
        console.log(this.props.data)       
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>                                     
                    <HeaderSearch
                        onChangeText={this.handleSearch}
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
    
    renderData = () => {
        if(this.props.fulldata) {
            return this.props.data
        } else {
            return this.props.fulldata
        }       
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
            <View style={{ flex: 1, backgroundColor: '#fff' }}>            
                <FlatList                    
                    data={this.props.fulldata}
                    keyExtractor={(x,i) => i.toString() }
                    renderItem={this._renderItem}                                                  
                    onEndReachedThreshold={0.5}
                    refreshing={this.props.refresh}
                    onRefresh={() => this.props.searchActions()}
                    ListFooterComponent={this.renderFooter}
                />
            </View>
        )
    }

    _renderItem = ({ item, index }) => {                                
        
        return (            
            <TouchableOpacity>
                <CardSection>             
                    <View style={styles.row}>
                        <Image source={{ uri: item.images }} style={styles.images}/>
                        <View>
                            <Text>{item.name}</Text>    
                            <Text>{item.place}</Text>    
                            <Text>{item.date}</Text>    
                        </View>    
                    </View>                           
                </CardSection>
            </TouchableOpacity>                              
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    images: {
        height: 40,
        width: 40,
        marginRight: 20
    },
    imagesIcon: {
        height: 20,
        width: 20,
        marginRight: 15
    },
    search: {
        height: 60,
        backgroundColor: '#fff',
        alignItems: 'center',        
        elevation: 8, 
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1,       
    }
})

const mapStateToProps = state => {
    const { data, loading, error, query, fulldata, refresh } = state.searchReducer;      
    return {
        data,
        loading,
        error,
        query,
        fulldata,
        refresh        
    }
}

export default connect(mapStateToProps, { searchActions, searchChanged, getHandleContain, getDataSearch })(Search);
