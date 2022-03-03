import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { hpx, nf, wpx } from '../constants/constants'

const Comp2 = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack()
                }}
            >
                <Text style={{ fontWeight: 'bold', fontSize: nf(18) }}>Move to Previous Page</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Comp2;