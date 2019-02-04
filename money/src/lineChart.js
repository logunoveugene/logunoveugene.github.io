import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
// import Moment from 'moment';
import Rheostat, {AreaRheostat, BarRheostat} from "react-native-rheostat";

const areaSvgData = [ 50, 10, 40, 85, 85, 91, 35,  53, 24,
    50, 10, 40, 95, 85, 40,
    24]
const defaultProps = {
    snapPoints: [0,60,120,180,240,300,330,360,420,480,540,570,600,630,660,690,
        720,750,780,810,840,870,900,930,960,990,1020,1050,1080,1110,1140,1170,1200,
        1260,1320,1380,
        1440],
    values: [
        100,150
    ],
    svgData: [ 50, 50, 10, 10, 40, 40, 95,95, 85, 85, 91, 35, 53, 53, 24, 50,
        50, 10, 40, 95, 85, 91, 35, 53,  24, 50,
        50, 10, 40, 95, 85, 91, 35, 53,  50, 50,
        50, 10, 40, 95, 91, 91, 24, 24,  50, 50,
        10, 10,  ]
};
export default class ExtrasExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollEnabled: true,
            timeRange:{
                values: [10]
            }
        }
    }
    onRheostatValUpdated = (payload) => {
        this.setState({
            timeRange: payload
        })
    }
    onSliderDragStart = () => {
        this.setState({scrollEnabled:false})
    }
    onSliderDragEnd = () => {
        this.setState({scrollEnabled:true})
    }
    render() {
        return (
            <ScrollView contentContainerStyle={{paddingTop: 20, paddingHorizontal:15}} scrollEnabled={this.state.scrollEnabled}>

                <View style={{flex:1, paddingTop: 0, paddingBottom: 80}}>
                    <Text style={{marginTop: 15}}>
                        {this.state.timeRange.values[0]}
                        -
                        {this.state.timeRange.values[1]}
                    </Text>
                    {/*<Rheostat values={this.props.values} min={0} max={1440}*/}
                    {/*/>*/}
                    <BarRheostat values={this.props.values} min={0} max={1440}
                                 snap={true} snapPoints={this.props.snapPoints}
                                 svgData = {this.props.svgData}
                                 onValuesUpdated={this.onRheostatValUpdated}/>

                </View>
            </ScrollView>
        )
    }
}
ExtrasExample.defaultProps = defaultProps;