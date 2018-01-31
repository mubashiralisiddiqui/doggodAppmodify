import React from 'react';
import { StackNavigator, DrawerNavigator, DrawerItems, DrawerView, } from 'react-navigation';
import { Homescreen, Dashbord, ScreeTwo, Profile, Share, Signup, Login, TakePhot, Welcome } from '../src/components'
import DrawerContent from './drawerContent';
import { ScrollView, Dimensions } from 'react-native';
import DrawerContainer from './drawerContent';



const navigationOptions = {
    headerTitle: ' Home',
    headerTitleStyle: {
        color: '#ffff',
        textAlign: 'center',
        // marginLeft: 70
    },
    headerTintColor: '#ffff',
    headerStyle: {
        backgroundColor: '#FDD10C'
    }
}
const routes = {
    Dashbord: { screen: Dashbord },
    ProfileScreen: { screen: Profile },
    shareScreen: { screen: Share },
    Home: {
        screen: Homescreen,
    },
    takeAphoto: { screen: TakePhot }
    // DashbordScreen: { screen: AppRoutes },
    // facebooklogin: { screen: Fblogin },


};
const options = {
    initialRouteName: 'Dashbord',
    contentComponent: DrawerContent,
    drawerWidth: Dimensions.get('window').width - 119,
};
const AppRoutes = DrawerNavigator(routes, options);
AppRoutes.navigationOptions = {
    header: null
}
AppRoutes.contentOptions = {
    activeTintColor: 'blue',
    activeBackgroundColor: 'red',
    inactiveBackgroundColor: 'rgba(0,0,0,0)',
    inactiveTintColor: '#black',
    style: {
        marginVertical: 0
    },
    labelStyle: {
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        backgroundColor: 'transparent'
    }
}
export { AppRoutes };

const PrimaryStack = StackNavigator({

    LoginScreen: { screen: Login },
    SignupScreen: { screen: Signup },
},

    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#4C3E54' },
            title: 'Welcome!',
            headerTintColor: 'white',
            header: null
        })
    }
)
export const CreateRootNavigator = (signedIn = false) => {
    return StackNavigator(
        {
            login: { screen: AppRoutes },
            SignedOut: {
                screen: PrimaryStack,
                navigationOptions: {
                    gesturesEnabled: false
                }
            }
        },
        {
            headerMode: "screen",
            mode: "modal",
            initialRouteName: signedIn ? "login" : 'SignedOut'
        }
    );
};
