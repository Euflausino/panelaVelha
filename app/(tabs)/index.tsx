import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import {View, Text, StyleSheet, TextInput,} from "react-native"
import { useState } from "react"

export default function Home(){
    const [locationText, setLocationTetx] = useState('')
    return (
        <View style={styles.container}>
            <View style={styles.aaa}>
            <MaterialCommunityIcons name="chef-hat" style={{
                fontSize: 30,
                color: '#ffc93d',
            }}/>
            <Text style={styles.tittle}> Bem Vindo!</Text>
            </View>
           
            <View style={styles.header}>
            <TextInput style={styles.input}
                placeholder="Buscar Receitas"
                placeholderTextColor={'#f3f3ff'}
                textAlign="center"
                value={locationText}
                onChangeText={t => setLocationTetx(t)}
            />
            <Ionicons
                name="search"
                style={{
                    fontSize: 20,
                    
                }}
                color={"#f3f3ff"}
            />
            </View>
            
        </View>
    )

}
const  styles = StyleSheet.create({
    container:{
        backgroundColor:"#070717",
        flex:1,
        paddingTop:30,
        paddingLeft:10,
        paddingRight:20
    },
    input:{
    flex:1,
    fontSize:16,
    color:'#f3f3ff'
    
    },
    header:{
       backgroundColor:'#1F1F2E',
       height:30,
       borderRadius:10,
       flexDirection:'row',
       alignItems:'center',
       paddingRight:20,
       paddingLeft:20,
       marginTop:20,
    },
    tittle:{
        fontSize:24,
        fontWeight:'bold',
        color:'#ffc93d'
        },
        aaa:{
            flexDirection:'row'
        },
})
