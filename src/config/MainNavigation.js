import React from 'react';
import {StackNavigator} from 'react-navigation';
import Login from '../screen/Login';
import Register from '../screen/Register';

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
            title: 'Register'
        }
    }
});