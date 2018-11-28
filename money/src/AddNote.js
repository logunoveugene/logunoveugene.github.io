import React from 'react'
import {StyleSheet, View, Picker, TextInput, Button} from 'react-native'
import firebase from 'react-native-firebase'
import _ from "lodash";


export default class Main extends React.Component {
    state = {currentUser: null, account: 'Счет 1', message: '', accountList: ''}

    componentDidMount() {
        const {currentUser} = firebase.auth();
        this.setState({currentUser});


        let starCountRef = firebase.database().ref(currentUser.uid + '/accounts');
        starCountRef.once('value', function (snapshot) {
        }).then((val) => {
            this.setState({accountList: _.values(val.toJSON())})
            console.log(_.values(val.toJSON()))
        })
    };


    handlePostData = () => {
        let {currentUser, message, list, account} = this.state;
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
        this.setState({message: ''});
    };


    render() {
        const {currentUser, list, account, accountList} = this.state

        let accountItem = Array.from(this.state.accountList);

        return (
            <View style={styles.container}>

                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    keyboardType='number-pad'
                    placeholder="Сообщение"
                    onChangeText={message => this.setState({message})}
                    value={this.state.message}
                />
                <Picker
                    selectedValue={this.state.account}
                    style={{height: 50, width: 200}}
                    onValueChange={(itemValue, itemIndex) => this.setState({account: itemValue})}>

                    {accountItem.map((facility, i) => {
                        return <Picker.Item key={i} value={facility.accountName} label={facility.accountName}/>
                    })}

                </Picker>
                <Button title="Опубликовать" onPress={this.handlePostData}/>
                <Button
                    title="Отмена"
                    onPress={() => this.props.navigation.navigate('Main')}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
        marginBottom: 8
    }
});
