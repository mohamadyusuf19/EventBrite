import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import HeaderFunction from '../../components/HeaderFunction';
import { 
    methodPost, 
    nameChanged, 
    descriptionChanged, 
    dateChanged,
    imagesChanged,
    registerChanged
} from '../../actions/methodPostActions';
import { getArrow } from '../../actions/arrowFunction';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

const getWidth = Dimensions.get('window').width*0.75
const calendarIcon = require('../../Assets/calendar.png')
const day = moment().format("dddd, Do MMM YYYY");;

class Add extends Component {
    constructor() {
        super()
        this.onButtonPress = this.onButtonPress.bind(this)
        this.onButtonPost = this.onButtonPost.bind(this)
    }

    state = {
        isDateTimePickerVisible: false,
        isDateTimeRegisterVisible: false
    };
    
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    _showDateTimeRegister = () => this.setState({ isDateTimeRegisterVisible: true });
    _hideDateTimeRegister = () => this.setState({ isDateTimeRegisterVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let dayNames = ["Sunday", "Monday","Tuesday", "Wednesdey", "Thursday", "Friday", "Saturday"]

        this.props.dateChanged(dayNames[date.getDay()]+", " + date.getDate()+" "+monthNames[date.getMonth()]+" "+date.getFullYear());
        this._hideDateTimePicker();
    };

    _handleDateRegistration = (date) => {
        console.log('A date has been picked: ', date);
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let dayNames = ["Sunday", "Monday","Tuesday", "Wednesdey", "Thursday", "Friday", "Saturday"]

        this.props.registerChanged(dayNames[date.getDay()]+", " + date.getDate()+" "+monthNames[date.getMonth()]+" "+date.getFullYear());
        this._hideDateTimePicker();
    };

    onButtonPress = () => { 
        const { name, description, date, register, images } = this.props
        this.props.methodPost({ name, description, date, register, day, images })        
    }
    
    onButtonPost = () =>  {
        if(!this.props.name) {
            return (
                Alert.alert(
                    'Perhatian',
                    'Maaf field harus diisi',
                    [                                           
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
            ));
        }
        return this.onButtonPress()
    }

    render() {
        console.log(this.props.date)
        return (
            <View style={styles.container}>
                <HeaderFunction                
                    onPressArrow={this.props.getArrow}    
                    textFunction="POST"
                    onPress={this.onButtonPost}
                />
                <View style={styles.field}>
                    <Text>Event Name : </Text>
                    <TextInput
                        placeholder="Name"
                        autoFocus={true}
                        style={{ width: 300, color: '#000' }}
                        value={this.props.name}
                        onChangeText={text => this.props.nameChanged(text)}
                    />
                </View>
                <View style={styles.fieldDes}>
                    <Text style={{ marginTop: 10 }}>Description : </Text>
                    <View style={styles.textAreaContainer} >
                        <TextInput
                        style={styles.textArea}                        
                        placeholder={"Type something"}
                        placeholderTextColor={"grey"}
                        numberOfLines={10}
                        multiline={true}
                        value={this.props.description}
                        onChangeText={text => this.props.descriptionChanged(text)}
                        />
                    </View>
                </View>
                <View style={styles.field}>
                    <Text>Images : </Text>
                    <TextInput
                        placeholder="your url"                        
                        style={{ width: 300, color: '#000' }}
                        value={this.props.images}
                        onChangeText={text => this.props.imagesChanged(text)}
                    />
                </View>                         
                <Text style={styles.dateEvent}>Registration End : </Text>
                <View style={styles.date}>
                    <TextInput
                        editable={false}
                        style={{ width: 300, color: '#000' }}
                        placeholder="Select Date"
                        value={`${this.props.register}`}                
                        onChangeText={text => this.props.registerChanged(text)}
                    />
                    <TouchableOpacity onPress={this._showDateTimeRegister}>
                        <Image source={calendarIcon} style={styles.calendar} />
                    </TouchableOpacity>
                </View>    
                <DateTimePicker
                    isVisible={this.state.isDateTimeRegisterVisible}
                    onConfirm={this._handleDateRegistration}
                    onCancel={this._hideDateTimeRegister}
                />    
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
        alignItems: 'flex-start', 
        marginLeft: 8,                         
    },
    textAreaContainer: {
        borderColor: '#f1f1f1',
        borderWidth: 1,
        paddingLeft: 5,
        width: getWidth
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
        textAlignVertical: 'top',        
        top: 0,
        left: 0
    }
})

const mapStateToProps = state => {
    const { data, loading, error, name, description, date, register, images } = state.methodPostReducer
    return {
        data,
        loading,
        error,
        name,
        description,
        date,
        register,
        images
    }
}

export default connect(mapStateToProps, { 
    methodPost, 
    nameChanged, 
    descriptionChanged,
    dateChanged,  
    registerChanged,
    imagesChanged,
    getArrow,
})(Add);