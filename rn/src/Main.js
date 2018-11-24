import React from 'react'
import {StyleSheet, Platform, FlatList, Text, View, TextInput, Button} from 'react-native'
import firebase from 'react-native-firebase'
import _ from 'lodash';


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



  componentDidMount() {
    const {currentUser} = firebase.auth();
    this.setState({currentUser});
    let starCountRef = firebase.database().ref(currentUser.uid+'/node');
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



        <FlatList
          data={list}
          renderItem={({item, index}) => {
            return (

              <Text>{item.message}</Text>
            )
          }}
        ></FlatList>


        <Button
          title="Добавить запись"
          onPress={() => this.props.navigation.navigate('AddNote')}
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
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 8
  }
});
