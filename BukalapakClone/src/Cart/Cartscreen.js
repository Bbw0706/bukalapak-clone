import React, {Component} from "react";
import {Container,Content, Text} from "native-base";
import {Image, View} from "react-native"

export default class Cartscreen extends Component { 
	static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
      	<Text style={{fontWeight: 'bold', color :"#fff", marginLeft : 130}}>Keranjang Belanja</Text>
      ),
    };
  };
	render(){
		return(
			<Container>
		        <Content>
		        	<View style={{marginTop:120,flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			        	<Image 
			        		style={{width:"80%", height:230,}} 
			        		source={require('../assets/Cart/1.png')}
			        	/>

			        	<View style={{width:"70%",bottom:80}}>
				        	<Text style={{fontSize : 16, textAlign:'center', marginBottom:10}}>
				        		Belum ada barang belanjaan
				        	</Text>
				        	<Text style={{color:"#aaa", fontSize : 13, textAlign:'center'}}>
								Semua barang belanjaan kamu akan terdaftar di sini. Ayo mulai belanja dan rasakan kemudahannya
				        	</Text>
			        	</View>
		        	</View>
		        </Content>
		    </Container>
		)
	}
}
