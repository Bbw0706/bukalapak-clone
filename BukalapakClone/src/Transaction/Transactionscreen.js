import React, {Component} from "react";
import {Container,Content, Text, Form, Item, Label, Input, Button} from "native-base";
import {Image, View} from "react-native"

export default class Transactionscreen extends Component { 
	static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
      	<Text style={{fontWeight: 'bold', color :"#fff", marginLeft : 120}}>Cek Status Transaksi</Text>
      ),
    };
  };
  render(){
	return(
	  <Container>
		<Content>
		    <Text style={{color:"#aaa", fontSize:12, marginTop:10, alignSelf:"center"}}>
		    	Khusus untuk 'Beli tanpa Login'
		    </Text> 

		    <Form style={{marginRight:30, marginLeft:10}}>
              <Item floatingLabel>
                <Label style={{color:"#999"}}>Kode Pembeli</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label style={{color:"#999"}}>Nomor Transaksi / Tagihan</Label>
                <Input />
              </Item>
            </Form>

            <Button style={{backgroundColor:"#dd0057", marginRight:30, marginLeft:25, marginTop:30}} block danger>
              <Text>CEK STATUS</Text>
            </Button>

            <Text style={{color:"#aaa", fontSize:12,marginRight:30, marginLeft:27, marginTop:20, alignSelf:"center"}}>
		    	*Periksa e-mail atau sms kamu untuk mendapatkan kode pembeli dan nomor transaksi/tagihan
		    </Text> 	
		</Content>
	  </Container>
	)
  }
}
