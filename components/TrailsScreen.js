import React, { Component } from "react";
import {StyleSheet, Text, View, Alert, TouchableOpacity,Button,ScrollView} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { ListItem, Avatar } from 'react-native-elements';


const list = [
  {
    lattitude: '49.435352342',
    img: 'https://png.pngtree.com/element_our/png/20181205/location-vector-icon-png_256682.jpg',
    longitude: '0.324421323',
    date: 'Tue Apr 27 17:07:22 2021'
  },
  {
    lattitude: '9.435343657',
    img: 'https://png.pngtree.com/element_our/png/20181205/location-vector-icon-png_256682.jpg',
    longitude: '0.532447684',
    date: 'Tue Apr 27 17:12:25 2021'
  },
  {
    lattitude: '9.435323454',
    img: 'https://png.pngtree.com/element_our/png/20181205/location-vector-icon-png_256682.jpg',
    longitude: '0.324464456',
    date: 'Tue Apr 27 17:17:46 2021'
  },
  {
    lattitude: '9.546576534',
    img: 'https://png.pngtree.com/element_our/png/20181205/location-vector-icon-png_256682.jpg',
    longitude: '0.454646557',
    date: 'Tue Apr 27 17:22:12 2021'
  },
  {
    lattitude: '9.543234574',
    img: 'https://png.pngtree.com/element_our/png/20181205/location-vector-icon-png_256682.jpg',
    longitude: '0.467421346',
    date: 'Tue Apr 27 17:27:22 2021'
  },

]

const z =  AsyncStorage.getItem("CovidStatus")

const data =  AsyncStorage.getItem('location')
var location_data;
var a = AsyncStorage.getItem('time')

//const values = [{'timestamp':val.timestamp, 'lattitude':val.coords.lattitude, 'longitude':val.coords.longitude}]


export const postApi = () => {
  var lattitudes = list.map (i => i.lattitude)
  var longitudes = list.map( i=> i.longitude)
  var date = list.map(i=> i.date)
  var postData = [ {"latt":lattitudes,"long":longitudes,"date":date}]
  alert("You have successfully uploaded your coordinates unto the server")
  return fetch('https://a444511c7bac.ngrok.io', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      postData
    })
  })
  /*
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        x: [json]
      })
      alert(json)
    })
    .catch((error) => {
      alert("Error in retrieving api data")
    });*/
};

class Trails extends Component {
 constructor(props){
   super(props);
   this.state = {
     location: null,
     coordinates: [],
     dis: [],
     df: null,
     x: [],
     covidstatus: []
   }

   this.findCoordinates = this.findCoordinates.bind(this)
   this.StoreData = this.StoreData.bind(this)
   this.getApi = this.getApi.bind(this)
  }


  componentDidMount(){
    var x = AsyncStorage.getItem('lamx')
    this.setState({
      dis: x
    })
   
  }
  
   getApi = () => {
    return fetch("https://a444511c7bac.ngrok.io")
      .then((response) => response.json())
      .then((json) => {
        y = json.map(i => i.postData)
        server_latt = y[0][0]["latt"]
        server_long = y[0][0]["long"]
        server_date = y[0][0]["date"]
        this.setState({
          x: server_latt
        })
        alert(json)
        this.setState({
          covidstatus: z
        })
      })
      .catch((error) => {
        alert("Error in retrieving api data")
      });
  }; 


   StoreData = async(value) => {
     try{
       await AsyncStorage.setItem('lo', JSON.stringify(value))

     } catch(e){
       alert("Error in Async Saving")
     }
   }

   getData = async() =>{
     try{
       const value = await AsyncStorage.getItem('lo').then(val => {
        this.setState({ df: val })
        return (val)
      });
      if (value !== null){

      }
      } catch(e){
        alert("Error in Retrieving")
      }
   }

componentDidUpdate(){
}


  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);
        this.setState({ location: location });
        location_data = this.state.location
        a = new Array(location_data)
        var values = String(location_data)
        var values = values.split(/([0-9]+)/)
        var numbers = values.map(i => parseInt(i))
        var numbers = numbers.filter(i => isNaN(i) != true)
        var time = numbers[0]
        var date = (new Date(time)).toLocaleString()
        var lattitude = numbers[1] != 0 ? numbers[5] + "." + numbers[6]:numbers[3] + "." + numbers[4]
        var longitude =  numbers[1] !=0 ? numbers[8] + "." + "0" + numbers[9]:numbers[5] + "." + "0" + numbers[6]
        var cods = [{'time':time,'lattitude':lattitude,'longitude':longitude}]
        this.getApi()
        setTimeout( ()=>{
            list.push( {
              lattitude: lattitude,
              img: 'https://png.pngtree.com/element_our/png/20181205/location-vector-icon-png_256682.jpg',
              longitude: longitude,
              date: date
            }),1000 }
        )
        this.StoreData(cods)
        var a = this.getData('lo')
        
        this.setState({
          coordinates: time
        })
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  render() {
    var x = JSON.parse(JSON.stringify(data["_W"]))
    var b = JSON.parse(JSON.stringify(z["_W"]))
   
    return (
      
      <View style={styles.container}>
      <ScrollView>
      <View style = {styles.ListView}>
      
  {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar rounded source={{uri: l.img}} />
        <ListItem.Content>
          <ListItem.Title>Lattitude: {l.lattitude}</ListItem.Title>
          <ListItem.Title>Longitude: {l.longitude}</ListItem.Title>
          <ListItem.Subtitle>Date: {l.date} </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
</View>
     <TouchableOpacity onPress={this.findCoordinates}>
          <Text style={styles.welcome}>Find My Coords?</Text>
          <Text>Location: {this.state.location}</Text>
          <Text> Df: {this.state.x.map(i => i)}</Text>
          <Text> Storage: {b}</Text>
          {/**<Button title="Test" onPress={ ()=> Alert.alert(numbers)}> </Button>**/}
</TouchableOpacity> 
</ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
  
  },
  ListView:{
    backgroundColor: 'silver'
  },
  welcome: {
   
  },
  instructions: {
    
  }
});

export default Trails
