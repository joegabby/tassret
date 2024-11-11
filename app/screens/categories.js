import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Video } from 'expo-av';
import Arrow from "../assets/icons/arrow-left-2.svg";
import Close from "../assets/icons/close-circle.svg";
import { useNavigation } from "@react-navigation/native";

export default function Categories({route}) {
    let {videos,titleEng,titleHsa,descriptionEng,descriptionHsa,categories} = route.params
 
    const navigation = useNavigation();

    const handleClick =(item)=>{
        const filteredVideos = videos.filter((videos)=>videos.category.includes(item.id))
        navigation.navigate("VideoDetails", {videoList:filteredVideos,categoryName:item.nameHsa})      
    }
  return (
    <SafeAreaView className="bg-[#fcfeff] flex-1 px-5">
      <View className="top-[15px] mb-[50px]">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="justify-center items-center rounded-xl p-5 border border-[#457B9D] w-[44px] h-[44px]"
        >
          <Arrow width={25} height={25} fill="#457B9D" />
        </TouchableOpacity>
      </View>
      <View className="mb-[20px]">
        <Text className="text-[#457B9D] mb-[25px] text-[25px] font-Rabiat_Muhammad">{titleHsa}</Text>
        <Text className="text-[#7b8890] text-[14px] font-Rabiat_Muhammad">{descriptionHsa}</Text>
      </View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
                onPress={()=>handleClick(item)}
            className="flex-row items-center bg-gray-200 rounded-[8px] p-[30px] mb-[10px]"
          >          
            <Text className="font-Rabiat_Muhammad text-[14px] text-[#184a68]">{item.nameHsa}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
