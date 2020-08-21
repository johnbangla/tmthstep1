import React, { useState,useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";

import useApi from '../hooks/useApi';
import listingsApi from '../api/listings';

// const initialMessages = [
//   {
//     id: 1,
//     title: "Mosh Hamedani",
//     description: "Hey! Is this item still available?",
//     image: require("../assets/mosh.jpg"),
//   },
//   {
//     id: 2,
//     title: "Mosh Hamedani",
//     description:
//       "I'm interested in this item. When will you be able to post it?",
//     image: require("../assets/mosh.jpg"),
//   },
// ];

function MessagesScreen({navigation}) {

  //for making messages api
  const getMessagesApi = useApi(listingsApi.gettmthmessages);

  useEffect(() => {
    getMessagesApi.request();
  }, []);


// console.log('new' + ( JSON.stringify( getMessagesApi.data)))
// console.log('old' + initialMessages)

//alert(getMessagesApi.data)
  //for making messages api

  const messages =  getMessagesApi.data;
  //const [messages, setMessages] = useState(initialMessages);//static messages old
  
  
  //const [messages, setMessages] = useState(messages); //api new
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    //setMessages(messages.filter((m) => m.id !== message.id));  //old
    messages.filter((m) => m.id !== message.id);
  };

  return (
    <Screen>
      <FlatList
         data={messages}  //static data
        //data={getMessagesApi.data}  //new api data 14.8.2020
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
       
           onPress={() => navigation.navigate(routes.MSGDTS, item)}
            // onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        // onRefresh={() => {
        //   setMessages([
        //     {
        //       id: 2,
        //       title: "T2",
        //       description: "D2",
        //      // image: require("../assets/mosh.jpg"),
        //     },
        //   ]);
        // }}
        onRefresh={ () => {
          [
            {
          id: 2,
          title: "T2",
          description: "D2",
          },
        
        ]
        }}

      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
