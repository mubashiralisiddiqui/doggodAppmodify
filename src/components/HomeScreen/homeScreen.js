import React from 'react';
import { View, Text } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import Information from 'react-native-vector-icons/MaterialIcons'

// import  font from '../../font/Fonts'

export default class Home extends React.Component {
    constructor(props) {
        super(props);

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
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30, color: '#5A5E60', fontFamily: 'thickdeco' }}>GOOD JOB ! </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
                        <Icon name='info' color='#5C5D5F' size={23} />
                        <Text style={{ textAlign: 'center', fontSize: 25, color: '#5C5D5F' }}>Do more tasks to</Text>
                    </View>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: '#5C5D5F' }}>increase your chances</Text>

                    <Button title="GO TO NEXT TASK"
                        buttonStyle={{ backgroundColor: '#FDD10C', width: 250, height: 50, marginLeft: 40, marginTop: 20 }}
                        textStyle={{ fontSize: 20, fontWeight: 'bold', }}
                    />
                </View>
            </View>
        )
    }
}