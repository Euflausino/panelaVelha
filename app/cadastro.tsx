import {View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput, ScrollView} from "react-native"
import {useState, useEffect,} from 'react';
import {Link, router} from  "expo-router";
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from "@expo/vector-icons";




export default function Cadastro(){
  function gotoLogin(){
    router.replace("/login")
  }
 

  
  const [hidePass, setHidepass] = useState(true);
  
  

 
    return (
        <View style={styles.container}>
          <ScrollView>
            <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
                <Text style={styles.title}> Panela Velha</Text>
                <Image source={require("../assets/images/splashlogo.png")} style={styles.logo}/>
                <Text style = {styles.title}>Cadastre-se para começar!</Text>
            </Animatable.View>

           


            <Animatable.View  delay={300} animation="fadeInUp" duration={2000} style={styles.containerForm}>

            
                <View style={styles.inputArea}>
                  
                    <Ionicons name="person" size={25} color={"#f3f3ff"} style={styles.icon}/>
                  
                  <TextInput
                    style={styles.input}
                    placeholder="Usuário..."
                    placeholderTextColor={"#f3f3ff"}
                  >
                  </TextInput>
                </View>
                <View style={styles.inputArea}>
                 
                    <Ionicons name="mail" size={25} color={"#f3f3ff"} style={styles.icon}/>
                  
                  <TextInput
                    style={styles.input}
                    placeholder="Email..."
                    placeholderTextColor={"#f3f3ff"}
                  >
                  </TextInput>
                </View>
                <View style={styles.inputArea}>
                  
                    <Ionicons name="lock-closed" size={25} color={"#f3f3ff"} style={styles.icon}/>
                  
                  <TextInput
                    secureTextEntry={hidePass}
                    style={styles.input}
                    placeholder="Senha..."
                    placeholderTextColor={"#f3f3ff"}
                  >
                  </TextInput>
                  <TouchableOpacity onPress={()=> setHidepass(!hidePass)}>
                    {hidePass?
                    <Ionicons name="eye" size={25} color={"#f3f3ff"}/>
                      :<Ionicons name="eye-off" size={25} color={"#f3f3ff"}/>
                  }                    
                  </TouchableOpacity>

                </View>
            
              
           
              

                
            
           
                  
            
           
                <TouchableOpacity style={styles.button}  >
                  <Text style={styles.buttonText}>CADASTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={gotoLogin}>
                  <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            
            
            </Animatable.View>


            </ScrollView>

        </View>
    )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  containerForm:{
    justifyContent:'center',
    alignItems:'center'
  },
  containerHeader:{
   paddingTop:30,
   alignItems:'center',
   justifyContent:'center',
    marginBottom:15,
  },
  logo:{
    marginBottom:2,
    height: 200,
    width: 200,
  },
  button:{
    backgroundColor: "#ffc93d",
    width:"80%",
    height: 50,
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 8,
    marginBottom: 30,
  },
  buttonText:{
    fontSize: 20,
    color:"#f3f3ff",

  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    color:"#ffc93d",
  },
  input:{
    width:'75%',
    height:50,
    color:'#f3f3ff',
    fontSize:18,
  },
  inputArea:{
    flexDirection:'row',
    width:'80%',
    backgroundColor:"#252525",
    borderRadius:8,
    height:50,
    alignItems:'center',
    marginBottom:15,
  },
  error:{
    alignSelf: 'center',
    color:"#ff375b",
    marginBottom: 8,
  },
  icon:{
    padding:5
  },
 
})
