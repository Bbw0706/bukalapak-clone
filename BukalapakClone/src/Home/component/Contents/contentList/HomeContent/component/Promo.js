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

const Promo = () => (
   <View style={{height:250, backgroundColor:"#fff", marginTop:30, }}>
      <View style={{flexDirection:"row", justifyContent: "space-between"}}>
         <Text style={{fontSize:15, color:"#333", fontWeight:"900", marginLeft:20, top:10}}>Promo Hari ini</Text>
         <Text style={{fontSize:15, color:"#aaa", fontWeight:"900", marginRight:20, top:10}}>Lainnya</Text>      
      </View>
     <View style={{flexDirection:"row",padding : 20}}>
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         	<View style={{height:180, backgroundColor:"#fff", width:120, marginRight:20}}>
   			<TouchableOpacity onPress={() => alert("Belum fungsi")}>
            		<Image 
            			style={{alignSelf:"center",width:120, height:180,}} 
            			source={require('../../../../../../assets/Promo/1.png')} 
            		/>
   		      	<Text style={{bottom: 45, fontSize:11, marginLeft:5}}>Ayo serbu pembelian pertamamu</Text>
   		    </TouchableOpacity>
         	</View>

         	<View style={{height:180, backgroundColor:"#fff", width:120, marginRight:20}}>
   			<TouchableOpacity onPress={() => alert("Belum fungsi")}>
            		<Image 
            			style={{alignSelf:"center",width:120, height:180,}} 
            			source={require('../../../../../../assets/Promo/2.png')} 
            		/>
                  <Text style={{bottom: 45, fontSize:11, marginLeft:5}}>Jalan Hobi Asyik dengan Koleksi Terbaik</Text>
   		      	
   		    </TouchableOpacity>
         	</View>

         	<View style={{height:180, backgroundColor:"#fff", width:120, marginRight:20}}>
   			<TouchableOpacity onPress={() => alert("Belum fungsi")}>
            		<Image 
            			style={{alignSelf:"center",width:120, height:180,}} 
            			source={require('../../../../../../assets/Promo/3.png')} 
            		/>
                  <Text style={{bottom: 45, fontSize:11, marginLeft:5}}>Fashion Kasual & Stylish Bulan Agustus</Text>
   		    </TouchableOpacity>
         	</View>

         	<View style={{height:180, backgroundColor:"#fff", width:120}}>
   			<TouchableOpacity onPress={() => alert("Belum fungsi")}>
            		<Image 
            			style={{alignSelf:"center",width:130, height:180,}} 
            			source={require('../../../../../../assets/Promo/4.png')} 
            		/>
                  <Text style={{bottom: 45, fontSize:11, marginLeft:5}}>Beli Aksesoris Hp Bisa Sampai Setengah Harga</Text>
   		    </TouchableOpacity>
         	</View>
         </ScrollView>
     </View>
  </View>
)


export default Promo;