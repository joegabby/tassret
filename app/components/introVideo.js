import React, { useState } from 'react';
import { Video } from 'expo-av';
import Close from "../assets/icons/close-circle.svg";

import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Pressable
} from 'react-native';
import CloseCircle from "../assets/icons/close-circle.svg";

export default function Intro({visible,onclose}){
    return(
        <Modal transparent={true} visible={visible} animationType="fade" onRequestClose={onclose}>
            <Pressable className="items-center justify-center bg-[#000000dd] h-screen">
                <Pressable className="justify-center items-center w-screen p-[20px] overflow-hidden">                  
                <Video
                    source={require("../assets/videos/general_intro.mp4")}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="contain"
                    shouldPlay
                    isLooping
                    style={{
                        width: '100%',
                        height: '80%',
                        backgroundColor: "#457B9D",
                        borderRadius: 20,
                        marginBottom: 5,
                    }}
                />                 
                </Pressable>
                <TouchableOpacity onPress={onclose} className="items-center justify-center flex-row bg-white py-[10px] px-5 overflow-hidden rounded-full">
                    <Close width={20} height={20} fill="#184a68" />
                    <Text className="ml-[10px] font-poppins_semiBold text-[10px] text-[#184a68]">rufe bidiyo</Text>
                </TouchableOpacity>             
            </Pressable>
        </Modal>
    )
}