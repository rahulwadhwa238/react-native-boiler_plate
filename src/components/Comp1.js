import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { types } from "../store/ActionTypes";
import { getFontSize } from '../constants/constants'

const Comp1 = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: getFontSize(18) }}> Welcome To React Native</Text>
            <TouchableOpacity
                onPress={() => {
                    dispatch({
                        type: types.DUMMY_SAGA
                    })
                }}
            >
                <Text>Move to Next Page</Text>
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

export default Comp1;