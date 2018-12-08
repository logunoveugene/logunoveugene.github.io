import React from 'react'
import {AsyncStorage, StyleSheet, View, Picker, TextInput, Button, TouchableOpacity, Text} from 'react-native'
import firebase from 'react-native-firebase'
import _ from "lodash";
import Keyboard from 'react-native-keyboard';

let model = {

    _keys: [],

    _listeners: [],

    addKey(key) {
        this._keys.push(key);
        this._notify();
    },

    delKey() {
        this._keys.pop();
        this._notify();
    },

    clearAll() {
        this._keys = [];
        this._notify();
    },

    getKeys() {
        return this._keys;
    },

    onChange(listener) {
        if (typeof listener === 'function') {
            this._listeners.push(listener);
        }
    },

    _notify() {
        this._listeners.forEach((listner) => {
            listner(this);
        });
    }
};

export default class Main extends React.Component {
    state = {currentUser: null, account: 'Счет 1', message: '', accountList: '', inputNumber: '', text: '0'}

    static navigationOptions = {
        headerTitle: 'Добавить запись',

    };

    componentDidMount() {
        const {currentUser} = firebase.auth();
        model.onChange((model) => {
            this.setState({text: model.getKeys().join('')});
        });
        this.setState({currentUser});


    };


    handlePostData = () => {
        let {currentUser, message,  account} = this.state;
        let date = new Date();
        let myDate = {
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear()
        };
        firebase
            .database().ref(currentUser.uid + '/node').push(
            {
                userId: currentUser.uid,
                sum: message,
                date: myDate,
                account: account

            }
        ).then(() => {
            console.log("данные ушли");
        }).catch((error) => {
            console.log(error);
        });

        AsyncStorage.setItem('5595', {
            userId: currentUser.uid,
            sum: message,
            date: myDate,
            account: account
        });

        this.setState({message: ''});
    };




    _handleClear() {
        model.clearAll();
    }

    _handleDelete() {
        model.delKey();
    }

    _handleKeyPress(key) {
        model.addKey(key);
    }

    render() {
        const {currentUser, list, account, accountList, inputNumber} = this.state

        let accountItem = Array.from(this.state.accountList);


        return (
            <View style={styles.container}>

                    <View style={styles.inputWrap}>
                        <TextInput
                            style={styles.textInput}
                            autoCapitalize="none"
                            placeholder="Примечание"
                            onChangeText={message => this.setState({message})}
                            value={this.state.message}
                        />
                        <Text>{inputNumber}</Text>
                    </View>
                    <Picker
                        selectedValue={this.state.account}
                        style={{height: 50, width: 200}}
                        onValueChange={(itemValue, itemIndex) => this.setState({account: itemValue})}>

                        {accountItem.map((facility, i) => {
                            return <Picker.Item key={i} value={facility.accountName} label={facility.accountName}/>
                        })}

                    </Picker>


                    <Text>{this.state.text}</Text>



                <Keyboard
                    keyboardType="decimal-pad"
                    onClear={this._handleClear.bind(this)}
                    onDelete={this._handleDelete.bind(this)}
                    onKeyPress={this._handleKeyPress.bind(this)}
                />
                <TouchableOpacity
                    style={styles.fullButton}
                    onPress={this.handlePostData}
                >
                    <Text> Записать </Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',

    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        width: '25%',
        padding: 10
    },
    fullButton:{
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#ffda3a',
        padding: 20
    },

    textInput: {
        height: 40,
        width: '50%',

        marginTop: 8,
        marginBottom: 8
    },
    keyboard: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    inputWrap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});
