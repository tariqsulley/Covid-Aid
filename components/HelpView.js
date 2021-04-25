import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


class HelpView extends Component{
  constructor(props){
    super(props)

  }

  render(){
  return(
    <View style = {styles.container}>
      <Text> Any help needed </Text>
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
