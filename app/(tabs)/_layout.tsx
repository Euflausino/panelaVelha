import {Tabs} from 'expo-router'
import {FontAwesome, Ionicons, MaterialCommunityIcons, Octicons} from '@expo/vector-icons'
import {View, Text, StyleSheet} from "react-native"
export default function Layout(){
    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor:'#39383a',
            tabBarShowLabel:false,
            tabBarStyle:{
                position:'absolute',
                backgroundColor:"#1F1F2E",
                borderTopWidth:0,
                

                bottom:14,
                left:14,
                right:14,
                borderRadius:8,
            }
        }}>
            <Tabs.Screen name="index" options={{headerShown:false,
                title:"",
                tabBarIcon:({focused,color, size}) =>{

                    if(focused){
                        return <Ionicons name='home' color={'#ffc93d'} size={size}/>
                    }
                    return <Ionicons name='home-outline' color={'#ffc93d'} size={size}/>
                }
            }}/>
            <Tabs.Screen name="feira" options={{headerShown:false,
                tabBarIcon:({focused,color, size}) =>{

                    if(focused){
                        return <MaterialCommunityIcons name='cart' color={'#ffc93d'} size={size}/>
                    }
                    return <MaterialCommunityIcons name='cart-outline' color={'#ffc93d'} size={size}/>
                }
            }}
                
            
            />
            <Tabs.Screen name="user/index" options={{headerShown:false,
              
                title:"",
                tabBarIcon:({focused,color, size}) =>{

                    if(focused){
                        return <Octicons name='person-fill' color={'#ffc93d'} size={size}/>
                    }
                    return <Octicons name='person' color={'#ffc93d'} size={size}/>
                }
            }}/>
        </Tabs>

    )
}
