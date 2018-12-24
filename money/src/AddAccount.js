import React from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    AsyncStorage,
    TouchableOpacity,
    TextInput,
    Text,
    Button,
    Dimensions,
    Picker,
    Modal,
    Keyboard
} from 'react-native'
import firebase from 'react-native-firebase'

import Fuse from 'fuse.js'

import _ from "lodash";
import {banksAndPrefixes, currencyList} from './data/base/BaseConstant'
import dayjs from "dayjs";


var width = Dimensions.get('window').width;


export default class Main extends React.Component {
    state = {
        currentUser: null,

        title: '',
        bankTitle: '',
        startBalance: '',
        currentBalance: '',
        bankBgColor: '',
        bankTextColor: '',


        modalVisible: false,

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
        this.setState({
            currency: currencyList[0]
        })
    }


    handlePostData = async () => {
        const {
            title,
            bankTitle,
            startBalance,
            bankBgColor,
            bankTextColor,
            currency,


        } = this.state;


        let addedAccount = {
            title: title,
            bankTitle: bankTitle,
            startBalance: startBalance,
            currentBalance: startBalance,
            bankBgColor: bankBgColor,
            bankTextColor: bankTextColor,
            currencyTitle: currency.title,
            currencySymbol: currency.symbol,
            currencyCode: currency.code,

        };

        try {
            await AsyncStorage.removeItem('bankAccountsList');
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

        this.setState({
            title: '',
            bankTitle: '',
            startBalance: '',
            currentBalance: '',
            bankBgColor: '',
            bankTextColor: '',
            currency: '',
            filterValue:'',
            filteredBanks: [],

        });
        this.componentDidMount()
        this.setModalVisible(!this.state.modalVisible);

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
        Keyboard.dismiss()
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }


    render() {

        return (
            <View style={styles.container}>
                <View style={styles.fixedHeader}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}>
                        <Text>Назад</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>
                        <Text>добавить</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {this.state.bankAccountsList.map((i, index) => (
                        <View
                            key={index}
                            style={{
                                width: width - 20,
                                backgroundColor: "#ffffff",
                                height: 90,
                                borderRadius: 10,
                                marginHorizontal: 10,
                                padding: 20,
                                position: "relative",
                                marginTop: 10

                            }}>
                            <Text
                                style={{
                                    fontSize: 22
                                }}>{i.title}</Text>
                            <Text
                                style={{
                                    fontSize: 14
                                }}>{i.currentBalance}{i.currencySymbol}</Text>


                        </View>
                    ))
                    }
                </ScrollView>


                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: "relative",
                            backgroundColor: 'rgba(0,0,0,0.4)'
                        }}>
                        <View style={{
                            width: "100%",
                            position: "absolute",
                            bottom: 0,
                            backgroundColor: "#ffffff",
                            height: 260
                        }}>
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
                                            key={i.title}
                                            label={i.title}
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
                                keyboardShouldPersistTaps="handled"
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
                    </View>
                </Modal>


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
        padding: 20,

        bottom: 0,
        left: 0
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


    fixedHeader: {
        backgroundColor: 'rgba(255,255,255,1)',
        elevation: 1,
        flexDirection: 'row',
        width: '100%',
        height: 50,

        position: 'relative',
    },
    textInputFull: {
        width: '100%',
        fontSize: 16,
        paddingLeft: 12
    }
});
