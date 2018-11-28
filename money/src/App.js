import React from 'react'
// import {createStackNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation'
import {createSwitchNavigator, createStackNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation';

// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'
import AddNote from './AddNote'
import AddAccount from './AddAccount'

// const AppNavigator = createStackNavigator({
//         Loading: {screen: Loading},
//         SignUp: {screen: SignUp},
//         Login: {screen: Login},
//         Main: {screen: Main},
//         AddNote: {screen: AddNote},
//     },
//     {
//         initialRouteName: 'Loading'
//     });
//
// export default createAppContainer(AppNavigator);

//
// const MyDrawerNavigator = createDrawerNavigator({
//         Loading: {screen: Loading},
//         SignUp: {screen: SignUp},
//         Login: {screen: Login},
//         Main: {screen: Main},
//         AddNote: {screen: AddNote},
//     },
//     {
//         initialRouteName: 'Loading'
//     });
//
// export default createAppContainer(MyDrawerNavigator);



// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createDrawerNavigator({
    Main: {screen: Main},
    AddNote: {screen: AddNote},
    AddAccount: {screen: AddAccount},
});
const AuthStack = createStackNavigator({
    SignUp: {screen: SignUp},
    Login: {screen: Login},
});



export default createAppContainer(createSwitchNavigator(
    {
        Loading: {screen: Loading},
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Loading',
    }
));

