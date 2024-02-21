import React from "react";
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { Octicons } from '@expo/vector-icons';



const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.searchBar}>
            <Octicons name="search" style={styles.iconStyle} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.textInput}
                placeholder="Search for restaurants..."
                value={term}
                onChangeText={(newTerm) => onTermChange(newTerm) }
                onEndEditing={() => onTermSubmit()}
            />
        </View>
        
    );
}

const fontSize = {
    xs: 10,
    small: 12,
    default: 14,
    medium: 16,
    large: 18,
    xl: 20,
}
const colors = {
    text: '#454545',
    red: 'red',
    black: 'black',
}
const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: '#e3e1e1',
        height: 40,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginHorizontal: 15,
    },
    textInput: {
        flex: 1,
        fontSize:fontSize.large,
        paddingHorizontal: 10,
        // borderWidth:1,
        // borderColor: 'black',
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize:24,
        color: colors.black,
    }
});




export default SearchBar;