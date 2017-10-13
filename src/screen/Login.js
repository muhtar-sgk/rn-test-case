import React, {Component} from 'react';
import {View,Text,ToastAndroid} from 'react-native';
import styles from '../styles/MainStyles';
import {EditText} from '../common/EditText';
import {Button} from '../common/Button';
import Realm from 'realm';
import RealmSchema from '../config/RealmSchema';
import {HomeStack} from '../config/MainNavigation';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onPressLogin(){
        let data = RealmSchema.objects('user')
        .filtered('username = "'+this.state.username+'" AND password = "'+this.state.password+'"');

        if(data != 0){
            this.props.navigation.navigate('Home');
        } else if(this.state.username == ''){
            ToastAndroid.show('username tidak boleh kosong', ToastAndroid.LONG);
        } else if(this.state.password == ''){
            ToastAndroid.show('password tidak boleh kosong', ToastAndroid.LONG);
        } else {
            ToastAndroid.show('maaf username atau password anda salah', ToastAndroid.LONG);
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <EditText
                    placeholder="username"
                    onChangeText={(username) => this.setState({username})}
                />
                <EditText
                    placeholder="password"
                    secureTextEntry
                    onChangeText={(password) => this.setState({password})}
                />
                <Button onPress={() => this.onPressLogin()}>Login</Button>
                <Button onPress={()=>this.props.navigation.navigate('Register')}>Register</Button>
            </View>
        );
    }
}

export default Login;