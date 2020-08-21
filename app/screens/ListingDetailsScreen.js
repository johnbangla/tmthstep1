import React from "react";
import { View, StyleSheet,FlatList } from "react-native";
import { Image } from "react-native-expo-image-cache";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import InputScrollView from 'react-native-input-scroll-view';
import Button from "../components/Button";
import routes from "../navigation/routes";

function ListingDetailsScreen({ route,navigation }) {
  const listing = route.params;

  const baseimageurl = "http://johnreactnative.pythonanywhere.com"
  const imageUrl = baseimageurl + listing.images[0].aimage
//alert(imageUrl) 
  const thumbnaiPhoto = baseimageurl +  listing.images[0].bimage



const userid = 'Code ' +  listing.userId
//"location":{"latitude":37.78825,"longitude
 const info = listing.locations[0].latitude + '    ' + listing.locations[0].longitude
//const paymentinfo = listing.payments[0].payment1
  return (
    <Screen>
<InputScrollView>
    <View>
      <Image
        style={styles.image}
        // preview={{ uri: listing.images[0].thumbnailUrl }}
        preview={{ uri:thumbnaiPhoto }}  //edited path
        tint="light"
       // uri={listing.images[0].url}
          uri={imageUrl}
      />
        <Button
          title="Donate me"
          color="secondary"
          onPress={() =>navigation.navigate(routes.PAYMENT,listing)}
        />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        {/* <Text style={styles.price}>priority(1-10):{listing.price}</Text> */}
        <View style={styles.userContainer}>
          <ListItem
            image={{uri:thumbnaiPhoto}}
            // title= {info}
            subTitle={userid}
            
          />
        </View>
      </View>
    </View>
  
 
    </InputScrollView>
    </Screen>
 
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
    fontSize: 18,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 18,
  },
});

export default ListingDetailsScreen;
