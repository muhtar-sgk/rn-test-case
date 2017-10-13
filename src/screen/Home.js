import React, {Component} from 'react';
import {View,Text,Picker,ToastAndroid} from 'react-native';
import styles from '../styles/MainStyles';
import {Button} from '../common/Button';
import RealmSchema from '../config/RealmSchema';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            cityFrom: '',
            cityTo: '',
            seatClass: '',
            departure:'1 Jan 2017',
            adult: '',
            child: ''
        };
        this.addBooking = this.addBooking.bind(this);
    }

    addBooking(){
        RealmSchema.write(() => {
            RealmSchema.create('booking', {from: this.state.cityFrom, to: this.state.cityTo,
            seatclass: this.state.seatClass, departure: this.state.departure, adult: this.state.adult,
            child: this.state.child});
            this.forceUpdate();
        });

        ToastAndroid.show("booking successfully", ToastAndroid.LONG);
    }

    onChangeCity = (cityFrom) => {
        this.setState({cityFrom: cityFrom});
    }

    onChangeSecondCity = (cityTo) => {
        this.setState({cityTo: cityTo});
    }

    onChangeSeatClass = (seatClass) => {
        this.setState({seatClass: seatClass});
    }

    onChangeAdult = (adult) => {
        this.setState({adult: adult});
    }

    onChangeChild = (child) => {
        this.setState({child: child});
    }

    render(){
        let booking = RealmSchema.objects('booking').filtered('departure = "1 Jan 2017"');
        console.log('data booking '+booking.length);
        return(
            <View>
                <Text style={styles.label}>From</Text>
                <Picker 
                    selectedValue = {this.state.cityFrom}
                    onValueChange = {this.onChangeCity}>
                    <Picker.Item label = "Bandung" value = "Bandung"/>    
                    <Picker.Item label = "Jakarta" value = "Jakarta"/>    
                    <Picker.Item label = "Surabaya" value = "Surabaya"/>    
                </Picker>
                <Text style={styles.label}>To</Text>
                <Picker 
                    selectedValue = {this.state.cityTo}
                    onValueChange = {this.onChangeSecondCity}>
                    <Picker.Item label = "Bandung" value = "Bandung"/>    
                    <Picker.Item label = "Jakarta" value = "Jakarta"/>    
                    <Picker.Item label = "Surabaya" value = "Surabaya"/>    
                </Picker>
                <Text style={styles.label}>Seat Class</Text>
                <Picker
                    selectedValue = {this.state.seatClass}
                    onValueChange = {this.onChangeSeatClass}>
                    <Picker.Item label = "Economy" value = "Economy"/>
                    <Picker.Item label = "Business" value = "Business"/>
                </Picker>
                <Text style={styles.label}>Adult</Text>
                <Picker
                    selectedValue = {this.state.adult}
                    onValueChange = {this.onChangeAdult}>
                    <Picker.Item label = "1" value = "1"/>
                    <Picker.Item label = "2" value = "2"/>
                    <Picker.Item label = "3" value = "3"/>
                    <Picker.Item label = "4" value = "4"/>
                    <Picker.Item label = "5" value = "5"/>
                    <Picker.Item label = "6" value = "6"/>
                    <Picker.Item label = "7" value = "7"/>
                    <Picker.Item label = "8" value = "8"/>
                    <Picker.Item label = "9" value = "9"/>
                    <Picker.Item label = "10" value = "10"/>
                </Picker>
                <Text style={styles.label}>Child</Text>
                <Picker
                    selectedValue = {this.state.child}
                    onValueChange = {this.onChangeChild}>
                    <Picker.Item label = "1" value = "1"/>
                    <Picker.Item label = "2" value = "2"/>
                    <Picker.Item label = "3" value = "3"/>
                    <Picker.Item label = "4" value = "4"/>
                    <Picker.Item label = "5" value = "5"/>
                    <Picker.Item label = "6" value = "6"/>
                    <Picker.Item label = "7" value = "7"/>
                    <Picker.Item label = "8" value = "8"/>
                    <Picker.Item label = "9" value = "9"/>
                    <Picker.Item label = "10" value = "10"/>
                </Picker>
                <Text style={styles.label}></Text>
                <View style={styles.container}>
                    <Button onPress={() => this.addBooking()}>Booking</Button>
                </View>
            </View>
        );
    }
}

export default Home;