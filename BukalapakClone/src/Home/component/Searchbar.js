import React, {Component} from "react";
import {Item, Icon, Input} from "native-base";


const Searchbar = () => (
	<Item style={{marginRight : 50, marginLeft: 30, backgroundColor:"#fff", padding : 20, height: 30, width:250}}>
        <Icon name="ios-search" />
        <Input placeholder="Search"/>
        <Icon name="ios-people" />
    </Item>
)

export default Searchbar;