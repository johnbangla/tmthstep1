import React,{ useCallback} from "react";
import { StyleSheet, View, FlatList,Linking } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
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
    title: "official Website",
    icon: {
      name: "web",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.URL,
    
  },
  {
    title: "Facebook",
    icon: {
      name: "facebook",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.FB,
  },
  {
    title: "Youtube",
    icon: {
      name: "youtube",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.YTB,
  },

];

function AccountScreen({ navigation }) {
  
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
      />
        {/* <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/mosh.jpg")}
        /> */}
      </View>
     
      <View style={styles.container}>
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
      </View>
    
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
