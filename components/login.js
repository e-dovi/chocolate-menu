import {AuthContext} from '../App.js';
import {View, Text, Button, StyleSheet, TextInput, SafeAreaView, Pressable, Switch} from 'react-native';
import { useContext, useState } from 'react';
const LoginScreen = () => {
  
    const { setUser } = useContext(AuthContext);
    const [text, setText] = useState('johndoe@agrandir.com');
    const [pass, setPass] = useState('janedoe');
    const [passw, setPassw] = useState('janedoe');
    const [error, setError] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);

    const setEr = (er) => {
      setError(er);
      setTimeout( () => {setError('')} , 5000);
    }

  return (
    <View style={{
    flex: 1,
    marginTop:90,
    //justifyContent: 'center',
    alignItems: 'center',
  }}>
      <TextInput placeholder="Username"
         style={styles.input} textContentType="username" 
         onChangeText={text => setText(text)} value={text}/>
      <TextInput
        placeholder="Password" secureTextEntry={true}
         style={styles.input}
         onChangeText={text => setPass(text)} value={pass}/>
      { (isEnabled) && (<TextInput placeholder="Confirm Password"
         style={styles.input} textContentType="password" 
         onChangeText={text => setPassw(text)} secureTextEntry={true} value={passw}/>) }
      <Text style={{fontFamily:'cursive', fontSize:'large', color:'red'}}>{error}</Text>
      <Pressable style={styles.submit} onPress={() => {
        if(isEnabled){
          if(pass !== passw){
            setEr('Passwords do not match.')
          }
          else if((text !== 'johndoe@agrandir.com')||(pass !== 'janedoe')){
            setEr('Incorrect password or username')
          }
          else if((pass === 'janedoe')&&(text==='johndoe@agrandir.com')){
            setUser(true); 
          }
        }
        else{
          
          //request to server
          if((text==='johndoe@agrandir.com')&&(pass ==='janedoe')){
            setUser(true); 
         }
         else{
             setEr('Incorrect password or username')
         } 
        }
        
        }} textContentType="password"><Text style={{ fontWeight:600}}>{isEnabled?"Sign Up":"Login"}</Text></Pressable>
       <View>
       {!(isEnabled) &&  (<Text style={{padding:5, fontWeight:'bold'}}>Login</Text>)}
       {(isEnabled) &&  (<Text style={{padding:5, fontWeight:'bold'}}>Sign Up</Text>)}
       </View>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#000000' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => {setIsEnabled(!isEnabled)}}
        value={isEnabled} style={{marginBottom:35}} />
    </View>
  );
};

const styles = StyleSheet.create({

   
   input: {
    height: 40,
    margin: 'auto',
    marginBottom:5,
    marginTop:10,
    borderWidth: 2,
    padding: 10,
    width:250, 
    alignItems: 'center',
  },
  
  submit: {
  
        height: 40,
        margin: 'auto',
        backgroundColor:'rgba(46, 74, 126, 0.362)',
        marginTop:15,
        borderWidth: 1,
        padding: 1,
        width:150, 
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 10
      
  }
  });
  

export default LoginScreen;