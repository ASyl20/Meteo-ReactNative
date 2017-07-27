import React from 'React'
import {View,Image,Text,StyleSheet,ActivityIndicator,Button} from 'react-native'
import globalStyle from '../Style'

export default class About extends React.Component{

  static navigationOptions = {
    tabBarIcon : ()=>{
      return <Image source={require('./icons/user.png')} style={{width : 20 , height : 20}}/>
    }
  }

  search(){
    // console.log(this.props.navigation)
    // console.log(this.props.navigation.navigate('Search'))
    this.props.navigation.navigate('Search')
  }

  render(){
    return (
      <View style={globalStyle.container}>
        <Text style={globalStyle.title}>A propos de l' application</Text>
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <View style={{flex:1, flexDirection: 'row',margin:20}}>
          <ActivityIndicator style={globalStyle.view} color="#FF0000" size="large" animating={true}/>
          <ActivityIndicator style={globalStyle.view} color="#FF0000" size="large" animating={true}/>
        </View>
        <Button color={globalStyle.color} onPress={()=> this.search()} title='Rechercher' />
      </View>
    )
  }
}
