import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { NavigationActions } from 'react-navigation';
import { Icon, Button, Header, List, ListItem, Avatar } from 'react-native-elements';
import OrderIcon from 'react-native-vector-icons/EvilIcons';
import LoginIcon from 'react-native-vector-icons/SimpleLineIcons';
import Help from 'react-native-vector-icons/Feather';
import Circle from 'react-native-vector-icons/Entypo'
import Puzzle from 'react-native-vector-icons/Foundation';
import PercentageCircle from 'react-native-percentage-circle';
import App from 'react-native-vector-icons/Ionicons';
import Star from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
class Profile extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        header: null
    }

    render() {
        var lettr = this.props.userdetail.name.split('')
        const firstletter = lettr[0]
        console.log("======", firstletter)
        console.log(lettr[0])
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={{ zIndex: 1, border: 2, borderColor: "red", height: 130, marginTop: -5 }}>
                    <View >
                        <View
                            style={{
                                display: 'flex', flexDirection: 'row',
                                justifyContent: 'center',
                                position: 'absolute',
                                // zIndex: 1
                                // height:400
                            }}>
                            <Image
                                style={{ height: 130, width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
                                source={require('../../../images/download1.jpg')}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={styles.profilename}>
                            <Avatar
                                large
                                rounded
                                title={firstletter}

                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                                containerStyle={
                                    styles.logo
                                }
                            />
                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontFamily: 'Roboto' }}>{this.props.userdetail.name} </Text>
                        </View>
                        <View style={styles.menuIcon}>
                            <Icon name="menu" color="#C3C4C5" onPress={() => navigate('DrawerOpen')} size={35} />
                        </View>
                    </View>
                </View>

                <ScrollView contentContainerStyle={{ height: 900 }} >
                    <View style={{ marginTop: 15, flexDirection: 'row', marginLeft: 40 }}>
                        <Puzzle
                            name="puzzle" size={30} color="#ffff"
                            style={styles.Puzzleicon}
                        />
                        <Text style={{ fontSize: 20, marginLeft: 18, fontFamily: 'Roboto' }}>7 task in total</Text>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 'auto', borderColor: 'gray', marginTop: 15 }}>
                        <PercentageCircle radius={112} percent={55} color={"#FDD10C"} borderWidth={12} bgcolor="#808080" >
                            <Text style={{ fontSize: 35, fontWeight: 'bold' }}>450</Text>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>POINTS</Text>
                        </PercentageCircle>
                    </View>
                    <Text style={{ marginLeft: 30, marginTop: 25, fontSize: 18, fontFamily: 'Roboto' }}> Tasks done so far .....</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <App name="ios-apps" size={30} style={{ marginLeft: 35, marginTop: 20 }} />
                        <Star name='stars' size={30} style={{ marginLeft: 20, marginTop: 20 }} color="red" />
                        <Text style={{ marginLeft: 5, marginTop: 25, fontWeight: 'bold', fontSize: 15 }}>#TASK1:</Text>
                        <Text style={{ marginTop: 25, fontFamily: 'Roboto-Light' }}> Smiling</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: -10 }}>
                        <App name="ios-apps" size={30} style={{ marginLeft: 35, marginTop: 25 }} />
                        <Star name='stars' size={30} style={styles.iconstyle} color="#FDD10C" />
                        <Text style={{ marginLeft: 5, marginTop: 25, fontWeight: 'bold', fontSize: 15 }}>#TASK2:</Text>
                        <Text style={{ marginTop: 25, color: '#818082', fontFamily: 'Roboto-Light' }}> Planting</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: -10 }}>
                        <App name="ios-apps" size={30} style={{ marginLeft: 35, marginTop: 25 }} />
                        <Star name='stars' size={30} style={styles.iconstyle} color="#2E86C1" />
                        <Text style={{ marginLeft: 10, marginTop: 25, fontWeight: 'bold', fontSize: 15 }}>#TASK3:</Text>
                        <Text style={{ marginTop: 25, color: '#818082', fontFamily: 'Roboto-Light' }}> Singing</Text>
                    </View>
                    <Text style={styles.bottomborder}></Text>
                    <View style={{ marginTop: 35, }}>
                        <Text style={styles.domore}>Do more tasks to  </Text>
                        <Text style={styles.domore}> increase your chances.</Text>
                        <Button title="Do it Good"
                            textStyle={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Roboto' }}
                            onPress={() => { navigate('Dashbord') }}
                            buttonStyle={styles.button} />
                    </View>

                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
    },
    logo: {
        marginTop: 85,
        backgroundColor: '#FDD10C',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 10,
        paddingTop: 5,
        fontFamily: 'Roboto'
    },
    menuIcon: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: -90
    },
    button: {
        backgroundColor: '#FDD10C',
        width: 200, height: 50, marginLeft: 'auto', marginTop: 30,
        marginBottom: 120,
        marginRight: 'auto',
    },
    bottomborder: {
        borderBottomColor: '#BFC1C2',
        borderBottomWidth: 1.5, width: 300,
        height: 4, marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 25
    },
    domore: {
        textAlign: 'center', fontSize: 16,
        fontFamily: 'Roboto-Light'
    },
    iconstyle: {
        marginLeft: 20, marginTop: 25
    },
    Puzzleicon: {
        backgroundColor: '#D13E2E',
        borderRadius: 50,
        marginLeft: 20,
        width: 50, height: 50,
        paddingLeft: 15,
        paddingTop: 10
    },
    profilename: {
        display: 'flex', marginLeft: 'auto', marginRight: 'auto', marginTop: -40, justifyContent: 'center'
    }
})
const mapStateToProps = (state) => {
    return {
        userdetail: state.AuthReducers.detail
    }
}
export default connect(mapStateToProps, null)(Profile)