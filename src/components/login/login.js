import React, { Component } from "react";
import { loginStyles } from "./style";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    AsyncStorage,
    ToastAndroid,
    BackAndroid,
    BackHandler
} from "react-native";
import { connect } from 'react-redux'
import * as firebase from 'firebase'
import { Header, FormInput, FormLabel, Button, Icon } from "react-native-elements";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SplashScreen from 'react-native-splash-screen'
import { userLogin, sendverificationemail } from '../../store/middleware/authMiddleware'
// import LoginIcon from 'react-native-vector-icons/SimpleLineIcons'
import LoginIcon from 'react-native-vector-icons/SimpleLineIcons';

const Accounts = [];
class UserLogin extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            email: "",
            password: "",
            isLogin: false
        };
    }
    componentDidMount() {
        SplashScreen.hide();
    }

    static navigationOptions = {
        header: null,
    }


    handleBackButton() {
        return true;
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }
    _handleLogin() {
        const { navigate } = this.props.navigation
        let obj = {
            email: this.state.email,
            pasword: this.state.password,
            id: this.props.deviceID
        }
        this.props.login(obj, navigate)
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAwareScrollView style={loginStyles.container}>
                <Header
                    statusBarProps={{ barStyle: "light-content" }}
                    leftComponent={
                        <Image
                            source={{
                                uri:
                                    "https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Salesman_2-256.png"
                            }}
                            style={{ width: 35, height: 35 }}
                        />
                    }
                    centerComponent={{
                        text: "Login",
                        style: { color: "#fff", fontFamily: 'Times New Roman', fontSize: 30 }
                    }}
                    outerContainerStyles={{ backgroundColor: "#FDD10C" }}
                />
                <View style={loginStyles.form}>
                    <View style={loginStyles.formFields}>
                        <FormLabel>Email</FormLabel>
                        <FormInput
                            keyboardType="email-address"
                            onChangeText={txt => this.setState({ email: txt })}
                            dataDetectorTypes="address"
                            value={this.state.email}
                            inputStyle={{ fontFamily: 'Times New Roman' }}
                        />
                        <FormLabel>Password</FormLabel>
                        <FormInput
                            secureTextEntry={true}
                            onChangeText={txt => this.setState({ password: txt })}
                            value={this.state.password}
                            inputStyle={{ fontFamily: 'Times New Roman' }}
                        />
                    </View>

                    <Button
                        title="Login"
                        buttonStyle={loginStyles.loginButton}
                        onPress={() => this._handleLogin()}
                        textStyle={{ fontFamily: 'Times New Roman', fontWeight: 'bold' }}
                    />
                    <View >

                        {this.props.isVerified ?
                            <View style={loginStyles.registerSuggestionText}>
                                <Text>Not Registered</Text>
                                <TouchableOpacity onPress={() => navigate("SignupScreen")}>
                                    <Text style={{ fontWeight: "bold" }}>Signup Now!</Text>
                                </TouchableOpacity>
                            </View> :
                            <TouchableOpacity onPress={() =>this.props.sendemail()}>
                                <View style={loginStyles.registerSuggestionText} >
                                    <Text> your email is not verifed </Text>
                                    <Text> check your emai if not received? </Text>
                                    <Text style={{ fontWeight: "bold", marginTop: 20 }}>resend verification email!</Text>
                                </View>
                            </TouchableOpacity>}

                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isLogin: state.AuthReducers.isLoggedIn,
        isVerified: state.AuthReducers.verified
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (payload, navigate) => { dispatch(userLogin(payload, navigate)) },
        sendemail: () => { dispatch(sendverificationemail()) }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);