import React, { useState ,useContext} from "react";
import { StyleSheet, Image ,Alert} from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(4).label("username"), //change
  password: Yup.string().required().min(4).label("Password"),
});








function LoginScreen(props) {






  const auth = useAuth();

  const [loginFailed, setLoginFailed] = useState(false);
//r and rd
const  handleSubmit =({ username, password })=> {
  //POST json 
  var dataToSend = {username: username, password: password};
  //making data to send on server
  var formBody = [];
  for (var key in dataToSend) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  //POST request 
  fetch('http://johnreactnative.pythonanywhere.com/auth/', {
    method: "POST",//Request Type 
    body: formBody,//post body 
    headers: {//Header Defination 
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
  })
  .then((response) => response.json())
  //If response is in json then in success
  .then((responseJson) => {
      
    
  const bresult = JSON.stringify(responseJson)
  //alert(result)
  var myJsonObj = JSON.parse(bresult);
  result = myJsonObj.token
  result = result.toString()
  //alert(result)
 


  if (!result) return setLoginFailed(true);
    setLoginFailed(true);
    auth.logIn(result);    //sending token to  auth login method
 
  })
  //If response is not in json then in error
  .catch((error) => {
    // alert(JSON.stringify(error));
    alert('Invalid User/Password')
    //console.error(error);
  });
}


//r and d ok



  // this method is for login activities
  const handleSubmit1 = async ({ username, password }) => {
   
   const result = await authApi.mylogin(username, password)
   const convertedresult  =  JSON.stringify(result);  //convert json to string
    
    alert(result)

   if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(result);    //sending token to  auth login method

    
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Form
     initialValues={{ username: "guest", password: "8England_" }} 
      // initialValues={{ username: "john@domain.com", password: "12345" }} //change
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid username and/or password."
          visible={loginFailed}
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          // icon="username"
          // keyboardType="username-address"
          name="username" //change
          placeholder="username"
          // textContentType="usernameAddress"  //change
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login Me" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;

