import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Header:{
    textAlign:"center",
    fontSize: 30,
    marginTop:20,
    color: "black",
    fontWeight: "100",
    backgroundColor:"gray",
    },
     inputField: {
       height:50,
       width:"80%",
       padding:10,
       marginTop:50,
       marginLeft:15,
       borderWidth:2,
       borderRadius:10,
       alignItems:'center',
       backgroundColor: '#fff',
    },
    container: {
        flexDirection: "row",
        alignItems:"center"
      },
      btn:{
       backgroundColor:"gray" ,
       width:50,
       height:50,
       borderWidth:2,
       borderRadius:10,
       alignItems:'center',
       justifyContent:'center',
       marginTop:48,

      },
      taskitemcontainer:
      {
        flexDirection: "row",
        alignItems:"center",
        justifyContent:'space-between',
        margin:15,
      },
      taskitemcontxt:{
        fontSize: 20,
        // marginTop:20,
        color: "black",
        fontWeight: "20",
        // backgroundColor:"gray",
      },
      btnclear:{
        position:"fixed",
        width:"60%",
        borderWidth:2,
        borderRadius:20,
        overflow:"hidden",
        marginLeft:50,
        marginRight:50,
        marginTop:700,
        paddin:10 ,
      }
});

  export { styles }