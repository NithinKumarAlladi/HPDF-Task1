import React from 'react';
import { Container, Header, Content, Card, CardItem, cardBody ,Left, Thumbnail, Body, Text, Item, Icon, Input, Image } from 'native-base';


// const Home =({ navigation }) => (
export default class Home extends React.Component {
    render() {
        return (
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
    }
}


// export default Home;