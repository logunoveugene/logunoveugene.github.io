import React from 'react'
import {StyleSheet, Text, TextInput, View, Image, Button} from 'react-native'
import firebase from 'react-native-firebase'

export default class SignUp extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Регистрация',
        drawerIcon: ({tintColor}) => (
            <Image
                source={require('./chats-icon.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };


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
    }

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
