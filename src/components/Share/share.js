import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Share, ScrollView } from 'react-native'
import { NavigationActions } from 'react-navigation';
import { Icon, Button, Header, Avatar } from 'react-native-elements';
import Puzzle from 'react-native-vector-icons/Foundation';
import App from 'react-native-vector-icons/Ionicons';
import Camera from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'react-native-image-picker';

import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return {
        userdetail: state.AuthReducers.detail
    }
}
class ShareComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            avatarSource: null,
            defaultAvatar: {
                uri: "https://image.flaticon.com/icons/png/512/206/206853.png"
            },
        }
    }
    static navigationOptions = {
        header: null
    }
    openCamera() {
        var options = {
            title: "Select Profile Picture",
            storageOptions: {
                skipBackup: true,
                path: "images"
            }
        };
        ImagePicker.launchCamera(options, response => {
            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.error) {
                console.log("ImagePicker Error: ", response.error);
            } else if (response.customButton) {
                console.log("User tapped custom button: ", response.customButton);
            } else {
                let source = { uri: response.uri };
                console.log("source", source)
                this.setState({
                    avatarSource: source,
                    defaultAvatar: {
                        uri: "https://image.flaticon.com/icons/png/512/206/206853.png"
                    },
                });
            }
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        var lettr = this.props.userdetail.name.split('')
        const firstletter = lettr[0]
        return (
            <View style={styles.container}>
                <Header
                    outerContainerStyles={{ backgroundColor: '#FDD10C' }}
                    leftComponent={
                        <Icon
                            name="menu"
                            color="white"
                            size={30}
                            onPress={() => navigate('DrawerOpen')}
                        />
                    }
                    rightComponent={
                        <Icon name='home' color="white"
                            onPress={() => { navigate('Dashbord') }}
                        />
                    }
                />
                <ScrollView contentContainerStyle={{minHeight:600}} >
                    <View style={{
                        width: 300,
                        height: 180,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        justifyContent: 'space-around',
                        backgroundColor: '#F8F8F8',
                        paddingTop: 5,
                        marginTop: 50

                    }}>
                        <View style={
                            {
                                flex: 1, display: 'flex', justifyContent: 'space-around',
                                flexDirection: 'row', marginTop: 5
                            }
                        }>

                            <Camera size={30} name="camera"
                                style={{ marginLeft: 10, }}
                                onPress={() => this.openCamera()}
                            />
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 16
                            }}>
                                PICTURE
                    </Text>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 16
                            }}>
                            </Text>
                        </View>
                        <Avatar
                            large
                            rounded
                            containerStyle={{
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginBottom: 20,
                            }}
                            source={
                                this.state.avatarSource == null
                                    ? this.state.defaultAvatar
                                    : this.state.avatarSource
                            }
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                    </View>
                    <View style={{ marginTop: 50 }}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30, color: '#5A5E60', fontFamily: 'RobotoCondensed-Regular' }}>
                            Plant More
                </Text>
                        <Text style={{ textAlign: 'center', fontSize: 15, color: '#5C5D5F', fontFamily: 'Roboto-Light' }}>
                            Take your picture smiling and  upload
                    </Text>

                        <Text style={{ textAlign: 'center', fontSize: 15, color: '#5C5D5F', fontFamily: 'Roboto-Light' }}>
                            it other to see with the hashtag
                    </Text>
                        <Text style={{ textAlign: 'center', fontSize: 15, color: '#5C5D5F', fontFamily: 'Roboto-Light' }}>
                            Do It Good
                    </Text>
                    </View>
                    <Button title="Share it On Facebook"
                        icon={{ name: 'share', size: 25 }}
                        textStyle={{ fontSize: 20, fontFamily: 'Roboto-Bold' }}
                        buttonStyle={styles.button} />
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    button: {
        backgroundColor: '#FDD10C',
        width: 250, height: 50, marginLeft: 'auto', marginTop: 10,
        marginRight: 'auto',
        marginTop: 20
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
export default connect(mapStateToProps, null)(ShareComponent);