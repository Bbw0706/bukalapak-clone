import React, {Component} from 'react';
import {
	Platform, 
	StyleSheet, 
	Text, 
	View, 
	StatusBar, 
	ScrollView, 
	TouchableOpacity, 
	Image
} from 'react-native';

import { Container} from 'native-base';

const FlashSale = () => (
  <View style={{flexDirection:"row",marginTop:30, height:250, backgroundColor:"#dd0057", padding : 20}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      	<View style={{marginRight:40, marginTop:10}}>
	  	     <Text style={{color:"#fff", fontSize:30, fontWeight:"900"}}>FLASH</Text>
	   	  <Text style={{color:"#fff", fontSize:30, fontWeight:"900"}}>SALE</Text> 

	   	  <Text style={{color:"#fff", fontSize:15, marginTop:60}}>Berakhir dalam</Text>
	   	  <Text style={{color:"#fff", fontSize:13}}>24:59:59</Text>
   	  	</View>

      	<View style={{height:180, backgroundColor:"#fff", width:90, marginRight:20, marginTop:20}}>
			<TouchableOpacity onPress={() => alert("Belum fungsi")}>
         		<Image 
         			style={{alignSelf:"center",width:90, height:180,}} 
         			source={require('../../../../../../assets/FlashSale/1.png')} 
         		/>
		      	
		    </TouchableOpacity>
      	</View>

      	<View style={{height:180, backgroundColor:"#fff", width:90, marginRight:20, marginTop:20}}>
			<TouchableOpacity onPress={() => alert("Belum fungsi")}>
         		<Image 
         			style={{alignSelf:"center",width:90, height:180,}} 
         			source={require('../../../../../../assets/FlashSale/2.png')} 
         		/>
		      	
		    </TouchableOpacity>
      	</View>

      	<View style={{height:180, backgroundColor:"#fff", width:90, marginRight:20, marginTop:20}}>
			<TouchableOpacity onPress={() => alert("Belum fungsi")}>
         		<Image 
         			style={{alignSelf:"center",width:90, height:180,}} 
         			source={require('../../../../../../assets/FlashSale/3.png')} 
         		/>
		      	
		    </TouchableOpacity>
      	</View>

      	<View style={{height:180, backgroundColor:"#fff", width:90,marginTop:20}}>
			<TouchableOpacity onPress={() => alert("Belum fungsi")}>
         		<Image 
         			style={{alignSelf:"center",width:90, height:180,}} 
         			source={require('../../../../../../assets/FlashSale/4.png')} 
         		/>
		      	
		    </TouchableOpacity>
      	</View>
      </ScrollView>
  </View>
)


export default FlashSale;