import React from 'react'
import {StyleSheet, Platform, FlatList, Text, View, TouchableHighlight, Button} from 'react-native'
import firebase from 'react-native-firebase'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons'



import {VictoryPie, VictoryChart, VictoryGroup, VictoryPolarAxis, VictoryTheme} from "victory-native";
import _ from 'lodash';

class RightHeaderButtons extends React.Component {
    render() {
        return (
            <HeaderButtons

            >
                <Item title="person" iconName="person" onPress={() => alert('person')} />
                <Item title="edit" show="never" onPress={() => alert('edit')} />
                <Item title="delete" show="never" onPress={() => alert('delete')} />
            </HeaderButtons>
        );
    }
    _onOpenActionSheet = ({ hiddenButtons }) => {
        // Same interface as https://facebook.github.io/react-native/docs/actionsheetios.html
        let options = hiddenButtons.map(it => it.props.title);
        let destructiveButtonIndex = 1;

        this.props.showActionSheetWithOptions(
            {
                options,
                destructiveButtonIndex,
            },
            buttonIndex => {
                hiddenButtons[buttonIndex].props.onPress();
            }
        );
    };
}

export default class Main extends React.Component {
    state = {currentUser: null, message: '', list: ''};
    handleSignOut = () => {
        firebase
            .auth()
            .signOut()

    };

    static navigationOptions = {
        headerTitle: 'Ваши финансы',
        headerRight: (
            <RightHeaderButtons />
        ),
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
