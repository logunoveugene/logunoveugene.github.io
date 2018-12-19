import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../font/selection';

const IconM = createIconSetFromIcoMoon(icoMoonConfig);

export default class NumKeyboard extends React.Component {

    state = {
        money: 0
    };

    _keyPress = (i) => {
        let {money} = this.state;

        let setFirstNum = (i) => {
            this.setState({money: i}, () => {this.transfer()});

        };

        let addNum = (i) => {
            this.setState({money: money.toString() + i.toString()}, () => {this.transfer()});
        };

        let addDot = () => {
            if (money.toString().indexOf(".") === -1) {
                this.setState({money: money + "."}, () => {this.transfer()});
            }
        };

        let delNum = () => {
            if (money.toString().length > 1) {
                this.setState({money: money.substring(0, money.length - 1)}, () => {this.transfer()});
            } else {
                this.setState({money: 0}, () => {this.transfer()});
            }
        };

        if (i === 'del') {
            delNum()
        } else {
            if (i === 'dot') {
                addDot()
            } else {
                if (money === 0) {
                    if (i !== 0) {
                        setFirstNum(i)
                    }
                } else if (money.toString().slice(-2, -1) !== '.') {
                    if (money.toString().length < 7) {
                        addNum(i)
                    }
                }
            }
        }


    };

    transfer() {
        this.props.updateData(this.state.money)
    }

    render() {
        let keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (
            <View style={styles.vKeyboard}>

                {keys.map((i) => (
                    <TouchableOpacity key={i}
                                      onPress={() => this._keyPress(i)}
                                      style={styles.vKeyboardKey}>
                        <Text style={styles.vKeyboardKeyText}>{i}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                    onPress={() => this._keyPress('dot')}
                    style={styles.vKeyboardKey}>
                    <Text style={styles.vKeyboardKeyText}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this._keyPress(0)}
                    style={styles.vKeyboardKey}>
                    <Text style={styles.vKeyboardKeyText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this._keyPress('del')}
                    style={styles.vKeyboardKey}>
                    <IconM style={styles.vKeyboardKeyIcon} name="backspace" type="simple-line-icons"
                           size={18}/>
                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({

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
        backgroundColor: 'rgba(255,255,255,1)',
        paddingTop: 8,
        borderStyle: 'solid',
        borderRightColor: '#eee',
        borderRightWidth: 1,
        borderTopColor: '#eee',
        borderTopWidth: 1
    },
    vKeyboardKeyText: {
        fontSize: 20,
    },
    vKeyboardKeyIcon: {
        paddingTop: 5
    }


});