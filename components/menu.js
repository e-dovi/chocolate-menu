import Item from './item.js';
import { Pressable, Button, StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList } from 'react-native';

const img = {
    sundae: require('../images/sundae.jpg'),
    cookies: require('../images/cookies.jpg'),
    bar: require('../images/bar.jpg'),
    cake: require('../images/cake.jpg'),
    mocha: require('../images/mocha.jpg'),
    mousse: require('../images/mousse.jpg'),
    shake: require('../images/shake.jpg')
  }

const DATA = [
  {
    id:1,
    title:'Chocolate Cookies',
    img: img.cookies,
    price:3.99
  },
  {
    id:2,
    title: 'Chocolate Bars  ',
    price:4.99,
    img: img.bar,
  },
  {
    id:3,
    title:'Chocolate Sundae',
    img: img.sundae,
    price:9.99
  },
  {
    id:4,
    title:'Chocolate Mousse',
    img: img.mousse,
    price:4.99
  },
  {
    id:5,
    title:'Chocolate Cakes',
    img: img.cake,
    price:6.99
  },
  {
    id:6,
    title:'Chocolate Shake',
    img: img.shake,
    price:8.99
  },
  {
    id:7,
    title:'Chocolate Mocha',
    img: img.mocha,
    price:7.99
  }

]

function MenuScreen() {
  return (
  
<SafeAreaView style={styles.menu}>
    <FlatList
    
        data={DATA}
        renderItem={({item}) => <Item name={item.title} pic={item.img} desc='Product Description...' price={item.price} />}
        keyExtractor={item => item.id}
      />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({


  menu:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding:20,
    paddingLeft:28
    
  },
 
});


export default MenuScreen