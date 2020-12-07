import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import letterColors from "../utils/letterColors";

export default function Message(props) {
    const {message:{userName, text, time}, name} = props;
    const [bgColorLetter, setBgColorLetter] = useState(null);
     const thisIsMe = name === userName;

     useEffect(() => {
        const char = userName.trim()[0].toUpperCase();
        const indexLetter = char.charCodeAt()-65;
        setBgColorLetter(letterColors[indexLetter]);
     },[])

    const conditionalStyle={
        container:{
            justifyContent: thisIsMe ? "flex-end" : "flex-start"
        },
        
        viewMessage:{
            backgroundColor: thisIsMe ? "#0000fc" : "#ff0000",
        },

        message:{
            color: thisIsMe ? "#fff" : "#fff",
            textAlign: thisIsMe ? "left" : "left",
        },
     }

    return (
        <View style={[styles.container, conditionalStyle.container]}>
            <View style={[styles.letterView, {backgroundColor: `rgb(${bgColorLetter})`}]}>
                <Text style={styles.letter}>{userName.substr(0 , 1)}</Text>
            </View>
            <View style={[styles.viewMessage, conditionalStyle.viewMessage]}>
                <Text style={[styles.message, conditionalStyle.message]}>{text}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        margin: 5,
        alignItems: "center",
    },

    viewMessage:{
        borderRadius: 10,
        minHeight: 25,
        minWidth: "40%",
        maxWidth: "80%",
    },

    letter:{
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
    },

    letterView:{
        height: 35,
        width: 35,
        borderRadius: 150,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        backgroundColor: "#d3a4e2",
    },

    message:{
        padding: 1,
        paddingBottom: 15,
    },

    time:{
        fontSize: 10,
        position: "absolute",
        bottom: 5,
        paddingLeft: 90,
        color: "#fff",
    }
})
