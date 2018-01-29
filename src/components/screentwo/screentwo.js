import React from 'react';

import {View,Text}from 'react-native'
import{Button}from 'react-native-elements'



export default class ScreenTwo extends React.Component{
   
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Text>hello</Text>
                <Text>hello</Text>
                <Text>hello</Text>
                <Text>hello</Text>
                <Text>hello</Text>
                <Text>hello</Text>
                <Text>hello</Text>
                <Text>hello</Text>
                <Button title="ok"onPress={()=>{navigate('Home')}}/>
            </View>
        )
    }
}