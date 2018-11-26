import React from 'react'
import {createStackNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation'

// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'
import AddNote from './AddNote'


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


const MyDrawerNavigator = createDrawerNavigator({
        Loading: {screen: Loading},
        SignUp: {screen: SignUp},
        Login: {screen: Login},
        Main: {screen: Main},
        AddNote: {screen: AddNote},
    },
    {
        initialRouteName: 'Loading'
    });

export default  createAppContainer(MyDrawerNavigator);










