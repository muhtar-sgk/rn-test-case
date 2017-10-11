import React,{Component} from 'react';
import {View,Text} from 'react-native';
import styles from '../styles/MainStyles';
import {EditText} from '../common/EditText';
import {Button} from '../common/Button';
import Realm from 'realm';
var realm;

class Register extends Component{
    constructor(props){
        super(props);
        realm = new Realm({
            schema: [
                {
                    name: 'user',
                    properties: {
                        namalengkap: 'string',
                        username: 'string',
                        email: 'string',
                        no_telpon: 'string',
                        password: 'string'
                    }
                }
            ],
            schemaVersion: 5
        });
        this.state = {
            namalengkap: '',
            username: '',
            email: '',
            no_telpon: '',
            password: '',
            ulangi_password: '' 
        }
        this.addData = this.addData.bind(this);
    }

    addData(){
        realm.write(() => {
            realm.create('user', {namalengkap: this.state.namalengkap, username: this.state.username,
            email: this.state.email, no_telpon: this.state.no_telpon, password: this.state.password});
            this.forceUpdate();
        });
    }

    render(){
        let user = realm.objects('user').filtered('namalengkap = "muhtar"');
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
                    placeholder="no telpon"
                    onChangeText={(no_telpon) => this.setState({no_telpon})}
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
                <Button onPress={() => this.addData()}>Register</Button>
            </View>
        );
    }

}

export default Register;