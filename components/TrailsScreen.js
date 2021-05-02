import React, { Component } from "react";
import {StyleSheet, Text, View, Alert, TouchableOpacity,Button,ScrollView} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { ListItem, Avatar } from 'react-native-elements';


const list = [ ]

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
  return fetch('https://6964dc3aac79.ngrok.io', {
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
     status: '',
     x: [],
     covidstatus: []
   }

   this.findCoordinates = this.findCoordinates.bind(this)
   this.StoreData = this.StoreData.bind(this)
   this.getApi = this.getApi.bind(this)
   this.store = this.store.bind(this)

  }


  componentDidMount(){
   interval = setInterval(()=>{
     this.findCoordinates()
   }, 10000)
  }
  componentWillUnmount(){
    clearInterval(interval)
  }
  
   getApi = () => {
    return fetch("https://2d5a2d43ef4f.ngrok.io")
      .then((response) => response.json())
      .then((json) => {
        y = json.map(i => i.postData)
        server_latt = y[0][0]["latt"]
        server_long = y[0][0]["long"]
        server_date = y[0][0]["date"]
        var latt = json.map(i => i.postData.map(y => y.latt))
        var long = json.map(i => i.postData.map(y => y.long))
        var date = json.map(i => i.postData.map(y => y.date))
        const flatten = (arr, depth = 2) =>
        arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
        var latt = flatten(latt)
        var long = flatten(long)
        var date = flatten(date)
        var device_latt = list.map(i => i.lattitude)
      
        if(device_latt.length === 0 || latt.length === 0){
          null
        }
        else{
        for(var i = 0; i < device_latt.length; i++){
          for(var j = 0; j < latt.length; j++){
            if(Math.abs(device_latt[i] - latt[j]) < 0.01){
              this.setState({
                status: "contact"
              })
            }
          }
        }
      }
        this.setState({
          x: date
        })
      })
      .catch((error) => {
        console.log("")
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



  findCoordinates = async() => {
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
        this.store()
        const l =  AsyncStorage.getItem('dat')

        var a = this.getData('lo')
        
        this.setState({
          coordinates: time
        })
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  store = async()=>{
    try{
      await AsyncStorage.setItem('dat', JSON.stringify(list))
    }catch(e){
      console.log("error")
    }
  }

  render() {
    var x = JSON.parse(JSON.stringify(data["_W"]))
    var b = JSON.parse(JSON.stringify(z["_W"]))
    var q = JSON.parse(JSON.stringify(l["_W"]))
   
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
          <Text> Loc: {q}</Text>
          <Text>Location: {this.state.location}</Text>
          <Text> status: {this.state.status} </Text>
          {this.state.status === "contact" ? <Text> You might have contact</Text>:<Text>No possible contact</Text>}
         {/* <Text> Df: {this.state.x.map(i => i)}</Text> 
          <Text> Storage: {b}</Text> */}
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
