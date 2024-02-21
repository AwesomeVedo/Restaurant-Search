import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
    return (
        <View>
            <Text style={styles.heading}>{title} – {results.length} results</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Single')}>
                            <ResultsDetail currentResult={item} />
                        </TouchableOpacity>
                    );

                }
                }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
        paddingVertical: 10,
    }
});

export default ResultsList;