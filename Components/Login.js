import React from 'react';
import { AppLoading } from 'expo';
import { Container, Content, Form, Item, Input, Label,Card, CardItem, Thumbnail, Left, Body, Text, Button, Icon, Right, Header } from 'native-base';
import { Image, StyleSheet } from 'react-native'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
        <Container style={{ flex : 1, backgroundColor : 'white' }}>
        <Image source={{uri: 'https://images.unsplash.com/photo-1551334741-0f11da38e980?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'}} resizeMode="cover" style={[StyleSheet.absoluteFill, { height : '100%', width : null }]}/>
        
        <Content style={{ flex : 1 }}>
          <Form style={{ alignItems : 'center' }}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button primary style={{ marginTop : 30, marginBottom : 30, width : 150, justifyContent : 'center' }}><Text> Connexion </Text></Button>
          </Form>



{/*          <Image source={{uri: 'https://bstatic.ccmbg.com/www.linternaute.com/img/restaurant/villes/440x293/2.jpg'}} style={{height: 200, width: null, flex: 1, marginTop : 20 }}/>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://bstatic.ccmbg.com/www.linternaute.com/img/restaurant/villes/440x293/2.jpg'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
    */}


        </Content>
      </Container>
    );
  }
}

export default Login
