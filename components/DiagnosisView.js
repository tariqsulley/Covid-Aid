import React, {Component} from 'react';
import {View,Text, StyleSheet, ScrollView, Image,Dimensions} from 'react-native';
import {Card} from 'react-native-elements'


class AboutView extends Component{
  constructor(props){
    super(props)

  }
  
  render(){
    return(
      <View style={styles.container}>
      <ScrollView>
      <Card>
        <Card.Title> What Are Corona Viruses? </Card.Title>
        <Card.Divider/>
        <Image style= {styles.Imgs} source = {require('../assets/CoronaViruses.jpg')}/>
        <Text style={styles.Txt}> Coronaviruses are a large group of viruses that are common among animals.
         In rare cases, they are what scientists call zoonotic, meaning they can be transmitted from animals to 
         humans, according to the US Centers for Disease Control and Prevention. It is a dangerous diseases with 
         incubation period between 4-6 days. It is fatal especially for those with weakened immune system,
          the elderly and the very young. It could also result in Pneumonia and bronchitis. </Text>
      </Card>
      <Card>
        <Card.Title> What Is COVID-19? </Card.Title>
        <Card.Divider/>
        <Image style = {styles.Imgs} source = {require('../assets/covid-19.jpg')}/>
        <Text style={styles.Txt}>
        Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
       </Text>
      </Card>
      <Card>
        <Card.Title> How Does It Spread? </Card.Title>
        <Card.Divider/>
        <Image style= {styles.Imgs} source = {require('../assets/covid-spread.jpg')}/>
        <Text style={styles.Txt}> 
        COVID-19 is caused by the SARS-CoV-2 virus, which spreads between people, mainly when an infected person is
        in close contact with another person. The virus can spread from an infected person’s mouth or nose in small
        liquid particles when they cough, sneeze, speak, sing or breathe heavily. These liquid particles are 
        different sizes, ranging from larger ‘respiratory droplets’ to smaller ‘aerosols’.
        Other people can catch COVID-19 when the virus gets into their mouth, nose or eyes, which is more likely 
        to happen when people are in direct or close contact (less than 1 metre apart) with an infected person.
        The virus can also spread after infected people sneeze, cough on, or touch surfaces, or objects, such as 
        tables, doorknobs and handrails. Other people may become infected by touching these contaminated surfaces, 
        then touching their eyes, noses or mouths without having cleaned their hands first. </Text>
      </Card>
      <Card>
        <Card.Title> What Are The Signs And Symptoms Of Covid-19 ? </Card.Title>
        <Card.Divider/>
        <Image style = {styles.Imgs} source = {require('../assets/infected.jpg')}/>
        <Text> COVID-19 affects different people in different ways. Most infected people will develop mild to 
        moderate illness and recover without hospitalization. Most common symptoms:
        {`\u2022`} fever,dry cough,tiredness
        Less common symptoms: aches and pains, sore throat, diarrhoea , conjunctivitis, headache,
        loss of taste or smell, a rash on skin, or discolouration of fingers or toes.
        Serious symptoms:difficulty breathing or shortness of breath, chest pain or pressure, loss of speech or movement
        Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or
        health facility. People with mild symptoms who are otherwise healthy should manage their symptoms at home.
        On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however 
        it can take up to 14 days. </Text>
      </Card>
      <Card>
        <Card.Title> How Do I Prevent Myself From Getting The Virus? </Card.Title>
        <Card.Divider/>
        <Image style = {styles.Imgs} source = {require('../assets/Spread.jpg')}/>

        <Text> To prevent the spread of COVID-19:
              Clean your hands often. Use soap and water, or an alcohol-based hand rub.
              Maintain a safe distance from anyone who is coughing or sneezing.
              Wear a mask when physical distancing is not possible.
              Don’t touch your eyes, nose or mouth.
              Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.
              Stay home if you feel unwell.
              If you have a fever, cough and difficulty breathing, seek medical attention.
              Calling in advance allows your healthcare provider to quickly direct you to the right health facility. 
              This protects you, and prevents the spread of viruses and other infections.
              Masks can help prevent the spread of the virus from the person wearing the mask to others. 
              Masks alone do not protect against COVID-19, and should be combined with physical distancing and
              hand hygiene. Follow the advice provided by your local health authority. 
        </Text>
      </Card>
      <Card>
        <Card.Title> What Do I Do When I Come Into Contact With Someone With The Virus? </Card.Title>
        <Card.Divider/>
        <Image style = {styles.Imgs} source = {require('../assets/anxious.jpg')}/>
        <Text>
        After exposure to someone who has COVID-19, do the following:
        Call your health care provider or COVID-19 hotline to find out where and when to get a test.
        Cooperate with contact-tracing procedures to stop the spread of the virus.
        If testing is not available, stay home and away from others for 14 days.
        While you are in quarantine, do not go to work, to school or to public places. 
        Ask someone to bring you supplies.
        Keep at least a 1-metre distance from others, even from your family members.
        Wear a medical mask to protect others, including if/when you need to seek medical care.
        Clean your hands frequently.
        Stay in a separate room from other family members, and if not possible, wear a medical mask.
        Keep the room well-ventilated.
        If you share a room, place beds at least 1 metre apart.
        Monitor yourself for any symptoms for 14 days.
        Call your health care provider immediately if you have any of these danger signs: difficulty breathing, 
        loss of speech or mobility, confusion or chest pain.
        Stay positive by keeping in touch with loved ones by phone or online, and by exercising at home.
        </Text>
      </Card>
      </ScrollView>
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

    Imgs:{
      width: Dimensions.get('window').width /1.2,
      height: Dimensions.get('window').width / 2,
      borderRadius:2
    },

    Txt:{
      margin:5
    },

    Definition:{
      alignItems:'center',
      justifyContent: 'center',
      borderRadius: 5,
      margin: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },

      shadowOpacity: 0.32,
      shadowRadius: 5.46,
  
      elevation: 4,
    
    }
  });

export default (AboutView);
