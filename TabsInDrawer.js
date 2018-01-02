import React from 'react';
import { Button, Platform, ScrollView } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleTabs from './SimpleTabs';
import Home from './Home';


const TabsInDrawer = DrawerNavigator({
    SimpleTabs: {
        screen: SimpleTabs,
    },
    Home:{
        screen: Home,
    },
});

export default TabsInDrawer;