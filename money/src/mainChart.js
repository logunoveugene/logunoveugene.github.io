import React from 'react'
import {
    Text,
    View,
    Animated, AsyncStorage,

} from 'react-native'

import Pie from "react-native-fab-pie";
import _ from "lodash";
import {sampleNodes} from "../sampleNodes";


export default class MainChart extends React.Component {


    componentDidMount() {
        this.pie = React.createRef();
        this.cartsData(this.props.listls)
    }

    componentWillUpdate(nextProps) {
        if (nextProps.listls !== this.props.listls) {
            this.cartsData(nextProps.listls)
        }
    }

    cartsData(list) {

        this.setState({
            chartData: _(list).filter({
                'typeCategory': this.props.selectedType
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

                    this.setState({
                        isChartLoaded: true,

                    }, () => {
                        this.transfer();
                        if (this.state.barData.length > 0) {
                            this.pie.current.animate();
                        }
                    });
                });
        })

    }

    transfer() {
        this.props.updateData(this.state.isChartLoaded)
    }

    animate = () => {
        this.pie.current.reset().then(this.pie.current.animate);
    };

    constructor(props) {
        super(props);
        this.pie = React.createRef();
        this.state = {
            isChartLoaded: this.props.isChartLoaded,
            barData: [],
            chartData: []
        }
    }


    render() {
        return (
            <View style={{flex: 1,}}>
                <Animated.View
                    style={{
                        height: this.props.scrollY.interpolate({
                            inputRange: [0, 130],
                            outputRange: [130, 0],
                            extrapolate: 'clamp'
                        }),
                        width: '100%',
                        zIndex: 19,
                        padding: 15,

                    }}
                >
                    <Animated.View
                        style={{
                            opacity: this.props.scrollY.interpolate({
                                inputRange: [0, 50, 85],
                                outputRange: [1, 1, 0],
                                extrapolate: 'clamp'
                            }),
                            width: '100%',
                            zIndex: 19,
                            transform: [
                                {
                                    scale: this.props.scrollY.interpolate({
                                        inputRange: [0, 110],
                                        outputRange: [1, 0],
                                        extrapolate: 'clamp'
                                    })
                                }
                            ]
                        }}
                    >

                        <Pie
                            ref={this.pie}
                            containerStyle={{
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
                        </Pie>
                        <View
                            style={{
                                width: '100%',
                                textAlign: 'center',
                                position: 'absolute',
                                top: 63,
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    lineHeight: 20,
                                    fontSize: 20,
                                }}>{_.sumBy(this.state.barData, 'amount')}
                            </Text>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    lineHeight: 11,
                                    fontSize: 11,
                                    color: "#999"
                                    // fontWeight: 'bold'
                                }}>всего
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
                                position: 'relative'
                            }}
                        >
                            <View
                                style={{
                                    position: 'absolute',
                                    width: 10,
                                    height: 10,
                                    borderRadius: 10,
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
        )

    }
}
