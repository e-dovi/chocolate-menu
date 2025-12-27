import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  TextInput } from 'react-native';
import {
  selectCart,
  clearCart,
  increaseQty,
  decreaseQty,
  removeItem } from '../reducers/cartSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


function CartScreen() {
  let ttl = 0;
  const dispatch = useDispatch();
  const select = useSelector(selectCart);
  const [isEnabled, setIsEnabled] = useState(false);
  const [passw, setPassw] = useState(1234567891234567);
  const [exp, setExp] = useState(1231);
  const [cvc, setCvc] = useState(123);

  const findByName = (name) => {
    return select.findIndex((e) => e.name == name);
  };

  select.forEach((m) => {
    if (m.price !== undefined && m.price !== null) {
      ttl += m.price * m.qty;
    }
  });

  const placeOrder = () => {
    let obj = {
      customer: "customer's name",
      total: ttl,
      items: select,
    };
    console.log(obj);
      alert('Order placed successfully.');
          dispatch(clearCart());
  };

  return (
    <ScrollView>
      <View style={styles.cart}>
        {ttl == 0 && (
          <Text style={{ marginTop: 200 }}>No items in the cart...</Text>
        )}
        <View style={{ flex: 1 }}>
          {select.map((m) => {
            if (m.name !== undefined && m.name !== null) {
              return (
                <View style={styles.cartItem} key={Math.random() * 500}>
                 <View> <Text
                    style={{
                      fontSize: 15,
                      color: '#220284d0',
                      fontWeight: 'bold',
                      paddingRight: 20
                    }}>{m.name} </Text> <Text style={{
                      fontSize: 15,
                      color: 'black',
                      textAlign:'center',
                      
                    }}>{`$${m.price}`}</Text>
                  </View>
                  <Pressable
                    onPress={() => {
                      dispatch(decreaseQty(m.name));
                    }}>
                    <Text style={styles.button}>-</Text>
                  </Pressable>

                  <Text style={styles.itm}>
                    {select[findByName(m.name)].qty}
                  </Text>

                  <Pressable
                    onPress={() => {
                      dispatch(increaseQty(m.name));
                    }}>
                    <Text style={styles.button}>+</Text>
                  </Pressable>

                  <Pressable
                    onPress={() => {
                      dispatch(removeItem(m.name));
                    }}>
                    <Text
                      style={{
                        fontSize: 40,
                        color: '#930202d8',
                        marginRight: 3,
                        paddingLeft: 25,
                      }}>
                      &#x1F5D1;
                    </Text>
                  </Pressable>
                </View>
              );
            }
          })}
        </View>
        {ttl !== 0 && (
          <>
            <Text style={{ fontSize: 18, padding: 10}}>
              Number of items: {select.length - 1 + select[0].num}
            </Text>
            <Text style={{ fontSize: 18, padding: 10, color:'rgb(2, 81, 68)'}}>Total: ${ttl.toFixed(2)}</Text>

            <View>
            {!(isEnabled) &&  (<Text style={{padding:5, fontWeight:'bold'}}>Pay Later</Text>)}
            {(isEnabled) &&  (<Text style={{padding:5, fontWeight:'bold'}}>Pay Now</Text>)}
            </View>

            <Switch
              trackColor={{false: '#767577', true: 'rgb(202, 212, 10)'}}
              thumbColor={isEnabled ? '#000000' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {setIsEnabled(!isEnabled)}}
              value={isEnabled} />

              {
              (isEnabled) &&  (
              <View style={styles.input}>
              <TextInput placeholder="Card number"
                style={styles.input_a} textContentType="creditCardNumber" 
                maxLength={16}
                keyboardType="numeric"
                value={passw}
                onChangeText={text => {   
                  const regex = /^[0-9]*$/;
                if (regex.test(text)) {
                      setPassw(text)
                    }
                    
                  
                  }}/>

              <TextInput placeholder="Expiration"
                style={styles.input_b}
                maxLength={4}
                keyboardType="numeric"
                value={exp}
                onChangeText={text =>{
                  const regex = /^[0-9]*$/;
                  if (regex.test(text)) {
                    setExp(text)
                    }   
                  }}
                
                />
                
              <TextInput placeholder="CVC"
                style={styles.input_c}  
                maxLength={3}
                keyboardType="numeric"
                value={cvc}
                onChangeText={text =>{ 
                  const regex = /^[0-9]*$/;
                  if (regex.test(text)) {
                    setCvc(text)
                    }    
                    
                }} secureTextEntry={true}/>
                </View>
                )
                }

            <Pressable onPress={placeOrder} style={styles.submit}>
              <Text>Place Order</Text>
            </Pressable>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 'auto',
    marginBottom:5,
    marginTop:10,
    
  },
  input_a: {
    height: 40,   
    marginBottom:5,
    marginTop:10,
    borderWidth: 2,
    padding: 10,
    width:250, 
    
  },
  input_b: {
    height: 40,
    marginBottom:5,
    marginTop:10,
    borderWidth: 2,
    padding: 10,
    width:150, 
    
  },
  input_c: {
    height: 40,
    marginBottom:5,
    marginTop:10,
    borderWidth: 2,
    padding: 10,
    width:100, 
    
  },

  cart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 85,
    marginRight: 85,
  },

  cartItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100,
    marginRight: 100,
    marginTop: 50,
  },
  submit: {
    height: 40,
    margin: 'auto',
    backgroundColor: 'rgb(223, 222, 223)',
    border: '1px solid #03196fe6',
    marginTop: 15,
    borderWidth: 3,
    padding: 1,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  button: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    border: '1px solid #03196fe6',
    borderRadius: 30,
    color: '#03196fe6',
  },

  itm: {
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 20
  },
});

export default CartScreen;
