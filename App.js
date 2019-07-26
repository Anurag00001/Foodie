import React from 'react'
import {View,Text} from 'react-native'
import {createDrawerNavigator,createStackNavigator,createAppContainer} from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import FrontPage from './src/components/FrontPage'
import Menu from './src/screens/Menu'
import FoodItems from './src/components/FoodItems'

class App extends React.Component{
render(){
  return(
    <AppContainer />
  )
}        

}

const Navigation=createStackNavigator({
  Front:FrontPage,
  Home:HomeScreen,
  Login:LoginScreen,
  Menu:Menu,
  Items:FoodItems
},
{initialRouteName:'Front'},

)
const AppContainer=createAppContainer(Navigation)



export default App;