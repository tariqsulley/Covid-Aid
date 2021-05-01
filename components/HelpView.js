import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
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
      Negative: Math.random()
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
    <Button title = " I have tested postive" icon ={<Icon name="coronavirus" size = {15} color="red"/>}
      onPress = {()=> Alert.alert("Covid Status","Are you sure you have tested positive for corona virus?",[
        {text:"Yes", onPress:  this.StoreData},
        {text:"No", onPress: this.ChangeNegative}
      ])}
    />
      <Text> Positive: {this.state.Positive} </Text>
      <Text> Negative: {this.state.Negative} </Text>
      <Text> COunt : {this.state.count}</Text>
      <Button title="Export Data" onPress={()=> this.state.count >= 1 ? null:this.action()}/>
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
