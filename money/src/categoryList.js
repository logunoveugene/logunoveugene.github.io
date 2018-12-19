import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    AsyncStorage
} from 'react-native'

import DragSortableView from 'react-native-drag-sort'
import {TEST_DATA, TXT} from './data/base/BaseConstant'

const {width} = Dimensions.get('window')

const parentWidth = width - 10
const childrenWidth = 76 + 8
const childrenHeight = 76 + 8

export default class NonScrollPage extends Component {

    constructor(props) {
        super()

        this.state = {

            nodeTypeList: '',
            scrollEnabled: true,
            isEnterEdit: false,
        }
    }


    async componentDidMount() {

        try {
            var storednodeTypeList = await AsyncStorage.getItem('nodeTypeList');
            if (storednodeTypeList == null) {
                storednodeTypeList = [
                    {icon: require('./data/img/animal1.png'), txt: 1},
                    {icon: require('./data/img/animal2.png'), txt: 2}]
            } else {
                storednodeTypeList = JSON.parse(storednodeTypeList);
            }
            this.setState({nodeTypeList: storednodeTypeList})
            console.log(storednodeTypeList)
        } catch (error) {
            alert("Что-то пошло не так...")
        }

    }


    render() {
        return (
            <View style={styles.container}>

                {this.state.isEnterEdit &&
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.setState({
                        isEnterEdit: false
                    })
                }}>
                    <Text style={styles.button_text}>Применить</Text>
                </TouchableOpacity>
                }


                <View style={styles.sort}>
                    {(this.state.nodeTypeList !== '') && <DragSortableView
                        dataSource={this.state.nodeTypeList}
                        parentWidth={parentWidth}

                        childrenWidth={childrenWidth}
                        childrenHeight={childrenHeight}

                        onDragStart={(startIndex, endIndex) => {
                            if (!this.state.isEnterEdit) {
                                this.setState({
                                    isEnterEdit: true
                                })
                            }
                        }}

                        onDataChange={(data) => {
                            // delete or add data to refresh
                            if (data.length != this.state.nodeTypeList.length) {
                                this.setState({
                                    nodeTypeList: data
                                })
                            }
                        }}
                        onClickItem={(data, item, index) => {
                            //delete
                            if (this.state.isEnterEdit) {
                                const newData = [...this.state.nodeTypeList]
                                newData.splice(index, 1)
                                this.setState({
                                    nodeTypeList: newData
                                })
                            }
                        }}
                        renderItem={(item, index) => {
                            return this.renderItem(item, index)
                        }}/>
                    }
                </View>
                {!this.state.isEnterEdit &&
                <TouchableOpacity style={styles.button} onPress={() => {
                    const newData = [...this.state.nodeTypeList] //pointer problem
                    newData.push({icon: require('./data/img/animal10.png'), txt: 'добавлен'})
                    this.setState({
                        nodeTypeList: newData
                    })
                }}>
                    <Text style={styles.button_text}>Add One</Text>
                </TouchableOpacity>
                }

            </View>
        )
    }

    renderItem(item, index) {
        if (this.state.isEnterEdit) {
            return (
                <View style={styles.item}>
                    <View style={styles.item_children}>
                        <Image
                            style={styles.item_icon}
                            source={item.icon}/>
                        <Text style={styles.txt}>{item.txt}</Text>
                    </View>
                    <Image
                        style={styles.item_delete_icon}
                        source={require('./data/img/clear.png')}
                    />
                </View>
            )
        } else {
            return (
                <View style={styles.item}>
                    <View style={styles.item_children}>
                        <Image
                            style={styles.item_icon}
                            source={item.icon}/>
                        <Text style={styles.txt}>{item.txt}</Text>
                    </View>
                </View>
            )
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    txt: {
        fontSize: 18,
        lineHeight: 24,
        padding: 5,
    },
    sort: {
        marginLeft: 10,
    },
    item: {
        width: childrenWidth,
        height: childrenHeight,
    },
    item_children: {
        width: childrenWidth - 8,
        height: childrenHeight - 8,
        backgroundColor: '#f0ffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 8
    },
    item_delete_icon: {
        width: 14,
        height: 14,
        position: 'absolute',
        right: 1,
        top: 1,
    },
    item_icon: {
        width: childrenWidth - 4 - 8,
        height: childrenHeight - 4 - 8,
        resizeMode: 'contain',
        position: 'absolute'
    },
    button: {
        width: width * 0.6,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#7da6ff',
        borderRadius: 2,
        marginTop: 20,
    },
    button_text: {
        fontSize: 18,
        color: '#fff'
    },
})