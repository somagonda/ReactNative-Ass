import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import colors from '../config/colors';
import ListItem from './ListItem';
import TextApp from './TextApp';

//==USING FUNCTION==//

// function ListingDetailScreen() {
//     return(
//         <View>
//             <Image style={styles.image} source={require('../assets/Jacket.jpg')}/>
//             <View style={styles.detailContainer}>
//                 <TextApp style={styles.title}>Black Jacket for Sale</TextApp>
//                 <TextApp style={styles.price}>Rs. 3000</TextApp>
//                 <View styles={styles.userContainer}>
//                     <ListItem 
//                         image={require('../assets/Face.png')}
//                          title='Ramesh'
//                         subTitle='5 listings'
//                     />
//                 </View>
//             </View>
//         </View>
//     )
// }

//==USING CLASS==//

class ListingDetailScreen extends Component {
    render() { return(
        <View>
            <Image style={styles.image} source={require('../assets/Jacket.jpg')}/>
            <View style={styles.detailContainer}>
                <TextApp style={styles.title}>Black Jacket for Sale</TextApp>
                <TextApp style={styles.price}>Rs. 3000</TextApp>
                <View styles={styles.userContainer}>
                    <ListItem 
                       image={require('../assets/Face.png')}
                         title='Ramesh'
                        subTitle='5 listings'
                    />
                </View>
            </View>
        </View>
    )
}}
   






















const styles = StyleSheet.create({
    detailContainer: {
        padding: 10,
    },
    image: {
        width: '100%',
        height: 300
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    userContainer: {
        marginVertical: 50
    }
})

export default ListingDetailScreen;