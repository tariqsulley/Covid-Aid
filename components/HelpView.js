import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
function HelpView(){
    return(
      <View style = {styles.container}>
        <Text> Any help needed?</Text>
      </View>
    )
  }

export default HelpView;