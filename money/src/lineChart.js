import React from 'react'
import LineChart from "react-native-responsive-linechart";
import {Dimensions} from "react-native";
import _ from "lodash";

var width = Dimensions.get('window').width;
export default class ExtrasExample extends React.Component {


    state = {
        offset: 0,
        lineData: null
    };

    _onScroll(e) {
        this.setState({offset: e.nativeEvent.contentOffset.x});
    }

    componentDidMount() {
        this.cartData(this.props.list)
    }

    componentWillUpdate(nextProps) {
        if (nextProps.list !== this.props.list) {
            this.cartData(nextProps.list)
        }

    }


    cartData(data) {
        // let data = [...this.props.list]
        let group3 = []
        _.reduce(data, function (p, t) {
            group3.push(p.sum)
            return {
                sum: (p.sum) += +t.sum
            }
        }, {sum: 0})

        this.setState({
            lineData: group3
        }, () => {
            this.render()
            console.log(this.state.lineData)
        })
    }

    render() {
        const data2 = [100000, 99940, 99840, 99800, 99240, 99100, 99000, 98800, 98500, 98320, 1529940, 1529840, 1529740, 1529240, 1529140, 1529040, 1522040, 1522000, 1521800];
        const config2 = {
            line: {
                visible: false,
                strokeWidth: 1,
                strokeColor: "#216D99"
            },
            area: {
                gradientFrom: "#2e86de",
                gradientFromOpacity: 1,
                gradientTo: "#87D3FF",
                gradientToOpacity: 1
            },
            yAxis: {
                visible: false,

            },
            xAxis: {
                visible: false
            },
            grid: {
                visible: false
            },
            // valuePoint: {
            //     visible: true,
            //     color: "#2e86de",
            //     radius: 3
            // },
            tooltip: {
                visible: false,
                textFormatter: v => v.toFixed(0),
                lineColor: "#eee",
                lineWidth: 0,
                circleColor: "#ff0010",
                circleBorderColor: "#ff0010",
                circleBorderWidth: 5,
                boxColor: "#ffffff00",
                boxBorderWidth: 0,
                boxBorderColor: "#ffffff00",
                boxBorderRadius: 5,
                boxPaddingY: -10,
                boxPaddingX: 0,
                textColor: "black",
                textFontSize: 15
            },
            insetY: 7,
            insetX: 0,
            interpolation: "spline"

        };
        return (
            <LineChart
                style={{height: 140, width: width - 20, marginLeft: -15, marginBottom: -10}}
                config={config2}
                data={this.state.lineData}
            />

        )
    }

}

