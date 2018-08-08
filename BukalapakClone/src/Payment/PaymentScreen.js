import React, { Component } from 'react';
import { Container, Picker, Text,List, Button,ListItem,Thumbnail,Left, Body,Content, Form, Item, Input, Label } from 'native-base';
import {View} from "react-native"

export default class PaymentScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
        backgroundColor: '#fff',
        elevation : 0
      },
      headerTintColor: '#000',
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      alamat: "Pilih",
      Provinsi: "Pilih",
      jumlah : 1,
      harga : 1494000,

      namaPembeli : "",
      emailPembeli : "",
      alamatPembeli : "",
      notelpPembeli : "",
      namaPenerima : "",
      noTelpAlamat : ""
    };
  }
  onAlamatChange(value) {
    this.setState({
      alamat: value
    });
  }

  onProvinsiChange(value) {
    this.setState({
      provinsi: value
    });
  }

  onJumlahChange(value) {
    this.setState({
      jumlah: value
    });
  }

  namaPembeliChange = (val) => {
    this.setState({
      namaPembeli: val
    });
  }

  emailPembeliChange = (val) => {
    this.setState({
      emailPembeli: val
    });
  }

  notelpPembeliChange = (val) => {
    this.setState({
      notelpPembeli: val
    });
  }

  alamatPembeliChange = (val) => {
    this.setState({
      alamatPembeli: val
    });
  }

  noTelpAlamatChange = (val) => {
    this.setState({
      noTelpAlamat: val
    });
  }

  namaPenerimaChange = (val) => {
    this.setState({
      namaPenerima: val
    });
  }

  render() {
    const {
      namaPembeli,
      namaPenerima, 
      alamatPembeli, 
      noTelpAlamat, 
      notelpPembeli,
       emailPembeli
     } = this.state;

    let harga = this.state.harga * this.state.jumlah;

    let Buttons =  <Button full disabled style={{margin:20}}>
                        <Text>Isi form terlebih dahulu</Text>
                      </Button>;

    if(namaPembeli != "" && namaPenerima != "" && notelpPembeli != "" && emailPembeli != "" && noTelpAlamat != "" && alamatPembeli != ""){
      Buttons = <Button onPress={() => this.props.navigation.popToTop()} full danger style={{backgroundColor:"#dd0057", margin:20}}>
                  <Text>Bayar Seharga {harga}</Text>
                </Button>
    }

    return (
      <Container style={{backgroundColor:"#eee"}}>
        <Content>
          <View style={{ padding:20, flex : 1, backgroundColor:"#fff", marginBottom:20}}>
            <Text style={{marginLeft:15, marginBottom:20}}>
              Silahkan lengkapi data atau login untuk melanjutkan
            </Text>
            <Form style={{marginRight:15}}>
              <Item stackedLabel>
                <Label style={{fontSize:12, fontWeight:"900"}}>NAMA PEMBELI</Label>
                <Input value={namaPembeli} onChangeText={this.namaPembeliChange}/>
              </Item>
              <Item stackedLabel >
                <Label style={{fontSize:12, fontWeight:"900"}}>E-MAIL PEMBELI</Label>
                <Input value={emailPembeli} onChangeText={this.emailPembeliChange}/>
              </Item>
              <Item stackedLabel >
                <Label style={{fontSize:12, fontWeight:"900"}}>NOMOR TELEPON / HANDPHONE</Label>
                <Input value={notelpPembeli} onChangeText={this.notelpPembeliChange}/>
              </Item>
            </Form>
          </View>

          <View style={{ padding:20, flex : 1, backgroundColor:"#fff", marginBottom:20}}>
            <Text style={{marginLeft:15, marginBottom:20}}>
              Ke mana barang pesananmu dikirimkan
            </Text>
            <Form style={{marginRight:15}}>
              <Item stackedLabel>
                <Label style={{fontSize:12, fontWeight:"900"}}>LABEL ALAMAT</Label>
                <Picker
                  note
                  mode="dropdown"
                  style={{width:"100%"}}
                  selectedValue={this.state.alamat}
                  onValueChange={this.onAlamatChange.bind(this)}
                >
                  <Picker.Item label="Pilih label alamat" value="Pilih" />
                  <Picker.Item label="Rumah" value="Rumah" />
                  <Picker.Item label="Apartemen" value="Apartemen" />
                  <Picker.Item label="Kantor" value="Kantor" />
                  <Picker.Item label="Lainnya" value="Lainnya" />
                </Picker>
              </Item>

              <Item stackedLabel >
                <Label style={{fontSize:12, fontWeight:"900"}}>NAMA PENERIMA</Label>
                <Input value={namaPenerima} onChangeText={this.namaPenerimaChange}/>
              </Item>

              <Item stackedLabel >
                <Label style={{fontSize:12, fontWeight:"900"}}>NOMOR TELEPON ALAMAT</Label>
                <Input value={noTelpAlamat} onChangeText={this.noTelpAlamatChange}/>
              </Item>

              <Item stackedLabel>
                <Label style={{fontSize:12, fontWeight:"900"}}>Provinsi</Label>
                <Picker
                  note
                  mode="dropdown"
                  style={{width:"100%"}}
                  selectedValue={this.state.provinsi}
                  onValueChange={this.onProvinsiChange.bind(this)}
                >
                  <Picker.Item label="Pilih Provinsi" value="Pilih" />
                  <Picker.Item label="Bali" value="Bali" />
                  <Picker.Item label="Banten" value="Banten" />
                  <Picker.Item label="DKI Jakarta" value="DKI Jakarta" />
                  <Picker.Item label="Gorontalo" value="Gorontalo" />
                </Picker>
              </Item>

              <Item stackedLabel >
                <Label style={{fontSize:12, fontWeight:"900"}}>ALAMAT LENGKAP</Label>
                <Input value={alamatPembeli} onChangeText={this.alamatPembeliChange}/>
              </Item>
            </Form>
          </View>

          <View style={{ padding:20, flex : 1, backgroundColor:"#fff", marginBottom:20}}>
            <Text style={{marginLeft:15, marginBottom:20}}>
              Apakah pesananmu sudah benar?
            </Text>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: 'https://image4.geekbuying.com/ggo_pic/2017-08-19/2017081901028221y8m0sga.jpg' }} />
                </Left>
                <Body>
                  <Text style={{left:10}}>Xiaomi Redmi 4A</Text>
                  <Form style={{marginRight:15}}>
                    <Item stackedLabel>
                      <Picker
                        note
                        mode="dropdown"
                        style={{width:70, right:70}}
                        selectedValue={this.state.jumlah}
                        onValueChange={this.onJumlahChange.bind(this)}
                      >
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                      </Picker>
                    </Item>
                  </Form>
                  <Text style={{marginTop:20, left:10}}>Rp.{harga}</Text>
                </Body>
              </ListItem>
            </List>   
          </View>

          {Buttons}
        </Content>
      </Container>
    );
  }
}