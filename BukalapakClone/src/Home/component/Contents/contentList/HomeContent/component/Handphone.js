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

const Handphone = ({navigation}) => (
   <View style={{height:250, backgroundColor:"#fff",}}>
      <View style={{flexDirection:"row", justifyContent: "space-between"}}>
         <Text style={{fontSize:15, color:"#333", fontWeight:"900", marginLeft:20, top:10}}>Miliki Handphone Idamanmu</Text>
         <Text style={{fontSize:15, color:"#aaa", fontWeight:"900", marginRight:20, top:10}}>Lainnya</Text>      
      </View>
     <View style={{flexDirection:"row",padding : 20}}>
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
         	<View style={{height:200, backgroundColor:"#fff", width:120, marginRight:20}}>
   			<TouchableOpacity onPress={() => navigation.navigate("Handphone")}>
            		<Image 
            			style={{alignSelf:"center",width:120, height:200,}} 
            			source={require('../../../../../../assets/Handphone/1.png')} 
            		/>
   		      	<Text style={{bottom: 60, fontSize:11, marginLeft:5, fontWeight:"900",}}>Xiaomi Redmi 4A</Text>
                  <Text style={{bottom: 37, fontSize:11, marginLeft:5, fontWeight:"900", color:"#dd0057"}}>Rp1,49jt</Text>
   		    </TouchableOpacity>
         	</View>

         	<View style={{height:200, backgroundColor:"#fff", width:120, marginRight:20}}>
   			<TouchableOpacity onPress={() => alert("Belum fungsi")}>
            		<Image 
            			style={{alignSelf:"center",width:120, height:200,}} 
            			source={require('../../../../../../assets/Handphone/2.png')} 
            		/>
                  <Text style={{bottom: 60, fontSize:11, marginLeft:5, fontWeight:"900",}}>Xiaomi Redmi Note 4 Ram 3GB Rom 32GB</Text>
                  <Text style={{bottom: 50, fontSize:11, marginLeft:5, fontWeight:"900", color:"#dd0057"}}>Rp1,8jt</Text>
   		      	
   		    </TouchableOpacity>
         	</View>

         	<View style={{height:200, backgroundColor:"#fff", width:120, marginRight:20}}>
   			<TouchableOpacity onPress={() => alert("Belum fungsi")}>
            		<Image 
            			style={{alignSelf:"center",width:120, height:200,}} 
            			source={require('../../../../../../assets/Handphone/3.png')} 
            		/>
                  <Text style={{bottom: 60, fontSize:11, marginLeft:5, fontWeight:"900",}}>Iphone 6 64GB Silent camera Garansi</Text>
                  <Text style={{bottom: 50, fontSize:11, marginLeft:5, fontWeight:"900", color:"#dd0057"}}>Rp2,97jt</Text>
   		    </TouchableOpacity>
         	</View>

         	<View style={{height:200, backgroundColor:"#fff", width:120}}>
   			<TouchableOpacity onPress={() => alert("Belum fungsi")}>
            		<Image 
            			style={{alignSelf:"center",width:130, height:200,}} 
            			source={require('../../../../../../assets/Handphone/4.png')} 
            		/>
                  <Text style={{bottom: 60, fontSize:11, marginLeft:5, fontWeight:"900",}}>Xiaomi Redmi 5 Plus Pro Ram 4GB</Text>
                  <Text style={{bottom: 50, fontSize:11, marginLeft:5, fontWeight:"900", color:"#dd0057"}}>Rp2,38jt</Text>
   		    </TouchableOpacity>
         	</View>
         </ScrollView>
     </View>
  </View>
)


export default Handphone;