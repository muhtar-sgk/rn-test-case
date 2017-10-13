import React,{Component} from 'react';
import {View,Text} from 'react-native';
import styles from '../styles/MainStyles';
import {EditText} from '../common/EditText';
import {Button} from '../common/Button';
import Realm from 'realm';
import RealmSchema from '../config/RealmSchema';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            namalengkap: '',
            username: '',
            email: '',
            telepon: '',
            password: '',
            ulangi_password: '' 
        }
        this.addUser = this.addUser.bind(this);
    }

    addUser(){
        RealmSchema.write(() => {
            RealmSchema.create('user', {namalengkap: this.state.namalengkap, username: this.state.username,
            email: this.state.email, telepon: this.state.telepon, password: this.state.password});
            this.forceUpdate();
        });

        this.props.navigation.navigate('Login');
    }

    render(){
        let user = RealmSchema.objects('user').filtered('namalengkap = "muhtar"');
        console.log('data user '+user.length);
        return(
            <View style={styles.containerRegister}>
                <EditText
                    placeholder="nama lengkap"
                    onChangeText={(namalengkap) => this.setState({namalengkap})}
                />
                <EditText
                    placeholder="username"
                    onChangeText={(username) => this.setState({username})}
                />
                <EditText
                    placeholder="email"
                    onChangeText={(email) => this.setState({email})}
                />
                <EditText
                    placeholder="telepon"
                    onChangeText={(telepon) => this.setState({telepon})}
                />
                <EditText
                    placeholder="password"
                    onChangeText={(password) => this.setState({password})}
                    secureTextEntry
                />
                <EditText
                    placeholder="ulangi password"
                    onChangeText={(ulangi_password) => this.setState({ulangi_password})}
                    secureTextEntry
                />
                <Button onPress={() => this.addUser()}>Register</Button>
            </View>
        );
    }

}

export default Register;