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
    Animated,
    ActivityIndicator,
    StatusBar,
    TouchableNativeFeedback,
    DatePickerAndroid,
    CheckBox, Modal, TouchableHighlight, TextInput, Picker
} from 'react-native'

import firebase from 'react-native-firebase'
import ActionButton from 'react-native-action-button';

import MyLabels from './MyLabels';
import Pie from 'react-native-fab-pie';

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
import {currencyList} from "./data/base/BaseConstant";

var width = Dimensions.get('window').width;
export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.pie = React.createRef();
        this.state = {


            currentUser: null,
            message: '',
            list: '',
            listls: [],
            fullNodeList: [],

            yearsList: [],
            monthList: [],

            modalActionVisible: false,
            selectedMonth: null,
            selectedYear: '',
            selectedType: 'Списание',
            chartData: [],


            isChartLoaded: false,


            barData: [],
            nodeIdReadyForAction: null,

            dateFilterVisible: false,
            scrollY: new Animated.Value(0),
            filterVisible: false,


            date: null,
            nodeTypeList: null,
            checked: false,

            modalVisible: false,
            filterPlateIsActive: false,
            filterDateRangeFirst: null,
            filterDateRangeLast: null,
            filterSelectedTypeList: null,
            filterSelectedSubTypeList: null,

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
            // selectedMonth: ('0' + (new Date().getMonth() + 1)).slice(-2),
            selectedYear: `${new Date().getFullYear()}`.toString(),
            date: new Date().getFullYear() + '-' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '-' + ('0' + new Date().getDate()).slice(-2),

        })

        var group = _.groupBy(this.state.chartData, 'typeSubCategoryTitle');

        try {
            var storedNote = await AsyncStorage.getItem('nodeList');
            if (storedNote == null) {
                storedNote = sampleNodes
            } else {
                storedNote = JSON.parse(storedNote);
            }

            var years = _.keys(_.groupBy(storedNote, 'year'));
            var nodeTypeList = _.keys(_.groupBy(storedNote, 'typeSubCategoryTitle'));
            var nodeTypeListArr = [];

            nodeTypeList.map((i) => {
                nodeTypeListArr.push({
                    title: i,
                    active: false
                })
            })
            this.setState({
                fullNodeList: storedNote,
                yearsList: years,
                nodeTypeList: nodeTypeListArr
            });
        } catch (error) {
            alert("Что-то пошло не так...")
        }

        this.setMonthList();
        this.filterData("monthFilter");
        this._setNavigationParams();
        this.pie.current.animate();
    }

    filterData(filterType) {

        if (filterType === "monthFilter") {
            this.setState({
                    listls: _(this.state.fullNodeList).filter({
                        'month': this.state.selectedMonth.id,
                        'year': this.state.selectedYear
                    }).orderBy(['date', 'time'], ['desc', 'desc']).value(),
                },
                () => {
                    this.cartsData()
                }
            );
        }
        if (filterType === "test") {
            this.setState({
                    listls: _(this.state.fullNodeList)
                        .filter((o) => {
                            return ((dayjs(o.date)).$d).getTime() >= ((dayjs(this.state.filterDateRangeFirst)).$d).getTime() && ((dayjs(o.date)).$d).getTime() <= ((dayjs(this.state.filterDateRangeLast)).$d).getTime()
                        })
                        .orderBy(['date', 'time'], ['desc', 'desc'])
                        .value(),
                },
                () => {
                    this.cartsData()
                    console.log(this.state)
                }
            );
        }

        if (filterType === "mainFilter") {
            let a = [];
            let B = _.filter(this.state.nodeTypeList, 'active');
            B.map((i) => {
                a.push(i.title)
            });
            this.setState({
                    listls: _(this.state.fullNodeList)
                        .filter((item => a.indexOf(item.typeSubCategoryTitle) >= 0))
                        .orderBy(['date', 'time'], ['desc', 'desc']).value(),
                },
                () => {
                    this.cartsData()
                }
            );
        }
        // let result = _.filter(this.state.fullNodeList, (item => B.indexOf(item.typeSubCategoryTitle) >= 0));
    }

    setModalActionVisible = (visible) => {
        this.setState({
            modalActionVisible: visible,
        });
    }

    setDateFilterVisible = (visible) => {
        this.setState({
            dateFilterVisible: visible,
        });
    }

    removeItem = () => {
        let tmpArray = [...this.state.listls];
        _.remove(tmpArray, obj => obj.id === this.state.nodeIdReadyForAction);
        // console.log(tmpArray);
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
        }, () => {
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

            this.setState({
                    barData: group3.map((key, index) => {
                        return {
                            value: key.percent,
                            color: colors[index],
                            title: key.name,
                            // height: 10,
                            // width: 10,
                            key: index,
                            // arc: {padAngle: 0.03},
                            amount: Math.abs(key.sum)
                        }
                    })
                },
                () => {
                    // this.animate();
                    this.setState({
                        isChartLoaded: true
                    }, () => {
                        this.pie.current.animate();
                    });


                });
        })

    }

    selectMonth(i) {

        if (this.state.selectedMonth === null) {

            this.setState({
                selectedMonth: _.filter(this.state.monthList, {id: ('0' + (new Date().getMonth() + 1)).slice(-2)})[0]
            }, () => {
                console.log(this.state)
                let date = new Date();
                let firstDay = new Date(this.state.selectedYear, this.state.selectedMonth.index, 1);
                let lastDay = new Date(this.state.selectedYear, this.state.selectedMonth.index + 1, 0);
                this.setState({
                    filterDateRangeFirst: firstDay,
                    filterDateRangeLast: lastDay
                });

            });

        }

        if (this.state.selectedMonth !== null) {
            if (!!i) {
                this.setState({
                        selectedMonth: i
                    }, () => {

                        let firstDay = new Date(+this.state.selectedYear, +this.state.selectedMonth.index, 1);
                        let lastDay = new Date(+this.state.selectedYear, +this.state.selectedMonth.index + 1, 0);
                        this.setState({
                            filterDateRangeFirst: firstDay,
                            filterDateRangeLast: lastDay
                        }, () => {
                            console.log(this.state.selectedYear)
                            console.log(this.state.selectedMonth)
                        });
                        this.filterData("monthFilter")
                    }
                );

            }
        }
    }

    selectYear(i) {
        this.setState({
                selectedYear: i
            }, () => {
                this.setMonthList();
                this.filterData("monthFilter");

            }
        );
    }

    setMonthList() {
        const monthDataList = [
            {id: '01', index: '0', name: 'Янв', fullName: 'Январь', hasData: false},
            {id: '02', index: '1', name: 'Фев', fullName: 'Февраль', hasData: false},
            {id: '03', index: '2', name: 'Мар', fullName: 'Март', hasData: false},
            {id: '04', index: '3', name: 'Апр', fullName: 'Апррель', hasData: false},
            {id: '05', index: '4', name: 'Май', fullName: 'Май', hasData: false},
            {id: '06', index: '5', name: 'Июн', fullName: 'Июнь', hasData: false},
            {id: '07', index: '6', name: 'Июл', fullName: 'Июль', hasData: false},
            {id: '08', index: '7', name: 'Авг', fullName: 'Август', hasData: false},
            {id: '09', index: '8', name: 'Сен', fullName: 'Сентябрь', hasData: false},
            {id: '10', index: '9', name: 'Окт', fullName: 'Октябрь', hasData: false},
            {id: '11', index: '10', name: 'Ноя', fullName: 'Ноябрь', hasData: false},
            {id: '12', index: '11', name: 'Дек', fullName: 'Декабрь', hasData: false}
        ];
        let yearList = _(this.state.fullNodeList).filter({
            'year': this.state.selectedYear
        }).groupBy('month').keys().value();

        function monthListUpdate(n) {
            return {
                id: n.id,
                index: n.index,
                name: n.name,
                fullName: n.fullName,
                hasData: ((_.indexOf(yearList, n.id)) !== -1)
            };
        }

        let monthList = _.map(monthDataList, monthListUpdate);

        console.log(this.state);

        this.setState({
            monthList: monthList,
        }, () => {
            this.selectMonth();
        });

    }

    animate = () => {
        this.pie.current.reset().then(this.pie.current.animate);

    };

    _selectDate = async (date, type) => {
        console.log(this.state)
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                date: date
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                let selectedDate = year + '-' + ('0' + (month + 1)).slice(-2) + '-' + ('0' + day).slice(-2);

                if (type === "firstDay") {
                    this.setState({
                        filterDateRangeFirst: ((dayjs(selectedDate)).$d),
                    })
                }
                if (type === "lastDay") {
                    this.setState({
                        filterDateRangeFirst: ((dayjs(selectedDate)).$d),
                    })
                }

            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }

        this.filterData("test");

    };

    selectFilterType(type) {
        this.setState({
            isChartLoaded: false
        })
        let selectFilterTypeIndex = _.findIndex(this.state.nodeTypeList, function (o) {
            return o.title === type.title;
        });
        let currentState = [...this.state.nodeTypeList];
        currentState[selectFilterTypeIndex].active = !currentState[selectFilterTypeIndex].active
        this.setState({
            nodeTypeList: currentState
        }, () => {
            this.filterData("mainFilter")
        });
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        const {listls, chartData, selectedSlice} = this.state;
        const monthFormat = (i) => dayjs(i).locale('ru').format('MMM')

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#d0d4dc'
                    barStyle='default'
                />
                {!this.state.isChartLoaded && <View
                    style={{
                        position: "absolute",
                        top: 90,
                        width: "100%",
                        textAlign: "center"
                        // fontWeight:'bold'
                    }}>
                    <ActivityIndicator
                        size="large"/>
                </View>}
                {this.state.isChartLoaded &&
                <View
                    style={styles.container}>
                    <NavigationEvents
                        onDidFocus={() => this.componentDidMount()}
                    />
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center'

                        }}
                    >
                        <TouchableOpacity
                            style={{
                                padding: 10,
                                marginTop: 8
                            }}
                            onPress={() => this.props.navigation.openDrawer()}>
                            <IconM name="menu" type="simple-line-icons" size={25}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {

                                this.setDateFilterVisible(!this.state.dateFilterVisible)
                            }}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                            <Text
                                style={{
                                    paddingVertical: 10,
                                    marginTop: 8,
                                    fontSize: 20
                                }}
                            >
                                {this.state.selectedMonth && this.state.selectedMonth.fullName}
                            </Text>
                            <Text
                                style={{
                                    paddingVertical: 10,
                                    marginTop: 8,
                                    marginHorizontal: 6,
                                    fontSize: 20
                                }}
                            >
                                {this.state.selectedYear && capitalizeFirstLetter(dayjs(this.state.selectedYear).locale('ru').format('YY'))}
                            </Text>
                            <IconM name="chevron-down"
                                   type="simple-line-icons"
                                   size={14}
                                   color="#999"
                                   style={{
                                       marginTop: 12,
                                   }}
                            />
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={{
                                padding: 10,
                                marginTop: 8
                            }}
                            onPress={() => this.setState({modalVisible: true})}>
                            <IconM name="filter"
                                   type="simple-line-icons"
                                   size={20}
                                   color="#666"
                                   style={{
                                       marginRight: 5,
                                   }}
                            />
                        </TouchableOpacity>


                    </View>
                    {this.state.dateFilterVisible &&
                    <BoxShadow
                        setting={{
                            width: +`${width}` - 40,
                            height: 120,
                            color: "#0c034c",
                            border: 30,
                            radius: 10,
                            opacity: 0.05,
                            x: 20,
                            y: 20,
                            style: {zIndex: 19, marginBottom: 15}
                        }}>
                        <View style={{
                            width: +`${width}` - 20,
                            height: 120,
                            // flexDirection: 'column',
                            // alignItems: "center",
                            zIndex: 20,
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
                            <ScrollView
                                horizontal={true}
                                style={{
                                    marginLeft: -4
                                }}
                            >

                                {this.state.yearsList.map((i, index) =>
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            this.selectYear(i)
                                        }}
                                        style={{
                                            textAlign: 'left',
                                            padding: 3,
                                            // width: "20%",
                                            position: "relative"
                                        }}
                                    >


                                        {i === this.state.selectedYear &&
                                        <View
                                            style={{
                                                backgroundColor: '#ffda3a',
                                                position: 'absolute',
                                                top: 4,
                                                left: 0,
                                                width: 50,
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
                                            {i} </Text>
                                    </TouchableOpacity>
                                )}
                            </ScrollView>
                            <View
                                style={{
                                    flexDirection: "row",
                                    flexWrap: 'wrap',
                                    justifyContent: 'space-between'
                                }}
                            >
                                {this.state.monthList.map((i, index) =>
                                    <TouchableOpacity
                                        key={index}
                                        style={{
                                            textAlign: 'left',
                                            padding: 3,
                                            width: "16%",
                                            position: "relative"
                                        }}
                                        onPress={() => {
                                            this.selectMonth(i)
                                        }}
                                    >
                                        <View>

                                            {i.id === this.state.selectedMonth.id &&
                                            <View
                                                style={{
                                                    backgroundColor: '#ffda3a',
                                                    position: 'absolute',
                                                    top: -3,
                                                    left: -8,
                                                    width: '100%',
                                                    height: 24,
                                                    borderRadius: 12,
                                                    opacity: .5
                                                }}
                                            />
                                            }
                                            {this.state.selectedMonth &&
                                            <Text
                                                style={{
                                                    textAlign: 'left',
                                                    fontSize: 14,
                                                    color: (i.hasData) ? "#333" : "#999"
                                                }}
                                            >
                                                {i.name} </Text>}
                                        </View>
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                    </BoxShadow>
                    }
                    {this.state.filterPlateIsActive &&
                    <BoxShadow
                        setting={{
                            width: +`${width}` - 40,
                            height: 120,
                            color: "#0c034c",
                            border: 30,
                            radius: 10,
                            opacity: 0.05,
                            x: 20,
                            y: 20,
                            style: {zIndex: 19, marginBottom: 15}
                        }}>
                        <View style={{
                            width: +`${width}` - 20,
                            height: 120,
                            zIndex: 1000,
                            backgroundColor: '#ffffff',
                            marginHorizontal: 10,
                            marginTop: 10,
                            borderRadius: 10,
                            padding: 15,
                        }}>

                        </View>
                    </BoxShadow>
                    }
                    <View
                        style={{
                            position: "absolute",
                            top: this.state.dateFilterVisible || this.state.filterPlateIsActive ? 150 : 0
                        }}
                    >
                        <Animated.View
                            style={{
                                position: "absolute",
                                top: 40,
                                width: '100%',
                                zIndex: 19,
                                transform: [
                                    {
                                        scaleY: this.state.scrollY.interpolate({
                                            inputRange: [0, 130],
                                            outputRange: [1, .5],
                                            extrapolate: 'clamp'
                                        })
                                    }
                                ]
                            }}
                        >
                            <BoxShadow
                                setting={{
                                    width: +`${width}` - 40,
                                    height: 170,
                                    color: "#0c034c",
                                    border: 30,
                                    radius: 10,
                                    opacity: 0.05,
                                    x: 20,
                                    y: 70,
                                    style: {
                                        zIndex: 19,
                                        position: "absolute"
                                    }
                                }}/>
                        </Animated.View>
                        <Animated.View
                            style={{
                                width: +`${width}` - 20,
                                height: this.state.scrollY.interpolate({
                                    inputRange: [0, 130],
                                    outputRange: [220, 90],
                                    extrapolate: 'clamp'
                                }),
                                position: "absolute",
                                top: 50,

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

                            }}>
                            {this.state.isChartLoaded &&
                            <View style={{flex: 1,}}>
                                <Animated.View
                                    style={{
                                        height: this.state.scrollY.interpolate({
                                            inputRange: [0, 130],
                                            outputRange: [130, 0],
                                            extrapolate: 'clamp'
                                        }),
                                        width: '100%',
                                        zIndex: 19,
                                        // transform: [
                                        //     {
                                        //         scale: this.state.scrollY.interpolate({
                                        //             inputRange: [0, 220],
                                        //             outputRange: [1, .1]
                                        //         })
                                        //     }
                                        // ]
                                    }}
                                >
                                    <Animated.View
                                        style={{

                                            opacity: this.state.scrollY.interpolate({
                                                inputRange: [0, 50, 85],
                                                outputRange: [1, 1, 0],
                                                extrapolate: 'clamp'
                                            }),

                                            width: '100%',
                                            zIndex: 19,
                                            transform: [
                                                // {
                                                //     translateY: this.state.scrollY.interpolate({
                                                //         inputRange: [0, 75],
                                                //         outputRange: [0, -5],
                                                //         extrapolate: 'clamp'
                                                //     })
                                                // },
                                                {
                                                    scale: this.state.scrollY.interpolate({
                                                        inputRange: [0, 110],
                                                        outputRange: [1, 0],
                                                        extrapolate: 'clamp'
                                                    })
                                                }
                                            ]
                                        }}
                                    >
                                        {/*<PieChart*/}
                                        {/*style={{*/}
                                        {/*height: 130,*/}
                                        {/*paddingTop: 20*/}
                                        {/*}}*/}
                                        {/*outerRadius={'100%'}*/}
                                        {/*innerRadius={'75%'}*/}
                                        {/*data={this.state.barData}*/}


                                        {/*/>*/}
                                        <Pie
                                            ref={this.pie}
                                            containerStyle={{
                                                // flexDirection: 'row',
                                                // justifyContent: 'space-between',
                                                paddingTop: 17,
                                                flex: 1,
                                                height: 130,


                                            }}
                                            pieStyle={{
                                                width: "100%",
                                                height: 120,

                                            }}
                                            outerRadius={42}
                                            innerRadius={55}
                                            data={this.state.barData}
                                            animate
                                        >


                                            {/*<MyLabels/>*/}
                                        </Pie>


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
                                                }}>{_.sumBy(this.state.barData, 'amount')}
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
                                    </Animated.View>
                                </Animated.View>


                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        // flexWrap: 'wrap',
                                        // alignItems: 'center',
                                        width: "100%",
                                        paddingTop: 20
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
                                                    borderColor: `${i.color}`

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

                                                }}>{i.title}</Text>

                                        </View>

                                    ))
                                    }</View>
                            </View>
                            }
                        </Animated.View>
                    </View>
                    {!this.state.isChartLoaded && <View
                        style={{
                            position: "absolute",
                            top: 400,
                            width: "100%",
                            textAlign: "center"
                            //
                            // fontWeight:'bold'
                        }}>
                        <ActivityIndicator
                            size="large"/>
                    </View>
                    }
                    <ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                        )}
                        style={{
                            position: 'absolute',
                            top: this.state.dateFilterVisible ? 220 : 70,
                            height: "100%",
                            width: "100%"
                        }}
                    >
                        <Animated.View
                            style={{
                                height: 220
                            }}
                        />

                        {
                            listls.map((l, idx) => [
                                <View key={l.id}>
                                    {(idx >= 1 && listls[idx - 1].date !== l.date) || idx === 0 ? (
                                        <Text style={{
                                            padding: 12,
                                            marginTop: 15
                                        }}>

                                            {dayjs(l.date).locale('ru').format('D MMM')}
                                        </Text>
                                    ) : null}
                                    <View
                                        style={{
                                            flex: 1,
                                            height: 60,
                                            borderRadius: 10,
                                            overflow: "hidden",
                                            marginHorizontal: 10,
                                            marginBottom: 7
                                        }}>
                                        <TouchableNativeFeedback
                                            background={TouchableNativeFeedback.Ripple('#d3d7de', true)}

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

                                                        }}
                                                    >{l.usersDescription}</Text>}
                                                </View>
                                                <Text style={{
                                                    // backgroundColor: `${l.typeSubCategoryColor}`,
                                                    position: "absolute",
                                                    right: 14,
                                                    // top: 16,
                                                    color: l.typeCategory === "Списание" ? "#333333" : "#78ab1e",
                                                    fontSize: 16
                                                }}>
                                                    {l.typeCategory === "Списание" ? '' : <Text>+</Text>}
                                                    {l.sum}</Text>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
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
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            this.setModalVisible(!this.state.modalVisible);
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
                            }}
                        >
                            <BoxShadow
                                setting={{
                                    width: +`${width}` - 20,
                                    height: 300,
                                    color: "#0c034c",
                                    border: 50,
                                    radius: 20,
                                    opacity: 0.1,
                                    x: 0,
                                    y: -10,
                                    style: {position: 'absolute', bottom: 10}
                                }} >
                                <View
                                    style={{
                                        width: {width} - 20,
                                        // position: "absolute",
                                        // bottom: 0,
                                        backgroundColor: "#ffffff",
                                        height: 300,
                                        borderRadius: 10,
                                        // borderTopRightRadius: 20,
                                        padding: 20,
                                        // margin: 10
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            position: 'relative',
                                            paddingVertical: 5,
                                            justifyContent: "space-between"
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: 'bold'
                                            }}
                                        >Добавление счета</Text>
                                        <TouchableHighlight
                                            style={{
                                                height: 30,
                                                width: 30,
                                                top: -2,
                                                right: -5,
                                                position: "absolute"
                                            }}

                                            onPress={() => {
                                                this.setModalVisible(!this.state.modalVisible)
                                            }}
                                        >
                                            <Text style={{
                                                fontSize: 30,
                                                color: '#999999',
                                                top: -1,

                                            }}>×</Text>
                                        </TouchableHighlight>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center"
                                        }}
                                    >
                                        <TouchableOpacity
                                            style={styles.datePickerButton}
                                            onPress={() => this._selectDate(this.state.filterDateRangeFirst, "firstDay")}
                                        >
                                            <IconM style={styles.datePickerButtonIcon} name="small-calendar"
                                                   type="simple-line-icons"
                                                   size={18}/>
                                            <Text
                                                style={styles.datePickerButtonText}>{this.state.filterDateRangeFirst && dayjs(this.state.filterDateRangeFirst).locale('ru').format('D MMM')}</Text>
                                        </TouchableOpacity>
                                        <Text> —</Text>
                                        <TouchableOpacity
                                            style={styles.datePickerButton}
                                            onPress={() => this._selectDate(this.state.filterDateRangeLast, "lastDay")}
                                        >
                                            <IconM style={styles.datePickerButtonIcon} name="small-calendar"
                                                   type="simple-line-icons"
                                                   size={18}/>
                                            <Text
                                                style={styles.datePickerButtonText}>{this.state.filterDateRangeLast && dayjs(this.state.filterDateRangeLast).locale('ru').format('D MMM')}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <View
                                            style={{flexDirection: 'row', flexWrap: 'wrap'}}
                                        >
                                            {this.state.nodeTypeList.map((i, index) => (
                                                <View
                                                    key={index}
                                                    style={{flexDirection: 'row'}}>
                                                    <CheckBox
                                                        value={i.active}
                                                        onValueChange={() => this.selectFilterType(i)}
                                                    />
                                                    <Text style={{marginTop: 5}}>{i.title}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            width: '100%',
                                            height: 100,
                                            position: "relative"

                                        }}
                                    >
                                        <BoxShadow
                                            setting={{
                                                width: +`${width}` - 80,
                                                height: 40,
                                                color: "#b07919",
                                                border: 10,
                                                radius: 20,
                                                opacity: 0.2,
                                                x: 10,
                                                y: 10,
                                                style: {position: 'absolute', bottom: 40}

                                            }}>
                                            <View style={{
                                                width: '100%',
                                                height: 20
                                            }}>
                                            </View>

                                        </BoxShadow>
                                        <TouchableHighlight
                                            underlayColor={"#ffb316"}
                                            style={{
                                                width: '100%',
                                                alignItems: 'center',

                                                backgroundColor: "#ffda3a",
                                                marginTop: 20,
                                                padding: 15,
                                                borderRadius: 30,
                                                bottom: 30,
                                                left: 0,
                                                position: "absolute"

                                            }} onPress={this.handlePostData}>
                                            <Text
                                                style={{
                                                    fontSize: 18
                                                }}
                                            >Добавить</Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </BoxShadow>
                        </View>
                    </Modal>
                </View>

                }

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

    datePickerButton: {
        width: "25%",
        padding: 10,

        flexDirection: 'row'
    },
    datePickerButtonIcon: {
        color: "#999",
        paddingRight: 5
    },
});
