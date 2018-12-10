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
    Text
} from 'react-native'
import firebase from 'react-native-firebase'

import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './font/selection';

const IconM = createIconSetFromIcoMoon(icoMoonConfig);

import _ from "lodash";


export default class Main extends React.Component {
    state = {
        currentUser: null,
        account: 'Счет 1',
        message: '',
        accountList: '',
        inputNumber: '',
        keyboardIsShown: false,
        money: 0
    };
    static navigationOptions = {
        headerTitle: 'Добавить списание',
    };

    componentDidMount() {
        // const {currentUser} = firebase.auth();
        // this.setState({currentUser});

        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);

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
        let {currentUser, message, account, money} = this.state;
        let currentDate = new Date();

        let addedNote = {
            type: "списание",
            sum: money,
            description: message,
            date: currentDate,
            account: account
        };

        // firebase
        //     .database().ref(currentUser.uid + '/node').push(addedNote
        // ).then(() => {
        //     console.log("данные ушли");
        // }).catch((error) => {
        //     console.log(error);
        // });

        try {
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
        storedNote.push(addedNote);
        try {
            await AsyncStorage.setItem('notes', JSON.stringify(storedNote));
        } catch (error) {
            alert("Что-то пошло не так...")
        }
        this.setState({message: ''});

        this.props.navigation.navigate('Main')
    };

    // _handleClear() {
    //     model.clearAll();
    // }
    //
    // _handleDelete() {
    //     model.delKey();
    // }
    //
    // _handleKeyPress(key) {
    //     model.addKey(key);
    // }

    _keyPress = (i) => {
        let {money} = this.state;
        if (money === 0) {
            this.setState({money: i.toString()});
        }
        else {
            this.setState({money: money + i.toString()});
        }


    };


    render() {
        const {currentUser, list, account, accountList, inputNumber, keyboardIsShown} = this.state
        let accountItem = Array.from(this.state.accountList);
        let nodeType = [
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
        let keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'x'];
        return (
            <View style={styles.container}>
                <ScrollView style={styles.nodeTypeWrapScroll}>
                    <View style={styles.nodeTypeWrap}>
                        {nodeType.map((i) => (
                            <TouchableOpacity key={i.title} style={styles.mynode}>
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
                    </View>
                }

                {/*{*/}
                {/*!keyboardIsShown &&*/}
                {/*<CustomKeyboard*/}
                {/*keyboardType="decimal-pad"*/}
                {/*onClear={this._handleClear.bind(this)}*/}
                {/*onDelete={this._handleDelete.bind(this)}*/}
                {/*onKeyPress={this._handleKeyPress.bind(this)}*/}
                {/*/>*/}
                {/*}*/}

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

    nodeTypeWrap: {
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
    nodeTypeWrapScroll: {
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

