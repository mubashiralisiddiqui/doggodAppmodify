import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation';
import { Icon, Button } from 'react-native-elements';
import OrderIcon from 'react-native-vector-icons/EvilIcons';
import LoginIcon from 'react-native-vector-icons/SimpleLineIcons';
import Help from 'react-native-vector-icons/Feather';
import Circle from 'react-native-vector-icons/Entypo'
import Puzzle from 'react-native-vector-icons/Foundation';
import PercentageCircle from 'react-native-percentage-circle';
import App from 'react-native-vector-icons/Ionicons';
import Star from 'react-native-vector-icons/MaterialIcons';

// import { logout, shopkeeperSignup } from '../store/middleware/authMiddleWare'
// import { connect } from 'react-redux';

export default class Profile extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{ border: 2, borderColor: "red", height: 130, marginTop: -5 }}>
                    <View>
                        <View
                            style={{
                                display: 'flex', flexDirection: 'row',
                                justifyContent: 'center',
                                position: 'absolute',
                            }}>
                            <Image
                                style={{ height: 130, width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
                                source={require('../../../images/download1.jpg')}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.profilename}>
                            <Text style={styles.logo} >A </Text>
                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Asad Ullah </Text>
                        </View>
                        <View style={styles.menuIcon}>
                            <Icon name="menu" color="#C3C4C5" onPress={() => navigate('DrawerOpen')} size={35} />
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 10, flexDirection: 'row', marginLeft: 40 }}>
                    <Puzzle
                        name="puzzle" size={30} color="#ffff"
                        style={styles.Puzzleicon}
                    />
                    <Text style={{ fontSize: 18, marginLeft: 20 }}>7 task in total</Text>
                </View>
                <View
                    style={{
                        marginLeft: 'auto', marginRight: 'auto',
                        paddingLeft: 'auto', paddingRight: 'auto',
                        width: 220, height: 220, borderRadius: 110,
                        backgroundColor: '#FDD10C',
                        justifyContent: 'center',
                        marginTop: 40
                    }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 55, fontWeight: 'bold' }}>450</Text>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, }}>Points</Text>
                </View>

                <Button title="Share it On Facebook"
                    icon={{ name: 'share', size: 30 }}
                    textStyle={{ fontSize: 20, fontWeight: 'bold' }}
                    buttonStyle={styles.button} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
    },
    button: {
        backgroundColor: '#FDD10C',
        width: 250, height: 50, marginLeft: 'auto', marginTop: 10,
        marginRight: 'auto',
        marginTop: 30
    },
    logo: {
        width: 70, height: 70,
        borderRadius: 100, borderColor: 'white', borderWidth: 2,
        textAlign: 'center',
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 85,
        backgroundColor: '#FDD10C',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 10,
        paddingTop: 5
    },
    Puzzleicon: {
        backgroundColor: '#D13E2E',
        borderRadius: 50,
        marginLeft: 20,
        width: 50, height: 50,
        paddingLeft: 15,
        // paddingRight: 'auto',
        paddingTop: 10
    },
    profilename: {
        display: 'flex', marginLeft: 'auto', marginRight: 'auto', marginTop: -40, justifyContent: 'center'
    },
    menuIcon: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: -80
    },
})