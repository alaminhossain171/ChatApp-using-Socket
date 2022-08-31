import React from 'react';
import * as Screens from '../screens';
import navigationStrings from '../constains/navigationStrings';
import TabRoutes from './TabRoutes';


export default function (Stack) {
    return (
        <>

            <Stack.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} />

        </>
    )
}