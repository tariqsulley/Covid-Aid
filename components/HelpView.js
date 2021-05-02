import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-community/async-storage';
import {CheckBox,Card} from 'react-native-elements'

import {postApi} from './TrailsScreen'

class HelpView extends Component{
  constructor(props){
    super(props)
    this.state = {
      Positive: "No",
      Negative: 0,
      count: 0
    }

    this.ChangePositive = this.ChangePositive.bind(this)
    this.ChangeNegative = this.ChangeNegative.bind(this)
    this.action = this.action.bind(this)
  }

  StoreData = async()=>{
    try{
      this.setState({
        Positive:"Yes"
      })
    await AsyncStorage.setItem('CovidStatus', this.state.Positive)
    }
    catch(e){
    }
  }

  componentDidUpdate(){
    this.StoreData()
  }

  ChangePositive(){
    this.setState({
      Positive: Math.random()
    })
  }

  ChangeNegative(){
    this.setState({
      Positive: "No"
    })
  }
  action(){
    this.state.Positive === "Yes" ? postApi():null
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
  return(
    <View style = {styles.container}>
    <Card containerStyle = {{padding: 40}}>
    <Button title = " I Have Tested Postive" icon ={<Icon name="coronavirus" size = {15} color="red"/>}
      onPress = {()=> Alert.alert("Covid Status","Are you sure you have tested positive for corona virus?",[
        {text:"Yes", onPress:  this.StoreData},
        {text:"No", onPress: this.ChangeNegative}
      ])}
    />
      <Text> Positive: {this.state.Positive} </Text>
      <Text> Count : {this.state.count}</Text>
      <Button title=" Export Data" icon = {<Icon1 name= "upload" size = {15} color="white"/>}
      onPress={()=> this.state.count === 1 ? alert("Sorry, you can't upload data now"):this.action()}/>
    </Card>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default (HelpView);
