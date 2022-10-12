import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import { styles } from './components/style';
import { TaskInput } from './components/taskinputfield';
import ShowTask, { TaskItem } from './components/taskitem';


export default function App() {
const [tasks,settasks]=useState([]);

 const Addtask=(task)=>{
settasks([...tasks,task]);
Keyboard.dismiss();
 }
 const DeletTask = (deleteIndex) => {
  settasks(tasks.filter((val, idx) => idx != deleteIndex));
};
  // const DeletTask=(id)=>{
  //  let i= tasks.findIndex(task=>task.idx === id)
  //   tasks.splice(i,1);
  //        settasks([...tasks]);
  //   }

// const DeleteTask = (id) => {
//   tasks.filter(task =>{
//     return task.index !== id;
   
//   })
//   settasks(tasks);
//   }
  
  return (
    
    <View>
      <Text style={styles.Header}>TO DO LIST</Text>
      < TaskInput  addtask={Addtask}/>

      <ScrollView>
        {tasks.map((task,idx)=>{
          return (
            <View key={idx}>
             <TaskItem task={task} 
             index={idx+1} 
             deleteTask={() => {
              DeletTask(idx);
            }}></TaskItem>
            </View>
          )
        })}
      </ScrollView>
     <View style={styles.btnclear}>
     <Button title="Clear" color={"#CD5C5C"}
      onPress={()=>{settasks([])}}/>
     </View>
     
      </View>
  );
}


