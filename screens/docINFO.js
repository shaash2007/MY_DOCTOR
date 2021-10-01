import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  ListItem,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
FlatList
} from "react-native";

import db from "../config";
import firebase from "firebase";

import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";

export default class DocInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: firebase.auth().currentUser.email,
            docInfo: [],
          };
        };

        doctorsList = async () => {
            const requestRef = await db.collection("doctors").get()
            requestRef.docs.map((doc) =>{
              this.setState({
                docInfo:[...this.state.docInfo,doc.data()]
              })
            })
            console.log(this.state.docInfo)}
          ;

          componentDidMount() {
            console.log("docInfo")
            this.doctorsList();
          }
        
          eyExtractor = (item, index) => index.toString();

          renderItem = ({ item, i }) => {
            return (
              <View style={{borderBottomWidth:2}}>
<Text> {item.first_name+item.last_name} </Text>
              </View>
            );
          };

        render(){
            return(
                <View>
   <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.docInfo}
              renderItem={this.renderItem}
            />
                </View>
            )
        }
    }