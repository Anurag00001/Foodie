import React from 'react'
import {View,Text,StyleSheet,ImageBackground,TextInput,TouchableOpacity,Linking} from 'react-native'
import CardSection from './CardSection'
import {createStackNavigator,createAppContainer} from 'react-navigation'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'

class FrontPage extends React.Component{

    static navigationOptions={
        header:null
    }

state={
    text:""
}


    render(){
        return(
<View>
   
              
<ImageBackground source={{uri:"https://www.theriverside.co.uk/images/Inside-Restaurant.jpg"}}
                    style={{height:'100%' , width:'100%'}} >
                        
                    <Text style={{fontSize:44,padding:20,alignSelf:"center"}}>Foodie</Text>
                        <View style={{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                          
                            <CardSection>
                        <TextInput 
                        style={{width:"50%"}}
                        placeholder="Mobile Number"
                        onChangeText={(text)=>this.setState({text})}
                        value={this.state.text}
                        />
                        <TouchableOpacity 
                        style={styles.buttonStyle}
                        onPress={()=>this.props.navigation.navigate("Home")}>
                            <Text>Go</Text>
                            </TouchableOpacity>
                        </CardSection>
                        </View>
                        </ImageBackground>
                   
</View>                    
        )
    }
}


const styles=StyleSheet.create({
HeaderText:{
    fontSize:18,
    fontWeight:"bold",
    padding:15,
    alignItems:"center",
    backgroundColor:"yellow",
    justifyContent:"center"

},
textStyle:{
   
    fontSize:30,
    
    color:"black",
    
},
buttonStyle:{
    padding:13,
    color:"red",
    marginLeft:20,
    fontSize:20
}
})



export default FrontPage;