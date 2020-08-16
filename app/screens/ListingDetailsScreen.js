import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  const baseimageurl = "http://johnreactnative.pythonanywhere.com"
  const imageUrl = baseimageurl + listing.images[0].aimage
//alert(imageUrl) 
  const thumbnaiPhoto = baseimageurl +  listing.images[0].bimage



const userid = 'Code ' +  listing.userId
//"location":{"latitude":37.78825,"longitude
 const info = listing.locations[0].latitude + '    ' + listing.locations[0].longitude

  return (
    <View>
      <Image
        style={styles.image}
        // preview={{ uri: listing.images[0].thumbnailUrl }}
        preview={{ uri:thumbnaiPhoto }}  //edited path
        tint="light"
       // uri={listing.images[0].url}
          uri={imageUrl}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Name:{listing.title}</Text>
        <Text style={styles.price}>Age:{listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={{uri:thumbnaiPhoto}}
            title= {info}
            subTitle={userid}
          />
        </View>
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

export default ListingDetailsScreen;
