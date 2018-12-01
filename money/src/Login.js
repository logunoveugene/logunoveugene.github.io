import React from 'react'
import {StyleSheet, Text, TextInput, View, Button} from 'react-native'
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import firebase from 'react-native-firebase'



export const googleLogin = async () => {
    try {
        // Add any configuration settings here:
        await GoogleSignin.configure({
            webClientId: "271151281227-2roooonm5q6v30rvni81hukpo1rmfuhp.apps.googleusercontent.com",
            offlineAccess: true,
        });

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


export default class Login extends React.Component {
    state = {email: '', password: '', errorMessage: null}

    handleLogin = () => {
        const {email, password} = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Main'))
            .catch(error => this.setState({errorMessage: error.message}))
    };



    render() {
        return (
            <View style={styles.container}>
                <Text>Войдите</Text>
                {this.state.errorMessage &&
                <Text style={{color: 'red'}}>
                    {this.state.errorMessage}
                </Text>}
                <GoogleSigninButton
                    style={{width: 48, height: 48}}
                    size={GoogleSigninButton.Size.Icon}
                    color={GoogleSigninButton.Color.Dark}
                    title="Войти гуг"
                    onPress={googleLogin}
                    disabled={this.state.isSigninInProgress}/>
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Почта"
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                />

                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Пароль"
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                />
                <Button title="Войти" onPress={this.handleLogin}/>
                <Button
                    title="Зарегистрироваться"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                />

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
