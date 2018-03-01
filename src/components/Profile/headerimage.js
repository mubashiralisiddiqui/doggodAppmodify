import React from 'react'
import {Image,View,StyleSheet}from 'react-native'

const ImageHeader = props => (
    <View style={{ backgroundColor: '#eee' }}>
        <Image
                style={{ flex: 1, height: 300, width: 300, }}
                source={require('../../../images/download.jpg')}
                resizeMode="contain"
            />
    </View>
  );
  export default ImageHeader