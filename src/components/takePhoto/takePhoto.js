
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ToastAndroid } from 'react-native';
import { Button, Header, Icon, Avatar, CheckBox } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import Information from 'react-native-vector-icons/MaterialIcons';
import Camera from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'react-native-image-picker';
import firebase from 'firebase';
export default class TakePhot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            defaultAvatar: {
                uri: "https://image.flaticon.com/icons/png/512/206/206853.png"
            },
            checked: false
        }
        this.openCamera = this.openCamera.bind(this)
    }
    static navigationOptions = {
       header:null
    }
    openCamera() {
        var options = {
            title: "Select Profile Picture",
            storageOptions: {
                skipBackup: true,
                path: "images"
            }
        };

        ImagePicker.launchImageLibrary(options, response => {
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
                var storageRef = firebase.storage().ref().child("content://com.dogoodapp.provider/app_images/Pictures/image-a2d03d21-71e5-4ca1-a220-763bff2d3302.jpg");
            }
        });
    }
    toggleCheked() {
        this.setState({
            checked: !this.state.checked
        })
    }
    handleSubmit() {
        this.state.checked ?
            this.props.navigation.navigate('Home') :
            ToastAndroid.show('please checked first', ToastAndroid.SHORT);
    }
    render() {
        const { navigate } = this.props.navigation;
        console.log("navigate", navigate)
        return (
            <View style={{ flex: 1, backgroundColor: '#ffff' }}>
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
                            onPress={() => navigate('Dashbord')}
                        />
                    }
                />
                <View style={{ justifyContent: 'center', flex: 1, marginTop: -40 }}>
                    <Avatar
                        xlarge
                        rounded
                        containerStyle={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: 10,
                        }}
                        source={
                            this.state.avatarSource == null
                                ? this.state.defaultAvatar
                                : this.state.avatarSource
                        }
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    <View style={styles.cameraContainer}>
                        <Camera size={25} name="camera"
                            style={{ marginLeft: -20, }}
                            onPress={() => this.openCamera()}
                        />
                        <Text style={{ textAlign: 'center', marginRight: 60, fontFamily: 'Roboto', fontSize: 15 }}>
                            Upload Your Photo
                        </Text>
                    </View>
                    <View style={styles.comments}>
                        <TextInput
                            editable={true}
                            numberOfLines={4}
                            maxLength={80}
                            multiline={true}
                            placeholder="write your review"
                            underlineColorAndroid="transparent"
                            style={{ marginTop: -30, paddingLeft: 10, fontSize: 15,fontFamily:'Roboto-Light' }}
                        />
                    </View>
                    {/* <View style={{ flexDirection: 'row', justifyContent: 'center' }}> */}
                        <CheckBox
                            center
                            title='I am submitting my original task'
                            iconRight
                            iconType='material'
                            checkedIcon='check'
                            uncheckedIcon='check'
                            checkedColor='green'
                            checked={this.state.checked}
                            containerStyle={{ 
                                backgroundColor: '#F8F8F8', width: 300 ,
                                marginLeft:'auto',
                                marginRight:'auto',
                                marginTop:15
                            }}
                            textStyle={this.state.checked?{ fontFamily: 'Roboto-Light',fontWeight:'italic',color:'green'}:{fontFamily: 'Roboto-Light',fontWeight:'italic'}}
                            onPress={() => { this.toggleCheked() }}
                        />
                    {/* </View> */}
                    <Button title="Do It Good"
                        onPress={() => { this.handleSubmit() }}
                        buttonStyle={styles.button}
                        textStyle={{ fontSize: 20, fontFamily: 'Roboto-Bold' }}
                    />
                </View>
            </View>
        )
    }
}
const styles = {
    button: {
        backgroundColor: '#FDD10C',
        width: 200, height: 55,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20
    },
    comments: {
        borderBottomColor: '#000000',
        width: 300,
        height: 130,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        backgroundColor: '#F8F8F8'
    },
    cameraContainer: {
        width: 300,
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'space-around',
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        paddingTop: 10
    }
}