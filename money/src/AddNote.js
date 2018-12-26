import React from 'react'
import {
    AsyncStorage,
    StyleSheet,
    View,
    Picker,
    Keyboard,
    TextInput,
    ScrollView,
    TouchableOpacity,
    InteractionManager,
    DatePickerAndroid,
    Text
} from 'react-native'
import NumKeyboard from './addNote/numKeyboard'
import {NavigationEvents} from 'react-navigation';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './font/selection';

const IconM = createIconSetFromIcoMoon(icoMoonConfig);

import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import _ from "lodash";
import {typeCategoryListDefault} from "./data/base/BaseConstant";


export default class Main extends React.Component {
    state = {
        currentUser: null,
        account: 'Счет 1',

        bankAccountsList: [],

        bankAccountTitle: '',
        bankAccountCurrentBalance: '',
        bankAccountBgColor: '',
        bankAccountTextColor: '',


        keyboardIsShown: false,
        typeSubCategoryIndex: '',


        id: 1,
        sum: 0,
        // typeCategory: "",
        typeSubCategoryTitle: "",
        typeSubCategoryImg: "",
        typeSubCategoryColor: "",

        date: "",


        day: "",
        month: "",
        year: "",

        time: "21-02",
        currency: "rub",
        usersDescription: "",


        typeCategoryList: '',
        typeCategoryTitleSelected: 'Списание',


    };


    async componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);

        try {
            var storeddAccounts = await AsyncStorage.getItem('bankAccountsList');
            if (storeddAccounts == null) {
                storeddAccounts = []
            } else {
                storeddAccounts = JSON.parse(storeddAccounts);
            }
            this.setState({bankAccountsList: storeddAccounts}, () => {
                this._chooseAccount(this.state.bankAccountsList[0])
            });
        } catch (error) {
            alert("Что-то пошло не так...")
        }


        try {
            // await AsyncStorage.removeItem('typeCategoryList')
            var storedTypeCategoryList = await AsyncStorage.getItem('typeCategoryList');
            if (storedTypeCategoryList == null) {
                storedTypeCategoryList = typeCategoryListDefault
            } else {
                storedTypeCategoryList = JSON.parse(storedTypeCategoryList);
            }
            this.setState({typeCategoryList: storedTypeCategoryList})

        } catch (error) {
            alert("Что-то пошло не так...")
        }


        this.setState({
            date: new Date().getFullYear() + '-' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '-' + ('0' + new Date().getDate()).slice(-2),
            day: ('0' + new Date().getDate()).slice(-2),
            month: ('0' + (new Date().getMonth() + 1)).slice(-2),
            year: new Date().getFullYear().toString(),

        })


    };

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }


    _keyboardDidShow = () => {
        this.setState({keyboardIsShown: true});
    };

    _keyboardDidHide = () => {
        this.setState({keyboardIsShown: false});
    };

    handlePostData = async () => {
        let {
            sum,
            typeCategoryTitleSelected,
            typeSubCategoryTitle,
            typeSubCategoryImg,
            typeSubCategoryColor,
            bankAccountTitle,
            bankAccountCurrentBalance,


            date,

            day,
            month,
            year,


            currency,
            usersDescription,

        } = this.state;

        let addedNote = {
            id: '',
            sum: sum,
            typeCategory: typeCategoryTitleSelected,
            typeSubCategoryTitle: typeSubCategoryTitle,
            typeSubCategoryImg: typeSubCategoryImg,
            typeSubCategoryColor: typeSubCategoryColor,
            bankAccountTitle: bankAccountTitle,
            bankAccountCurrentBalance: null,

            date: date,
            day: day,
            month: month,
            year: year,


            time: "",
            currency: currency,
            usersDescription: usersDescription,
        };

        try {
            // await AsyncStorage.removeItem('nodeList');
            var storedNote = await AsyncStorage.getItem('nodeList');
            if (storedNote == null) {
                storedNote = []
            } else {
                storedNote = JSON.parse(storedNote);
                console.log(storedNote)
            }
        } catch (error) {
            alert("Что-то пошло не так...")
        }



        addedNote.bankAccountCurrentBalance = typeCategoryTitleSelected === 'Списание' ? +bankAccountCurrentBalance - sum : +sum + +bankAccountCurrentBalance;
        addedNote.time = `${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`;
        addedNote.id = (Math.random() * 1000).toString();
        storedNote.push(addedNote);
console.log(addedNote)

        try {
            await AsyncStorage.setItem('nodeList', JSON.stringify(storedNote));
        } catch (error) {
            alert("Что-то пошло не так...")
        }


        this.setState({
            sum: 0,
            typeCategoryTitleSelected: 'Списание',
            typeSubCategoryTitle: '',
            typeSubCategoryImg: '',
            typeSubCategoryColor: '',
            bankAccountTitle: '',
            bankAccountCurrentBalance: '',
            typeSubCategoryIndex: '',
            usersDescription: '',

        });
        this.updateMoney(0)
        this.props.navigation.navigate('Main')
    };

    _chooseType = (typeCategoryTitle) => {
        this.setState({
            typeCategoryTitleSelected: typeCategoryTitle,
        });
    };

    _chooseAccount = (account) => {
        this.setState({
            bankAccountTitle: account.title,
            bankAccountCurrentBalance: account.currentBalance,
            bankAccountBgColor: account.bankBgColor,
            bankAccountTextColor: account.bankTextColor,
            currency: account.currencyCode
        });

    };


    _chooseTypeDesc = (nodeType, index) => {
        this.setState({
            typeSubCategoryTitle: nodeType.title,
            typeSubCategoryImg: nodeType.img,
            typeSubCategoryColor: nodeType.color,
            typeSubCategoryIndex: index,
        });
    };

    _selectDate = async () => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                date: this.selectedDate
            });
            if (action !== DatePickerAndroid.dismissedAction) {

                let selectedDate = year + '-' + ('0' + (month + 1)).slice(-2) + '-' + ('0' + day).slice(-2)
                this.setState({date: selectedDate})

            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }

    };

    updateMoney = (value) => {
        this.setState({sum: value})
    };


    render() {
        const {bankAccountsList, typeCategoryList, typeCategoryTitleSelected, keyboardIsShown, type} = this.state

        return (

            <View style={styles.container}>
                <NavigationEvents
                    onDidFocus={() => this.componentDidMount()}
                />
                <View style={styles.fixedHeader}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}>
                        <Text>Назад</Text>
                    </TouchableOpacity>


                    {(typeCategoryList !== '') &&
                    <Picker
                        mode="dropdown"
                        selectedValue={typeCategoryTitleSelected}
                        style={{height: 50, width: 130}}
                        onValueChange={((itemValue) => this._chooseType(itemValue))}>
                        {typeCategoryList.map((i) => (
                            <Picker.Item key={i.title} label={i.title} value={i.title}/>
                        ))}
                    </Picker>}

                    {(bankAccountsList !== []) && <Picker
                        mode="dropdown"
                        selectedValue={type}
                        style={{height: 50, width: 130}}
                        onValueChange={((itemValue) => this._chooseAccount(itemValue))}>
                        {bankAccountsList.map((a, index) => (
                            <Picker.Item key={index} label={a.title} value={a}/>
                        ))}
                    </Picker>
                    }
                </View>

                <ScrollView style={styles.nodeDescriptionWrapScroll}>
                    <View style={styles.nodeDescriptionWrap}>
                        {(typeCategoryList !== '') &&
                        (_.filter(typeCategoryList, {'title': this.state.typeCategoryTitleSelected}))[0].child.map((nodeType, index) =>
                            <TouchableOpacity
                                style={styles.mynode}
                                onPress={() => this._chooseTypeDesc(nodeType, index)}
                                key={nodeType.id}>
                                {index === this.state.typeSubCategoryIndex &&

                                <View
                                    style={[styles.mynodeSelected, {backgroundColor: `${nodeType.color}`}]}
                                />
                                }

                                <IconM name={nodeType.img} type="simple-line-icons" size={25}/>
                                <Text
                                    style={styles.mynodeText}>{nodeType.title}</Text>

                            </TouchableOpacity>
                        )
                        }
                    </View>
                </ScrollView>

                <View style={styles.inputWrap}>
                    <TouchableOpacity
                        style={styles.datePickerButton}
                        onPress={() => this._selectDate()}
                    >
                        <IconM style={styles.datePickerButtonIcon} name="small-calendar" type="simple-line-icons"
                               size={18}/>
                        <Text
                            style={styles.datePickerButtonText}>{this.state.date && dayjs(this.state.date).locale('ru').format('D MMM')}</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.textInput}
                        autoCapitalize="none"
                        onSubmitEditing={Keyboard.dismiss}
                        placeholder="Примечание"
                        onFocus={() => this.state.keyboardIsShown = true}
                        onBlur={() => this.state.keyboardIsShown = false}
                        onChangeText={message => this.setState({usersDescription: message})}
                        value={this.state.usersDescription}
                    />
                    <Text style={styles.moneyCount}>{this.state.sum}</Text>
                </View>


                {!keyboardIsShown && <NumKeyboard money={this.state.sum} updateData={this.updateMoney}/>}


                <TouchableOpacity
                    style={styles.fullButton}
                    onPress={this.handlePostData}>
                    <Text> Записать</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({

    fixedHeader: {
        backgroundColor: 'rgba(255,255,255,1)',
        elevation: 1,
        flexDirection: 'row',
        width: '100%',
        height: 50,

        position: 'relative',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        height: 50,

    },
    inputWrap: {
        alignItems: 'center',
        flexDirection: 'row',

        backgroundColor: 'rgba(255,255,255,1)',
        justifyContent: 'space-between',
        height: 50,

    },
    moneyCount: {
        fontSize: 22,
        width: "30%",
        textAlign: 'right',
        height: 50,
        alignItems: 'center',
        padding: 8,
    },

    textInput: {
        width: "45%",
        padding: 8,
    },

    datePickerButton: {
        width: "25%",
        padding: 10,
        height: 50,
        paddingTop: 15,
        flexDirection: 'row'
    },
    datePickerButtonText: {
        fontSize: 14
    },
    datePickerButtonIcon: {
        color: "#999",
        paddingRight: 5
    },
    fullButton: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#ffda3a',
        padding: 20
    },


    keyboard: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    nodeDescriptionWrap: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    mynode: {
        width: "20%",
        height: 70,
        alignItems: 'center',
        paddingTop: 19,
        position: 'relative'
    },
    mynodeSelected: {
        width: 38,
        height: 38,
        borderRadius: 19,
        // backgroundColor: 'rgba(255,255,255,1)',
        alignItems: 'center',
        position: 'absolute',
        marginTop: 12,
        opacity: .2

    },

    mynodeText: {
        fontSize: 10,
        textAlign: 'center',
        paddingTop: 5,
    },
    nodeDescriptionWrapScroll: {
        width: '100%',
        height: 500,
    },

    vKeyboard: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',


    },
    vKeyboardKey: {
        width: "33.3%",
        height: 50,
        alignItems: 'center',
        borderStyle: 'solid',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: '#eee',
        paddingTop: 8,
        borderWidth: 1
    },
    vKeyboardKeyText: {
        fontSize: 20,
    },
    vKeyboardKeyIcon: {
        paddingTop: 5
    }


});

