import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

import Button from "../components/Button";
import routes from "../navigation/routes";

function MessageDetailsScreen({ route,navigation }) {
  const listing = route.params;

  // const baseimageurl = "http://johnreactnative.pythonanywhere.com"
  const mesagefull = listing.description
//alert(imageUrl) 
  

//"location":{"latitude":37.78825,"longitude
// const info = listing.locations[0].latitude + '    ' + listing.locations[0].longitude
//const paymentinfo = listing.payments[0].payment1
  return (
    <View>
     
        {/* <Button
          title="Donate me"
          color="secondary"
          onPress={() =>navigation.navigate(routes.PAYMENT,listing)}
        /> */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{mesagefull}</Text>
       
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default MessageDetailsScreen;
