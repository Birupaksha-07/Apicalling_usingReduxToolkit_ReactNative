import { View, Text, StyleSheet, Button, ScrollView, FlatList , Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slice/productSlice';

const AppNav = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.data)
    console.log("Products Are -->", products);

    const data1 = [{ name: 'biru' }, { name: 'ankan' }, { name: 'soheli' }]


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Calling Api....</Text>
            <Button title='Call Api' onPress={() => dispatch(fetchProducts())} />
            <ScrollView>

                {products.map((item) => {
                    return(
                        <View key={item.id}>
                        <Text>{item.title}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default AppNav;