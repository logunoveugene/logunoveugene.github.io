import React from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    AsyncStorage,
    TouchableHighlight,
    Alert,
    TextInput,
    Text,
    Modal,
    Dimensions,
    Picker,

    Keyboard, TouchableNativeFeedback
} from 'react-native'


import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './font/selection';

const IconM = createIconSetFromIcoMoon(icoMoonConfig);

import firebase from 'react-native-firebase'
import ActionButton from 'react-native-action-button';
import Fuse from 'fuse.js'

import _ from "lodash";
import {banksAndPrefixes, currencyList, bankAccountsListDefault} from './data/base/BaseConstant'
import dayjs from "dayjs";

import ActionModal from './ActionModal'

import BoxShadow from './shadow'
import {sampleNodes} from "../sampleNodes";
import {NavigationEvents} from "react-navigation";


var width = Dimensions.get('window').width;


export default class Main extends React.Component {
    state = {
        currentUser: null,

        id: null,
        title: null,
        bankTitle: null,
        startBalance: null,
        currentBalance: null,
        bankBgColor: null,
        bankTextColor: null,


        titleIsValid: false,
        startBalanceIsValid: false,
        validErrorIsShown: false,

        modalVisible: false,
        modalActionVisible: false,
        accountReadyForDel: null,

        filterValue: null,
        filteredBanks: [],
        bankAccountsList: [],
        fullBankAccountsList: [],

        fullNodeList: [],
    };

    async componentDidMount() {
        try {

            let storedAccounts = await AsyncStorage.getItem('bankAccountsList');
            let storedNote = await AsyncStorage.getItem('nodeList');
            storedNote = JSON.parse(storedNote)
            // console.log(storedNote);


            if (storedAccounts == null) {
                storedAccounts = bankAccountsListDefault
            } else {
                storedAccounts = JSON.parse(storedAccounts);
            }
            this.setState({
                bankAccountsList: storedAccounts,
                fullNodeList: storedNote
            }, () => {
                this.pushToLS();
                this.sum()
            });
        } catch (error) {
            alert("Что-то пошло не так...")
        }
        this.setState({
            currency: currencyList[0]
        })


    }

    sum = () => {
        var group3 = [];
        let finalAccountList = []
        var group = _.groupBy(this.state.fullNodeList, 'bankAccountTitle');

        group = _.values(group);


        _.map(group, ((i, index) => {
            group3.push(
                _.reduce(i, function (p, t) {
                    return {
                        sum: (p.sum) += +t.sum,
                        plus: (p.plus) += (+t.sum > 0) ? +t.sum : +0,
                        minus: (p.minus) += (+t.sum < 0) ? +t.sum : +0,
                        currency: p.currency = t.currency,
                        title: p.title = t.bankAccountTitle,
                    };
                }, {sum: 0, currency: '', title: '', plus: 0, minus: 0}))
        }));

        let data = [...this.state.bankAccountsList];

        data.map((i) => {
            let account = _.filter(group3, {'title': i.title})[0];
            let hasNode = true;
            if (!!account) {
                var finalsum = account.sum + +i.startBalance;

            } else {
                hasNode = false
            }

            finalAccountList.push({
                    id: i.id,
                    title: i.title,
                    bankBgColor: i.bankBgColor,
                    bankTextColor: i.bankTextColor,
                    bankTitle: i.bankTitle,
                    currencyCode: i.currencyCode,
                    currencySymbol: i.currencySymbol,
                    currencyTitle: i.currencyTitle,
                    currentBalance: hasNode ? finalsum : i.startBalance,
                    startBalance: +i.startBalance,
                    income: hasNode ? account.plus : 0,
                    costs: hasNode ? account.minus : 0,
                }
            )

        })
        this.setState({
            fullBankAccountsList: finalAccountList
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
            id: (Math.random() * 1000).toString(),
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


        if (title === '' || startBalance === '') {
            this.setState({
                validErrorIsShown: true,
            });
        } else {

            try {
                // await AsyncStorage.removeItem('bankAccountsList');
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
                filterValue: '',
                filteredBanks: [],
                titleIsValid: false,
                startBalanceIsValid: false,
                validErrorIsShown: false,
            });
            this.componentDidMount()
            this.setModalVisible(!this.state.modalVisible);

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
        Keyboard.dismiss()
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    setModalActionVisible = (visible, data) => {
        this.setState({
            modalActionVisible: visible,
            accountReadyForDel: data,
        });


    }

    removeItem = () => {
        if (this.state.bankAccountsList.length > 1) {
            let tmpArray = [...this.state.bankAccountsList];

            _.remove(tmpArray, obj => obj.id === this.state.accountReadyForDel.id);


            this.setState({
                bankAccountsList: tmpArray,
                modalActionVisible: false,
                accountReadyForDel: ''
            }, () => {

                this.pushToLS();
                console.log(this.state)


                this.componentDidMount()
                console.log(this.state)
            })
        } else {
            Alert.alert(
                'Увы..',
                'В списке счетов должена остаться хотя бы одна запись',
                [

                    {
                        text: 'Закрыть', onPress: () => {
                            this.setState({
                                modalActionVisible: false,


                            })
                        }
                    },
                ],
                {cancelable: true}
            )
        }
    }

    pushToLS = async () => {
        try {
            await AsyncStorage.setItem('bankAccountsList', JSON.stringify(this.state.bankAccountsList));
        } catch (error) {
            alert("Что-то пошло не так.2..")
        }

    };

    render() {
        return (
            <View style={styles.container}>
                <NavigationEvents
                    onDidFocus={() => this.componentDidMount()}
                />

                <View style={styles.fixedHeader}>
                    <TouchableNativeFeedback
                        style={{
                            padding: 10,
                            marginTop: 8,
                            borderRadius: 25,
                        }}
                        background={TouchableNativeFeedback.Ripple('#c3c7ce', true)}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <View style={{
                            borderRadius: 25,
                            width: 35,
                            height: 35,
                            backgroundColor: '#f1f5fc',
                            paddingTop: 5,
                            paddingLeft: 4,
                            marginLeft: 6,
                            marginTop: 15
                        }}>
                            <IconM name="arrow-left" type="simple-line-icons" size={25}/>
                        </View>
                    </TouchableNativeFeedback>
                    <Text
                        style={{
                            paddingVertical: 10,
                            marginTop: 8,

                            fontSize: 20,
                            height: 50
                        }}
                    >Мои счета</Text>


                </View>

                <ScrollView
                >
                    {this.state.fullBankAccountsList.map((i, index) => (
                        <TouchableHighlight
                            key={index}
                            underlayColor="#eeeeee"
                            onLongPress={() => this.setModalActionVisible(true, i)}
                            style={{
                                width: width - 20,
                                backgroundColor: "#ffffff",
                                height: 130,
                                borderRadius: 10,
                                marginHorizontal: 10,
                                padding: 20,
                                position: "relative",
                                marginTop: 10
                            }}
                        >
                            <View>
                                <Text
                                    style={{
                                        fontSize: 22
                                    }}>{i.title}</Text>
                                <Text
                                    style={{
                                        fontSize: 14
                                    }}>Текущий баланс: {i.currentBalance} {i.currencySymbol}</Text>
                                <Text
                                    style={{
                                        fontSize: 14
                                    }}>Всего потречено: {i.costs} {i.currencySymbol}</Text>
                                <Text
                                    style={{
                                        fontSize: 14
                                    }}>Всего заработано: {i.income} {i.currencySymbol}</Text>
                            </View>


                        </TouchableHighlight>
                    ))
                    }
                </ScrollView>


                <ActionModal
                    setModalActionVisible={this.setModalActionVisible}
                    modalActionVisible={this.state.modalActionVisible}
                    removeItem={this.removeItem}
                />

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: "relative",
                            backgroundColor: 'rgba(0,0,0,0)'
                        }}>
                        <BoxShadow
                            setting={{
                                width: +`${width}` - 20,
                                height: 300,
                                color: this.state.validErrorIsShown ? "#9c0011" : "#0c034c",
                                border: 50,
                                radius: 20,
                                opacity: 0.1,
                                x: 0,
                                y: -10,
                                style: {position: 'absolute', bottom: 10}
                            }}>
                            <View style={{
                                width: {width} - 20,
                                // position: "absolute",
                                // bottom: 0,
                                backgroundColor: "#ffffff",
                                height: 300,
                                borderRadius: 10,
                                // borderTopRightRadius: 20,
                                padding: 20,
                                // margin: 10
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                    position: 'relative',
                                    paddingVertical: 5,
                                    justifyContent: "space-between"
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        fontWeight: 'bold'

                                    }}>Добавление счета</Text>
                                    <TouchableHighlight

                                        style={{
                                            height: 30,
                                            width: 30,
                                            top: -2,
                                            right: -5,
                                            position: "absolute"
                                        }}

                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible)
                                        }}
                                    >
                                        <Text style={{
                                            fontSize: 30,
                                            color: '#999999',
                                            top: -1,

                                        }}>×</Text>
                                    </TouchableHighlight>
                                </View>

                                <View style={styles.inputWrap}>
                                    <TextInput
                                        style={styles.textInputFull}
                                        autoCapitalize="none"
                                        keyboardType='default'
                                        placeholder="Название"
                                        placeholderTextColor={this.state.validErrorIsShown && !this.state.titleIsValid ? "#9c0011" : "#999999"}
                                        onChangeText={value => this.setState({
                                            title: value,
                                            titleIsValid: (value.length > 0),
                                            validErrorIsShown: (this.state.validErrorIsShown) ? false : false
                                        })}
                                        value={this.state.title}
                                    />
                                </View>
                                <View style={styles.inputWrap}>
                                    <TextInput
                                        style={styles.textInput}
                                        autoCapitalize="none"
                                        keyboardType='numeric'
                                        placeholder="Баланс"
                                        placeholderTextColor={this.state.validErrorIsShown && !this.state.startBalanceIsValid ? "#9c0011" : "#999999"}

                                        onChangeText={value => this.setState({
                                            startBalance: value,
                                            startBalanceIsValid: (value.length > 0)
                                        })}
                                        value={this.state.startBalance}
                                    />
                                    <Picker
                                        mode="dropdown"
                                        selectedValue={this.state.currency}
                                        style={{height: 50, width: 110, marginRight: 12}}
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
                                    {(this.state.bankTitle === "") &&
                                    <ScrollView
                                        keyboardShouldPersistTaps="handled"
                                        horizontal="true"
                                        style={{
                                            width: "100%",
                                            position: 'absolute',
                                            left: 100,
                                            padding: 10,
                                        }}>
                                        {this.state.filteredBanks.map((i) => (
                                            <TouchableHighlight
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
                                            </TouchableHighlight>
                                        ))}
                                    </ScrollView>
                                    }
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

                                <View style={{
                                    width: '100%',
                                    height: 100,
                                    position: "relative"

                                }}>

                                    <BoxShadow
                                        setting={{
                                            width: +`${width}` - 80,
                                            height: 40,
                                            color: this.state.titleIsValid && this.state.startBalanceIsValid ? "#b07919" : "#dddddd",
                                            border: 10,
                                            radius: 20,
                                            opacity: 0.2,
                                            x: 10,
                                            y: 10,
                                            style: {position: 'absolute', bottom: 40}

                                        }}>
                                        <View style={{
                                            width: '100%',
                                            height: 20
                                        }}>
                                        </View>

                                    </BoxShadow>
                                    <TouchableHighlight
                                        underlayColor={this.state.titleIsValid && this.state.startBalanceIsValid ? "#ffb316" : "#bababa"}


                                        style={{
                                            width: '100%',
                                            alignItems: 'center',

                                            backgroundColor: this.state.titleIsValid && this.state.startBalanceIsValid ? "#ffda3a" : "#dddddd",
                                            marginTop: 20,
                                            padding: 15,
                                            borderRadius: 30,
                                            bottom: 30,
                                            left: 0,
                                            position: "absolute"

                                        }} onPress={this.handlePostData}>
                                        <Text
                                            style={{
                                                fontSize: 18
                                            }}
                                        >Добавить</Text>
                                    </TouchableHighlight>


                                </View>


                            </View>
                        </BoxShadow>
                    </View>
                </Modal>

                <ActionButton
                    onPress={() => this.setState({modalVisible: true})}
                    buttonColor="rgba(231,76,60,1)">
                </ActionButton>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f5fc',
    },

    absolute: {
        position: "absolute",
        top: 0, left: 0, bottom: 0, right: 0,
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
        paddingLeft: 0

    },


    fixedHeader: {

        flexDirection: 'row',
        width: '100%',
        height: 50,
        position: 'relative',
    },
    textInputFull: {
        width: '100%',
        fontSize: 16,
        paddingLeft: 0
    }
});
