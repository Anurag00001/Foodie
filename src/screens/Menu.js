import React from 'react'
import {View,Text,ImageBackground,Image,StyleSheet,ScrollView} from 'react-native'
import {createDrawerNavigator,createAppContainer} from 'react-navigation'
import Card from '../components/Card'
import CardSection from '../components/CardSection'

const Menu =({data})=>{

  navigationOptions={
        title:"Menu",
        headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    }

    const Api_Key="30a3a0b65d369bbf7c71736c09952181";
    const {image_url}=data

    console.log("data", data);
    
return(

   
          
        <ImageBackground
        source={{uri:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX12750174.jpg"}}
        style={{height:"100%",width:"100%",flex:1}}
        >

           
<View style={{flex:1}}>
    <Card>
    
     
            <CardSection>
                    <View style={styles.TextStyle}>
                        
                        <Text style={{fontWeight:"bold",fontSize:15}}>Id: {data.recipe_id}</Text>
                        
                    </View>

            </CardSection>

            <CardSection>
                    <View style={styles.TextStyle}>
                    
                        <Text style={{fontWeight:"bold",fontSize:15}}>Title: {data.title}</Text>
                    
                    </View>

            </CardSection>
               
            <CardSection>
                    <Image 
                        style={{flex:1,height:300,width:335}}
                        source={{uri:image_url}}
                    />

            </CardSection>
   
            



</Card> 
</View>
</ImageBackground>

            
        // 

)
            
}

const styles=StyleSheet.create({
    TextStyle:{
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        marginLeft:5,
        marginRight:5
    }
})

export default Menu;