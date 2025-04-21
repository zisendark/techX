import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    TextInput,
  } from "react-native";
  import React, { useState, useRef } from "react";
  import { Stack } from "expo-router";
  import tw from "twrnc";
  import { Ionicons } from "@expo/vector-icons";
  import { Video, ResizeMode } from "expo-av";
  
  const { width, height } = Dimensions.get("window");
  
  export default function ReelsScreen() {
    const [status, setStatus] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const video = useRef(null);
  
    const toggleLike = () => setIsLiked(!isLiked);
    const toggleBookmark = () => setIsBookmarked(!isBookmarked);
  
    return (
      <View style={tw`flex-1 bg-black`}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
  
        <View style={[tw`bg-black relative`, { width, height: height - 49 }]}>
          <Video
            ref={video}
            style={[tw`absolute`, { width, height: height - 49 }]}
            source={require("@/assets/images/videoplayback.mp4")}
            shouldPlay={true}
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onLoadStart={() => setIsLoading(true)}
            onLoad={() => setIsLoading(false)}
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            isMuted={true}
          />
  
          {/* Search Bar overlaying the video */}
          <View style={tw`absolute top-12 w-full px-4 `}>
            <View
              style={tw`flex-row items-center bg-black/30 border border-gray-500 backdrop-blur-sm rounded-full px-4 py-2`}
            >
              <Ionicons name="search" size={20} color="gray" />
              <TextInput
                placeholder="Search"
                placeholderTextColor="gray"
                style={tw`flex-1 ml-2 text-gray-400 text-base`}
              />
            </View>
          </View>
  
          {/* Right side buttons */}
          <View style={tw`absolute right-4 bottom-20 items-center`}>
            <TouchableOpacity style={tw`items-center mb-6`} onPress={toggleLike}>
              <Ionicons 
                name={isLiked ? "heart" : "heart-outline"} 
                size={32} 
                color={isLiked ? "#FF3B30" : "white"} 
              />
            </TouchableOpacity>
  
            <TouchableOpacity style={tw`items-center mb-6`}>
              <Ionicons name="chatbubble-outline" size={32} color="white" />
            </TouchableOpacity>
  
            <TouchableOpacity style={tw`items-center mb-6`}>
              <Ionicons name="paper-plane-outline" size={32} color="white" />
            </TouchableOpacity>
  
            <TouchableOpacity style={tw`items-center`} onPress={toggleBookmark}>
              <Ionicons 
                name={isBookmarked ? "bookmark" : "bookmark-outline"} 
                size={32} 
                color={isBookmarked ? "#007AFF" : "white"} 
              />
            </TouchableOpacity>
          </View>
  
          {/* Text content */}
          <View style={tw`absolute bottom-12 left-4`}>
            <Text style={tw`text-white font-bold text-lg mb-2`}>
              Kamu akan mendapatkan:
            </Text>
            <Text style={tw`text-gray-400`}>
              Mendapatkan sertifikat dan keuntungan lainnya
            </Text>
          </View>
        </View>
      </View>
    );
  }