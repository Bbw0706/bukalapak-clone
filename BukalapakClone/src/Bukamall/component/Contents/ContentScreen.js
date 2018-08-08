import React, { Component } from 'react';
import { Container, Header,Content, TabHeading, Tab, Tabs, ScrollableTab ,Text} from 'native-base';

import PopularContent from "./ContentList/PopularContent/PopularContent.js"
export default class ContentScreen extends Component {
  render() {
    return (
        <Tabs locked={true} renderTabBar={()=> <ScrollableTab />} tabBarUnderlineStyle={{borderBottomWidth:0, backgroundColor:"#dd0057"}}>
          <Tab heading={<TabHeading style={{backgroundColor: '#fff'}}>
                 <Text style={{color: '#dd0057', fontSize:13}}>Popular</Text>
               </TabHeading>}>
              <PopularContent />
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: '#fff'}}>
                 <Text style={{color: '#dd0057', fontSize:13}}>Komputer</Text>
               </TabHeading>} >
              <PopularContent />

          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: '#fff'}}>
                 <Text style={{color: '#dd0057', fontSize:13}}>Fashion & Gaya</Text>
               </TabHeading>}>
              <PopularContent />

          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: '#fff'}}>
                 <Text style={{color: '#dd0057', fontSize:13}}>Furniture</Text>
               </TabHeading>}>
              <PopularContent />

          </Tab>
        </Tabs>
    );
  }
}