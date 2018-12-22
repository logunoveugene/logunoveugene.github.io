import React from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    AsyncStorage,
    TextInput,
    Text,
    Button
} from 'react-native'
import firebase from 'react-native-firebase'

import Fuse from 'fuse.js'

import _ from "lodash";
import {banksAndPrefixes} from './data/base/BaseConstant'

export default class Main extends React.Component {
    state = {
        currentUser: null,

        title: '',
        startBalance: '',
        currentBalance: '',

        filterValue: '',
        filteredBanks: [],
        bankAccountsList: []
    };

    async componentDidMount() {
        try {
            // await AsyncStorage.removeItem('bankAccountsList')
            let storedAccounts = await AsyncStorage.getItem('bankAccountsList');
            if (storedAccounts == null) {
                storedAccounts = [
                    {
                        "title": "Альфа банк",
                        "startBalance": 10000,
                        "currentBalance": 9950
                    },
                    {
                        "title": "Восточный банк",
                        "startBalance": 10000,
                        "currentBalance": 9950
                    }
                ]
            } else {
                storedAccounts = JSON.parse(storedAccounts);
            }
            this.setState({bankAccountsList: storedAccounts});
        } catch (error) {
            alert("Что-то пошло не так...")
        }
    }


    // handlePostData = async () => {
    //     const {accountName, amount} = this.state;
    //     let addedAccount = {
    //         title: accountName,
    //         amount: amount,
    //         id:''
    //     };
    //
    //     console.log(addedAccount)
    //     try {
    //         // await AsyncStorage.removeItem('accountsList');
    //         var accountsList = await AsyncStorage.getItem('accountsList');
    //         if (accountsList == null) {
    //             accountsList = []
    //             console.log(accountsList)
    //         } else {
    //             accountsList = JSON.parse(accountsList);
    //             console.log(accountsList)
    //         }
    //     } catch (error) {
    //         alert("Что-то пошло не так1...")
    //     }
    //
    //     addedAccount.id = accountsList.length + 1
    //     accountsList.push(addedAccount);
    //     try {
    //         await AsyncStorage.setItem('accountsList', JSON.stringify(accountsList));
    //     } catch (error) {
    //         alert("Что-то пошло не так.2..")
    //     }
    //     this.setState({accountName: ''});
    //
    //
    //     // this.componentDidMount()
    //     // this.props.navigation.navigate('Main')
    //
    // };

    filterData(value) {


        let options = {
            threshold: 0.3,
            keys: ['name', 'nameEn']

        }
        let fuse = new Fuse(banksAndPrefixes, options)

        let filteredBanks = fuse.search(value)

        console.log(JSON.stringify(filteredBanks))

        //
        // let filteredBanks = _.filter(banksAndPrefixes, {'name': value});
        this.setState({
            filterValue: value,
            filteredBanks: filteredBanks
        })
    }

    render() {
        const {accountName, amount, accountList} = this.state

        return (
            <View style={styles.container}>

                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    keyboardType='default'
                    placeholder="Название счета"
                    onChangeText={value => this.filterData(value)}
                    value={this.state.filterValue}
                />

                <ScrollView>
                    {this.state.filteredBanks.map((i) => (
                        <View  key={i.name} style={{backgroundColor: `${i.backgroundColor}`}}>
                            <Text style={{color: `${i.text}`}} >{i.name}</Text>
                        </View>

                    ))}
                </ScrollView>


                {/*<TextInput*/}
                {/*style={styles.textInput}*/}
                {/*autoCapitalize="none"*/}
                {/*keyboardType='default'*/}
                {/*placeholder="Название счета"*/}
                {/*onChangeText={accountName => this.setState({title:accountName})}*/}
                {/*value={this.state.accountName}*/}
                {/*/>*/}
                {/*<TextInput*/}
                {/*style={styles.textInput}*/}
                {/*autoCapitalize="none"*/}
                {/*keyboardType='number-pad'*/}
                {/*placeholder="Баланс"*/}
                {/*onChangeText={amount => this.setState({startBalance:amount})}*/}
                {/*value={this.state.amount}*/}
                {/*/>*/}

                {/*<Button title="Опубликовать" onPress={this.handlePostData}/>*/}
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
