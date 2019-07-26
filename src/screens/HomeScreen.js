import React from 'react'
import {View,Text,Button,TextInput,ImageBackground,Image,TouchableOpacity} from 'react-native'
import LoginScreen from './LoginScreen'
import {createStackNavigation} from 'react-navigation'
import firebase from 'firebase'
import CardSection from '../components/CardSection'
import Spinner from '../components/Spinner'
import LoginForm from '../components/LoginForm'


class HomeScreen extends React.Component{
    

    state={
        username:"",
        password:"",
        error:"",
        isLoading:false,
        loggedin:null
    }

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyAcssX9tAYEdpjxrN8-thNn4jQ4da7B-es",
            authDomain: "foodie-28e99.firebaseapp.com",
            databaseURL: "https://foodie-28e99.firebaseio.com",
            projectId: "foodie-28e99",
            storageBucket: "foodie-28e99.appspot.com",
            messagingSenderId: "128225196383",
            appId: "1:128225196383:web:d1aec109a0664adf"

        });
        
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedin:true})
            }else{
                this.setState({loggedin:false})
            }
        })
    }



    static navigationOptions={
        title:"Login",
        headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    }


renderButton(){
    if(this.state.isLoading){
        return <Spinner />
    }
    
        return(

           
            <Button
            title="Register"
            style={{height:50,width:150}}
            onPress={this.onButtonPress.bind(this)}
            />
           
        )
    
}

onButtonPress(){
    const {username,password,error}=this.state;
    this.setState({error:"",isLoading:true})


        firebase.auth().signInWithEmailAndPassword(username,password)
        .then(this.onLoginSuccess.bind(this))
         .catch(()=>{
             firebase.auth().createUserWithEmailAndPassword(username,password)
             .then(this.onLoginSuccess.bind(this))
               .catch(()=>{
                   this.setState({error:"Authentication Failed"})
               });
         });
    }

onLoginSuccess(){
    this.setState({username:"",
    password:"",
    isLoading:false,
    error:"",
    })

    }

    render(){ 
         
    const {navigate}=this.props.navigation;

    if(this.state.loggedin){
       return(  
        <ImageBackground 
    source={{uri:"https://i1.wp.com/www.wisteriavoyage.com/wp-content/uploads/2017/01/IMG_9466.jpg?fit=1100%2C1467"}}
    style={{height:"100%" , width:"100%"}}
    >   
        <View style={{flex:1,alignItems:"flex-end"}}>
            <TouchableOpacity 
            
            onPress={()=>this.props.navigation.navigate("Items")}>
                <Image 
                source={{uri:"data:image/png;base64,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"}}
                style={{height:40,width:40}}
                />
                </TouchableOpacity>
            </View>
    </ImageBackground>
       )
    }
  
    return(
        <View>
    <ImageBackground source={{uri:"https://i.pinimg.com/originals/b9/e4/76/b9e476bfc5b77387db92515fe7327a93.jpg"}} 
    style={{height:"100%",width:"100%"}}>
        <View style={{flex:1,padding:70,alignItems:"center",justyfyContent:"space-around"}}>
    <CardSection>
        <TextInput
        style={{width:"100%",height:40}}
        placeholder="UserName"
        onChangeText={(username)=>this.setState({username})}
        value={this.state.username}
        
        />
        </CardSection>

        <CardSection>
        <TextInput
        style={{width:"100%",height:40}}
        placeholder="Password"
        onChangeText={(password)=>this.setState({password})}
        value={this.state.password}
        secureTextEntry={true}
        
        />
        </CardSection>

                {this.renderButton()}
                <Text style={{fontSize:20}}>{this.state.error}</Text>
            
        </View>
        </ImageBackground>
    </View>
)
}
}



export default HomeScreen;