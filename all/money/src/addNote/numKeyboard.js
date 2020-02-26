import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    TouchableNativeFeedback, Dimensions
} from 'react-native'
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../font/selection';

const IconM = createIconSetFromIcoMoon(icoMoonConfig);
var width = Dimensions.get('window').width;
export default class NumKeyboard extends React.Component {


    _keyPress = (i) => {
        let {money} = this.props;

        let setFirstNum = (i) => {
            this.setState({money: i}, () => {
                this.transfer()
            });

        };

        let addNum = (i) => {
            this.setState({money: money.toString() + i.toString()}, () => {
                this.transfer()
            });
        };

        let addDot = () => {
            if (money.toString().indexOf(".") === -1) {
                this.setState({money: money + "."}, () => {
                    this.transfer()
                });
            }
        };

        let delNum = () => {
            if (money.toString().length > 1) {
                this.setState({money: money.substring(0, money.length - 1)}, () => {
                    this.transfer()
                });
            } else {
                this.setState({money: 0}, () => {
                    this.transfer()
                });
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

                {/*{keys.map((i) => (*/}
                {/*<TouchableOpacity key={i}*/}
                {/*onPress={() => this._keyPress(i)}*/}
                {/*style={styles.vKeyboardKey}>*/}
                {/**/}
                {/*</TouchableOpacity>*/}
                {/*))}*/}
                {keys.map((i) => (
                    <View
                        key={i}
                        style={{
                            alignItems: 'center',
                            width: '33%',
                        }}
                    >
                        <TouchableNativeFeedback
                            style={{

                                borderRadius: 25,
                                width: +`${width}` / 3,
                            }}
                            background={TouchableNativeFeedback.Ripple('#c3c7ce', true)}
                            onPress={() => this._keyPress(i)}
                        >
                            <View style={{
                                width: 45,
                                height: 35,
                                alignItems: 'center',
                                paddingTop: 4,
                                borderRadius: 25,
                                backgroundColor: '#fff',
                                marginVertical: 6
                            }}>
                                <Text style={styles.vKeyboardKeyText}>{i}</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                ))}


                <View
                    style={{
                        alignItems: 'center',
                        width: '33%',
                    }}
                >
                    <TouchableNativeFeedback
                        style={{

                            borderRadius: 25,
                            width: +`${width}` / 3,
                        }}
                        background={TouchableNativeFeedback.Ripple('#c3c7ce', true)}
                        onPress={() => this._keyPress('dot')}
                    >
                        <View style={{
                            width: 45,
                            height: 35,
                            alignItems: 'center',
                            paddingTop: 4,
                            borderRadius: 25,
                            backgroundColor: '#fff',
                            marginVertical: 6
                        }}>

                            <Text style={styles.vKeyboardKeyText}>.</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        width: '33%',
                    }}
                >
                    <TouchableNativeFeedback
                        style={{

                            borderRadius: 25,
                            width: +`${width}` / 3,
                        }}
                        background={TouchableNativeFeedback.Ripple('#c3c7ce', true)}
                        onPress={() => this._keyPress(0)}
                    >
                        <View style={{
                            width: 45,
                            height: 35,
                            alignItems: 'center',
                            paddingTop: 4,
                            borderRadius: 25,
                            backgroundColor: '#fff',
                            marginVertical: 6
                        }}>
                            <Text style={styles.vKeyboardKeyText}>0</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        width: '33%',
                    }}
                >
                    <TouchableNativeFeedback
                        style={{

                            borderRadius: 25,
                            width: +`${width}` / 3,
                        }}
                        background={TouchableNativeFeedback.Ripple('#c3c7ce', true)}
                        onPress={() => this._keyPress('del')}
                    >
                        <View style={{
                            width: 45,
                            height: 35,
                            alignItems: 'center',
                            paddingTop: 4,
                            borderRadius: 25,
                            backgroundColor: '#fff',
                            marginVertical: 6
                        }}>
                            <IconM style={styles.vKeyboardKeyIcon} name="backspace" type="simple-line-icons"
                                   size={18}/>
                        </View>
                    </TouchableNativeFeedback>
                </View>
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
        height: 45,
        alignItems: 'center',
        // backgroundColor: 'rgba(255,255,255,1)',
        paddingTop: 8,
        // borderStyle: 'solid',
        // borderRightColor: '#eee',
        // borderRightWidth: 1,
        // borderTopColor: '#eee',
        // borderTopWidth: 1
    },
    vKeyboardKeyText: {
        fontSize: 20,
    },
    vKeyboardKeyIcon: {
        paddingTop: 5
    }


});