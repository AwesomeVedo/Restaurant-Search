import React from "react";
import {Text, View, StyleSheet} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ( { title, results } ) => {
    return (
        <View>
            <Text>{title} | {results.length} results</Text>
            <FlatList 
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={ ( { item } ) => {
                        return <ResultsDetail currentResult={item} />
                    }
                }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    // resultsView: {
    //     overflow: 'scroll',
    // }
});

export default ResultsList;