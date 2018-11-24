import React from 'react'
import {StyleSheet, Platform, Image, Text, View, TextInput, Button} from 'react-native'
import firebase from 'react-native-firebase'


export default class Main extends React.Component {
  state = {currentUser: null, message: '', list: 'ff'}

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

  handleGetData = () => {
    let {currentUser, list} = this.state;
    console.log(currentUser.uid);



  };

  componentDidMount() {
    const {currentUser} = firebase.auth();
    this.setState({currentUser});


    let starCountRef = firebase.database().ref(currentUser.uid);
    starCountRef.once('value', function (snapshot) {


    }).then((val)=>{
      this.setState({ list: val.toJSON()})
      console.log(val.toJSON())
    })






  }


  render() {
    const {currentUser,list} = this.state
    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>


        <Button title="Выйти" onPress={this.handleSignOut}/>

        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Сообщение"
          onChangeText={message => this.setState({message})}
          value={this.state.message}
        />

        <Button title="Опубликовать" onPress={this.handlePostData}/>

        <Text>{list[0]}</Text>
        <Button title="Получитьд Данные" onPress={this.handleGetData}/>
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
  }
});
