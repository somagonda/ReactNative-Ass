import React, { Component } from 'react';
import {View, StyleSheet, Image} from 'react-native';
import colors from '../config/colors';
import TextApp from './TextApp';

// function Card(props) {
//     return(
//         <View style={styles.card}>
//             <Image style={styles.image} source={props.image} />
//             <View style={styles.detailContainer}>
//                 <TextApp style={styles.title}>{props.title}</TextApp>
//                 <TextApp style={styles.subTitle1}>{props.subTitle}</TextApp>
//             </View>
//         </View>
//     )
// }

class Card extends Component {
render(){
    return(
        <View style={styles.card}>
            <Image style={styles.image} source={this.props.image} />
            <View style={styles.detailContainer}>
                <TextApp style={styles.title}>{this.props.title}</TextApp>
                <TextApp style={styles.subTitle1}>{this.props.subTitle}</TextApp>
            </View>
        </View>
    )
}}


const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: -10,
        overflow: "hidden"
    },
    image:{
        width: '100%',
        height: 200,
    },
    title: {
        marginTop: -15,
    },
    subTitle1: {
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 15,
    },
    detailContainer :{
        padding: 20
    }
})

export default Card;