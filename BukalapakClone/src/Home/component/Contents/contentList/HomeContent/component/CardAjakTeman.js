import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon,Body } from "native-base";
export default class CardAjakTeman extends Component {
  render() {
    return (
          <Card style={{marginRight:20, marginLeft:20}}>
            <CardItem bordered>
                <Icon active name="ios-people" style={{color:"#dd0057"}}/>            
                <Text style={{marginRight:30, fontSize:13, color : "#222"}}>
                  Ajak teman dan dapatkan Credits hingga Rp.100.000
                </Text>
            </CardItem>
            <CardItem footer bordered>
              <Text style={{color:"#dd0057"}}>Lihat Selengkapnya</Text>
            </CardItem>
          </Card>
    );
  }
}