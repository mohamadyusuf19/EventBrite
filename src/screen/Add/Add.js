import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import HeaderFunction from '../../components/HeaderFunction';
import { 
    methodPost, 
    nameChanged, 
    descriptionChanged, 
    dateChanged 
} from '../../actions/methodPostActions';
import DateTimePicker from 'react-native-modal-datetime-picker';

const calendarIcon = require('../../Assets/calendar.png')

class Add extends Component {
    constructor() {
        super()
        this.onButtonPress = this.onButtonPress.bind(this)
        this.onButtonPost = this.onButtonPost.bind(this)
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

        let dayNames = ["Sunday", "Monday","Tuesday", "Wednesdey", "Thursday", "Friday", "Saturday"]

        this.props.dateChanged(dayNames[date.getDay()]+", " + date.getDate()+" "+monthNames[date.getMonth()]+" "+date.getFullYear());
        this._hideDateTimePicker();
    };

    onButtonPress = () => { 
        const { name, description, date } = this.props
        this.props.methodPost({ name, description, date })        
    }
    
    onButtonPost = () =>  {
        if(!this.props.name) {
            return Alert.alert("Maaf Event Harus diisi")
        }
        return this.onButtonPress()
    }

    render() {
        console.log(this.props.date)
        return (
            <View style={styles.container}>
                <HeaderFunction                    
                    textFunction="POST"
                    onPress={this.onButtonPost}
                />
                <View style={styles.field}>
                    <Text>Event Name : </Text>
                    <TextInput
                        placeholder="Name"
                        style={{ width: 300, color: '#000' }}
                        value={this.props.name}
                        onChangeText={text => this.props.nameChanged(text)}
                    />
                </View>
                <View style={styles.fieldDes}>
                    <Text>Description : </Text>
                    <TextInput                        
                        style={{ width: 280, color: '#000', marginRight: 20, backgroundColor: '#f1f1f1' }}
                        value={this.props.description}
                        onChangeText={text => this.props.descriptionChanged(text)}
                        multiline = {true}
                        numberOfLines = {10}
                    />    
                </View>                        
                <Text style={styles.dateEvent}>Event Start : </Text>
                <View style={styles.date}>
                    <TextInput
                        editable={false}
                        style={{ width: 300, color: '#000' }}
                        placeholder="Select Date"
                        value={`${this.props.date}`}                
                        onChangeText={text => this.props.dateChanged(text)}
                    />
                    <TouchableOpacity onPress={this._showDateTimePicker}>
                        <Image source={calendarIcon} style={styles.calendar} />
                    </TouchableOpacity>
                </View>    
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    calendar: {
        height: 25,
        width: 25
    },
    date: {
        flexDirection: 'row', 
        margin: 8, 
        justifyContent: 'space-between', 
        alignItems: 'center' 
    },
    dateEvent: {
        marginLeft: 8
    },
    field: {
        flexDirection:'row',
        margin: 8, 
        alignItems: 'center'
    },
    fieldDes: {
        flexDirection:'row',
        margin: 8,         
        height: 100,
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