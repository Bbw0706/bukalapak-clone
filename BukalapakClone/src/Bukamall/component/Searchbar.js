import React, {Component} from "react";
import {Item, Icon, Input} from "native-base";


const Searchbar = () => (
	<Item style={{marginRight : 50, marginLeft: 30, backgroundColor:"#eee", padding : 20, height: 30, width:250}}>
        <Icon name="ios-search" />
        <Input placeholder="Bukalapak"/>
    </Item>
)

export default Searchbar;