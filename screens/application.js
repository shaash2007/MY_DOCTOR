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

import db from "../config";
import firebase from "firebase";
import { Input } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";

export default class Application extends Component {
    constructor(){
        super();
        this.state = {
            emailId: "",
            firstName: "",
            lastName: "",
            contact: "",
            speciality:"",
            city:"",
            hospital:"",
            shortDescription:"",
          };
    }
    addDoctor=async()=>{
        db.collection("doctors").add({
            first_name:this.state.firstName,
            last_name:this.state.lastName,
            email_Id:this.state.emailId,
            contact:this.state.contact,
            speciality:this.state.speciality,
            city:this.state.city,
            hospital:this.state.hospital,
            shortDescription:this.state.shortDescription,
            
        })
    }
    render(){
        return(
            <View>
                <ScrollView style={{width:"100%"}}>
<KeyboardAvoidingView>
        <Input
                style={styles.formTextInput}
                containerStyle={{ marginTop: 30 }}
                multiline
                numberOfLines={8}
                label={"Name"}
                placeholder={"First Name"}
                onChangeText={(text) => {
                  this.setState({
                    firstName: text,
                  });
                }}
                value={this.state.firstName}
              />

        <Input
                style={styles.formTextInput}
                containerStyle={{ marginTop: 30 }}
                multiline
                numberOfLines={8}
                label={"Last Name"}
                placeholder={"Last Name"}
                onChangeText={(text) => {
                  this.setState({
                    lastName: text,
                  });
                }}
                value={this.state.lastName}
              />

<Input
                style={styles.formTextInput}
                containerStyle={{ marginTop: 30 }}
                multiline
                numberOfLines={8}
                label={"Email"}
                placeholder={"email"}
                onChangeText={(text) => {
                  this.setState({
                    emailId: text,
                  });
                }}
                value={this.state.emailId}
              />

<Input
                style={styles.formTextInput}
                containerStyle={{ marginTop: 30 }}
                multiline
                numberOfLines={8}
                label={"contact"}
                placeholder={"contact"}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
                value={this.state.contact}
              />


<Input
                style={styles.formTextInput}
                containerStyle={{ marginTop: 30 }}
                multiline
                numberOfLines={8}
                label={"Speciality"}
                placeholder={"Speciality"}
                onChangeText={(text) => {
                  this.setState({
                    speciality: text,
                  });
                }}
                value={this.state.speciality}
              />

<Input
                style={styles.formTextInput}
                containerStyle={{ marginTop: 30 }}
                multiline
                numberOfLines={8}
                label={"City"}
                placeholder={"City"}
                onChangeText={(text) => {
                  this.setState({
                    city: text,
                  });
                }}
                value={this.state.city}
              />
              
              <Input
                style={styles.formTextInput}
                containerStyle={{ marginTop: 30 }}
                multiline
                numberOfLines={8}
                label={"Hospital"}
                placeholder={"Hospital"}
                onChangeText={(text) => {
                  this.setState({
                    hospital: text,
                  });
                }}
                value={this.state.hospital}
              />

<Input
                style={styles.formTextInput}
                containerStyle={{ marginTop: 30 }}
                multiline
                numberOfLines={8}
                label={"short decription"}
                placeholder={"short decription"}
                onChangeText={(text) => {
                  this.setState({
                    shortDescription: text,
                  });
                }}
                value={this.state.shortDescription}
              />
              
              <TouchableOpacity 
                style={styles.button}
                onPress={()=>{this.addDoctor()}} >
                    <Text> Submit </Text>
                </TouchableOpacity>

              </KeyboardAvoidingView>
                              </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    keyBoardStyle: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    formTextInput: {
      width: "75%",
      height:35,
      borderWidth: 1,
      padding: 10,
    },
    ImageView:{
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center",
      marginTop:20
    },
    imageStyle:{
      height: 150,
      width: 150,
      alignSelf: "center",
      borderWidth: 5,
      borderRadius:10,
    },
    bookstatus:{
      flex: 0.4,
      alignItems: "center",
  
    },
    requestedbookName:{
      fontSize: 30,
      fontWeight: "500",
      padding: 10,
      fontWeight: "bold",
      alignItems:'center',
      marginLeft:60
    },
    status:{
      fontSize: 20,
      marginTop: 30,
    },
    bookStatus:{
      fontSize: 30,
      fontWeight: "bold",
      marginTop: RFValue(10),
    },
    buttonView:{
      flex: 0.2,
      justifyContent: "center",
      alignItems: "center",
    },
    buttontxt:{
      fontSize: RFValue(18),
      fontWeight: "bold",
      color: "#fff",
    },
    touchableopacity:{
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      width: "90%",
    },
    requestbuttontxt:{
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
    },
    button: {
      width: "75%",
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      borderRadius:50,
      backgroundColor: "#32867d",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
    },
  });
  