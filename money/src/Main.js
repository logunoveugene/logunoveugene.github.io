import React from 'react'
import {StyleSheet, FlatList, Text, View, AsyncStorage, ActivityIndicator} from 'react-native'
import firebase from 'react-native-firebase'
import ActionButton from 'react-native-action-button';
import {List, ListItem, Icon} from 'react-native-elements'

import {VictoryPie, VictoryChart, VictoryGroup, VictoryPolarAxis, VictoryTheme} from "victory-native";
import _ from 'lodash';


export default class Main extends React.Component {
    state = {currentUser: null, message: '', list: '', listls: []};
    handleSignOut = () => {
        firebase
            .auth()
            .signOut()
    };

    static navigationOptions = {
        headerTitle: 'Ваши финансы'
    };


    handlePostData = () => {
        let {currentUser, message, list} = this.state;
        let myDate = new Date();
        firebase
            .database().ref(currentUser.uid).push(
            {
                userId: currentUser.uid,
                message: message,
                date: myDate,
            }
        ).then(() => {
            console.log("данные ушли");
        }).catch((error) => {
            console.log(error);
        });
        this.setState({message: ''});

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

        const {currentUser} = firebase.auth();
        this.setState({currentUser});
        let starCountRef = firebase.database().ref(currentUser.uid + '/node');
        starCountRef.once('value', function (snapshot) {
        }).then((val) => {
            this.setState({list: _.values(val.toJSON())})
            console.log(_.values(val.toJSON()))
        })
    }


    render() {
        const {listls} = this.state
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
                <List>
                    {
                        listls.map((l) => (
                            <ListItem
                                key={l.date}
                                title={l.sum}
                                rightIcon={<Text></Text>}
                                leftIcon={
                                    <Text>0</Text>
                                }
                                subtitle={l.description}
                            />
                        ))
                    }
                </List>
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
