import React from "react";
import {Text, Image, View, StyleSheet} from 'react-native';

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
            <Text>{name}</Text>
            <View><Text>{rating} Stars</Text><Text>{reviewCount} Reviews</Text></View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height:120,
        width:250,
        borderRadius:5
    }
});

export default ResultsDetail;