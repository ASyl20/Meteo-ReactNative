import React from 'react'
import {TextInput,Image,Button,View,Keyboard} from 'react-native'
import globalStyle from '../Style'
import {StackNavigator} from 'react-navigation'
import List from './List'

 class Search extends React.Component {

  static navigationOptions = {
    title : 'Rechercher une ville',
    tabBarIcon : ()=>{
      return <Image source={require('./icons/home.png')} style={{width : 20 , height : 20}}/>
    }
  }

  constructor(props){
    super(props)
    this.state = {
      city : 'Paris'
    }
  }

  setCity(city){
    this.setState({
      city :city
    })
  }

  submit(){
    Keyboard.dismiss()
    this.props.navigation.navigate('Result',{city : this.state.city})
  }

  render(){
    return (
      <View style={globalStyle.container}>
        <TextInput onSubmitEditing={() => this.submit()} onChangeText={(text)=> this.setCity(text)} underlineColorAndroid ='transparent' style={globalStyle.input} value={this.state.city}/>
        <Button color={globalStyle.color} onPress={() => this.submit()} title="Rechercher"/>
      </View>
    )
  }
}

const navigationOptions = {
  headerStyle : globalStyle.header,
  headerTitleStyle: globalStyle.headerTitle
}

  export default StackNavigator({

    Search : {
      screen : Search,
      navigationOptions
    },
    Result : {
      screen :  List,
      navigationOptions
    }

  })
