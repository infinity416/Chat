import React, {useState} from 'react';
import { StyleSheet,TouchableOpacity, View, plataform } from 'react-native';
import {Item, Input as InputNB, Icon} from "native-base";

export default function Input(props) {
    const {sendMessage} = props;
    const [message, setMessage] = useState("");

    const onSubmit = () =>{
        if(message.length > 0){
            sendMessage(message);
            setMessage("");
        }
    }


    return (
        <View style={styles.container}>
            <Item style={styles.intemInput}>
                <InputNB 
                    placeholder="Mensaje..." 
                    placeholderTextColor= "gray"
                    style={styles.input}
                    value={message}
                    onChange={(e) => setMessage(e.nativeEvent.text)}
                />
           

            <TouchableOpacity onPress={onSubmit}>
                <Icon name="send" type="FontAwesome" style={{color:"#fff"}}/>
            </TouchableOpacity>
            </Item>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#141415",
        paddingBottom: 0,
        paddingHorizontal: 20,
    },

    intemInput:{
        borderColor: "#141415",
        
    },

    input:{
        color:"#fff",
    }
})
