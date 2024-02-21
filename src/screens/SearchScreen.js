import React, { useState } from "react";
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

   const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
   };
    
    return (
        <ScrollView>
            <View style={styles.view}>
                <Text style={styles.text}>Find restaurants near you using the Yelp API.</Text>
                <SearchBar  
                    term={term} 
                    onTermChange={(newTerm) => setTerm(newTerm)} 
                    onTermSubmit={() => searchApi(term)}
                />
                {errorMessage ? <Text>Something went wrong!</Text> : null}
                <Text>We have found {results.length} results.</Text>

                <ResultsList title='Cheaper' results={filterResultsByPrice('$')} />
                <ResultsList title='Average' results={filterResultsByPrice('$$')}/>
                <ResultsList title='Costly' results={filterResultsByPrice('$$$')}/>
                <ResultsList title='Too Much' results={filterResultsByPrice('$$$$')}/>
            </View>
        </ScrollView>
    )
}

const colors = {
    text: '#454545',
    red: 'red'
}

const fontSize = {
    xs: 10,
    small: 12,
    default: 14,
    medium: 16,
    large: 18,
    xl: 20,
}

const styles = StyleSheet.create({
    view: {
        //flex: 1,
        margin:15,
        // borderColor:'black',
        // borderWidth:3,
    },
    text: {
        textAlign:'center',
        color: colors.text,
        fontSize:fontSize.default,
        paddingBottom: 7,
    }
});

export default SearchScreen;