import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Header, Body, Title} from "native-base";
import Input from "../components/Input";
import Message from "../components/Message";
import moment from "moment";
import {map} from "lodash";
import firebase from "../utils/firebase";
import "firebase/database";

export default function Chat(props) {
    const {userName} = props;
    const[messages, setMessages] = useState([]);
    const chatScrollRef = useRef();
    
    useRef(() =>
        chatScrollRef.current.scrollto({y: 1000000000})
    ,[messages])

    useEffect(() => {
        const chat = firebase.database().ref("general");
        chat.on("value", (snapshot) =>{
            console.log(snapshot.val());
            setMessages(snapshot.val());
        })
    }, [])



    const sendMessage = (message) =>{
        const time = moment().utcOffset("-06:00").format("hh:mm a");
        firebase.database().ref("general").push({userName, text:message, time});
    }

    return (
        <>
        <Header style={styles.header}>
            <Body>
                <Title style={styles.title}>                    Chat Spartan</Title>
            </Body>
        </Header>
            <View style={styles.content}>
                <ScrollView ref={chatScrollRef}>
                   {map (messages, (message, index) => (
                    <Message key={index} message={message} name={userName}/>
                   ))}
                </ScrollView>
                <Input sendMessage={sendMessage}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        justifyContent: "space-between",
    },

    header:{
        backgroundColor: "#141415",
    },
})
