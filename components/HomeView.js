import React,{Component} from 'react';
import {View, Text, Image, StyleSheet,AppRegistry} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import DOMParser from 'react-native-html-parser';
import Icon from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-elements';
import Toast from 'react-native-toast-message';
import EStyleSheet from 'react-native-extended-stylesheet';

var cases;
var active;
var recoveries;
var losses;

async function getData(){
  const URL = 'https://www.worldometers.info/coronavirus/country/ghana/'
  const response = await fetch(URL)
  const htmlstr = await response.text()
  const parser = new DOMParser.DOMParser()
  const parsed = parser.parseFromString(htmlstr, 'text/html')
  var values = parsed.getElementsByClassName('maincounter-number')
  var values = String(values)
  var values = values.split(/([0-9]+)/)
  var numbers = values.map(i => parseInt(i))
  var numbers = numbers.filter(i => isNaN(i) != true)
  var total_cases = String(numbers[0]) + String(numbers[1])
  var deaths = String(numbers[2])
  var recovered = String(numbers[5]) + String( (String(numbers[6]).length == 2? "0": null) + numbers[6])
  var active_cases = String(parseInt(total_cases) - (parseInt(deaths) + parseInt(recovered)))
  await AsyncStorage.setItem('cases', total_cases)
  await AsyncStorage.setItem('active', active_cases)
  await AsyncStorage.setItem('recovered', recovered)
  await AsyncStorage.setItem('deaths', deaths)
  cases = await AsyncStorage.getItem('cases')
  active = await AsyncStorage.getItem('active')
  recoveries = await AsyncStorage.getItem('recovered')
  losses = await AsyncStorage.getItem('deaths')
  changevalue();
}



class HomeView extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:"Tariq",
      total_cases: 0,
      active_cases: 0 ,
      recovered: 0,
      deaths: 0,
 
    }
    this.changevalue = this.changevalue.bind(this) 
  
  }

  changevalue(){
    this.setState({
      total_cases: cases
    })

    this.setState({
      active_cases: active
    })
    
    this.setState({
      recovered: recoveries
    })

    this.setState({
      deaths: losses
    })

    Toast.show({
      text1: 'Updated',
      text2: "You are currently viewing Ghana's latest Covid-19 updates",
      position: 'bottom',
    });
  }

  componentDidUpdate(){
    getData();
  }

  render(){
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style = {styles.Design}>

          <View>
           <Image style = {{position:'absolute',top:-60, right:-160,
           paddingRight: 90,
            width:330, height: 190
           }}
            source = {require('../assets/pandemic.jpg')}/>
          </View>

          <View style = {styles.Statistics}>

            <View style= {styles.HomeStyle1}>
            <Text style ={ {padding: 5,color:'plum',fontFamily:'sans-serif',fontWeight: 'bold'}}>TOTAL CASES: {this.state.total_cases} </Text>
            <Text style ={ {padding: 5, color: 'plum',fontFamily:'sans-serif',fontWeight: 'bold'}}> ACTIVE CASES: {this.state.active_cases} </Text>
            </View>
            <Text style = {{position:'absolute', top:0,fontFamily:'sans-serif', fontWeight: 'bold'}}> GHANA <Image style = { {width:15,height:10} }source={require('../assets/gh.jpg')}/> </Text>

            <View style = {styles.HomeStyle2}>
            <Text style ={ {padding: 5, color: 'limegreen',fontFamily:'sans-serif',fontWeight: 'bold'}}> RECOVERIES: {this.state.recovered} </Text>
            <Text style ={ {padding: 5, color: 'tomato',fontFamily:'sans-serif',fontWeight: 'bold'}}> DEATHS: {this.state.deaths} </Text>
            </View>

          </View>

        </View>
              <View  style = {styles.ButtonStyle}>
                <Button title=" Get Latest Updates" icon= {<Icon name="download" size={15} color="white"/>} onPress = {() => this.changevalue()}/>
              </View>

        </View>
    )
  }
}

const styles = EStyleSheet.create({
  ButtonStyle:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '70%',
    margin: 20
  },

  Design:{
    flex:1,
    flexDirection: 'column',
    margin: 60
  },

  Statistics:{
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    position: 'absolute',
    borderRadius: 4,
    backgroundColor: 'white',
    top: '45%',
    right: '-77%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9
  },

  HomeStyle1:{
    borderColor: "silver",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white'
  },

  HomeStyle2:{
    marginLeft: '5%',
    borderColor: "silver",
    borderWidth: 1,
    borderRadius: 5,
  },

  '@media (max-width: 350) or (max-height: 550)': {
    ButtonStyle:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '70%',
      margin: 20
    },
  
    Design:{
      flex:1,
      flexDirection: 'column',
      margin: 60
    },
  
    Statistics:{
      flex: 1,
      flexDirection: 'row',
      padding: 20,
      position: 'absolute',
      borderRadius: 4,
      backgroundColor: 'white',
      top: '45%',
      right: '-77%',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
  
      elevation: 9
    },
  
    HomeStyle1:{
      borderColor: "red",
      borderWidth: 1,
      borderRadius: 5,
      backgroundColor: 'white'
    },
  
    HomeStyle2:{
      marginLeft: '5%',
      borderColor: "red",
      borderWidth: 1,
      borderRadius: 5,
    }
  }
})



export default HomeView;
AppRegistry.registerComponent('HomeView', () => HomeView);
