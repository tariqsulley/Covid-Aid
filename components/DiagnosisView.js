import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {registerRootComponent} from 'expo';
import {CheckBox,Card} from 'react-native-elements'
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-elements';

class DiagnosisView extends Component{
  constructor(props){
    super(props);
    this.state = {
      page1: false,
      page2: 0,
      page3: 0,
      page4: 0,
      page5: 0,
      Malechecked: false,
      Femalechecked: false,
      age: 0,
      ContactYes: false,
      ContactNo: false,
    }

    this.ToPage1 = this.ToPage1.bind(this)
    this.MaleCheck = this.MaleCheck.bind(this)
    this.FemaleCheck = this.FemaleCheck.bind(this)
    this.ContactNoCheck = this.ContactNoCheck.bind(this)
    this.ContactYesCheck = this.ContactYesCheck.bind(this)
  }
  
  ToPage1(){
    this.setState({
      page1: !this.state.page1
    })
  }

  MaleCheck(){
    this.setState({
      Malechecked: !this.state.Malechecked
    })

    this.setState({
      Femalechecked: false
    })
  }
  
  FemaleCheck(){
    this.setState({
      Femalechecked: !this.state.Femalechecked
    })

    this.setState({
      Malechecked: false
    })
  }
  
  ContactYesCheck(){
    this.setState({
      ContactYes: !this.state.ContactYes
    })
    this.setState({
      ContactNo: false
    })
  }

  ContactNoCheck(){
    this.setState({
      ContactNo: !this.state.ContactNo
    })
    this.setState({
      ContactYes: false
    })
  }

  render(){
    if(this.state.page1 == false){
    return(

      <View style = {styles.container}>

      <Text>   </Text>
      <View style = {styles.Pg0View}>
      <Card containerStyle = {{padding: 40}}>
      <Card.Title> Personal Information</Card.Title>
      <Text style= {{padding:4}}>2. Please Select Your Age Group:</Text>
        <DropDownPicker
          items={[
              {label: '10-20', value: '1', icon: () => <Icon name="list" size={18} color="dodgerblue" />},
              {label: '21-30', value: '2', icon: () => <Icon name="list" size={18} color="dodgerblue" />},
              {label: '31-40', value: '3', icon: () => <Icon name="list" size={18} color="dodgerblue" />},
              {label: '41-50', value: '4', icon: () => <Icon name="list" size={18} color="dodgerblue" />},
              {label: '51-60', value: '5', icon: () => <Icon name="list" size={18} color="dodgerblue" />},
              {label: '61-70', value: '6', icon: () => <Icon name="list" size={18} color="dodgerblue" />},
              {label: '71-80', value: '7', icon: () => <Icon name="list" size={18} color="dodgerblue" />},
              {label: '81-90', value: '8', icon: () => <Icon name="list" size={18} color="dodgerblue" />},
              {label: '91-100', value: '9', icon: () => <Icon name="list" size={18} color="dodgerblue" />},
              {label: '101-110', value: '10', icon: () => <Icon name="list" size={18} color="dodgerblue" />},

          ]}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={item => this.setState({
              age: item.value
          })}
      />

      <View style={{padding: 20}}>
      <Text>
        1. Please Select Your Gender:
        </Text>
        <CheckBox
          center
          title='Male'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={ ()=> this.MaleCheck()}
          checked={this.state.Malechecked}
        />
         <CheckBox
          center
          title='Female'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={ ()=> this.FemaleCheck()}
          checked={this.state.Femalechecked}
        />
      </View>
       
      { (this.state.Malechecked == true || this.state.Femalechecked == true) && this.state.age != 0 ?
       <Button title="Next Page"  iconRight icon={<Icon1 name = "navigate-next" size={15} color="white" />}  
       onPress={()=> this.ToPage1()}/>:
        <Button title="Next Page" disabled iconRight icon={<Icon1 name = "navigate-next" size={15} color="white" />} />}

        </Card>
        </View>

      </View>
    )
  }

  if(this.state.page1 == true){
    return(
      <View style = {styles.container}>
       <Card>
         <Text> 1. Have You Come Into Contact(within 6 feet) With Anyone Who Has Been Diagnosed With Covid-19 In 
         The Past 14 Days?</Text>
         <CheckBox
          center
          title='Yes'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={ ()=> this.ContactYesCheck()}
          checked={this.state.ContactYes}
        />
         <CheckBox
          center
          title='No'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          onPress={ ()=> this.ContactNoCheck()}
          checked={this.state.ContactNo}
        />

         <Button title="Next Page"  iconRight icon={<Icon1 name = "navigate-next" size={15} color="white" />} onPress = {() => this.ToPage1()} />

       </Card>
      </View>
    )
  }
  else{
    return(
      null
    )
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  Pg0View:{
    display: 'flex',
    flexDirection: 'column'
  }
});

export default DiagnosisView;
