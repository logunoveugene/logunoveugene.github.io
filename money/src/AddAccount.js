import React from 'react'
import {StyleSheet, View, TextInput, Button} from 'react-native'
import firebase from 'react-native-firebase'
import _ from "lodash";


export default class Main extends React.Component {
    state = {currentUser: null, accountName: '', amount: ''}

    componentDidMount() {
        const {currentUser} = firebase.auth();
        this.setState({currentUser});



    };


    handlePostData = () => {
        let {currentUser, accountName, amount} = this.state;
        let date = new Date();
        let myDate = {
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear()
        };



        firebase
            .database().ref(currentUser.uid + '/accounts').push(
            {
                userId: currentUser.uid,
                accountName: accountName,
                date: myDate,
                amount: amount

            }
        ).then(() => {
            console.log("данные ушли");
        }).catch((error) => {
            console.log(error);
        });
        this.setState({accountName: ''});
        this.setState({amount: ''});
    };


    render() {
        const {accountName, amount} = this.state
        return (
            <View style={styles.container}>

                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    keyboardType='default'
                    placeholder="Название счета"
                    onChangeText={accountName => this.setState({accountName})}
                    value={this.state.accountName}
                />
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    keyboardType='number-pad'
                    placeholder="Баланс"
                    onChangeText={amount => this.setState({amount})}
                    value={this.state.amount}
                />

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
