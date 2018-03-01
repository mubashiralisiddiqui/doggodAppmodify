import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation';
import { Icon, Button, Avatar } from 'react-native-elements';
import Circle from 'react-native-vector-icons/MaterialIcons';
import LoginIcon from 'react-native-vector-icons/SimpleLineIcons';
import { connect } from 'react-redux';

import { logout } from '../src/store/middleware/authMiddleware'

class DrawerContainer extends React.Component {
    constructor(props) {
        super(props)
        this.logoutm = this.logoutm.bind(this)
    }
    logoutm() {
        const { navigate } = this.props.navigation
        this.props.logout(navigate)

        this.props.logout(navigate)
    }
    static navigationOptions = {
        header: null,
    }
    render() {
        const { navigation } = this.props;
        var lettr = this.props.userdetail.name&&this.props.userdetail.name.split('')
        const firstletter = lettr[0]
        return (
            <View style={styles.container}>
                <View
                    style={{
                        display: 'flex', flexDirection: 'row',

                        position: 'absolute'
                    }}>

                    <Image
                        style={{ flex: 1, height: 200, width: undefined, marginTop: -50, }}
                        source={require('../images/download.jpg')}
                        resizeMode="contain"
                    />
                </View>
                <Avatar
                    large
                    rounded
                    title={firstletter}s

                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{
                        marginLeft: 20,
                        marginTop: 15,
                        backgroundColor: '#FDD10C'
                    }}
                />
                <Text style={{ color: 'white', fontSize: 18, marginLeft: 25, fontWeight: 'bold', marginTop: 10 }}>
                    {this.props.userdetail.name}
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 20 }}>
                    <Icon name="person" color="#5A5E61" />
                    <Text
                        onPress={() => navigation.navigate('ProfileScreen')}
                        style={styles.uglyDrawerItem}
                    >
                        PROFILE
                </Text>

                </View>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', marginLeft: 20 }}>
                    <Icon name="home" color="#5A5E61" />
                    <Text
                        onPress={() => navigation.navigate('Dashbord')}
                        style={styles.uglyDrawerItem}>
                        HOME
                </Text>
                </TouchableOpacity>
                <View style={{
                    display: 'flex', flexDirection: 'row',
                    paddingLeft: 20, borderBottomColor: '#BFC1C2s',
                    borderBottomWidth: 2
                }}>
                    <Icon name="share" color="#5A5E61" />
                    <Text
                        onPress={() => navigation.navigate('shareScreen')}
                        style={styles.uglyDrawerItem}>
                        SHARE
                </Text>

                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 15 }}>
                    <Circle name="help-outline" color="#A1A4A6" size={30} style={{ marginTop: 15 }} />
                    <Text
                        onPress={() => navigation.navigate('Help')}
                        style={styles.uglyDrawerItem}
                    >

                        Help
                     </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 15 }}>
                    <LoginIcon name="logout" color="#A1A4A6" size={30} style={{ marginTop: 15 }} />
                    <Text
                        onPress={() => this.logoutm()}
                        style={styles.uglyDrawerItem}
                    >
                        Log Out
                     </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
      
    },
    uglyDrawerItem: {
        fontSize: 18,
        // fontWeight: 'bold',
        color: '#FDD10C',
        padding: 10,
        margin: 5,
        width: 100,
        fontFamily:'Roboto-Bold'
    },
    menuheader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffff',
        padding: 10,
        margin: 5,
        marginLeft: 10
    }
})
const mapStateToProps = (state) => {
    return {
        userdetail: state.AuthReducers.detail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (nav) => { dispatch(logout(nav)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer)