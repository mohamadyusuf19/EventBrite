import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import HeaderFunction from '../../components/HeaderFunction';
import { 
    methodPost, 
    nameChanged, 
    descriptionChanged, 
    dateChanged,
    imagesChanged,
    placeChanged,
    registerChanged
} from '../../actions/methodPostActions';
import { getArrow } from '../../actions/arrowFunction';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

const getWidth = Dimensions.get('window').width*0.75
const getWidthDate = Dimensions.get('window').width*0.6
const calendarIcon = require('../../Assets/calendar.png')

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
        
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let dayNames = ["Sunday", "Monday","Tuesday", "Wednesdey", "Thursday", "Friday", "Saturday"]

        this.props.registerChanged(dayNames[date.getDay()]+", " + date.getDate()+" "+monthNames[date.getMonth()]+" "+date.getFullYear());
        
        this._hideDateTimeRegister();
    };

    onButtonPress = () => { 
        const { name, description, date, register, images, place } = this.props
        const day = moment().format()
        this.props.methodPost({ name, description, date, register, day, images, place })        
    }
    
    onButtonPost = () =>  {
        const { name, description, date, register, images, place } = this.props
        if(!name) {
            return (
                Alert.alert(
                    'Perhatian',
                    'Maaf nama event harus diisi !!!',
                    [                                           
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
            ))
        } else if (!description) {
            return (
                Alert.alert(
                    'Perhatian',
                    'Maaf deskripsi harus diisi !!!',
                    [                                           
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
            ))
        } else if (!place) {
            return (
                Alert.alert(
                    'Perhatian',
                    'Maaf tempat harus diisi !!!',
                    [                                           
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
            ))
        } else if (!images) {
            return (
                Alert.alert(
                    'Perhatian',
                    'Maaf gambar harus diisi !!!',
                    [                                           
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
            ))
        } else if (!date) {
            return (
                Alert.alert(
                    'Perhatian',
                    'Maaf tanggal event harus diisi !!!',
                    [                                           
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
            ))
        } else if (!register) {
            return (
                Alert.alert(
                    'Perhatian',
                    'Maaf tanggal register harus diisi !!!',
                    [                                           
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
            ))
        } else {
            return this.onButtonPress()
        }
        
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
                <ScrollView>
                    <View style={styles.field}>
                        <Text>Event Name : </Text>
                        <TextInput
                            placeholder="Name of event"
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
                        <Text>Place : </Text>
                        <TextInput
                            placeholder="Place Event"                        
                            style={{ width: 300, color: '#000' }}
                            value={this.props.place}
                            onChangeText={text => this.props.placeChanged(text)}
                        />
                    </View>                         
                    <View style={styles.field}>
                        <Text>Images : </Text>
                        <TextInput
                            placeholder="Your url images"                        
                            style={{ width: 300, color: '#000' }}
                            value={this.props.images}
                            onChangeText={text => this.props.imagesChanged(text)}
                        />
                    </View>                         
                    <Text style={styles.dateEvent}>Registration End : </Text>
                    <View style={styles.date}>
                        <TextInput
                            editable={false}
                            style={{ width: getWidthDate, color: '#000',  }}
                            placeholder="Day, DD MM YYYY"
                            value={`${this.props.register}`}                
                            onChangeText={text => this.props.registerChanged(text)}
                        />
                        <TouchableOpacity onPress={this._showDateTimeRegister} style={styles.iconReg}>
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
                            style={{ width: getWidthDate, color: '#000' }}
                            placeholder="Day, DD MM YYYY"
                            value={`${this.props.date}`}                
                            onChangeText={text => this.props.dateChanged(text)}
                        />
                        <TouchableOpacity onPress={this._showDateTimePicker} style={styles.iconStart}>
                            <Image source={calendarIcon} style={styles.calendar} />
                        </TouchableOpacity>
                    </View>    
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                    />                                       
                </ScrollView>
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
        alignItems: 'center' 
    },
    dateEvent: {
        marginLeft: 8
    },
    field: {
        flexDirection:'row',
        marginLeft: 8,         
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
    },
    iconReg: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderColor: 'green',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStart: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapStateToProps = state => {
    const { data, loading, error, name, description, date, register, images, place } = state.methodPostReducer
    return {
        data,
        loading,
        error,
        name,
        description,
        date,
        register,
        images,
        place
    }
}

export default connect(mapStateToProps, { 
    methodPost, 
    nameChanged, 
    descriptionChanged,
    dateChanged,  
    registerChanged,
    imagesChanged,
    placeChanged,
    getArrow,
})(Add);