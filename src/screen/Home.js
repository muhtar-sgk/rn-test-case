import React, {Component} from 'react';
import {View,Text} from 'react-native';
import styles from '../styles/MainStyles';

class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        );
    }
}

export default Home;