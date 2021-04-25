import React, { Component } from "react";
import {StyleSheet, Text, View, Alert, TouchableOpacity,Button,ScrollView} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { ListItem, Avatar } from 'react-native-elements';

const list = [
  {
    lattitude: '9.435352342',
    img: 'https://png.pngtree.com/element_our/png/20181205/location-vector-icon-png_256682.jpg',
    longitude: '0.324421323',
    date: '23rd March 2020'
  },

]

const data =  AsyncStorage.getItem('location')
var location_data;
var a = AsyncStorage.getItem('time')

//const values = [{'timestamp':val.timestamp, 'lattitude':val.coords.lattitude, 'longitude':val.coords.longitude}]


class Trails extends Component {
 constructor(props){
   super(props);
   this.state = {
     location: null,
     coordinates: [],
     dis: [],
     df: null
   }

   this.findCoordinates = this.findCoordinates.bind(this)
   this.StoreData = this.StoreData.bind(this)
  }


  componentDidMount(){
    var x = AsyncStorage.getItem('lamx')
    this.setState({
      dis: x
    })
   
  }

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
        
        var values = String(location_data)
        var values = values.split(/([0-9]+)/)
        var numbers = values.map(i => parseInt(i))
        var numbers = numbers.filter(i => isNaN(i) != true)
        var time = numbers[0]
        var date = (new Date(time)).toLocaleString()
        var lattitude = numbers[3] + "." + numbers[4]
        var longitude =  numbers[5] + "." + "0" + numbers[6]
        var cods = [{'time':time,'lattitude':lattitude,'longitude':longitude}]
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
          <Text> Df: {this.state.df}</Text>
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
