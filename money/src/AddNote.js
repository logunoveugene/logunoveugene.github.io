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
    Text
} from 'react-native'


import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './font/selection';

const IconM = createIconSetFromIcoMoon(icoMoonConfig);

import _ from "lodash";


export default class Main extends React.Component {
    state = {
        currentUser: null,
        account: 'Счет 1',
        message: 'Не определено',
        accountList: '',
        inputNumber: '',
        nodeDescription: '',
        keyboardIsShown: false,
        money: 0,
        count: 0,
        typeDescriptionImg:''
    };

    static navigationOptions = ({navigation}) => {
        let addTypeList = ["Расход", "Пополнение"]
        return {
            headerTitle: (
                <Picker
                    selectedValue={navigation.getParam('nodeType', 'Списание')}
                    style={{height: 50, width: 130}}
                    onValueChange={((itemValue) => navigation.setParams({nodeType: itemValue}))}>
                    {addTypeList.map((i) => (
                        <Picker.Item key={i} label={i} value={i}/>
                    ))}
                </Picker>
            ),
        }
    };


    async componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);

        try {
            var accountList = await AsyncStorage.getItem('accountList');
            if (accountList == null) {
                accountList = []
            } else {
                accountList = JSON.parse(accountList);
            }
            this.setState({accountList: accountList})
        } catch (error) {
            alert("Что-то пошло не так...")
        }


        InteractionManager.runAfterInteractions(() => {
            this.props.navigation.setParams({nodeType: 'Списание'})
        });


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
        let {message, account, money, typeDescriptionImg} = this.state;
        let currentDate = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate();

        let addedNote = {
            id:'',
            type: this.props.navigation.state.params.nodeType,
            sum: money,
            typeDescription: message,
            typeDescriptionImg: typeDescriptionImg,
            date: currentDate,
            color: '#eeeee',
            account: account
        };
        try {
            await AsyncStorage.removeItem('notes');
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
        addedNote.id = storedNote.length +1
        storedNote.push(addedNote);
        try {
            await AsyncStorage.setItem('notes', JSON.stringify(storedNote));
        } catch (error) {
            alert("Что-то пошло не так...")
        }
        this.setState({message: ''});

        this.props.navigation.navigate('Main')
    };


    _keyPress = (i) => {
        let {money} = this.state;
        if (money === 0) {
            this.setState({money: i.toString()});

        }
        else if (money.toString().slice(-2, -1) !== '.') {
            this.setState({money: money + i.toString()});
        }
    };

    _keyDel = () => {
        let {money} = this.state;
        if (money !== 0) {
            this.setState({money: money.substring(0, money.length - 1)});
        }
    };
    _keyDot = () => {
        let {money} = this.state;
        if (money.toString().indexOf(".") === -1) {
            this.setState({money: money + "."});
        }


    };

    _chooseType = (type) => {
        this.setState({message: type.title});
        this.setState({typeDescriptionImg: type.img});

    };

    render() {
        const {currentUser, list, account, accountList, inputNumber, keyboardIsShown} = this.state
        let accountItem = Array.from(this.state.accountList);
        let nodeDescription = [
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
        ];
        let keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (

            <View style={styles.container}>

                <ScrollView style={styles.nodeDescriptionWrapScroll}>
                    <View style={styles.nodeDescriptionWrap}>
                        {nodeDescription.map((i) => (
                            <TouchableOpacity key={i.title}
                                              style={styles.mynode}
                                              onPress={() => this._chooseType(i)}
                            >
                                <IconM name={i.img} type="simple-line-icons" size={25}/>
                                <Text style={styles.mynodeText}>{i.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>

                <View style={styles.inputWrap}>
                    <TextInput
                        style={styles.textInput}
                        autoCapitalize="none"
                        onSubmitEditing={Keyboard.dismiss}
                        placeholder="Примечание"
                        onChangeText={message => this.setState({message})}
                        value={this.state.message}
                    />
                    <Text style={styles.moneyCount}>{this.state.money}</Text>
                </View>
                {
                    !keyboardIsShown &&
                    <View style={styles.vKeyboard}>
                        {keys.map((i) => (
                            <TouchableOpacity key={i}
                                              onPress={() => this._keyPress(i)}
                                              style={styles.vKeyboardKey}>
                                <Text style={styles.vKeyboardKeyText}>{i}</Text>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity
                            onPress={() => this._keyDot()}
                            style={styles.vKeyboardKey}>
                            <Text style={styles.vKeyboardKeyText}>.</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this._keyPress(0)}
                            style={styles.vKeyboardKey}>
                            <Text style={styles.vKeyboardKeyText}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this._keyDel()}
                            style={styles.vKeyboardKey}>
                            <Text style={styles.vKeyboardKeyText}>x</Text>
                        </TouchableOpacity>

                    </View>
                }


                <TouchableOpacity
                    style={styles.fullButton}
                    onPress={this.handlePostData}
                >
                    <Text> Записать </Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        height: 50,

    },
    inputWrap: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

        height: 50,

    },
    moneyCount: {
        fontSize: 22,
        width: "50%",
        textAlign: 'right',
        height: 50,
        alignItems: 'center',
        padding: 8,
    },

    textInput: {
        width: "50%",
        padding: 8,
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
        borderColor: '#eee',
        borderWidth: 1
    },
    vKeyboardKeyText: {
        fontSize: 20,
    }


});

