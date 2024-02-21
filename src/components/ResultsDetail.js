import React from "react";
import {Text, Image, View, StyleSheet, Pressable} from 'react-native';

const ResultsDetail = ({currentResult}) => {
    const name = currentResult.name;
    const image = currentResult.image_url;
    const rating = currentResult.rating;
    const reviewCount = currentResult.review_count;

    return (
        <View>
                <Image 
                    source={{uri: image}}
                    style={styles.image}
                />
                <Text style={styles.name}>{name}</Text>
                <View style={styles.metaData}><Text>{rating} Stars, {reviewCount} Reviews</Text></View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height:120,
        width:250,
        borderRadius:5,
        marginHorizontal: 15,
        marginBottom: 5,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 15,
    },
    metaData: {
        marginHorizontal: 15,
    }
});

export default ResultsDetail;