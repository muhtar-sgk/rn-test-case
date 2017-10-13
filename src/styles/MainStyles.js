import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

export default {
    editText: {
        color: '#000000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        width: width - 40,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        height: 50
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
    },
    containerRegister: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1
    },
    text: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#FFFFFF',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    button: {
        backgroundColor:'#2196F3',
        marginTop:10,
        width: width - 40,
        height: 50
    },
    label: {
        marginTop:10,
        fontSize: 15,
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
}