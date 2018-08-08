import React, { Component } from 'react';
import { Container, Content} from 'native-base';

import Lists from "./component/Lists.js"
import Footers from "./component/Footers.js"
import SwipersImages from "./component/SwipersImages.js"

export default class HandphoneScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <SwipersImages />
          <Lists />
        </Content>
          <Footers {...this.props}/>        
      </Container>
    );
  }
}