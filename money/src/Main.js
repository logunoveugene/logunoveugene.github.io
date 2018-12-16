import React from 'react'
import {StyleSheet, ScrollView, TouchableOpacity, Text, View, AsyncStorage, ActivityIndicator} from 'react-native'
import firebase from 'react-native-firebase'
import ActionButton from 'react-native-action-button';

import {NavigationEvents} from 'react-navigation';
import {VictoryPie, VictoryChart, VictoryGroup, VictoryPolarAxis, VictoryTheme} from "victory-native";
import _ from 'lodash';




import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './font/selection';

const IconM = createIconSetFromIcoMoon(icoMoonConfig);


export default class Main extends React.Component {
    state = {currentUser: null, message: '', list: '', listls: []};
    handleSignOut = () => {
        firebase
            .auth()
            .signOut()
    };

    static navigationOptions = ({navigation}) => {

        return {
            headerTitle: 'Ваш баланс',
            headerRight: (
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddAccount')}
                    >
                        <Text>Счета</Text>
                    </TouchableOpacity>

                </View>
            )

        }
    };


    async componentDidMount() {
        try {
            var storedNote = await AsyncStorage.getItem('notes');
            if (storedNote == null) {
                storedNote = []
            } else {
                storedNote = JSON.parse(storedNote);
            }
            this.setState({listls: storedNote})
        } catch (error) {
            alert("Что-то пошло не так...")
        }

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
                <ScrollView>

                    {
                        listls.map((l, idx) => [
                            <View key={l.date}>
                                {(idx > 1 && l [idx - 1].date !== l.date) || idx === 0 ? (
                                <Text>{l.date}</Text>
                                ) : null}

                                <Text>{l.sum}</Text>
                                <Text>{l.typeDescription}</Text>
                                <IconM name={l.typeDescriptionImg} type="simple-line-icons" size={25}/>
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
});
