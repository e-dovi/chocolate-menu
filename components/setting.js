import { Pressable, Button, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import {AuthContext} from '../App.js';
import {useContext} from 'react';



function SettingsScreen() {
  const { setUser } = useContext(AuthContext);
  return (
    <View style={styles.setting}>
      <Pressable style={styles.logout} onPress={() => {setUser(false)}}><Text style={{color:'white', fontWeight:'bold'}}>Log Out</Text></Pressable>
      {/*<Pressable style={styles.update} onPress={() => {}}><Text style={{color:'white', fontWeight:'bold'}}>Update Info</Text></Pressable>*/}
    </View>
  );
}

const styles = StyleSheet.create({

    
    setting:{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      gap:15
      
    },
    logout: {
        
        height: 40,
        margin: 'auto',
        backgroundColor:'rgba(91, 2, 2, 0.674)',
        marginTop:25,
        borderWidth: 1,
        padding: 1,
        width:150, 
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 10,
        
      
  },
  update:{
    height: 40,
        margin: 'auto',
        backgroundColor:'rgba(46, 74, 126, 0.362)',
        marginBottom:345,
        borderWidth: 2,
        padding: 10,
        width:150, 
        alignItems: 'center',
        borderRadius: 5
  }
  });

  export default SettingsScreen;