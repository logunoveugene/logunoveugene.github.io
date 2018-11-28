import React from 'react'
import {StyleSheet, Platform, FlatList, Text, View, TextInput, Button} from 'react-native'
import firebase from 'react-native-firebase'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import {VictoryPie, VictoryChart, VictoryGroup, VictoryPolarAxis, VictoryTheme} from "victory-native";
import _ from 'lodash';


export default class Main extends React.Component {
    state = {currentUser: null, message: '', list: ''};
    handleSignOut = () => {
        firebase
            .auth()
            .signOut()

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


    componentDidMount() {
        const {currentUser} = firebase.auth();
        this.setState({currentUser});
        let starCountRef = firebase.database().ref(currentUser.uid + '/node');
        starCountRef.once('value', function (snapshot) {
        }).then((val) => {
            this.setState({list: _.values(val.toJSON())})
            console.log(_.values(val.toJSON()))
        })

    }

    handleGetData = () => {


    };

    render() {
        const {currentUser, list} = this.state





        return (
            <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
                <Button title="Выйти" onPress={this.handleSignOut}/>

                <VictoryGroup
                    animate={{
                        duration: 2000,
                        onLoad: {duration: 1000}
                    }}
                    colorScale={["tomato", "orange", "orange", "gold"]}
                >
                    <VictoryPie
                        padAngle={3}
                        radius={100}
                        innerRadius={70}
                        data={[
                            {x: "1", y: 35},
                            {x: "2", y: 30},
                            {x: "2", y: 10},
                            {x: "3", y: 55}
                        ]}
                    />

                </VictoryGroup>
                <FlatList
                    data={list}
                    renderItem={({item, index}) => {
                        return (
                            <Text>{item.sum} / {item.account}    </Text>

                        )
                    }}
                ></FlatList>
                <Button
                    title="Добавить запись"
                    onPress={() => this.props.navigation.navigate('AddNote')}
                />
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                        <Icon name="md-create" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                        <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                        <Icon name="md-done-all" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

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
