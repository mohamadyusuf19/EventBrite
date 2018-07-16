import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Home from '../screen/Home/Home';
import Account from '../screen/Account/Account';
import Event from '../screen/Events/Event';
import Search from '../screen/Search/Search';
import Add from '../screen/Add/Add';

const homeIcon = require('../Assets/home.png')
const eventIcon = require('../Assets/event.png')
const userIcon = require('../Assets/user.png')
const searchIcon = require('../Assets/search.png')
const addIcon = require('../Assets/plus.png')

const bottomNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={homeIcon}
                    style={[styles.icon, { tintColor }]}
                />
            )
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={searchIcon}
                    style={[styles.icon, { tintColor }]}
                />
            )
        }
    },
    Add: {
        screen: Add,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={addIcon}
                    style={[styles.icon, { tintColor }]}
                />
            )            
        }
    },
    Event: {
        screen: Event,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={eventIcon}
                    style={[styles.icon, { tintColor }]}
                />
            )
        }
    },
    Account: {
        screen: Account,
        navigationOptions: {
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={userIcon}
                    style={[styles.icon, { tintColor }]}
                />
            )
        }
    }
},{
    tabBarOptions: {
        activeTintColor: '#717f78',
        inactiveTintColor: '#000',
        indicatorStyle: { backgroundColor: 'red' },
        labelStyle: {
            fontSize: 14,
        },
        style: {
            backgroundColor: '#fff',
            height: 60
        }
    }
})

const AppNavigator = createStackNavigator({
    Home: {
        screen: bottomNavigator,
        navigationOptions: {
            header: null
        }
    }
})

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20
    }
});

export default AppNavigator