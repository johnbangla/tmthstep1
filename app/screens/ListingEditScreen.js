import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import InputScrollView from 'react-native-input-scroll-view';

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  // price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Divorced Woman",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Divorced Sick",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Old & Sick",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Jobless",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Food Request",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Orphan",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Reverted to Islam",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Change Life From Begging ",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Others",
    value: 9,
  },
];

function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  //   //r and rd
  // const  handleSubmit =({ title,images,price,category  })=> {
  //   //POST json
  //   var dataToSend = {title:title,aimage:images};
  //   //making data to send on server
  //   var formBody = [];
  //   for (var key in dataToSend) {
  //     var encodedKey = encodeURIComponent(key);
  //     var encodedValue = encodeURIComponent(dataToSend[key]);
  //     formBody.push(encodedKey + "=" + encodedValue);
  //   }
  //   formBody = formBody.join("&");
  //   //POST request
  //   fetch('http://johnreactnative.pythonanywhere.com/api/add-plz/', {
  //     method: "POST",//Request Type
  //     body: formBody,//post body
  //     // Accept: 'application/json',
  //    // 'Content-Type': 'multipart/form-data;'
  //     headers: {//Header Defination

  //       // 'Content-Type': 'multipart/form-data;'
  //      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  //     },
  //   })
  //   .then((response) => response.json())
  //   //If response is in json then in success
  //   .then((responseJson) => {

  //   const bresult = JSON.stringify(responseJson)
  //   alert(result)

  //    alert("Congratulation" )

  //    //if (!result) return setLoginFailed(true);

  //   //   setLoginFailed(true);
  //   //   auth.logIn(result);    //sending token to  auth login method

  //   })
  //   //If response is not in json then in error
  //   .catch((error) => {
  //     // alert(JSON.stringify(error));
  //     alert('not working')
  //     //console.error(error);
  //   });
  // }

  // //r and d ok

  const handleSubmit = async (listing, { resetForm }) => {
   //  setProgress(0);
    // setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      // (progress) => setProgress(progress)
    );

    if (result) {
     // setUploadVisible(false);
      return alert("Could not save the listing");
    }

    resetForm();
    alert(
      "Successfully uploaded,we will review and post soon@truemantruehelp admin"
    );
  };

  return (
    <InputScrollView>
   
    <Screen style={styles.container}>
      {/* <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      /> */}
      <Form
        initialValues={{
          title: "",
          price: "0",
          description: "",
          category: null,
          images: [],
       
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />

        <FormField maxLength={255} name="title" placeholder="Title                                                    " />

         
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={6}
          placeholder="Story                                                                    "/>
       

        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
       
     

{/* 
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="importance value(1-10)               "
          width="50%"
        /> */}
         <SubmitButton title="Submit Story" />
      </Form>
    </Screen>
    </InputScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
