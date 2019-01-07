import React from 'react'
import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Text,
    View,
    AsyncStorage,
    Dimensions,
    Button,
    ActivityIndicator
} from 'react-native'
import firebase from 'react-native-firebase'
import ActionButton from 'react-native-action-button';

import {NavigationEvents} from 'react-navigation';

import ActionModal from './ActionModal'


import _ from 'lodash';
import {sampleNodes} from "../sampleNodes";


import {PieChart} from 'react-native-svg-charts'





import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './font/selection';

const IconM = createIconSetFromIcoMoon(icoMoonConfig);
import BoxShadow from './shadow'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'


var width = Dimensions.get('window').width;
export default class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            message: '',
            list: '',
            listls: [],
            modalActionVisible: false,
            selectedMonth: '',
            selectedYear: '',
            selectedType: 'Списание',
            chartData: [],
            barData: [],
            nodeIdReadyForAction: null,

        }
    }


    handleSignOut = () => {
        firebase
            .auth()
            .signOut()
    };


    static navigationOptions = ({navigation}) => {

        const params = navigation.state.params || {};

        return {
            title: params.title,
            headerLeft: params.headerLeft,
            headerRight: params.headerRight,
        }
    };

    _setNavigationParams() {
        let title = 'История';

        this.props.navigation.setParams({
            title
        });
    }


    async componentDidMount() {

        this.setState({
            selectedMonth: ('0' + (new Date().getMonth() + 1)).slice(-2),
            selectedYear: `${new Date().getFullYear()}`
        }, () => {
            // console.log(this.state.selectedYear)
        })


        try {
            var storedNote = await AsyncStorage.getItem('nodeList');
            if (storedNote == null) {
                storedNote = sampleNodes
            } else {
                storedNote = JSON.parse(storedNote);
            }

            this.setState({
                listls: _(storedNote).filter({
                    'month': this.state.selectedMonth,
                    'year': this.state.selectedYear
                }).orderBy(['date', 'time'], ['desc', 'desc']).value()
            });

            // console.log(this.state.listls)
        } catch (error) {
            alert("Что-то пошло не так...")
        }


        this.cartsData()

        this._setNavigationParams();

        // console.log(this.state)
    }

    setModalActionVisible = (visible) => {
        this.setState({
            modalActionVisible: visible,
        });
    }

    removeItem = () => {
        let tmpArray = [...this.state.listls];

        _.remove(tmpArray, obj => obj.id === this.state.nodeIdReadyForAction);

        console.log(tmpArray);
        this.setState({
            listls: tmpArray,
        }, () => {
            this.pushToLs();
            this.componentDidMount();
            this.setModalActionVisible(false)
        })
    }

    pushToLs = async () => {
        try {
            await AsyncStorage.setItem('nodeList', JSON.stringify(this.state.listls));
        } catch (error) {
            alert("Что-то пошло не так.2..")
        }
    }

    cartsData() {
        const {listls, chartData, selectedSlice} = this.state;


        this.setState({
            chartData: _(this.state.listls).filter({
                'typeCategory': this.state.selectedType
            }).value()
        });


        var colors = ["#96cd5e", "#ffda58", "#ff5935", "#74b5e9", "#eeeeee"]
        var group3 = []

        var group = _.groupBy(this.state.chartData, 'typeSubCategoryTitle');
        var percent = _.sumBy(this.state.chartData, function (o) {
            return +o.sum
        });
        group = _.values(group);

        group = _.orderBy(group, ['sum'], ['desc']);


        // console.log(group)
        _.map(group, ((i, index) => {


            group3.push(
                _.reduce(i, function (p, t) {
                    return {

                        sum: (p.sum) += +t.sum,
                        color: p.color = t.typeSubCategoryColor,
                        name: p.name = t.typeSubCategoryTitle,

                    };
                }, {sum: 0, color: '', name: ''}))


        }));
        group3 = _.orderBy(group3, ['sum'], ['abc']);

        _.map(group3, ((i, index) => {
            i.percent = (i.sum / percent) * 100

        }));

        _.map(group3, ((i, index, col) => {

            if (index > 4) {
                group3[4].sum += i.sum
                group3[4].percent += i.percent
                group3[4].name = 'Остальное'
            }
        }));
        group3 = group3.slice(0, 5);

        console.log(this.state.listls)

        // let result = _.orderBy(group3, ['percent'], ['desc']);
        // let result = group3

        this.setState({
            barData: group3.map((key, index) => {
                return {
                    value: key.percent,
                    svg: {fill: colors[index]},
                    label: key.name,
                    height: 10,
                    width: 10,
                    key: index,
                    arc: {padAngle: 0.03},
                    amount: Math.abs(key.sum)
                }

                // value:

                // svg: {fill: colors[index]},
                // arc: {padAngle: 0},
                // onPress: () => this.setState({selectedSlice: {label: key, value: values[index]}})

            })
        });

        console.log(this.state.barData)


    }

    render() {
        const {listls, chartData, selectedSlice} = this.state;
        return (

            <View style={styles.container}>
                <NavigationEvents
                    onDidFocus={() => this.componentDidMount()}
                />

                <View>
                    <TouchableOpacity
                        style={{
                            padding: 10,
                            marginTop: 8
                        }}
                        onPress={() => this.props.navigation.openDrawer()}>
                        <IconM name="menu" type="simple-line-icons" size={25}/>
                    </TouchableOpacity>


                </View>


                <BoxShadow
                    setting={{
                        width: +`${width}` - 40,
                        height: 220,
                        color: "#0c034c",
                        border: 30,
                        radius: 10,
                        opacity: 0.05,
                        x: 20,
                        y: 20,
                        style: { zIndex: 19,}
                    }}>
                    <View style={{
                        width: +`${width}` - 20,
                        height: 220,
                        // flexDirection: 'column',
                        // alignItems: "center",
                        zIndex: 20,
                        backgroundColor: '#ffffff',
                        // borderBottomWidth: 1,
                        marginHorizontal: 10,
                        marginTop: 10,
                        borderRadius: 10,
                        // borderLeftColor: `${l.typeSubCategoryColor}`,
                        // borderLeftWidth: 1,
                        // // marginHorizontal: 10,
                        // marginBottom: 7,
                        // elevation: 1
                    }}>

                        <View style={{flex: 1,}}>

                            <View style={{flex: 1, position: 'relative'}}>
                                <View
                                    style={{

                                        flex: 1,
                                        // left: 10
                                    }}>
                                    <PieChart
                                        style={{
                                            height: 150,

                                            paddingVertical: 20
                                        }}
                                        outerRadius={'100%'}
                                        innerRadius={'75%'}
                                        data={this.state.barData}
                                        valueAccessor={({item}) => item.amount}

                                    />
                                    <View
                                        style={{

                                            width: '100%',
                                            textAlign: 'center',
                                            position: 'absolute',
                                            top: 63,

                                            // fontWeight: 'bold'
                                        }}
                                    >

                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                lineHeight: 20,

                                                fontSize: 20,
                                                // fontWeight: 'bold'
                                            }}>2 500
                                        </Text>
                                        <Text
                                            style={{

                                                textAlign: 'center',
                                                lineHeight: 11,
                                                fontSize: 11,
                                                color: "#999"
                                                // fontWeight: 'bold'
                                            }}>расходы
                                        </Text>


                                    </View>


                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            // flexWrap: 'wrap',
                                            // alignItems: 'center',
                                            width: "100%"
                                        }}
                                    >

                                        {this.state.barData.map((i, index) => (
                                            <View
                                                key={index}
                                                style={{
                                                    width: '18%',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                }}
                                            >


                                                <View
                                                    style={{
                                                        // position: 'absolute',
                                                        width: 10,
                                                        height: 10,
                                                        borderRadius: 10,
                                                        // top: 3,
                                                        // left: 0,
                                                        marginBottom: 5,
                                                        borderWidth: 3,
                                                        borderColor: `${i.svg.fill}`

                                                    }}
                                                />
                                                <Text
                                                    style={{

                                                        textAlign: 'center',
                                                        fontSize: 15,
                                                        //
                                                        // fontWeight:'bold'
                                                    }}>{i.amount}</Text>
                                                <Text
                                                    style={{

                                                        textAlign: 'center',
                                                        fontSize: 11,
                                                        color: '#999999'

                                                    }}>{i.label}</Text>

                                            </View>

                                        ))
                                        }</View>


                                    {/*{this.state.barData.length > 0 &&*/}
                                    {/*<View style={{flexDirection: 'row', height: 200, paddingVertical: 16}}>*/}
                                    {/*<YAxis*/}
                                    {/*data={this.state.barData}*/}
                                    {/*yAccessor={({ index }) => index}*/}
                                    {/*scale={scale.scaleBand}*/}
                                    {/*contentInset={{ top: 10, bottom: 10 }}*/}
                                    {/*spacing={0.2}*/}
                                    {/*formatLabel={(_, index) => this.state.barData[ index ].label}*/}
                                    {/*/>*/}
                                    {/*<BarChart*/}
                                    {/*style={{flex: 1, marginLeft: 8}}*/}
                                    {/*data={this.state.barData}*/}
                                    {/*horizontal={true}*/}
                                    {/*svg={{fill: 'rgba(134, 65, 244, 0.8)',}}*/}
                                    {/*contentInset={{top: 10, bottom: 10}}*/}
                                    {/*yAccessor={({ item }) => item.value}*/}

                                    {/*spacing={0.2}*/}
                                    {/*gridMin={0}*/}
                                    {/*>*/}
                                    {/*<Grid direction={Grid.Direction.VERTICAL}/>*/}
                                    {/*</BarChart>*/}


                                    {/*</View>*/}
                                    {/*}*/}


                                    {/*{result.map((i, index) => (*/}
                                    {/*<Text*/}
                                    {/*key={index}*/}
                                    {/*style={{*/}
                                    {/*width: '100%',*/}
                                    {/*textAlign: 'left',*/}
                                    {/*fontSize: 11,*/}
                                    {/*}}>{i.name}: {i.sum} </Text>*/}
                                    {/*))*/}
                                    {/*}*/}

                                </View>


                            </View>

                        </View>
                    </View>
                </BoxShadow>
                <ScrollView>
                    {
                        listls.map((l, idx) => [
                            <View key={l.id}>
                                {(idx >= 1 && listls[idx - 1].date !== l.date) || idx === 0 ? (
                                    <Text style={{
                                        padding: 12,
                                        marginTop:15
                                    }}>

                                        {dayjs(l.date).locale('ru').format('D MMM')}
                                       </Text>
                                ) : null}
                                <TouchableOpacity

                                    onLongPress={() => {
                                        this.setModalActionVisible(!this.props.modalActionVisible);
                                        this.setState({
                                            nodeIdReadyForAction: l.id
                                        })
                                        // this.removeItem(l.id)
                                    }}
                                >

                                    <View style={{
                                        flex: 1,
                                        height: 58,
                                        flexDirection: 'row',
                                        alignItems: "center",
                                        borderBottomColor: '#eee',
                                        backgroundColor: '#fff',
                                        borderBottomWidth: 1,
                                        padding: 10,
                                        borderRadius: 10,
                                        marginHorizontal: 10,
                                        marginBottom: 7,
                                        position: "relative",

                                    }}>

                                        <IconM name={l.typeSubCategoryImg} type="simple-line-icons" size={26}
                                               style={{
                                                   color: "#333",
                                                   paddingLeft: 8
                                               }}
                                        />
                                        <View
                                            style={{
                                                flexDirection: "column",
                                                marginVertical: 10,
                                                marginLeft: 22
                                            }}>
                                            <Text style={{}}>
                                                {l.typeSubCategoryTitle}</Text>
                                            {l.usersDescription !== null && <Text
                                                style={{
                                                    // backgroundColor: '#eeeeee',
                                                    // paddingHorizontal: 6,
                                                    // paddingVertical: 3,
                                                    borderRadius: 6,
                                                    borderTopLeftRadius: 0,
                                                    fontSize: 12,
                                                    marginBottom: 4
                                                }}
                                            >{l.usersDescription}</Text>}
                                        </View>
                                        <Text style={{
                                            // backgroundColor: `${l.typeSubCategoryColor}`,
                                            position: "absolute",
                                            right: 14,
                                            top: 16,
                                            color: l.typeCategory === "Списание" ? "#333333" : "#78ab1e",
                                            fontSize: 16
                                        }}>
                                            {l.typeCategory === "Списание" ? '' : <Text>+</Text>}

                                            {l.sum}</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>

                        ])

                    }

                </ScrollView>
                <ActionButton
                    onPress={() => this.props.navigation.navigate('AddNote')}
                    buttonColor="rgba(231,76,60,1)">
                </ActionButton>
                <ActionModal
                    setModalActionVisible={this.setModalActionVisible}
                    modalActionVisible={this.state.modalActionVisible}
                    removeItem={this.removeItem}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f5fc',
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
        marginBottom: 8
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },

    fixedHeader: {
        backgroundColor: 'rgba(255,255,255,1)',
        elevation: 1,
        flexDirection: 'row',
        width: '100%',
        height: 50,

        position: 'relative',
    },
});
