import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { 
    methodPost, 
    nameChanged, 
    descriptionChanged, 
    dateChanged 
} from '../../actions/methodPostActions';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

const date = moment().format("dddd, MMM Do YY"); 

class Add extends Component {
    constructor() {
        super()
        this.onButtonPress = this.onButtonPress.bind(this)
    }

    state = {
        isDateTimePickerVisible: false,
    };
    
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        this.props.dateChanged(date.getDate()+", "+monthNames[date.getMonth()]+" "+date.getFullYear());
        this._hideDateTimePicker();
    };

    onButtonPress = () => { 
        const { name, description, date } = this.props
        this.props.methodPost({ name, description, date })        
    }
    
    render() {
        console.log(this.props.date)
        return (
            <View style={styles.container}>
                <Header/>
                <TextInput
                    placeholder="Name"
                    value={this.props.name}
                    onChangeText={text => this.props.nameChanged(text)}
                />
                <TextInput
                    placeholder="Description"
                    value={this.props.description}
                    onChangeText={text => this.props.descriptionChanged(text)}
                />
                <TextInput
                    placeholder="Date"
                    value={`${this.props.date}`}                
                    onChangeText={text => this.props.dateChanged(text)}
                />
                <TouchableOpacity onPress={this._showDateTimePicker}>
                    <Text>Show DatePicker</Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
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
    const { data, loading, error, name, description, date } = state.methodPostReducer
    return {
        data,
        loading,
        error,
        name,
        description,
        date
    }
}

export default connect(mapStateToProps, { 
    methodPost, 
    nameChanged, 
    descriptionChanged,
    dateChanged,  
})(Add);