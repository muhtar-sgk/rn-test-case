import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles/MainStyles';

export const Button = ({onPress, children}) => {
    return(
        <TouchableOpacity 
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
};