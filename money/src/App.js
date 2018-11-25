import React from 'react'
import {createStackNavigator, createAppContainer} from 'react-navigation'

// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'
import AddNote from './AddNote'


const AppNavigator = createStackNavigator({
        Loading: Loading,
        SignUp: SignUp,
        Login: Login,
        Main: Main,
        AddNote: AddNote
    },
    {
        initialRouteName: 'Loading'
    });

export default createAppContainer(AppNavigator);

















