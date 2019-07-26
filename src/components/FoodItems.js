import React,{Component} from  'react'
import {View,ScrollView,Text} from 'react-native'
import axios from 'axios'
import Menu from '../screens/Menu'


class FoodItems extends Component{
    
    state={food:[]}
   

    componentDidMount() {
        const data = require('./Data.json');
        
    //     axios.get("https://www.food2fork.com/api/search?key=30a3a0b65d369bbf7c71736c09952181&q=chicken%20breast&page=2")
        
    //     .then(response => {
    //         console.log(response.data.recipes)
    //         this.setState({food:response.data.recipes})
    //     })
    //   .catch(err => {
    //       console.log("error")
    //   })

    
    //console.log(data)
    this.setState({food:data.recipes})
       }

    render(){
    return( 
        <ScrollView>
        <View style={{flex:1}}>
            {this.state.food.length> 0 ?
            
           this.state.food.map((food, i) => 
                
            <Menu key={i} data={food} />)
       
            
            
            :
            null
            } 

            </View>
</ScrollView>
           
            

          
    )
}
}

export default FoodItems;
