import React from 'react'
import {StyleSheet, Text, TextInput, View, Button} from 'react-native'
import { GoogleSignin} from 'react-native-google-signin'
import firebase from 'react-native-firebase'

export default class SignUp extends React.Component {
  state = {email: '', password: '', errorMessage: null}

  handleSignUp = () => {
    const {email, password} = this.state
    if (email != null || password != null) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => this.props.navigation.navigate('Main'))
        .catch(error => this.setState({errorMessage: error.message}))
    }
  };
  handleGoogleSignUp = () => {

    export const googleLogin = async () => {
      try {
        // Add any configuration settings here:
        await GoogleSignin.configure();

        const data = await GoogleSignin.signIn();

        // create a new firebase credential with the token
        const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
        // login with credential
        const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

        console.info(JSON.stringify(currentUser.user.toJSON()));
      } catch (e) {
        console.error(e);
      }
    }

  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Регистрация</Text>
        {this.state.errorMessage &&
        <Text style={{color: 'red'}}>
          {this.state.errorMessage}
        </Text>}
        <TextInput
          placeholder="Почта"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Пароль"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Зарегистрироваться" onPress={this.handleSignUp}/>
        <Button
          title="Уже зарегистрированы? Войдете"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button title="гугл" onPress={this.handleGoogleSignUp}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
