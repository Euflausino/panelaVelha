import {View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput, ScrollView} from "react-native"
import { useState } from "react";
import {Link, router} from  "expo-router";
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { Ionicons } from "@expo/vector-icons";
import * as yup from 'yup';
import * as Animatable from 'react-native-animatable';


export default function Cadastro(){
  function gotoCadastro(){
    router.replace("/cadastro")
  }

  
  const [hidePass, setHidepass] = useState(true);
    return (
        <View style={styles.container}>
          <ScrollView>
          <Animatable.View animation="fadeInDown" style={styles.containerHeader}>
            <Text style = {styles.title}>Panela Velha</Text>
            <Image source={require("../assets/images/splashlogo.png")} style={styles.logo}/>
            <Text style = {styles.title}>Faça login para começar!</Text>
          </Animatable.View>

           <Animatable.View  animation="fadeInRight" delay={300} duration={2000} style={styles.containerForm}>

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
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>RECUPERAR SENHA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection:'row' }} onPress={gotoCadastro}>
              <Text style={{color:'#a1a1a1'}}>Não tem uma conta? </Text>
              <Text style={{color:'#ffc93d'}}>Cadastre-se!</Text>
            </TouchableOpacity>
            </Animatable.View> 
          </ScrollView>
        </View>
    )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070717',
  },
  containerHeader:{
    flex:1,
    alignItems:'center',
   justifyContent:'center',
   marginBottom:15,
   paddingTop:30,
  },
  containerForm:{
    justifyContent:'center',
    alignItems:'center'
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
    backgroundColor:"#1F1F2E",
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
