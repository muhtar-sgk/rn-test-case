import React, {Component} from 'react';
import {View,Text} from 'react-native';
import styles from '../styles/MainStyles';
import {EditText} from '../common/EditText';
import {Button} from '../common/Button';
import Realm from 'realm';
var realm;

class Login extends Component{
    render(){
        //let nama = realm.objects('user').filtered('namalengkap = "muhtar"');
        //console.log('nama '+nama.length);
        return(
            <View style={styles.container}>
                <EditText
                    placeholder="username"
                />
                <EditText
                    placeholder="password"
                    secureTextEntry
                />
                <Button>Login</Button>
                <Button onPress={()=>this.props.navigation.navigate('Register')}>Register</Button>
            </View>
        );
    }
}
export default Login;