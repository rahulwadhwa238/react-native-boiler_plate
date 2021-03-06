import { StackActions } from '@react-navigation/routers';
import * as React from 'react';

// NavigationContainer is refered here - Check RootStack
export const navigationRef = React.createRef();

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}

function goBack() {
    navigationRef.current?.goBack();
}

function reset(name, params) {
    navigationRef.current?.dispatch(
        StackActions.replace(name, params)
    );
}

export default {
    setTopLevelNavigator,
    navigate,
    goBack,
    reset
};