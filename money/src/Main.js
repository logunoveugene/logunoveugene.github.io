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
import {VictoryPie, VictoryChart, VictoryGroup, VictoryPolarAxis, VictoryTheme} from "victory-native";
import _ from 'lodash';


import {BoxShadow} from 'react-native-shadow'

import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './font/selection';

const IconM = createIconSetFromIcoMoon(icoMoonConfig);

var width = Dimensions.get('window').width;

export default class Main extends React.Component {
    state = {
        currentUser: null,
        message: '',
        list: '',
        listls: [],
        modalVisible: false
    };
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
        try {
            var storedNote = await AsyncStorage.getItem('nodeList');
            if (storedNote == null) {
                storedNote = []
            } else {
                storedNote = JSON.parse(storedNote);
            }
            this.setState({listls: _.orderBy(storedNote, ['date', 'time'], ['desc', 'desc'])})

        } catch (error) {
            alert("Что-то пошло не так...")
        }
        this._setNavigationParams();


        // const {currentUser} = firebase.auth();
        // this.setState({currentUser});
        // let starCountRef = firebase.database().ref(currentUser.uid + '/node');
        // starCountRef.once('value', function (snapshot) {
        // }).then((val) => {
        //     this.setState({list: _.values(val.toJSON())})
        //     console.log(_.values(val.toJSON()))
        // })

    }


    render() {
        const {listls} = this.state
        return (

            <View style={styles.container}>
                <NavigationEvents
                    onDidFocus={() => this.componentDidMount()}
                />
                {(listls === []) && <ActivityIndicator size="large"/>}

                <View style={{
                 width:"100%",
                    height: 180,
                    flexDirection: 'row',
                    alignItems: "center",

                    backgroundColor: '#5503ff',
                    borderBottomWidth: 1,
                    padding: 10,
                    // borderRadius: 10,
                    // borderLeftColor: `${l.typeSubCategoryColor}`,
                    // borderLeftWidth: 1,
                    // // marginHorizontal: 10,
                    // marginBottom: 7,
                    position: "relative",
                    // elevation: 1


                }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.openDrawer();
                        }}>
                        <Text>Бургер</Text>

                    </TouchableOpacity>

                </View>


                <ScrollView>
                    {
                        listls.map((l, idx) => [

                            <View key={l.time}>
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

                                    <View style={{
                                        backgroundColor: `${l.typeSubCategoryColor}` + 20,
                                        width: 38,
                                        height: 38,
                                        borderRadius: 19,
                                        marginRight: 15,
                                        position: "absolute",
                                        top: 10,
                                        left: 10,


                                    }}>
                                    </View>
                                    <IconM name={l.typeSubCategoryImg} type="simple-line-icons" size={20}
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
                                                marginBottom:4


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
