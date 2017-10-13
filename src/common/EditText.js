import React from 'react';
import {TextInput} from 'react-native';
import styles from '../styles/MainStyles';

export const EditText = ({onChangeText,placeholder,secureTextEntry}) => {
    return(
            <TextInput style={styles.editText}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                onChangeText={onChangeText}
                underlineColorAndroid="transparent"
            />
    );
};