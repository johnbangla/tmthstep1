import React, { useState, useEffect } from "react";
import { Linking, StyleSheet, Text, View } from "react-native";

//const supportedURL = "https://www.youtube.com/channel/UC-uuXhEEEeeYF3OdnVCVIbQ";
const useMount = func => useEffect(() => func(), []);

const useInitialURL = (urll) => {
  var converttostring = urll.toString() //converying the url into string
  var  supportedURL = urll
  const [url, setUrl] = useState(null);
  const [processing, setProcessing] = useState(true);

  useMount(() => {
    const getUrlAsync = async () => {
      // Get the deep link used to open the app
      const initialUrl = await Linking.getInitialURL();

      // The setTimeout is just for testing purpose
      setTimeout(() => {
          
       setUrl(supportedURL);
       setProcessing(false);
       Linking.openURL(supportedURL);          //opening the url
      }, 1000);
    };

    getUrlAsync();
  });

  return { url, processing };
};

const DynamicurlScreen = ({route}) => {
    const durl = route.params;
    
  const { url: initialUrl, processing } = useInitialURL(durl);  //durl is a parameter

  return (
    <View style={styles.container}>
      <Text>
        {processing
          ? `Processing the initial url from a deep link`
          : `The deep link is: ${initialUrl || "None"}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default DynamicurlScreen;