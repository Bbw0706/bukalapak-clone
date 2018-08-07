import React, { Component } from 'react';
import { Container, Header, Separator,Item, Input, Content, List, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
export default class KategoriContent extends Component {
  render() {
    return (
        <Content>

          <Item style={{marginRight:20, marginLeft:20}}>
            <Icon name="ios-search" />          
            <Input placeholder="Search" />
          </Item>
          
          <Separator bordered style={{marginTop:10}}>
              <Text>SEMUA KATEGORI</Text>
            </Separator>

          <List style={{marginRight:20}}>
            <ListItem icon>
              <Left>
                <Button transparent dark>
                  <Icon name="md-list" />
                </Button>
              </Left>
              <Body>
                <Text>Semua kategori</Text>
              </Body>
              <Right>
                  <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Button transparent dark>
                  <Icon name="card" />
                </Button>
              </Left>
              <Body>
                <Text>E-Vouchet & Tiket</Text>
              </Body>
              <Right>
                  <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Button transparent dark>
                  <Icon name="ios-pricetags" />
                </Button>
              </Left>
              <Body>
                <Text>Barang Diskon</Text>
              </Body>
              <Right>
                  <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Button transparent dark>
                  <Icon name="ios-desktop" />
                </Button>
              </Left>
              <Body>
                <Text>Komputer</Text>
              </Body>
              <Right>
                  <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Button transparent dark>
                  <Icon name="ios-phone-portrait" />
                </Button>
              </Left>
              <Body>
                <Text>Handphone</Text>
              </Body>
              <Right>
                  <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Button transparent dark>
                  <Icon name="ios-camera" />
                </Button>
              </Left>
              <Body>
                <Text>Kamera</Text>
              </Body>
              <Right>
                  <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Button transparent dark>
                  <Icon name="ios-basketball" />
                </Button>
              </Left>
              <Body>
                <Text>Olahraga</Text>
              </Body>
              <Right>
                  <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Button transparent dark>
                  <Icon name="ios-bicycle" />
                </Button>
              </Left>
              <Body>
                <Text>Sepeda</Text>
              </Body>
              <Right>
                  <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Button transparent dark>
                  <Icon name="ios-restaurant" />
                </Button>
              </Left>
              <Body>
                <Text>Food</Text>
              </Body>
              <Right>
                  <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Button transparent dark>
                  <Icon name="ios-car" />
                </Button>
              </Left>
              <Body>
                <Text>Mobil</Text>
              </Body>
              <Right>
                  <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
    );
  }
}