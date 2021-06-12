import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';

import AppButton from '../components/AppButton';


// function WelcomeScreen() {
//     return( 
//         <ImageBackground style={styles.background} source={require('../assets/bg.jpg')}>
//             <View style={styles.logoContainer}>
//                 <Image style={styles.logo} source={require('../assets/logo.jpg')} />
//                 <Text style={styles.textStyle}>Sell What you don't need</Text>
//             </View>
//             {/* <View style={styles.buttonsContainer}>
//                 <AppButton title="Login"/>
//                 <AppButton title="Register"/>
//             </View> */}  
//         </ImageBackground>
//     )
// }

class WelcomeScreen extends Component{
    render(){
        return( 
        <ImageBackground style={styles.background} source={require('../assets/bg.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.jpg')} />
                <Text style={styles.textStyle}>Sell What you don't need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login"/>
                <AppButton title="Register"/>
            </View>  
        </ImageBackground>
    )
  }
}
    
























const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        height:840
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: 'center'
    },
    logo: {
        width: 300,
        height: 150,
        resizeMode: 'contain'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        paddingVertical: 20
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
},

})

export default WelcomeScreen;