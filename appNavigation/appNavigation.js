import React from 'react';
import { StackNavigator, DrawerNavigator, DrawerItems, DrawerView, } from 'react-navigation';
import { Homescreen, Dashbord, Help, Profile, Share, Signup, Login, TakePhot, } from '../src/components'
import DrawerContent from './drawerContent';
import { ScrollView, Dimensions,View } from 'react-native';
import DrawerContainer from './drawerContent';


const routes = {
    Dashbord: { screen: Dashbord },
    ProfileScreen: { screen: Profile },
    shareScreen: { screen: Share },
    Home: {
        screen: Homescreen,
    },
    takeAphoto: { screen: TakePhot },
    Help:{screen:Help}
};
const options = {
    initialRouteName: 'Dashbord',
    contentComponent: ({ navigation }) => {
        return (
            // <View>
                <DrawerContent navigation={navigation} />
            // </View>
        )
    },
    contentOptions: {
        activeTintColor: 'blue',
        style: {
            flex: 1,
            paddingTop: 15,
            width: 150
        },

    },
    drawerWidth: Dimensions.get('window').width - 119,
};
const AppRoutes = DrawerNavigator(routes, options);
AppRoutes.navigationOptions = {
    header: null
}

const PrimaryStack = StackNavigator({
    LoginScreen: { screen: Login },
    SignupScreen: { screen: Signup },
},

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
