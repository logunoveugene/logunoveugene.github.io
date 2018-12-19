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


export default class Main extends React.Component {
    state = {
        currentUser: null,
        account: 'Счет 1',
        message: '',
        accountList: '',
        inputNumber: '',
        nodeDescription: '',
        keyboardIsShown: false,
        money: 0,
        count: 0,
        typeDescriptionImg: 'pizza',
        usersDate: '',
        type: 'Списание',
        expense: [
            {
                img: "pizza",
                title: "Фастфуд"
            },
            {
                img: "beer",
                title: "Пивчик"
            },
            {
                img: "cutlery",
                title: "Обед"
            },
            {
                img: "shopping",
                title: "Магазин"
            },
            {
                img: "school-bus",
                title: "Автобус"
            },
            {
                img: "car-oil",
                title: "Бензин"
            },
            {
                img: "buildings",
                title: "Квартплата"
            },
            {
                img: "faucet",
                title: "Вода"
            },
            {
                img: "heat",
                title: "Отопление"
            },
            {
                img: "idea",
                title: "Свет"
            },
            {
                img: "polo-shirt",
                title: "Одежда"
            },
            {
                img: "high-heels",
                title: "Обувь"
            },
            {
                img: "air-freight",
                title: "Путешествия"
            },
            {
                img: "stationary-bike",
                title: "Спорт"
            },
            {
                img: "gamepad",
                title: "Развлечение"
            },
            {
                img: "medicine",
                title: "Лекарства"
            },
            {
                img: "first-aid-kit",
                title: "Медицина"
            },
            {
                img: "book",
                title: "Образование"
            },
            {
                img: "pacifier",
                title: "Дети"
            },
            {
                img: "black-cat",
                title: "Животные"
            },
            {
                img: "washing-machine",
                title: "Техника"
            },
            {
                img: "smartphone",
                title: "Связь"
            },
            {
                img: "parking",
                title: "Парковка"
            },
            {
                img: "wifi",
                title: "Интернет"
            },
            {
                img: "television",
                title: "ТВ"
            }
        ],
        income: [
            {
                img: "pizza",
                title: "Зарплата"
            },
            {
                img: "beer",
                title: "Премия"
            }
        ],
        currentTypeDescList: []
    };

    static navigationOptions = ({navigation}) => {

        return {}
    };


    async componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);

        try {
            var storeddAccounts = await AsyncStorage.getItem('accountsList');
            if (storeddAccounts == null) {
                storeddAccounts = []
            } else {
                storeddAccounts = JSON.parse(storeddAccounts);
            }
            this.setState({accountList: storeddAccounts});
        } catch (error) {
            alert("Что-то пошло не так...")
        }


        this.setState({usersDate: new Date().getFullYear() + '-' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '-' + ('0' + new Date().getDate()).slice(-2)})
        this.setState({currentTypeDescList: this.state.expense})

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
        let {message, account, money, usersDate, typeDescriptionImg, type} = this.state;
        let currentDate = usersDate;

        let addedNote = {
            id: '',
            type: type,
            sum: money,
            typeDescription: message,
            typeDescriptionImg: typeDescriptionImg,
            date: currentDate,
            color: '#eeeee',
            account: account,
            accountAmount: '',
            accountCurrentAmount: '',

        };
        console.log(addedNote);
        try {
            // await AsyncStorage.removeItem('notes');
            var storedNote = await AsyncStorage.getItem('notes');
            if (storedNote == null) {
                storedNote = []
            } else {
                storedNote = JSON.parse(storedNote);
                console.log(storedNote)
            }
        } catch (error) {
            alert("Что-то пошло не так...")
        }
        addedNote.id = storedNote.length + 1
        storedNote.push(addedNote);
        try {
            await AsyncStorage.setItem('notes', JSON.stringify(storedNote));
        } catch (error) {
            alert("Что-то пошло не так...")
        }
        this.setState({message: ''});

        this.props.navigation.navigate('Main')
    };

    _chooseType = (type) => {
        this.setState({
            type: type,
            message: ''
        }, () => {
            type === 'Списание' ? this.setState({currentTypeDescList: this.state.expense}) : this.setState({currentTypeDescList: this.state.income})
        });
    };

    _chooseAccount = (account) => {
        this.setState({
            account: account,
        });
    };


    _chooseTypeDesc = (type) => {
        this.setState({message: type.title});
        this.setState({typeDescriptionImg: type.img});
    };

    _selectDate = async () => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                date: this.selectedDate
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
                let selectedDate = year + '-' + ('0' + (month + 1)).slice(-2) + '-' + ('0' + day).slice(-2)
                this.setState({usersDate: selectedDate})
                console.log(selectedDate)
            }

        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }

    };

    updateMoney = (value) => {
        this.setState({money: value})
    };


    render() {
        const {currentUser, list, account, accountList, inputNumber, currentTypeDescList, type, keyboardIsShown} = this.state
        let accountItem = Array.from(this.state.accountList);


        let addTypeList = [
            {name: 'Списание', type: 'expense'},
            {name: 'Пополнение', type: 'income'}
        ];
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
                    <Picker
                        mode="dropdown"
                        selectedValue={type}
                        style={{height: 50, width: 130}}
                        onValueChange={((itemValue) => this._chooseType(itemValue))}>
                        {addTypeList.map((i) => (
                            <Picker.Item key={i.type} label={i.name} value={i.name}/>
                        ))}
                    </Picker>
                    <Picker
                        mode="dropdown"
                        selectedValue={type}
                        style={{height: 50, width: 130}}
                        onValueChange={((itemValue) => this._chooseAccount(itemValue))}>
                        {accountItem.map((i) => (
                            <Picker.Item key={i.id} label={i.title} value={i.title}/>
                        ))}
                    </Picker>
                </View>

                <ScrollView style={styles.nodeDescriptionWrapScroll}>
                    <View style={styles.nodeDescriptionWrap}>
                        {currentTypeDescList.map((i) => (
                            <TouchableOpacity key={i.title}
                                              style={styles.mynode}
                                              onPress={() => this._chooseTypeDesc(i)}
                            >
                                <IconM name={i.img} type="simple-line-icons" size={25}/>
                                <Text style={styles.mynodeText}>{i.title}</Text>
                            </TouchableOpacity>
                        ))}
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
                            style={styles.datePickerButtonText}>{this.state.usersDate && dayjs(this.state.usersDate).locale('ru').format('D MMM')}</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.textInput}
                        autoCapitalize="none"
                        onSubmitEditing={Keyboard.dismiss}
                        placeholder="Добавить примечание"
                        onChangeText={message => this.setState({message})}
                        value={this.state.message}
                    />
                    <Text style={styles.moneyCount}>{this.state.money}</Text>
                </View>


                {!keyboardIsShown && <NumKeyboard updateData={this.updateMoney}/>}


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
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    mynode: {
        width: "20%",
        height: 70,
        alignItems: 'center',
        paddingTop: 15,
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

