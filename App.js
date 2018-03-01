import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { CreateRootNavigator } from './appNavigation/appNavigation';
import Store from './src/store';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { Provider } from 'react-redux';
import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyD0iTVbvStgCxQ-Mr54VAaxz54vlRFj-WY",
  authDomain: "js-auth-29ca8.firebaseapp.com",
  databaseURL: "https://js-auth-29ca8.firebaseio.com",
  projectId: "js-auth-29ca8",
  storageBucket: "js-auth-29ca8.appspot.com",
  messagingSenderId: "299087801424"
};
firebase.initializeApp(config);

class App extends Component {

  render() {
    console.log("islogin==>", this.props.islogin)
    const Mainroot = CreateRootNavigator(this.props.islogin)
    return (
      <Mainroot />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
const mapStateToProps = (state) => {
  return {
    islogin: state.AuthReducers.isLoggedIn
  }
}
export default connect(mapStateToProps, null)(App)