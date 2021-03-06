import React, { Component } from 'react';
import {Image, StyleSheet, View} from 'react-native';
import{Icon} from 'react-native'
import colors from '../config/colors';

// function ViewImageScreen() {
//     return(
//         <View style={styles.container}>
//             <View style={styles.closeIcon}></View>
//             <View style={styles.deleteIcon}></View>
//             <Image 
//                 style={styles.image} 
//                 source={require("../assets/Chair.jpg")}
//             />
//         </View>
//     )
// }

class ViewImageScreen extends Component {
render(){    return(
    <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
        <Image 
            style={styles.image} 
            source={require("../assets/Chair.jpg")}
        />
    </View>
)
}
}


const styles =  StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,

    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30,
    },
})

export default ViewImageScreen;