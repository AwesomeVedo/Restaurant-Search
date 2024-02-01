import React from "react";
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    return (
        <View>
            <Text>Restaurant Search</Text>
            <SearchBar />
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SearchScreen;