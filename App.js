import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}









// //This is an example code to understand HTTP Requests// 
// import React, { Component } from 'react';
// //import react in our code. 

// import { StyleSheet, View, Button, Alert} from 'react-native';
// //import all the components we are going to use. 

// export default class App extends Component {

//   getDataUsingGet(){
//     //GET request 
//     fetch('http://johnreactnative.pythonanywhere.com/api/listings/', {
//         method: 'GET'
//         //Request Type 
//     })
//     .then((response) => response.json())
//     //If response is in json then in success
//     .then((responseJson) => {
//         //Success 
//         alert(JSON.stringify(responseJson));
//         console.log(responseJson);
//     })
//     //If response is not in json then in error
//     .catch((error) => {
//         //Error 
//         alert(JSON.stringify(error));
//         console.error(error);
//     });
//   }

//   getDataUsingPost(){
//     //POST json 
//     var dataToSend = {username: 'pol', password: '8England_'};
//     //making data to send on server
//     var formBody = [];
//     for (var key in dataToSend) {
//       var encodedKey = encodeURIComponent(key);
//       var encodedValue = encodeURIComponent(dataToSend[key]);
//       formBody.push(encodedKey + "=" + encodedValue);
//     }
//     formBody = formBody.join("&");
//     //POST request 
//     fetch('http://johnreactnative.pythonanywhere.com/auth/', {
//       method: "POST",//Request Type 
//       body: formBody,//post body 
//       headers: {//Header Defination 
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//       },
//     })
//     .then((response) => response.json())
//     //If response is in json then in success
//     .then((responseJson) => {
//         alert(JSON.stringify(responseJson));
//         console.log(responseJson);
//     })
//     //If response is not in json then in error
//     .catch((error) => {
//       alert(JSON.stringify(error));
//       console.error(error);
//     });
//   }
//   render() {
//     return (
//       <View style={styles.MainContainer}>
//         {/*Running GET Request*/}
//         <Button title='Get Data Using GET' onPress={this.getDataUsingGet}/>
//         {/*Running POST Request*/}
//         <Button title='Get Data Using POST' onPress={this.getDataUsingPost}/>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   MainContainer :{
//     justifyContent: 'center',
//     flex:1,
//     margin: 10
//   }
// });




