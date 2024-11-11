import React, { useState, useEffect ,useRef} from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { Video } from 'expo-av';
import Arrow from "../assets/icons/arrow-left-2.svg";
import Close from "../assets/icons/close-circle.svg";
import { useNavigation } from "@react-navigation/native";

export default function VideoDetails({route}) {
  let {videoList,categoryName} = route.params
 
  const navigation = useNavigation();
  const [videos, setVideos] = useState(videoList);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const video= useRef([])

    const skip = async (index)=>{
      if (video.current[index]){
        await video.current[index].setPositionAsync(10000)
      }
     }

  const handleVideoLoad = (videoData, videoId) => {
    const { durationMillis } = videoData;
    const durationInSeconds = Math.round(durationMillis / 1000);

    // Update the specific video duration in the array
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === videoId ? { ...video, duration: durationInSeconds } : video
      )
    );
  };

  const formatDuration = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    if (minutes >= 60){
      minutes = minutes % 60;
    }  
    let remainingSeconds = seconds % 60;
    return ((hours >= 1 ? (hours+":") :"")+(minutes.toString().padStart(2, '0')+":")+(remainingSeconds.toString().padStart(2, '0')));
  };

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
        <Text className="text-[#457B9D] mb-[10px] text-[25px] font-Rabiat_Muhammad">{categoryName}</Text>
        {selectedVideo && (
          <View>
            <Video
              source={selectedVideo.uri}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay
              isLooping
              useNativeControls
              style={{
                width: '100%',
                height: 250,
                backgroundColor: "#457B9D",
                borderRadius: 8,
                marginBottom: 5,
              }}
            />
            <Text numberOfLines={2} className="mb-[5px] font-Rabiat_Muhammad text-[16px] text-[#184a68]">
              {selectedVideo.titleHsa}
            </Text>
            <View className="mb-[20px] border-b border-gray-200" />
            <TouchableOpacity
              onPress={() => setSelectedVideo(null)}
              className="items-center absolute py-[5px] px-[10px] top-[5px] right-[5px] flex-row bg-[#ffffffa8] rounded-full overflow-hidden"
            >
              <Close width={20} height={20} fill="#fff" />
              <Text className="ml-[10px] font-poppins_regular text-[10px] text-[#184a68]">rufe bidiyo</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedVideo(item)}
            className="flex-row items-center bg-gray-200 rounded-[8px] p-[10px] mb-[10px]"
          >
            <View className="h-[80px] w-[80px] rounded-[8px] overflow-hidden items-center justify-center">
              <Video
                ref={(ref)=>(video.current[item.id] = ref)}
                source={item.uri}
                rate={1.0}
                volume={1.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay={false}
                onLoad={(videoData) => {skip(item.id) , handleVideoLoad(videoData, item.id)}}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
            </View>
            <View className="ml-[10px] self-start w-[72%]">
              <Text className="font-Rabiat_Muhammad text-[14px] text-[#184a68]">{item.titleHsa}</Text>
              {item.duration !== null && (
                <Text className="text-gray-500 text-xs font-Rabiat_Muhammad mt-[10px]">
                 {formatDuration(item.duration)}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
