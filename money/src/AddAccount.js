import React from 'react'
import {StyleSheet, View, AsyncStorage, TextInput, Text, Button} from 'react-native'
import firebase from 'react-native-firebase'
import _ from "lodash";


export default class Main extends React.Component {
    state = {currentUser: null, accountName: '', amount: '', accountList:[]}


    static navigationOptions = ({navigation}) => {

        return {
            headerTitle: 'Мои счета'


        }
    };




    async componentDidMount() {
        const {currentUser} = firebase.auth();
        this.setState({currentUser});



        try {
            var storeddAccounts = await AsyncStorage.getItem('accountsList');
            if (storeddAccounts == null) {
                storeddAccounts = []
            } else {
                storeddAccounts = JSON.parse(storeddAccounts);
            }
            this.setState({accountList: storeddAccounts})
            console.log(storeddAccounts)
        } catch (error) {
            alert("Что-то пошло не так...")
        }

    }




    handlePostData = async () => {
        const {accountName, amount} = this.state;
        let addedAccount = {
            title: accountName,
            amount: amount
        };

        console.log(addedAccount)
        try {
            await AsyncStorage.removeItem('accountsList');
            var accountsList = await AsyncStorage.getItem('accountsList');
            if (accountsList == null) {
                accountsList = []
                console.log(accountsList)
            } else {
                accountsList = JSON.parse(accountsList);
                console.log(accountsList)
            }

        } catch (error) {
            alert("Что-то пошло не так1...")
        }
        accountsList.push(addedAccount);
        try {
            await AsyncStorage.setItem('accountsList', JSON.stringify(accountsList));
        } catch (error) {
            alert("Что-то пошло не так.2..")
        }
        this.setState({accountName: ''});

        // this.props.navigation.navigate('Main')
    };


    render() {
        const {accountName, amount, accountList} = this.state
        console.log(accountList)
        return (
            <View style={styles.container}>
                {accountList.map((i)=>(
                    <Text key={i.title}>{i.title} / {i.amount}</Text>

                ))}
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
