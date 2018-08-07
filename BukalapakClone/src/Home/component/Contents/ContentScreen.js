import React, { Component } from 'react';
import { Container, Header,Content, TabHeading, Tab, Tabs, ScrollableTab ,Text} from 'native-base';

import HomeContents from "./contentList/HomeContent/HomeContent.js"
import LanggananContent from "./contentList/LanggananContent/LanggananContent.js"
import FavoritContent from "./contentList/FavoritContent/FavoritContent.js"
import KategoriContent from "./contentList/KategoriContent/KategoriContent.js"

export default class ContentScreen extends Component {
  render() {
    return (
        <Tabs locked={true} renderTabBar={()=> <ScrollableTab />} tabBarUnderlineStyle={{borderBottomWidth:0, backgroundColor:"#dd0057"}}>
          <Tab heading={<TabHeading style={{backgroundColor: '#fff'}}>
                 <Text style={{color: '#dd0057', fontSize:13}}>Home</Text>
               </TabHeading>}>
            <Content>
              <HomeContents />
            </Content>
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: '#fff'}}>
                 <Text style={{color: '#dd0057', fontSize:13}}>Kategori</Text>
               </TabHeading>} >

               <KategoriContent />
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: '#fff'}}>
                 <Text style={{color: '#dd0057', fontSize:13}}>Favorit</Text>
               </TabHeading>}>

              <FavoritContent {...this.props}/>              
          </Tab>
          <Tab heading={<TabHeading style={{backgroundColor: '#fff'}}>
                 <Text style={{color: '#dd0057', fontSize:13}}>Langganan</Text>
               </TabHeading>}>

              <LanggananContent {...this.props}/>              
          </Tab>
        </Tabs>
    );
  }
}