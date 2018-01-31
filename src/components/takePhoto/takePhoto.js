import { NativeModules } from 'react-native';

import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { Button, Header, Icon, Avatar } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import Information from 'react-native-vector-icons/MaterialIcons';
import Camera from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class TakePhot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null
        }
        this.openCamera = this.openCamera.bind(this)

    }
    static navigationOptions = {
        headerTitle: ' Home',
        headerTitleStyle: {
            color: '#ffff',
            textAlign: 'center',
        },
        headerTintColor: '#ffff',
        headerStyle: {
            backgroundColor: '#FDD10C'
        }
    }
    openCamera() {
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
        console.log("navigate", navigate)
        return (
            <KeyboardAwareScrollView>
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
                <View style={{ justifyContent: 'center', flex: 1, marginTop: 18 }}>
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
                    <View style={{
                        borderColor: 'gray', borderWidth: 1,
                        width: 300,
                        height: 50,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        justifyContent: 'center',

                    }}>

                        <Text style={{ textAlign: 'center', marginTop: 10 }}>Upload Your Image</Text>
                        <View style={{ justifyContent: 'center', flex: 1 }}>

                            <Camera size={30} name="camera" style={{ marginLeft: 10, marginBottom: 30 }}
                                onPress={() => this.openCamera()}
                            />
                        </View>
                    </View>
                    <View style={{
                        borderBottomColor: '#000000',
                        width: 300,
                        height: 100,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 20,
                        borderColor: 'gray', borderWidth: 1,
                    }}
                    >
                        <TextInput
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
            </KeyboardAwareScrollView>
        )
    }
}