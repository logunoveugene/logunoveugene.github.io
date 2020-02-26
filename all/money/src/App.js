import React from 'react'
import {createSwitchNavigator, createStackNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation';

// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'
import AddNote from './AddNote'
import AddAccount from './AddAccount'
import categoryList from "./categoryList";




const AppStack = createDrawerNavigator({
        Main: {screen: Main},
        AddNote: {screen: AddNote},
        AddAccount: {screen: AddAccount},
        categoryList:{screen: categoryList}

    },
    {
        initialRouteName: 'Main',
    });


const AuthStack = createStackNavigator({
        SignUp: {screen: SignUp},
        Login: {screen: Login},
    },
    {
        initialRouteName: 'SignUp',
    });


export default createAppContainer(createDrawerNavigator(
    {
        Loading: {screen: Loading},
        App: AppStack,
        Auth: AuthStack,

    },
    {
        initialRouteName: 'Loading',
    }
));

