import React from 'react'
import {Image,View,StyleSheet}from 'react-native'

const ImageHeader = props => (
    <View style={{ backgroundColor: '#eee' }}>
      {/* <Image
        style={StyleSheet.absoluteFill}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
      /> */}
        <Image
                style={{ flex: 1, height: 300, width: 300, }}
                source={require('../../../images/download.jpg')}
                resizeMode="contain"
            />
      {/* <Header {...props} style={{ backgroundColor: 'transparent' }}/> */}
    </View>
  );
  export default ImageHeader