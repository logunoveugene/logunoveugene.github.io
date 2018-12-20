import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,

    TouchableOpacity,
    ScrollView,
    Button,
    TextInput,
    Picker,
    Modal,
    AsyncStorage, Keyboard
} from 'react-native'


import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './font/selection';

const IconM = createIconSetFromIcoMoon(icoMoonConfig);
import _ from 'lodash';

// import DragSortableView from 'react-native-drag-sort'

// import { DraggableGrid } from 'react-native-draggable-grid';
import SortableGrid from 'react-native-sortable-grid'

import {typeCategoryListDefault, iconListDefault} from './data/base/BaseConstant'


export default class NonScrollPage extends Component {

    state = {
        typeCategoryList: '',
        typeCategoryTitleSelected: 'Списание',
        modalVisible: false,
        selectedImg: '',
        selectedImgIndex: '',
        selectedTitle: '',
        selectedColor: ''
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    async componentDidMount() {
        try {
            // await AsyncStorage.removeItem('typeCategoryList')
            var storedTypeCategoryList = await AsyncStorage.getItem('typeCategoryList');
            if (storedTypeCategoryList == null) {
                storedTypeCategoryList = typeCategoryListDefault
            } else {
                storedTypeCategoryList = JSON.parse(storedTypeCategoryList);
            }
            this.setState({typeCategoryList: storedTypeCategoryList})
            console.log(this.state.typeCategoryList)
        } catch (error) {
            alert("Что-то пошло не так...")
        }
        console.log((_.filter(this.state.typeCategoryList, {'title': this.state.typeCategoryTitleSelected}))[0].child)
    }


    _chooseType = (typeCategoryTitle) => {
        this.setState({
            typeCategoryTitleSelected: typeCategoryTitle,
        });
    };

    _reorderList = (itemOrder) => {
        let changedData = [...(_.filter(this.state.typeCategoryList, {'title': this.state.typeCategoryTitleSelected}))[0].child];
        let newDate = [];
        itemOrder.itemOrder.forEach((i) => {
            newDate.push((_.filter(changedData, {'id': i.key}))[0])
        });
        console.log(newDate)
        let replacedIndex = _.findIndex(this.state.typeCategoryList, {'title': this.state.typeCategoryTitleSelected});
        let changedAllData = [...this.state.typeCategoryList]
        changedAllData[replacedIndex].child = [...newDate]
        console.log(changedAllData)
        this.setState({typeCategoryList: changedAllData}, () => {
            this.pushToLs()
        })

    };

    _chooseImg = (img, index) => {
        this.setState({selectedImg: img});
        this.setState({selectedImgIndex: index}, () => {
            console.log(this.state.selectedImgIndex)
        });

    };

    addChildItem() {
        let changedData = [...(_.filter(this.state.typeCategoryList, {'title': this.state.typeCategoryTitleSelected}))[0].child];
        let postedData = {
            "img": this.state.selectedImg,
            "color": "#eee",
            "title": this.state.selectedTitle,
            "id": (Math.random() * 1000).toString()
        };
        let newDate = changedData.concat(postedData);
        let replacedIndex = _.findIndex(this.state.typeCategoryList, {'title': this.state.typeCategoryTitleSelected});
        let changedAllData = [...this.state.typeCategoryList]
        changedAllData[replacedIndex].child = [...newDate]
        console.log(changedAllData)
        this.setState({
            typeCategoryList: changedAllData,
            selectedImg: '',
            selectedImgIndex: '',
            selectedTitle: '',
        }, () => {
            this.pushToLs()
        })
        this.setModalVisible(!this.state.modalVisible);
    }

    removeChildItemAt(key) {
        let tmpArray = [...(_.filter(this.state.typeCategoryList, {'title': this.state.typeCategoryTitleSelected}))[0].child];
        // tmpArray.splice(index, 1);
        _.remove(tmpArray, obj => obj.id === key);

        let replacedIndex = _.findIndex(this.state.typeCategoryList, {'title': this.state.typeCategoryTitleSelected});
        let changedAllData = [...this.state.typeCategoryList]
        changedAllData[replacedIndex].child = [...tmpArray]
        console.log(changedAllData)
        this.setState({
            typeCategoryList: changedAllData,

        }, () => {
            this.pushToLs()
            this.render()
        })


    }


    pushToLs = async () => {
        try {
            await AsyncStorage.setItem('typeCategoryList', JSON.stringify(this.state.typeCategoryList));
        } catch (error) {
            alert("Что-то пошло не так.2..")
        }
    }


    render() {
        const {typeCategoryList, typeCategoryTitleSelected} = this.state
        return (
            <View style={styles.container}>
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
                    <TouchableOpacity
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>
                        <Text>добавить</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.sort}>
                    <ScrollView style={styles.nodeDescriptionWrapScroll}>
                        {(this.state.typeCategoryList !== '') &&
                        <SortableGrid
                            itemsPerRow={5}
                            onDragRelease={(itemOrder) => this._reorderList(itemOrder)}>
                            {
                                (_.filter(this.state.typeCategoryList, {'title': this.state.typeCategoryTitleSelected}))[0].child.map((nodeType, index) =>
                                    <View
                                        style={styles.item}
                                        key={nodeType.id}>
                                        <IconM name={nodeType.img} type="simple-line-icons" size={25}/>
                                        <Text
                                            style={styles.item_text}>{nodeType.title}</Text>
                                        <TouchableOpacity
                                            onPress={() => this.removeChildItemAt(nodeType.id)}
                                        ><Text>X</Text></TouchableOpacity>
                                    </View>
                                )
                            }
                        </SortableGrid>
                        }
                    </ScrollView>
                </View>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <ScrollView style={styles.nodeDescriptionWrapScroll}>
                        <View style={styles.nodeDescriptionWrap}>
                            {iconListDefault.map((img, index) => (
                                <TouchableOpacity key={index}
                                                  style={styles.mynode}
                                                  onPress={() => this._chooseImg(img, index)}
                                >
                                    {(index === this.state.selectedImgIndex) && <Text>x</Text>}

                                    <IconM name={img} type="simple-line-icons" size={25}/>

                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>

                    <TextInput

                        autoCapitalize="none"
                        placeholder="Заголовок"
                        onChangeText={message => this.setState({selectedTitle: message})}
                        value={this.state.selectedTitle}
                    />
                    <View style={{marginTop: 22}}>
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    this.addChildItem();
                                }}>
                                <Text>Добавить </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }


}

const styles = StyleSheet.create({

    container: {
        flex: 1,

    },
    fixedHeader: {
        backgroundColor: 'rgba(255,255,255,1)',
        elevation: 1,
        flexDirection: 'row',
        width: '100%',
        height: 50,

        position: 'relative',
    },
    button: {
        width: 150,
        height: 100,
        backgroundColor: 'blue',
    },
    wrapper: {
        paddingTop: 100,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    item: {
        height: 70,
        borderRadius: 8,

        justifyContent: 'center',
        alignItems: 'center',
        padding: 4
    },
    item_text: {
        fontSize: 10,
        textAlign: 'center',

    },
    nodeDescriptionWrapScroll: {
        width: '100%',
        height: 500,
    },
    nodeDescriptionWrap: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    mynode: {
        width: "20%",
        height: 50,
        alignItems: 'center',
        paddingTop: 15,
    },
})