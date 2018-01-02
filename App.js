import React from 'react';
import { SafeAreaView, StackNavigator } from 'react-navigation';
import TabsInDrawer from './TabsInDrawer';

export default () => <AppNavigator />;

const AppNavigator = StackNavigator(
  {
    Index: {
      screen: TabsInDrawer,
    },
  },
  {
    initialRouteName: 'Index',
    // headerMode: 'none',
    // mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

