import React from "react";
import {View, Text, StyleSheet , Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Link, router} from  "expo-router";


function gotoCadastro(){
  router.replace("/cadastro")
}
export default function App(){

  return(
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation='flipInY'
          source={require('../assets/images/capi2.png')}
          style={{width:'100%'}}
          resizeMode="contain"
        />
      </View>

      <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
          <Text style={styles.title}>Receitas deliciosas na palma da sua mão!</Text>
          <Text style={styles.text}>Faça o login para começar.</Text>
          <TouchableOpacity style={styles.button} onPress={gotoCadastro}>
            <Text style={styles.buttonText}>ACESSAR </Text>
          </TouchableOpacity>
      </Animatable.View>


    
    </View>
  )
}
const  styles = StyleSheet.create({
  title:{
    fontSize: 24,
    fontWeight:'bold',
    marginTop:28,
    marginBottom:12,
    color:'#f3f3ff',
  },
  containerForm:{
    flex:1,
    backgroundColor:'#1F1F2E',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingStart:'5%',
    paddingEnd:'5%',
  },
  containerLogo:{
    flex:2,
    backgroundColor:"#070717",
    justifyContent:'center',
    alignItems:'center',
    
  },
  container:{
    
    flex:1,
    backgroundColor:"#070717"
  },
  text:{
    color:'#a1a1a1',
  },
  button:{
    position:'absolute',
    backgroundColor:'#ffc93d',
    borderRadius: 50,
    paddingVertical: 8,
    width:'60%',
    alignSelf:'center',
    bottom:'15%',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText:{
    fontSize:18,
    color:'#f3f3ff',
    fontWeight:'bold',
  }
})
