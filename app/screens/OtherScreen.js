import React, { useState, useEffect } from "react";
import { Linking, StyleSheet, Text, View,FlatList } from "react-native";
import Card from "../components/Card";
import colors from "../config/colors";
//this for fething url info 
import listingsApi from "../api/listings";  //1
import useApi from "../hooks/useApi";  
import routes from '../navigation/routes';
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import Button from "../components/Button";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

function OtherScreen({ navigation }) {
  
  const getListingsApi = useApi(listingsApi.getListings);   //3

  useEffect(() => {                             //4
    getListingsApi.request();
  }, []);

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the Dynamic URL.</AppText>
            <Button title="Retry" onPress={getListingsApi.request} />
          </>
        )}
        <Text style={styles.headline}>Click Any link to discover something new</Text>
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <ListItem style={styles.card}
              title={item.others[0].other1}
           
              
            
              
              onPress={() => navigation.navigate(routes.DURL, item.others[0].other1)}
             

         
            />
       
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.white,
  },

  headline :{
    color:colors.primary,
    
    
   
    alignContent:'center',
    fontSize:15,
    fontWeight: 'bold'
  

  }
});

export default OtherScreen;
