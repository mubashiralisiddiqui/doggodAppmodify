import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Button, Header, Icon, Avatar } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import smile from '../../../images/smile.jpg'
var i = 0;
class Help extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={[{ tintColor: 'red' }]} />
        ),
        header: null
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
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
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30, color: '#5A5E61' }}>
                        How To Win
                    </Text>

                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#5A5E61' }}>
                        Take your picture smiling and upload
                    </Text>

                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#5A5E61' }}>
                        it for other to see with the hashtag
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#5A5E61' }}>
                        DoitGood
                    </Text>
                    <Button title="Do it Good"
                        buttonStyle={{
                            backgroundColor: '#FDD10C',
                            width: 200, height: 50, marginLeft: 'auto', marginRight: 'auto',
                            marginTop: 140
                        }}
                        textStyle={{
                            fontSize: 20, fontStyle:'Roboto-Bold'
                        }}
                        onPress={() => navigate('takeAphoto')}
                    />
                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userdetail: state.AuthReducers.detail
    }
}
export default connect(mapStateToProps, null)(Help)