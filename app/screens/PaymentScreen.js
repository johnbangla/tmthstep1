import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text,FlatList } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";


function Paymentf({ route }) {







  const listing = route.params;
 

  return (
    
    <ImageBackground
      // blurRadius={10}
      style={styles.background}
      source={require("../assets/donation.jpg")}
    >
    
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
        
      { listing.payments[0].payment1 ?  <Text style={styles.title}>{listing.payments[0].payment1   }</Text>  : <Text>payment not set</Text> }

        
      { listing.payments[0].payment2 ?  <Text style={styles.title}>{listing.payments[0].payment2   }</Text>  : <Text>payment not set</Text> }
    
      { listing.payments[0].payment3 ?  <Text style={styles.title}>{listing.payments[0].payment3   }</Text>  : <Text>payment not set</Text> }
      { listing.payments[0].payment4 ?  <Text style={styles.title}>{listing.payments[0].payment4   }</Text>  : <Text>payment not set</Text> }
      { listing.payments[0].payment5 ?  <Text style={styles.title}>{listing.payments[0].payment5   }</Text>  : <Text>payment not set</Text> }
      { listing.payments[0].payment6 ?  <Text style={styles.title}>{listing.payments[0].payment6   }</Text>  : <Text>payment not set</Text> }
      { listing.payments[0].payment7 ?  <Text style={styles.title}>{listing.payments[0].payment7   }</Text>  : <Text>payment not set</Text> }
      { listing.payments[0].payment8 ?  <Text style={styles.title}>{listing.payments[0].payment8   }</Text>  : <Text>payment not set</Text> }
       
      <Text >Please mention  </Text>
      <Text style={styles.headline}> Project code :{listing.userId} </Text>
      <Text >during payment as reference  </Text>  
      <Text >May Allah accept your donation  </Text>                     
      </View>
   
   
    </ImageBackground>
  
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  headline: {
    fontSize: 22,
    fontWeight: "500",
    color:"red",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    
  
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default Paymentf;
