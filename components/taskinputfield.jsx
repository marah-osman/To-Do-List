import { useState } from 'react';
import { View,TextInput,TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { styles } from './style';
import {MaterialIcons} from "@expo/vector-icons"

export const TaskInput=(props)=>{

    const[task,setTask]=useState();

    const Handleaddtask=()=>{
           props.addtask(task)
           setTask("")
    };

    return(
    <KeyboardAvoidingView 
    style={styles.container}>

        <TextInput
            style={styles.inputField}
            value={task}
            onChangeText={(txt)=>{setTask(txt)}}
            placeholder={"Enter Your Task"}
        />
        <TouchableOpacity 
>
           <View  style={styles.btn} >
           <MaterialIcons name="keyboard-arrow-down" 
           color="black" size={22}
           onPress={()=>Handleaddtask()}></MaterialIcons>
            </View> 
        </TouchableOpacity>
    </KeyboardAvoidingView>
    )
}
