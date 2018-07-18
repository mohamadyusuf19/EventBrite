import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { methodPost, nameChanged } from '../../actions/methodPostActions';

class Add extends Component {
    constructor() {
        super()
        this.onButtonPress = this.onButtonPress.bind(this)
    }

    onButtonPress = () => { 
        const { name } = this.props
        this.props.methodPost({ name })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <TextInput
                    placeholder="Name"
                    value={this.props.name}
                    onChangeText={text => this.props.nameChanged(text)}
                />
                <TouchableOpacity onPress={this.onButtonPress} style={styles.button}>
                    <Text style={styles.textButton}>POST</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
       height: 40,
       width: 100,
       backgroundColor: '#000',
       alignSelf: 'center',
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 5
    },
    textButton: {
        color: '#fff',
        fontSize: 16
    } 
})

const mapStateToProps = state => {
    const { data, loading, error, name, description } = state.methodPostReducer
    return {
        data,
        loading,
        error,
        name,
        description
    }
}

export default connect(mapStateToProps, { methodPost, nameChanged })(Add);