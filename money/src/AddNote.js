import React from 'react'
import {StyleSheet, View, Picker, TextInput, Button, Text, TouchableHighlight} from 'react-native'
import firebase from 'react-native-firebase'
import _ from "lodash";


export default class Main extends React.Component {
    state = {currentUser: null, account: 'Счет 1', message: '', accountList: '', inputNumber: ''}

    componentDidMount() {
        const {currentUser} = firebase.auth();
        this.setState({currentUser});


        let starCountRef = firebase.database().ref(currentUser.uid + '/accounts');
        starCountRef.once('value', function (snapshot) {
        }).then((val) => {
            this.setState({accountList: _.values(val.toJSON())})
            console.log(_.values(val.toJSON()))
        })
    };


    handlePostData = () => {
        let {currentUser, message, list, account} = this.state;
        let date = new Date();
        let myDate = {
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear()
        };
        firebase
            .database().ref(currentUser.uid + '/node').push(
            {
                userId: currentUser.uid,
                sum: message,
                date: myDate,
                account: account

            }
        ).then(() => {
            console.log("данные ушли");
        }).catch((error) => {
            console.log(error);
        });
        this.setState({message: ''});
    };


    // numberUpdate = (num) => {
    //     this.setState({
    //         inputNumber: this.state.inputNumber + num
    //     })
    // }

    render() {
        const {currentUser, list, account, accountList, inputNumber} = this.state

        let accountItem = Array.from(this.state.accountList);


        return (
            <View style={styles.container}>
                <View style={styles.inputWrap}>
                    <TextInput
                        style={styles.textInput}
                        autoCapitalize="none"

                        placeholder="Примечание"
                        onChangeText={message => this.setState({message})}
                        value={this.state.message}
                    />
                    <Text>{inputNumber}</Text>
                </View>
                <Picker
                    selectedValue={this.state.account}
                    style={{height: 50, width: 200}}
                    onValueChange={(itemValue, itemIndex) => this.setState({account: itemValue})}>

                    {accountItem.map((facility, i) => {
                        return <Picker.Item key={i} value={facility.accountName} label={facility.accountName}/>
                    })}

                </Picker>


                <View style={styles.keyboard}>
                    <TouchableHighlight
                        style={styles.button}


                    >
                        <Text> 7 </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}

                    >
                        <Text> 8 </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}

                    >
                        <Text>9 </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}

                    >
                        <Text> дата </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}

                    >
                        <Text> 4 </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}

                    >
                        <Text> 5 </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}

                    >
                        <Text>6 </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}

                    >
                        <Text> + </Text>
                    </TouchableHighlight>


                    <TouchableHighlight
                        style={styles.button}

                    >
                        <Text> 1 </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}

                    >
                        <Text> 2</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}

                    >
                        <Text>3 </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}

                    >
                        <Text> - </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}

                    >
                        <Text> . </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}

                    >
                        <Text> 0</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}

                    >
                        <Text>стереть </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}

                    >
                        <Text> отпр </Text>
                    </TouchableHighlight>


                </View>
                <Button title="Опубликовать" onPress={this.handlePostData}/>
                <Button
                    title="Отмена"
                    onPress={() => this.props.navigation.navigate('Main')}
                />
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
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        width: '25%',
        padding: 10
    },
    textInput: {
        height: 40,
        width: '50%',

        marginTop: 8,
        marginBottom: 8
    },
    keyboard: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    inputWrap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
});
