import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Product = ({item}) => (
  <View style={styles.productItem} key={item.id}>
    <Text style={styles.item}>{item.title}</Text>
    <Text style={styles.item}>{item.price}</Text>
  </View>
);

function Products() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${searchText}`)
      .then(res => res.json())
      .then(result => {
        console.log('RESULT', result);
        setProducts(
          result.products.map(product => ({
            id: product.id,
            name: product.title,
            price: product.price,
          })),
        );
      })
      .catch(err => console.log(error));
  }, [searchText]);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products List</Text>

      <TextInput
        style={styles.input}
        placeholder="Search product by name"
        onChangeText={setSearchText}
      />
      <View style={styles.productsContainer}>
        <FlatList data={products} renderItem={Product} />
      </View>
    </View>
  );
}

export default Products;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    gap: 10,
  },
  heading: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888888',
    padding: 5,
  },

  productsContainer: {
    gap: 10,
  },
  productItem: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#777777',
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    elevation: 2,
  },
});
