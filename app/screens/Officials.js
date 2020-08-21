import React,{ useCallback} from "react";
import { StyleSheet, View, FlatList,Linking } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";

import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import Screen from "../components/Screen";


const menuItems = [
  {
    title: "Official Website",
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

function Officials({ navigation }) {
  
 

  return (
  
    <Screen style={styles.screen}>
     
     
      <View >
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
    backgroundColor: colors.white,
  },
  container: {
    
    marginBottom:0,
    marginTop:0,
  },
});

export default Officials;
