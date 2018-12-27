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


import _ from 'lodash';
import {sampleNodes} from "../sampleNodes";

import {Defs, LinearGradient, Stop} from 'react-native-svg'
import {LineChart, BarChart, Grid} from 'react-native-svg-charts'
import PieChart from './pie-chart'


import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './font/selection';

const IconM = createIconSetFromIcoMoon(icoMoonConfig);


export default class Main extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            message: '',
            list: '',
            listls: [],
            modalVisible: false,
            selectedMonth: '',
            selectedYear: '',
            selectedType: 'Списание',
            chartData: [],


        }
    }


    handleSignOut = () => {
        firebase
            .auth()
            .signOut()
    };

    setModalVisible() {
        this.setState({modalVisible: true});
    }

    hideModal() {
        this.setState({modalVisible: false});
    }

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


        this.setState({
            chartData: _(storedNote).filter({
                'typeCategory': this.state.selectedType
            }).value()
        });


        this._setNavigationParams();


    }


    render() {




        //
        const {listls, chartData, selectedSlice} = this.state;
        var  colors=["#96cd5e","#ffda58","#ff5935","#74b5e9","#aa51ba","#eeeeee"]

        var group = _.groupBy(this.state.chartData, 'typeSubCategoryTitle');
        var group3 = []
        var percent = _.sumBy(this.state.chartData, function (o) {
            return +o.sum
        });
        console.log(percent)
        _.map(group, ((i) => {
            group3.push(
                _.reduce(i, function (p, t) {
                    return {
                        sum: (p.sum) += +t.sum,
                        color: p.color = t.typeSubCategoryColor,
                        name: p.name = t.typeSubCategoryTitle,

                    };
                }, {sum: 0, color: '', name: ''}))
        }));
        _.map(group3, ((i) => {
            i.percent = (i.sum / percent) * 100
        }));

        let result = _.orderBy(group3, ['percent'], ['desc']);


        const data = result.map((key, index) => {
            return {
                key: index,
                value: key.sum,
                svg: {fill: colors[index]},
                arc: {padAngle: 0},
                // onPress: () => this.setState({selectedSlice: {label: key, value: values[index]}})
            }
        })


        const deviceWidth = Dimensions.get('window').width

        return (

            <View style={styles.container}>
                <NavigationEvents
                    onDidFocus={() => this.componentDidMount()}
                />
                {(listls === []) && <ActivityIndicator size="large"/>}

                <View style={{
                    // width: "100%",
                    height: 220,
                    // flexDirection: 'column',
                    // alignItems: "center",
                    // backgroundColor: '#583598',
                    // borderBottomWidth: 1,
                    // padding: 10,
                    // borderRadius: 10,
                    // borderLeftColor: `${l.typeSubCategoryColor}`,
                    // borderLeftWidth: 1,
                    // // marginHorizontal: 10,
                    // marginBottom: 7,
                    // elevation: 1
                }}>

                    <View style={{justifyContent: 'center', flex: 1,}}>
                        {chartData.map((i, index) => {

                        })}

                        <View style={{justifyContent: 'center', flex: 1, position: 'relative'}}>
                            <View

                                style={{
                                    position: 'absolute',
                                    left: 10
                                }}>
                                {result.map((i, index) => (
                                    <Text
                                        key={index}
                                        style={{
                                            width: '100%',
                                            textAlign: 'left',
                                            fontSize: 11,
                                        }}>{i.name}: {i.sum} </Text>
                                ))
                                }
                            </View>
                            <PieChart
                            style={{height: 180,}}
                            outerRadius={'80%'}
                            innerRadius={'65%'}
                            data={data}
                            />



                            <Text

                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    textAlign: 'center', fontSize: 22,
                                    fontWeight: 'bold'
                                }}>{percent}</Text>
                        </View>

                    </View>

                </View>
                <ScrollView>
                    {
                        listls.map((l, idx) => [
                            <View key={l.id}>
                                {(idx >= 1 && listls[idx - 1].date !== l.date) || idx === 0 ? (
                                    <Text style={{
                                        padding: 12
                                    }}>
                                        {l.date}</Text>
                                ) : null}
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
                                    // borderLeftColor: `${l.typeSubCategoryColor}`,
                                    // borderLeftWidth: 1,
                                    marginHorizontal: 10,
                                    marginBottom: 7,
                                    position: "relative",
                                    // elevation: 1
                                }}>
                                    {/*<View style={{*/}
                                        {/*backgroundColor: `${l.typeSubCategoryColor}` + 20,*/}
                                        {/*width: 38,*/}
                                        {/*height: 38,*/}
                                        {/*borderRadius: 19,*/}
                                        {/*marginRight: 15,*/}
                                        {/*position: "absolute",*/}
                                        {/*top: 10,*/}
                                        {/*left: 10,*/}
                                    {/*}}>*/}
                                    {/*</View>*/}
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
                                        {l.usersDescription !== '' && <Text
                                            style={{
                                                backgroundColor: '#eeeeee',
                                                paddingHorizontal: 6,
                                                paddingVertical: 3,
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
                                        fontSize: 18
                                    }}>
                                        {l.typeCategory === "Списание" ? <Text>-</Text> : <Text>+</Text>}

                                        {l.sum}</Text>
                                </View>

                            </View>

                        ])

                    }

                </ScrollView>
                <ActionButton
                    onPress={() => this.props.navigation.navigate('AddNote')}
                    buttonColor="rgba(231,76,60,1)">
                </ActionButton>
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
