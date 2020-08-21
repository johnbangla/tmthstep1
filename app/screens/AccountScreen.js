import React,{ useCallback} from "react";
import { StyleSheet, View, FlatList,Linking } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import InputScrollView from 'react-native-input-scroll-view';
import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";
const supportedURL = "https://google.com";
const menuItems = [
  {
    title: "About",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen:routes.ABOUT,
  },
  
  {
    title: "Notice Board",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
  {
    title: "Official",
    icon: {
      name: "web",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.OFFICIAL
    
  },
  // {
  //   title: "Facebook",
  //   icon: {
  //     name: "facebook",
  //     backgroundColor: colors.secondary,
  //   },
  //   targetScreen: routes.FB,
  // },
  // {
  //   title: "Youtube",
  //   icon: {
  //     name: "youtube",
  //     backgroundColor: colors.secondary,
  //   },
  //   targetScreen: routes.YTB,
  // },

   {
    title:"Explore",
      icon:{
      name:"web",
      backgroundColor:colors.primary,
      },
    targetScreen:routes.OTHER,
  },

];

function AccountScreen({ navigation }) {
  
  const { user, logOut } = useAuth();

  return (
    //  <InputScrollView>
   <Screen style={styles.screen}>
   
       <View> 
      {/* <View style={styles.container}> */}
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
            

          )}
        />
 
         <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
      />
       
       
      </View>
    
    </Screen>
  
    //  </InputScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
  },
  container: {
    
    marginBottom:0,
    marginTop:0,
  },
});

export default AccountScreen;
