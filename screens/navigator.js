import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";

//import db from "../config";
//import firebase from "firebase";

//import { RFValue } from "react-native-responsive-fontsize";

export default class Navigator extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity  
                style={styles.button}
                onPress={()=>{this.props.navigation.navigate("Application")}}>
                    <Text> Doctor </Text>
                </TouchableOpacity>

                <TouchableOpacity  
                style={styles.button}
                    onPress={()=>{this.props.navigation.navigate("DocInfo")}}>
                    <Text> User </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      justifyContent: "center",
    },

    button: {
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#ffff",
        shadowColor: "#000",
        marginBottom:30,
        marginTop: 10,
        marginLeft:45,
        shadowOffset: {
          width: 0,
          height: 8
        },
    }
}
)