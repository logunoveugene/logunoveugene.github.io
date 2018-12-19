import React from 'react'
import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Text,
    View,
    AsyncStorage,
    Modal,
    Button,
    ActivityIndicator
} from 'react-native'
import firebase from 'react-native-firebase'
import ActionButton from 'react-native-action-button';

import {NavigationEvents} from 'react-navigation';
import {VictoryPie, VictoryChart, VictoryGroup, VictoryPolarAxis, VictoryTheme} from "victory-native";
import _ from 'lodash';


import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './font/selection';

const IconM = createIconSetFromIcoMoon(icoMoonConfig);


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
            title:       params.title,
            headerLeft:  params.headerLeft,
            headerRight: params.headerRight,
        }
    };

    _setNavigationParams() {
        let title = 'Form';
        let headerLeft = <Button title="burger" onPress={this.setModalVisible.bind(this)}/>;
        let headerRight = <Button title="bilter" onPress={this.setModalVisible.bind(this)}/>;

        this.props.navigation.setParams({
            title,
            headerLeft,
            headerRight,
        });
    }


    async componentDidMount() {
        try {
            var storedNote = await AsyncStorage.getItem('notes');
            if (storedNote == null) {
                storedNote = []
            } else {
                storedNote = JSON.parse(storedNote);
            }
            this.setState({listls: _.orderBy(storedNote, ['date', 'id'], ['desc', 'desc'])})

        } catch (error) {
            alert("Что-то пошло не так...")
        }
        this._setNavigationParams();
        console.log(this.state.listls)

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


                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableOpacity
                                onPress={() => {
                                    this.hideModal();
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>


                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.openDrawer();
                    }}>
                    <Text>Бургер</Text>

                </TouchableOpacity>


                <ScrollView>

                    {
                        listls.map((l, idx) => [
                            <View key={l.id}>
                                {(idx >= 1 && listls[idx - 1].date !== l.date) || idx === 0 ? (
                                    <Text>{l.date}</Text>
                                ) : null}
                                <View style={styles.nodeItem}>
                                    <IconM name={l.typeDescriptionImg} type="simple-line-icons" size={25}/>
                                    <Text>{l.type}</Text>
                                    <Text>{l.id}</Text>
                                    <Text>{l.typeDescription}</Text>
                                    <Text>{l.sum}</Text>
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
    nodeItem: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        padding: 10
    }
});
