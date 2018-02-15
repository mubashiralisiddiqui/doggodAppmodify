import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Header, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import Information from 'react-native-vector-icons/MaterialIcons'

// import  font from '../../font/Fonts'

export default class Home extends React.Component {
    constructor(props) {
        super(props);

    }
    static navigationOptions = {
        header:null
        // headerTitle: ' Home',
        // headerTitleStyle: {
        //     color: '#ffff',
        //     textAlign: 'center',
        //     // marginLeft: 70
        // },
        // // headerTintColor: '#ffff',
        // headerStyle: {
        //     backgroundColor: '#FDD10C'
        // }


    }

    render() {
        const { navigate } = this.props.navigation;
        console.log("navigate", navigate)
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#ffff' }}>
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
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <Image
                        source={require('../../../images/cup.png')}
                        style={{ marginLeft: 'auto', marginRight: 'auto' }}
                    />
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 35, color: '#5A5E60', fontFamily: 'thickdeco' }}>
                        GOOD JOB!
                    </Text>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                        <Icon name='info' color='#95989A' size={20} />
                        <Text style={styles.description}>
                            Do more tasks to
                        </Text>
                    </View>
                    <Text style={styles.description}>increase your chances.</Text>

                    <Button title="GO TO PROFILE"
                        buttonStyle={{
                            backgroundColor: '#FDD10C', width: 250, height: 50,marginLeft:'auto',
                            marginRight:'auto',
                            marginTop: 20
                        }}
                        textStyle={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Roboto-Bold' }}
                        onPress={() => { navigate('ProfileScreen') }}
                    />
                </View>
            </View>
        )
    }
}
const styles = {
    description: {
        textAlign: 'center',
        fontSize: 20,
        color: '#76797C',
        marginLeft: 5,
        fontFamily: 'Roboto-Light'
    }
}