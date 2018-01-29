import { NativeModules } from 'react-native';

import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import Information from 'react-native-vector-icons/MaterialIcons';
import Camera from 'react-native-vector-icons/Entypo';
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker'
// var ImagePicker = require('react-native-image-picker');
// var { NativeModules } = require('react-native');
// var UIImagePickerManager = NativeModules.UIImagePickerManager;
// import  font from '../../font/Fonts'
// import abc from '../'
export default class TakePhot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: ''
        }
        this.openCamera = this.openCamera.bind(this)

    }
    static navigationOptions = {
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
    openCamera() {
        // var options = {
        //     quality: 1.0,
        //     maxWidth: 500,
        //     maxHeight: 500,
        //     storageOptions: {
        //         skipBackup: true
        //     }
        // }

        var options = {
            title: "Select Profile Picture",
            storageOptions: {
                skipBackup: true,
                path: "images"
            }
        };

        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                console.log("User cancelled image picker");
            } else if (response.error) {
                console.log("ImagePicker Error: ", response.error);
            } else if (response.customButton) {
                console.log("User tapped custom button: ", response.customButton);
            } else {
                let source = { uri: response.uri };
                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        console.log("navigate", navigate)
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
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
                // centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }} Dashbord

                />
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <View style={{
                        borderColor: 'gray', borderWidth: 1,
                        width: 300,
                        height: 50,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        justifyContent: 'center',
                        // flex: 1
                        // paddingTop: 10

                    }}>
                        {/* <TouchableOpacity  > */}
                        <Text style={{ textAlign: 'center', marginTop:10 }}>Upload Your Image</Text>
                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            
                            <Camera size={30} name="camera" style={{ marginLeft: 10, marginBottom: 30 }}
                                onPress={() => this.openCamera()}
                            />
                        </View>
                        {/* </TouchableOpacity> */}
                    </View>



                    {/* <Button title="GO TO NEXT TASK"
                    //paddingTop:20 marginTop:10
                        buttonStyle={{ backgroundColor: '#FDD10C', width: 250, height: 50, marginLeft: 40, marginTop: 20 }}
                        textStyle={{ fontSize: 20, fontWeight: 'bold', }}
                    /> */}
                    <View style={{
                        // backgroundColor: this.state.text,
                        borderBottomColor: '#000000',
                        // borderBottomWidth: 1
                        width: 300,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 20,
                        borderColor: 'gray', borderWidth: 1,
                    }}
                    >
                        <TextInput
                            // {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                            editable={true}
                            numberOfLines={4}
                            maxLength={40}
                            placeholder="write your comments"
                            underlineColorAndroid="transparent"

                        />
                    </View>
                    <Button title="Do It Good"
                        buttonStyle={{ backgroundColor: '#FDD10C', width: 250, height: 50, marginLeft: 40, marginTop: 20 }}
                        textStyle={{ fontSize: 20, fontWeight: 'bold', }}
                    />


                </View>
            </View>
        )
    }
}