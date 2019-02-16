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
    Text, TouchableNativeFeedback, Dimensions, TouchableHighlight, Animated
} from 'react-native'
import NumKeyboard from './addNote/numKeyboard'
import {NavigationEvents} from 'react-navigation';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './font/selection';

const IconM = createIconSetFromIcoMoon(icoMoonConfig);

import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import _ from "lodash";
import {typeCategoryListDefault, bankAccountsListDefault} from "./data/base/BaseConstant";
import BoxShadow from "./shadow";


var width = Dimensions.get('window').width;
export default class Main extends React.Component {
    state = {
        currentUser: null,


        bankAccountsList: null,

        bankAccountTitle: null,
        bankAccountCurrentBalance: null,
        bankAccountBgColor: null,
        bankAccountTextColor: null,


        keyboardIsShown: false,
        typeSubCategoryIndex: null,


        id: 1,
        sum: 0,
        // typeCategory: "",
        typeSubCategoryTitle: null,
        typeSubCategoryImg: null,
        typeSubCategoryColor: null,

        date: null,


        day: null,
        month: null,
        year: null,

        time: null,
        currency: "rub",
        usersDescription: null,


        typeCategoryList: null,
        typeCategoryTitleSelected: 'Списание',

        selectedAccount: null,
        selectAccountPlate: false,
        plateHeight: new Animated.Value(63),

    };

    async componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);

        try {
            var storeddAccounts = await AsyncStorage.getItem('bankAccountsList');
            if (storeddAccounts == null) {
                storeddAccounts = bankAccountsListDefault
            } else {
                storeddAccounts = JSON.parse(storeddAccounts);
            }
            this.setState({
                bankAccountsList: storeddAccounts,
                selectedAccount: storeddAccounts[0]
            }, () => {
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

        // console.log(this.state)


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
            sum: typeCategoryTitleSelected === 'Списание' ? -sum : sum,
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
                // console.log(storedNote)
            }
        } catch (error) {
            alert("Что-то пошло не так...")
        }

        addedNote.time = `${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`;
        addedNote.id = (Math.random() * 1000).toString();
        storedNote.push(addedNote);
        // console.log(addedNote)
        // addedNote.bankAccountCurrentBalance = typeCategoryTitleSelected === 'Списание' ? +bankAccountCurrentBalance - sum : +sum + +bankAccountCurrentBalance;


        // let currentBankIndex = _.findIndex(this.state.bankAccountsList, {'title': this.state.bankAccountTitle})
        // let currentBankList = [...this.state.bankAccountsList];
        // // console.log(currentBankList)
        //
        // // console.log(currentBankList[currentBankIndex].currentBalance)
        // currentBankList[currentBankIndex].currentBalance = addedNote.bankAccountCurrentBalance;
        // await AsyncStorage.setItem('bankAccountsList', JSON.stringify(currentBankList));

        try {
            await AsyncStorage.setItem('nodeList', JSON.stringify(storedNote));

        } catch (error) {
            alert("Что-то пошло не так...")
        }
        this.setState({
            sum: 0,
            typeCategoryTitleSelected: 'Списание',
            typeSubCategoryTitle: null,
            typeSubCategoryImg: null,
            typeSubCategoryColor: null,
            bankAccountTitle: null,
            bankAccountCurrentBalance: null,
            typeSubCategoryIndex: null,
            usersDescription: null,

        });
        this.updateMoney(0)
        this.props.navigation.navigate('Main')
    };

    _chooseType = (typeCategoryTitle) => {
        this.setState({
            typeCategoryTitleSelected: typeCategoryTitle,
            typeSubCategoryIndex: null,
        });

    };

    _chooseAccount = (account) => {
        this.setState({
            bankAccountTitle: account.title,
            bankAccountCurrentBalance: account.currentBalance,
            bankAccountBgColor: account.bankBgColor,
            bankAccountTextColor: account.bankTextColor,
            currency: account.currencyCode,
            selectedAccount: account
        });


        console.log(account)
        console.log(this.state)

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
                this.setState({
                    date: selectedDate,
                    day: ('0' + day).slice(-2),
                    month: ('0' + (month + 1)).slice(-2),
                    year: year.toString()

                })

            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }

    };

    updateMoney = (value) => {
        this.setState({sum: value})
    };

    render() {
        const { typeCategoryList, keyboardIsShown} = this.state

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
                    >Добавление записи</Text>
                </View>

                {(typeCategoryList !== null) &&
                <View>
                    <View
                        style={{
                            width: "100%",
                            position: "absolute",
                            top: 50

                        }}
                    >
                        <BoxShadow
                            setting={{
                                width: +`${width}` - 40,
                                height: 15,
                                color: "#0c034c",
                                border: 15,
                                radius: 10,
                                opacity: 0.05,
                                x: 20,
                                y: 5,
                                style: {zIndex: 19, marginBottom: 15}
                            }}/>
                    </View>
                    <Animated.View
                        style={{
                            width: +`${width}` - 20,
                            height: this.state.plateHeight,
                            // flexDirection: 'column',
                            // alignItems: "center",
                            zIndex: 50,
                            backgroundColor: '#ffffff',
                            // borderBottomWidth: 1,
                            marginHorizontal: 10,
                            marginTop: 10,
                            borderRadius: 10,
                            padding: 15,

                        }}
                    >

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: "space-between"
                            }}

                        >
                            <View
                                style={{
                                    marginLeft: -4,
                                    flexDirection: 'row'
                                }}
                            >

                                {this.state.typeCategoryList.map((i, index) =>
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            this._chooseType(i.title)
                                        }}
                                        style={{
                                            textAlign: 'left',
                                            paddingVertical: 3,
                                            // width: "20%",
                                            position: "relative"
                                        }}
                                    >
                                        {i.title === this.state.typeCategoryTitleSelected &&
                                        <View
                                            style={{
                                                backgroundColor: '#ffda3a',
                                                position: 'absolute',
                                                top: 1,
                                                left: -1,
                                                width: '100%',
                                                height: 32,
                                                borderRadius: 16,
                                                opacity: .5
                                            }}
                                        />
                                        }
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                paddingHorizontal: 8,
                                                paddingVertical: 3,
                                            }}
                                        >
                                            {i.title} </Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                            <TouchableOpacity
                                style={{
                                    padding: 6,
                                    marginTop: 2
                                }}
                                onPress={() => this.setState({
                                    selectAccountPlate: !this.state.selectAccountPlate,
                                    plateHeight: (this.state.plateHeight === 63) ? 120 : 63
                                })}>

                                {/*<Text*/}
                                {/*style={{*/}
                                {/*fontSize: 16,*/}
                                {/*// paddingHorizontal: 8,*/}
                                {/*// paddingVertical: 3,*/}
                                {/*}}*/}
                                {/*>{this.state.bankAccountTitle}</Text>*/}

                                <IconM name="chevron-down" type="simple-line-icons" size={20}/>

                            </TouchableOpacity>
                        </View>
                        {this.state.selectAccountPlate &&
                        <View>
                            <View
                                style={{
                                    marginLeft: -4,
                                    flexDirection: 'row'
                                }}
                            >

                                {this.state.bankAccountsList.map((i, index) =>
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            this._chooseAccount(i)
                                        }}
                                        style={{
                                            textAlign: 'left',
                                            paddingVertical: 3,
                                            // width: "20%",
                                            position: "relative"
                                        }}
                                    >
                                        {i.title === this.state.bankAccountTitle &&
                                        <View
                                            style={{
                                                backgroundColor: '#ffda3a',
                                                position: 'absolute',
                                                top: 1,
                                                left: -1,
                                                width: '100%',
                                                height: 32,
                                                borderRadius: 16,
                                                opacity: .5
                                            }}
                                        />
                                        }
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                paddingHorizontal: 8,
                                                paddingVertical: 3,
                                            }}
                                        >
                                            {i.title} </Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                        }

                    </Animated.View>

                </View>}


                <ScrollView style={styles.nodeDescriptionWrapScroll}>
                    <View style={styles.nodeDescriptionWrap}>
                        {(typeCategoryList !== null) &&
                        (_.filter(typeCategoryList, {'title': this.state.typeCategoryTitleSelected}))[0].child.map((nodeType, index) =>
                            <TouchableOpacity
                                style={styles.mynode}
                                onPress={() => this._chooseTypeDesc(nodeType, index)}
                                key={nodeType.id}>
                                {index === this.state.typeSubCategoryIndex &&
                                <View
                                    style={[styles.mynodeSelected, {backgroundColor: '#ffda3a'}]}
                                />
                                }
                                <IconM name={nodeType.img} type="simple-line-icons" size={25}/>
                                <Text
                                    style={styles.mynodeText}>{nodeType.title}</Text>

                            </TouchableOpacity>
                        )
                        }
                        <TouchableOpacity
                            style={styles.mynode}
                            onPress={() => this.props.navigation.navigate('categoryList')}
                        >
                            <Text
                                style={styles.mynodeText}>Изменить категории</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>


                {this.state.typeSubCategoryIndex !== null &&
                <View
                    style={{
                        // margin: 10,
                        // width: +`${width}` - 20,
                        // borderRadius:10,
                        // overflow: "hidden",
                        position: 'relative',
                        height: 320,
                        backgroundColor: '#fff'
                    }}
                >
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


                    <View
                        style={{
                            width: '100%',
                            position: "relative",
                            height: 60
                        }}
                    >
                        <BoxShadow
                            setting={{
                                width: +`${width}` - 40,
                                height: 40,
                                color: "#b07919",
                                border: 10,
                                radius: 20,
                                opacity: 0.2,
                                x: 20,
                                y: 20,
                                style: {position: 'absolute', top: 4}

                            }}>
                            <View style={{
                                width: '100%',
                                height: 20
                            }}>
                            </View>

                        </BoxShadow>
                        <TouchableHighlight
                            underlayColor={"#ffb316"}
                            style={{
                                width: +`${width}` - 20,
                                alignItems: 'center',

                                backgroundColor: "#ffda3a",
                                margin: 10,
                                padding: 15,
                                borderRadius: 30,
                                top: 0,
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
                }


            </View>
        )
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        // padding: 5,
        backgroundColor: '#f1f5fc',

    },
    fixedHeader: {
        // backgroundColor: 'rgba(255,255,255,1)',
        // elevation: 1,
        flexDirection: 'row',
        width: '100%',
        height: 50,

        position: 'relative',
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
        opacity: .5

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

