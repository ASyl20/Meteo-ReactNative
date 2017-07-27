import React from 'react'
import globalStyle from '../Style'
import {Image,Text,ActivityIndicator,ListView} from 'react-native'
import axios from 'axios'
import Row from './weather/Row'

export default class List extends React.Component{

  static navigationOptions = ({navigation})=>{
    //console.log(params);
    return{
     title : `Météo / ${navigation.state.params.city}`,
      tabBarIcon : ()=>{
        return <Image source={require('./icons/home.png')} style={{width : 20 , height : 20}}/>
      }
    }
  }

constructor(props){
  super(props)
  //  console.log('state',this.props.navigation.state)
  this.state = {
  //  city :'Paris',
   city : this.props.navigation.state.params.city,
    report : null
  }
  setTimeout(()=>{
    this.fetchWeather()
  },1000)

}

fetchWeather(){
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=metric&cnt=10&APPID=3782b9ba88d3527434d16acafae7031e`)
      .then((response) => {
      //    console.log(response.data)
      this.setState({report : response.data})
      })
}

  render(){
    if(this.state.report === null) {
      return (
        <ActivityIndicator color={globalStyle.color} size="large"/>
      )
    }else{
      const ds = new ListView.DataSource({rowHasChanged : (r1,r2) => r1!== r2})
      return(
        <ListView dataSource={ds.cloneWithRows(this.state.report.list)} renderRow={(row,j,k) => <Row day={row} index={parseInt(k,10)}/>}></ListView>
      )
    }
  }
}
