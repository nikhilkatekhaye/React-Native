import React from "react";

import {
    Text,
    View,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <View style={styles.Container}>
            <Text style ={isDarkMode ? styles.darkText : styles.whiteText}>Hello Nikhil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
}) 

export default AppPro