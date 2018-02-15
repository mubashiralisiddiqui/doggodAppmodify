import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Button, Header, Icon, Avatar } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import smile from '../../../images/smile.jpg'

var i = 0;
class Home extends React.Component {
    constructor(props) {
        super(props);
        // uri: require('path/to/local/image')
        this.state = {
            text: { text: 'Plant More', uri: require("../../../images/plant.png") },
            // text: 'Smile More'
            images: {
                text: 'smileMore',
                uri: require('../../../images/smile.jpg')
            },
            url: require('../../../images/smile.jpg')

        }
    }
    componentDidMount() {
        console.log(this.props.userdetail.name)
    }
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Icon name="home" style={[{ tintColor: 'red' }]} />
        ),
        header: null
    };
    changeText() {
        var task = [{ text: "Smile More", uri: require("../../../images/smile.jpg") },
        { text: "Plant More", uri: require("../../../images/plant.png") }, { text: "Singing", uri: require("../../../images/smile.jpg") }]
        // var task = ["Smile More", "Planting", "Singing",];
        var x = "";
        if (i < task.length) {
            x = task[i++]
            console.log("xx=>", x)
            this.setState({
                text: x
            })
            i === task.length ? i = 0 : ''
        }
    }

    render() {

        let imgSource = this.state.images.uri;
        console.log("state of text", this.state.text.uri)
        const { navigate } = this.props.navigation;
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
                        <Icon name='home' color="white" />
                    }
                />
                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', }}>
                    <Image
                        source={this.state.text.uri}
                        style={{
                            marginLeft: 'auto', marginRight: 'auto',
                            width: 170, height: 190
                        }}
                    />

                    <Text style={styles.tasks}>
                        {this.state.text.text}
                    </Text>

                    <Text style={styles.description}>
                        Take your picture smiling and
                    </Text>

                    <Text style={styles.description}>
                        upload it other to see with the hashtag
                    </Text>
                    <Text style={styles.description}>
                        Do It Good
                    </Text>
                    <Button title="DO it Good"
                        buttonStyle={{ backgroundColor: '#FDD10C', width: 200, height: 50, marginLeft: 65, marginTop: 10 }}
                        textStyle={{ fontSize: 20, fontWeight: 'bold' }}
                        onPress={() => navigate('takeAphoto')}
                    />
                    <TouchableOpacity onPress={() => { this.changeText() }}>
                        <Text style={styles.skip}>
                            SKIP [1]
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = {
container:{
    flex: 1, justifyContent: 'center', flexDirection: 'column', backgroundColor: 'white'
},

    description: {
        textAlign: 'center',
        fontSize: 15,
        color: '#5C5D5F',
        fontFamily: 'roboto-light'
    },
    tasks: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#5A5E60',
        fontFamily: 'RobotoCondensed-Regular',
        marginTop: 30
    },
    skip: {
        textAlign: 'right',
         marginRight: 85, 
         marginTop: 10,
          fontFamily: 'Roboto',
          fontSize:15
    }
}

const mapStateToProps = (state) => {
    return {
        userdetail: state.AuthReducers.detail
    }
}
export default connect(mapStateToProps, null)(Home)