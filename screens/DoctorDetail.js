import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Card, Header, Icon } from "react-native-elements";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import db from "../config.js";

export default class DoctorDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userId: firebase.auth().currentUser.email,
          userName: "",
          doctorsName: this.props.navigation.getParam("details")["first_name"],
          speciality: this.props.navigation.getParam("details")["speciality"],
          City: this.props.navigation.getParam("details")["city"],
         // doctorsDp: "#",
          Contact: this.props.navigation.getParam("details")["contact"],
        };
      }
      render(){
        return(
            <View>
          <Text
          style={{
            fontWeight: "500",
            fontSize: RFValue(25),
            textAlign: "center",
          }}
        >
          {this.state.first_name}
        </Text>
        
        <Text
          style={{
            fontWeight: "400",
            fontSize: RFValue(15),
            textAlign: "center",
            marginTop: RFValue(15),
          }}
        >
          {this.state.speciality}
        </Text>

        <Text
          style={{
            fontWeight: "400",
            fontSize: RFValue(15),
            textAlign: "center",
            marginTop: RFValue(15),
          }}
        >
          {this.state.city}
        </Text>

        <Text
          style={{
            fontWeight: "400",
            fontSize: RFValue(15),
            textAlign: "center",
            marginTop: RFValue(15),
          }}
        >
          {this.state.contact}
        </Text>
        </View>
        )
      }
      }
