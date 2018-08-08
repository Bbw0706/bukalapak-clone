import React, { Component } from "react";
import {Container, Content} from "native-base";

import CardSwiper from "./component/CardSwiper.js";
import CardLists from "./component/CardLists.js";

export default class PopularContent extends Component {
  render(){
    return(
        <Content style={{backgroundColor:"#eee"}}>
          <CardSwiper />
          <CardLists />
        </Content>
    )
  }
}
