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

    Keyboard
} from 'react-native'
import firebase from 'react-native-firebase'
import ActionButton from 'react-native-action-button';
import Fuse from 'fuse.js'

import _ from "lodash";
import {banksAndPrefixes, currencyList, bankAccountsListDefault} from './data/base/BaseConstant'
import dayjs from "dayjs";

import ActionModal from './ActionModal'

import BoxShadow from './shadow'
import {sampleNodes} from "../sampleNodes";


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


        fullNodeList: [],
    };


    async componentDidMount() {
        try {

            let storedAccounts = await AsyncStorage.getItem('bankAccountsList');


            let storedNote = await AsyncStorage.getItem('nodeList');

            console.log(storedNote);


            console.log(storedAccounts)
            console.log(bankAccountsListDefault)
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



    sum=()=>{
       console.log(this.state.fullNodeList)

        var percent = _.sumBy(this.state.fullNodeList, function (o) {
            return +o.sum
        });

        console.log(percent)

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
        }
        else {

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
                this.render()
                this.pushToLS()
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
                <View style={styles.fixedHeader}>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.goBack()}>
                        <Text>Назад</Text>
                    </TouchableHighlight>

                </View>

                <ScrollView
                >
                    {this.state.bankAccountsList.map((i, index) => (
                        <TouchableHighlight
                            key={index}
                            underlayColor="#eeeeee"
                            onLongPress={() => this.setModalActionVisible(true, i)}
                            style={{
                                width: width - 20,
                                backgroundColor: "#ffffff",
                                height: 90,
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
                                    }}>{i.currentBalance} {i.currencySymbol}</Text>
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
        paddingLeft: 0
    }
});
