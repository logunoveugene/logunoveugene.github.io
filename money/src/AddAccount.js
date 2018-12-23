import React from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    AsyncStorage,
    TouchableOpacity,
    TextInput,
    Text,
    Button, Picker, Keyboard
} from 'react-native'
import firebase from 'react-native-firebase'

import Fuse from 'fuse.js'

import _ from "lodash";
import {banksAndPrefixes} from './data/base/BaseConstant'
import dayjs from "dayjs";

export default class Main extends React.Component {
    state = {
        currentUser: null,

        title: '',
        bankTitle: '',
        startBalance: '',
        currentBalance: '',
        bankBgColor: '',
        bankTextColor: '',
        currency: '',

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
                        "title": "",
                        "bankTitle": "Альфа банк",
                        "bankBgColor": "#ef3124",
                        "bankTextColor": "#ffffff",
                        "startBalance": 10000,
                        "currentBalance": 9950,
                        "currency": "Рубли"
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


    handlePostData = async () => {
        const {
            title,
            bankTitle,
            startBalance,
            bankBgColor,
            bankTextColor,
            currency
        } = this.state;


        let addedAccount = {
            title: title,
            bankTitle: bankTitle,
            startBalance: startBalance,
            currentBalance: startBalance,
            bankBgColor: bankBgColor,
            bankTextColor: bankTextColor,
            currency: currency,
        };

        try {
            await AsyncStorage.removeItem('accountsList');
            var accountsList = await AsyncStorage.getItem('bankAccountsList');
            if (accountsList == null) {
                accountsList = []

            } else {
                accountsList = JSON.parse(accountsList);

            }
        } catch (error) {
            alert("Что-то пошло не так1...")
        }
        accountsList.push(addedAccount);
        try {
            await AsyncStorage.setItem('bankAccountsList', JSON.stringify(accountsList));
        } catch (error) {
            alert("Что-то пошло не так.2..")
        }
    };

    filterData(value) {
        let options = {
            threshold: 0.3,
            keys: ['name', 'nameEn']
        };
        let fuse = new Fuse(banksAndPrefixes, options)
        let filteredBanks = fuse.search(value)
        this.setState({
            filterValue: value,
            filteredBanks: filteredBanks,
            bankTitle: ""
        })
    }

    _chooseBank(i) {
        this.filterData(i.name)
        this.setState({
            filterValue: i.name,
            bankTitle: i.name,
            bankBgColor: i.backgroundColor,
            bankTextColor: i.text,
        });
    }

    render() {
        let currencyList = ["Рубли (₽)", "Доллары ($)", "Евро (€)"]
        return (
            <View style={styles.container}>


                <View style={styles.inputWrap}>
                    <TextInput
                        style={styles.textInputFull}
                        autoCapitalize="none"
                        keyboardType='default'
                        placeholder="Название счета"
                        onChangeText={value => this.setState({title: value})}
                        value={this.state.title}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <TextInput
                        style={styles.textInput}
                        autoCapitalize="none"
                        keyboardType='numeric'
                        placeholder="Баланс"
                        onChangeText={value => this.setState({startBalance: value})}
                        value={this.state.startBalance}
                    />
                    <Picker
                        mode="dropdown"
                        selectedValue={this.state.currency}
                        style={{height: 50, width: 130, marginRight: 12}}
                        onValueChange={((itemValue) => this.setState({currency: itemValue}))}>
                        {currencyList.map((i) => (
                            <Picker.Item
                                key={i}
                                label={i}
                                value={i}
                            />
                        ))}
                    </Picker>
                </View>

                <View style={styles.inputWrap}>
                    <TextInput
                        style={styles.textInputFull}
                        autoCapitalize="none"
                        keyboardType='default'
                        placeholder="Банк"
                        onChangeText={value => this.filterData(value)}
                        value={this.state.filterValue}
                    />
                    {this.state.bankTitle !== "" && <View style={{
                        position: 'absolute',
                        width: 14,
                        height: 14,
                        borderRadius: 10,
                        top: 16,
                        right: 16,
                        backgroundColor: `${this.state.bankBgColor}`
                    }}/>
                    }

                </View>
                {(this.state.bankTitle === "") &&
                <ScrollView
                    horizontal="true"
                    style={{width: "100%", padding: 10,}}>
                    {this.state.filteredBanks.map((i) => (
                        <TouchableOpacity
                            key={i.name}
                            style={{
                                backgroundColor: `${i.backgroundColor}`,
                                height: 32,
                                paddingVertical: 8,
                                paddingHorizontal: 15,
                                marginRight: 10,
                                borderRadius: 25
                            }}
                            onPress={() => this._chooseBank(i)}
                        >
                            <Text style={{color: `${i.text}`, fontSize: 12}}>{i.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                }

                <TouchableOpacity style={styles.button} onPress={this.handlePostData}>
                    <Text>Опубликовать</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


    button: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#ffda3a',
        padding: 20
    },
    inputWrap: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,1)',
        justifyContent: 'space-between',
        height: 50,
        width: "100%",
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 1,
        position: "relative"
    },
    textInput: {
        height: 40,
        width: '50%',
        borderColor: 'gray',
        fontSize: 16,
        paddingLeft: 12

    },
    textInputFull: {
        width: '100%',
        fontSize: 16,
        paddingLeft: 12
    }
});
