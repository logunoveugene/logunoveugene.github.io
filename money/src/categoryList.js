import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Picker,
    Modal,
    AsyncStorage, Dimensions,
} from 'react-native'
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './font/selection';

const IconM = createIconSetFromIcoMoon(icoMoonConfig);
import _ from 'lodash';
import SortableGrid from 'react-native-sortable-grid'
import {typeCategoryListDefault, iconListDefault} from './data/base/BaseConstant'
import ActionButton from 'react-native-action-button';
import BoxShadow from './shadow'


var width = Dimensions.get('window').width;
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
            let storedTypeCategoryList = await AsyncStorage.getItem('typeCategoryList');
            if (storedTypeCategoryList == null) {
                storedTypeCategoryList = typeCategoryListDefault
            } else {
                storedTypeCategoryList = JSON.parse(storedTypeCategoryList);
            }
            this.setState({typeCategoryList: storedTypeCategoryList});
            console.log(this.state.typeCategoryList)
        } catch (error) {
            alert("Что-то пошло не так...")
        }
        console.log((_.filter(this.state.typeCategoryList, {'title': this.state.typeCategoryTitleSelected}))[0].child)
    }


    _chooseType = (typeCategoryTitle) => {

        console.log(typeCategoryTitle);
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
        console.log(newDate);
        let replacedIndex = _.findIndex(this.state.typeCategoryList, {'title': this.state.typeCategoryTitleSelected});
        let changedAllData = [...this.state.typeCategoryList];
        changedAllData[replacedIndex].child = [...newDate];
        console.log(changedAllData);
        this.setState({typeCategoryList: changedAllData}, () => {
            this.pushToLs()
        })

    };

    _chooseImg = (img, index) => {
        this.setState({
            selectedImg: img.img,
            selectedImgIndex: index,
            selectedColor: img.color
        }, () => {
            console.log(this.state.selectedImgIndex)
        });
    };

    addChildItem() {
        let changedData = [...(_.filter(this.state.typeCategoryList, {'title': this.state.typeCategoryTitleSelected}))[0].child];
        let postedData = {
            "img": this.state.selectedImg,
            "color": this.state.selectedColor,
            "title": this.state.selectedTitle,
            "id": (Math.random() * 1000).toString()
        };
        let newDate = changedData.concat(postedData);
        let replacedIndex = _.findIndex(this.state.typeCategoryList, {'title': this.state.typeCategoryTitleSelected});
        let changedAllData = [...this.state.typeCategoryList];
        changedAllData[replacedIndex].child = [...newDate];
        console.log(changedAllData);
        this.setState({
            typeCategoryList: changedAllData,
            selectedImg: '',
            selectedImgIndex: '',
            selectedTitle: '',
            selectedColor: ''
        }, () => {
            this.pushToLs()
        });
        this.setModalVisible(!this.state.modalVisible);
    }

    removeChildItemAt(key) {
        let tmpArray = [...(_.filter(this.state.typeCategoryList, {'title': this.state.typeCategoryTitleSelected}))[0].child];
        // tmpArray.splice(index, 1);
        _.remove(tmpArray, obj => obj.id === key);
        let replacedIndex = _.findIndex(this.state.typeCategoryList, {'title': this.state.typeCategoryTitleSelected});
        let changedAllData = [...this.state.typeCategoryList];
        changedAllData[replacedIndex].child = [...tmpArray];
        console.log(changedAllData);
        this.setState({
            typeCategoryList: changedAllData,
        }, () => {
            this.pushToLs();
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
                        style={{
                            padding: 10,
                            marginTop: 8
                        }}

                        onPress={() => this.props.navigation.goBack()}>


                        <IconM name="arrow-left" type="simple-line-icons" size={25}/>
                    </TouchableOpacity>

                    <Text
                        style={{
                            paddingVertical: 10,
                            marginTop: 8,

                            fontSize: 20,
                            height: 50
                        }}
                    >Редактирование категорий</Text>


                    {/*{(typeCategoryList !== '') &&*/}
                    {/*<Picker*/}
                    {/*mode="dropdown"*/}
                    {/*selectedValue={typeCategoryTitleSelected}*/}
                    {/*style={{height: 50, width: 130}}*/}
                    {/*onValueChange={((itemValue) => this._chooseType(itemValue))}>*/}
                    {/*{typeCategoryList.map((i) => (*/}
                    {/*<Picker.Item key={i.title} label={i.title} value={i.title}/>*/}
                    {/*))}*/}
                    {/*</Picker>}*/}

                </View>

                {(typeCategoryList !== '') &&
                <View
                    style={{
                        width: "100%",
                        position: "absolute",
                        top: 60

                    }}
                >
                    <BoxShadow
                        setting={{
                            width: +`${width}` - 40,
                            height: 23,
                            color: "#0c034c",
                            border: 30,
                            radius: 10,
                            opacity: 0.05,
                            x: 20,
                            y: 50,
                            style: {zIndex: 19, marginBottom: 15}
                        }}>
                        <View style={{
                            width: +`${width}` - 20,
                            height: 63,
                            // flexDirection: 'column',
                            // alignItems: "center",
                            zIndex: 50,
                            backgroundColor: '#ffffff',
                            // borderBottomWidth: 1,
                            marginHorizontal: 10,
                            marginTop: 10,
                            borderRadius: 10,
                            padding: 15,
                            // borderLeftColor: `${l.typeSubCategoryColor}`,
                            // borderLeftWidth: 1,
                            // // marginHorizontal: 10,
                            // marginBottom: 7,
                            // elevation: 1
                        }}>
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
                                            padding: 3,
                                            // width: "20%",
                                            position: "relative"
                                        }}
                                    >
                                        {i.title === this.state.typeCategoryTitleSelected &&
                                        <View
                                            style={{
                                                backgroundColor: '#ffda3a',
                                                position: 'absolute',
                                                top: 4,
                                                left: 0,
                                                width: '100%',
                                                height: 25,
                                                borderRadius: 12,
                                                opacity: .5
                                            }}
                                        />
                                        }
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                padding: 3,
                                            }}
                                        >
                                            {i.title} </Text>
                                    </TouchableOpacity>
                                )}
                            </View>

                        </View>
                    </BoxShadow>
                </View>}

                {(this.state.typeCategoryList !== '') &&
                <View
                    style={{
                        paddingVertical: 5,
                        paddingLeft: 0,
                        paddingRight: 5,
                        width: "100%",
                        position: "absolute",
                        top: 140

                    }}>
                    <SortableGrid
                        itemsPerRow={5}
                        style={{
                            flex: 1,

                        }}
                        onDragRelease={(itemOrder) => this._reorderList(itemOrder)}>
                        {
                            (_.filter(this.state.typeCategoryList, {'title': this.state.typeCategoryTitleSelected}))[0].child.map((nodeType, index) =>
                                <View
                                    style={{
                                        height: 90,
                                        borderRadius: 8,
                                        margin: 5,
                                        position: "relative"
                                        // backgroundColor: 'white'
                                    }}
                                    key={nodeType.id}>
                                    <View
                                        style={{
                                            paddingVertical: 8,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <IconM name={nodeType.img} type="simple-line-icons" size={25}/>
                                        <Text
                                            style={styles.item_text}>{nodeType.title}</Text>
                                    </View>

                                    <TouchableOpacity
                                        style={{
                                            position: "absolute",
                                            top: -5,
                                            right: -2,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 20,
                                            height: 20,
                                            borderRadius: 10,
                                            backgroundColor: "#fff"


                                        }}
                                        onPress={() => this.removeChildItemAt(nodeType.id)}
                                    >
                                        <IconM name='cross-close' size={10}/>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    </SortableGrid>
                </View>
                }


                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <ScrollView style={styles.nodeDescriptionWrapScroll}>
                        <View style={styles.nodeDescriptionWrap}>
                            {iconListDefault.map((img, index) => (
                                <TouchableOpacity key={index}
                                                  style={styles.mynode}
                                                  onPress={() => this._chooseImg(img, index)}
                                >
                                    <View
                                        style={[styles.mynodeSelected, (index === this.state.selectedImgIndex) ? {backgroundColor: `${img.color}`} : null]}
                                    />
                                    {/*{(index === this.state.selectedImgIndex) && <Text>x</Text>}*/}
                                    <IconM name={img.img} type="simple-line-icons" size={25}/>
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
                <ActionButton
                    onPress={() => this.setModalVisible(true)}
                    buttonColor="rgba(231,76,60,1)">
                </ActionButton>
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
    item: {},
    item_text: {
        fontSize: 10,
        textAlign: 'center',

    },
    nodeDescriptionWrapScroll: {
        flex: 1
    },
    nodeDescriptionWrap: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    mynode: {
        width: "20%",
        height: 50,
        alignItems: 'center',
        position: 'relative',
        paddingTop: 15,
    },
    mynodeSelected: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        position: 'absolute',
        marginTop: 3,
        opacity: .2

    },

})