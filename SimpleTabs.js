import React from 'react';
import { Button, Platform, ScrollView, StatusBar, View, Image } from 'react-native';
import { SafeAreaView, TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from './SampleText';
import { Container, Header, Content, Card, CardItem, Left, Thumbnail, Body, Text, Item, Icon, Input, Tab, TabHeading } from 'native-base';
// import MyHomeScreen from './MyHomeScreen';


const Home = ({ navigation }) => (
    <Container>
        <Header />
        <Content>
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: 'http://www.reactnativeexpress.com/logo.png' }} style={{ height: 50, width: 5, flex: 1 }} />
                        <Body>
                            <Text>React Native</Text>
                            <Text note>Native base</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{ uri: 'http://www.reactnativeexpress.com/logo.png' }} style={{ height: 400, width: 100, flex: 1 }} />
                </CardItem>
            </Card>
        </Content>

    </Container>
);

const MySearchScreen = ({ navigation }) => (

    <Container>
        <Header />
        <Body>
            <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Icon name="ios-people" />
            </Item>
        </Body>
    </Container>
);

const MyNotificationScreen = ({ navigation }) => (
    <Container>
        <Header />
        <Body><Text> all notifications are seen here. </Text></Body>

    </Container>

);

const MyMessageScreen = ({ navigation }) => (
    <Container>
        <Header />
        <Body><Text> all mails are seen here. </Text></Body>

    </Container>


);

const SimpleTabs = TabNavigator(
    {
        Home: {
            screen: Home,
            path: '',

        },
        Search: {
            screen: MySearchScreen,
            path: '',
        },
        Notification: {
            screen: MyNotificationScreen,
            path: '',
        },
        Message: {
            screen: MyMessageScreen,
            path: '',
        },
    },
    {
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
        },
    }
);

export default SimpleTabs;