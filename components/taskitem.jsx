
import React, { Component } from 'react';
import {  Text, View ,TouchableOpacity} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons"
import { styles } from './style';
// import { styles } from './components/style';



export const TaskItem =(props)=>
{
    return (
    <View style={styles.taskitemcontainer}>
        <View>
        <Text  style={styles.taskitemcontxt}>ind: {props.index}</Text>
        </View>
       <View >
       <Text style={styles.taskitemcontxt}>Task: {props.task}</Text>
       </View>
       <TouchableOpacity 
       onPress={()=>{props.deleteTask()}}>
      <MaterialIcons name ="delete" 
       size={30} color="red"/>

       </TouchableOpacity>
    </View>
    
    )
}