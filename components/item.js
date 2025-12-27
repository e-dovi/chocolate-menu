//import {  /*createContext, useContext*/ } from "react";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import {selectCart, /*clearCart,*/ addToCart/*, increaseQty, decreaseQty*/} from '../reducers/cartSlice.js';
import {useDispatch, useSelector} from "react-redux";

const Item = (props) => {
//These should to be in the cart
  const dispatch = useDispatch()
  const select = useSelector(selectCart) 
    return (
         
         <View style={styles.item}>

            <Image source={props.pic} alt={props.name} style={{ flex: 1, width:150, height:150, borderRadius:10 }}/>
            <View style={styles.wrapperTxt}>
              <Text style={[styles.txt, {paddingBottom: 8, fontWeight:'bold'}]}>{props.name}</Text>
              <Text style={[styles.txt, {fontStyle:'italic'}]}>{props.desc}</Text>
              <Text style={[styles.txt, {paddingTop: 8}]}>Price: ${props.price}</Text>
            </View>
            <Pressable style={({pressed}) => [
          {
            backgroundColor: pressed ?  'rgb(193, 194, 195)' : '#d7d7d778' 
          },
          styles.wrapperCustom,
        ]} onPress={() =>{ 
              let item = {name:props.name, components: [], price:props.price, qty: 1}
              dispatch(addToCart(item))}}>
              <Text style={styles.txt_cart}>&#x1F6D2;</Text>
            </Pressable>

        </View>
     )

  }

 const styles = StyleSheet.create({
    item:{
      flex: 1,
      flexDirection: 'row',
      padding:5,
      border: '3px solid black',
      margin: 15,
      borderRadius: 15,
     // backgroundColor:'#8989890e'
     backgroundColor: '#fffffcba'
      //flexWrap:'nowrap'
    },
    image: {
      width: '30%',
      aspectRatio: 1,
      borderRadius: 10,
      resizeMode: 'cover',
    },
    wrapperCustom: {
      borderRadius: 8,
      padding: 0,
      justifyContent: 'center', 
      alignItems: 'center',
      height:'auto'
    },
    wrapperTxt: {
      borderRadius: 8,
      padding: 6,
      justifyContent: 'center', 
      alignItems: 'center',
    },
    txt:{
      fontSize:20,
      color:'#710008',
      fontFamily:"'Times New Roman', Times, serif"
    },
    txt_cart:{
      fontSize:20
    }
  })


export default Item;