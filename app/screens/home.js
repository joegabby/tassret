import { useEffect,useState } from "react";
import { Text,View,TouchableOpacity,SafeAreaView, ImageBackground, Image,StatusBar } from "react-native";
import Video from "../assets/icons/video-play.svg"
import { useNavigation } from "@react-navigation/native";
import upperExtVids from "../components/upperExtVids";
import lowerExtVids from "../components/lowerExtVids";
import trunkVids from "../components/trunkVids";
import Intro from "../components/introVideo";

export default function Home(){
    const [modalVisible,setModalVisible] = useState(false);
    useEffect(()=>{
        setModalVisible(true);
    },[])

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    const navigation = useNavigation();

    return(
        <SafeAreaView className="bg-[#fcfeff] flex-1 px-5">
            <Intro visible={modalVisible} onclose={closeModal}/>  
            <StatusBar barStyle="dark-content" translucent/>         
            <ImageBackground source={require("../assets/images/bg.jpg")} className="mb-[30px] -mx-5 p-5 justify-between flex-row" imageStyle={{opacity:0.4}}>
                <View className="w-[113px] h-[136px] bg-[#A8DADC] p-[10px] rounded-[20px]">
                    <Image source={require("../assets/images/buk.png")} className="h-full w-full"/>                  
                </View>
                <View className="justify-around items-center">
                    <Text className="font-poppins_semiBold text-[30px] text-[#457B9D]">Tassret</Text>
                    <TouchableOpacity onPress={openModal} className="flex-row py-[10px] px-[20px] rounded-full bg-[#457B9D]">
                        <Video height={17} width={17} fill="#fff"/>
                        <Text className="text-white ml-[10px] font-poppins_regular text-xs">kalli bidiyon gabatarwa</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View className="justify-center items-center mb-[20px]">
                <Text className="text-[#457B9D] font-poppins_semiBold text-[20px]">zaɓi nau'in motsa jiki</Text>
                <Text className="text-[#457B9D] font-poppins_semiBold text-[20px]">don farawa</Text>
            </View>
            <View className="flex-row gap-x-[8px] justify-center items-center mb-[100px]">
                <TouchableOpacity onPress={()=>navigation.navigate("Categories",{categories: upperExtVids.categories ,videos:upperExtVids.vidLists,titleHsa:"Ayyukan inganta lafiyar gavovin hannu",titleEng:"Upper Extremity Activities",descriptionEng:"These Exercises are for the upper part of the body", descriptionHsa:"Wadannan darussan na bangaren sama ne na jiki"})} className="rounded-[20px] justify-between w-[120px] h-[150px] bg-[#EDF6F9] items-center py-[10px] px-[15px]">
                    <View className="w-[60px] h-[60px] rounded-full overflow-hidden">
                        <Image source={require("../assets/images/arm.png")} className="w-full h-full"/>
                    </View>                   
                    <Text className="text-[#457B9D] text-center text-[12px] font-Rabiat_Muhammad">Ayyukan inganta lafiyar gavovin hannu</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("Categories",{categories:lowerExtVids.categories, videos:lowerExtVids.vidLists,titleHsa:"Ayyukan Inganta Lafiyar Kafafu, Tsayuwa da Daidaito",titleEng:"Activities for Lower Extremity and Balance Function",descriptionEng:"These Exercises are for the lower part of the body", descriptionHsa:"Wadannan darussan na ga ƙananan sassan jiki ne"})} className="rounded-[20px] justify-between w-[120px] h-[150px] bg-[#EDF6F9] items-center py-[10px] px-[15px]">
                    <View className="w-[60px] h-[60px] rounded-full overflow-hidden">
                        <Image source={require("../assets/images/leg.png")} className="w-full h-full"/>
                    </View>                   
                    <Text className="text-[#457B9D] text-center text-[12px] font-Rabiat_Muhammad">Ayyukan Inganta Lafiyar Kafafu, Tsayuwa da Daidaito</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("Categories",{categories:trunkVids.categories, videos:trunkVids.vidLists,titleHsa:"Ayyukan inganta lafiyar gangan jiki",titleEng:"Activities for Trunk Strength",descriptionEng:"These Exercises are for the trunk",descriptionHsa:"Waɗannan darussan na gangar jikin ne"})} className="rounded-[20px] justify-between w-[120px] h-[150px] bg-[#EDF6F9] items-center py-[10px] px-[15px]">
                    <View className="w-[60px] h-[60px] rounded-full overflow-hidden">
                        <Image source={require("../assets/images/trunk.png")} className="w-full h-full"/>
                    </View>                   
                    <Text className="text-[#457B9D] text-center text-[12px] font-Rabiat_Muhammad">Ayyukan inganta lafiyar gangan jiki</Text>
                </TouchableOpacity>
            </View>
            <View className="w-full border-b border-gray-200"/>
            <View className="justify-center items-center w-full my-[20px]">
                <Text className="text-[#8d969b] font-Rabiat_Muhammad text-[25px] text-center">
                    Ayyuka don kula da kai ga waxanda suke fama da shanyewar varin jiki a gidajen su
                </Text>
            </View>
            <View className="w-full border-b border-gray-200"/>
        </SafeAreaView>
    )
}