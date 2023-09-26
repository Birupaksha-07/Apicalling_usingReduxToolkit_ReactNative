import { View, Text, StyleSheet, Button, ScrollView, FlatList, Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slice/productSlice';

const AppNav = () => {

    const dispatch = useDispatch();
    const response = useSelector((state) => state);
    const isLoading = response.product.isLoader;
    const products = response.product.data;
    // console.log("Products Are -->", products);


    return (
        <View style={{ flex: 1, }}>
            <View style={{ flex:1,justifyContent: 'center', alignItems: 'center',marginTop:50 }}>
                <Text style={{fontSize: 20, marginBottom: 10 }}>Calling Api....</Text>
                <Button title='Call Api' onPress={() => dispatch(fetchProducts())} />
            </View>

            <View style={{height: 800, marginTop: 20, padding: 20 }}>
                {isLoading ? <Text style={{ fontSize: 20 , textAlign:'center', marginBottom:20}}>Loading...</Text> : ""}

                <ScrollView>
                    {
                        products == null ? "" :
                            products.map((item) => {
                                return (
                                    <View key={item.id} style={styles.productBox}>
                                        <Text style={styles.productTextId}>{item.id}</Text>
                                        <Text style={styles.productText}>{item.title.substring(0,50)+"..."}</Text>
                                        <Text style={styles.productText}>{item.price}</Text>
                                        <Text style={styles.productText}> {item.description.substring(0,100)+"..."}</Text>
                                    </View>
                                )
                            })
                    }
                </ScrollView>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
productBox:{
    height:180,
    backgroundColor:'#f0f0f0',
    borderRadius:12,
    padding:12,
    marginBottom:12,
},
productTextId:{
    backgroundColor:'lightblue',
    width:80,
    textAlign:'center',
    borderRadius:7,
    fontSize:20,
    fontWeight:'bold'
},
productText:{
    marginTop:5,
    backgroundColor:'#fff',
    borderRadius:8,
    padding:5,
    elevation:8,
}
});

export default AppNav;

