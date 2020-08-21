import React,{ useContext } from "react";

import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { Video,Audio } from 'expo-av';
// import Button from "../components/Button";
// import routes from "../navigation/routes";
// import AuthContext from "../auth/context";
// import authStorage from '../auth/storage';


function About({ navigation }) {
  // const { user, setUser } = useContext(AuthContext);
  
  // const logOut = () => {
  //   setUser(null);
  //   authStorage.removeToken();
  // };

  return (
    <ImageBackground
      style={customstyles.image}
      source={require("../assets/about.jpg")}
    >
      <View style={styles.logoContainer}>
        {/* {/* <Image style={styles.logo} source={require("../assets/logo-red.png")} /> */}
        <Text style={customstyles.headline}>True Man True Help</Text> 
        <Text style={customstyles.headline}>A nonprofit Organization</Text> 
        <Text style={customstyles.headline}>A framework which will not give you social status but real  peace in the name of Allah</Text> 
        <Text style={customstyles.headline}>Developed by</Text> 
        <Text style={customstyles.headline}>johnbangla@gmail.com</Text> 
      </View>
      <View style={styles.buttonsContainer}>
        {/* <Button
          title="Logout"
          onPress={logOut}
        /> */}

{/* <Video
  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="stretch"
  shouldPlay
  isLooping
  style={{ width: 300, height: 300 }}
/> */}



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

const customstyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "grey",
    fontSize: 26,
    fontWeight: "bold",

 alignItems:'center'
  },
  headline: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 15,
    width: 200,
  
     left:'50%',
     right:'-50%',
    color: "black",
    justifyContent: "center",
  },
  contact: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 0,
    width: 200,
  
    left:70
  }
});

export default About;
