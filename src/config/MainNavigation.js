import React from 'react';
import {StackNavigator} from 'react-navigation';
import Login from '../screen/Login';
import Register from '../screen/Register';
import Home from '../screen/Home';

export const MainStack = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Register',
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerLeft: null
        }
    }
});