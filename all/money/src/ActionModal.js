import React from 'react'
import {
    View,
    Modal,
    TouchableHighlight,
    Text,
    Dimensions
} from 'react-native'

import BoxShadow from './shadow'

var width = Dimensions.get('window').width;

export default class ActionModal extends React.Component {

    setModalVisible(visible) {
        this.props.setModalActionVisible(visible)
    }

    removeItem() {
        this.props.removeItem()
    }

    render() {
        return (

            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.modalActionVisible}
                onRequestClose={() => {
                    this.setModalVisible(!this.props.modalActionVisible);
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
                            height: 150,
                            color: "#0c034c",
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
                            height: 150,
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

                                }}>Что будем делать?</Text>
                                <TouchableHighlight
                                    style={{
                                        height: 30,
                                        width: 30,
                                        top: -2,
                                        right: -5,
                                        position: "absolute"
                                    }}
                                    onPress={() => {
                                        this.setModalVisible(!this.props.modalActionVisible);
                                    }}
                                >
                                    <Text style={{
                                        fontSize: 30,
                                        color: '#999999',
                                        top: -1,

                                    }}>×</Text>
                                </TouchableHighlight>
                            </View>
                            <TouchableHighlight
                                underlayColor="#bababa"
                                style={{

                                    marginTop: 20,
                                    padding: 15,
                                    width: "100%",
                                    backgroundColor: "#eee",
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 30

                                }}

                                onPress={() => {
                                    this.removeItem()
                                }}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                    }}
                                >Удалить</Text>
                            </TouchableHighlight>
                        </View>
                    </BoxShadow>
                </View>
            </Modal>
        )
    }


}