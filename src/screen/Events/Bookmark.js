import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import { getBookmark } from '../../actions/getBookmark';
import { methodGet } from '../../actions/methodGetActions';
import { connect } from 'react-redux';
import Loading from '../../components/Loading';
import { Actions } from 'react-native-router-flux';

const getWidth = Dimensions.get('window').width*0.33
const getHeight = Dimensions.get('window').height*0.25

class Bookmark extends Component {
    componentWillMount() {
        this.props.getBookmark()
    }

    componentWillUnmount() {
        this.props.methodGet()
    }

    showEvent(index) {
        Actions.detailBookmark({ detail: index })
    }

    renderFooter = () => {
        if (!this.props.loading) return null;
    
        return (
          <Loading/>
        );
    };

    renderAll() {
        if(this.props.loading) {
            return <Loading/>
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    numColumns={3}
                    keyExtractor={(x,i) => i.toString()}
                    renderItem={this._renderItem}
                    onEndReachedThreshold={0.5}
                    refreshing={this.props.refresh}
                    onRefresh={() => this.props.getBookmark()}
                    ListFooterComponent={this.renderFooter}
                />
            </View>
        )
    }

    render() {        
        return (
            <View style={styles.container}>
                <Header
                    textHeader="Event Brite"                   
                />    
                {this.renderAll()}             
            </View>
        )
    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.row} onPress={() => this.showEvent([
                item.name,                        
                item.description,
                item.register,    
                item.date,                                    
                item.images,
                item.place,
                item.id,                
                item.day
            ])}>
                <Image style={styles.image} source={{ uri: item.images }} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',        
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: getHeight,
        width: getWidth
    }
})

const mapStateToProps = state => {
    const { data, loading, error, refresh } = state.getBookmarkReducer
    return {
        data,
        loading,
        error,
        refresh
    }
}

export default connect(mapStateToProps, { getBookmark, methodGet })(Bookmark);