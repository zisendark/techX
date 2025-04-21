import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import tw from "twrnc";
import { Video, ResizeMode } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { useState, useRef } from "react";
import Button from "@/components/ButtonPrimary";

const moduleItems = [
  {
    id: 1,
    image: require("@/assets/images/imageTechX1.png"),
    title: "Pengenalan Frontend Development",
    duration: "30 minutes",
  },
  {
    id: 2,
    image: require("@/assets/images/imageTechX1.png"),
    title: "HTML dan CSS Dasar",
    duration: "1 hour 30 minutes",
  },
  {
    id: 3,
    image: require("@/assets/images/imageTechX1.png"),
    title: "JavaScript Fundamental",
    duration: "5 minutes",
  },
  {
    id: 4,
    image: require("@/assets/images/imageTechX1.png"),
    title: "React JS Basic",
    duration: "1 hour 4 minutes",
  },
];

export default function Detail() {
  const router = useRouter();
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <View style={tw`flex-row items-center justify-center mt-4 px-4 mb-4`}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={tw`absolute left-4`}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <Text style={tw`text-xl font-bold text-white`}>Detail</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`mt-4 relative`}>
          {isLoading && (
            <View
              style={tw`absolute inset-0 bg-gray-300 items-center justify-center`}
            >
              <AntDesign name="loading1" size={30} color="white" />
            </View>
          )}
          <Video
            ref={video}
            style={tw`w-full h-64`}
            source={require("@/assets/images/videoplayback.mp4")}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onLoadStart={() => setIsLoading(true)}
            onLoad={() => setIsLoading(false)}
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            usePoster={true}
            isMuted={true}
          />
        </View>

        <View style={tw`mt-4 px-4`}>
          <Text style={tw`text-blue-500 font-bold text-2xl`}>
            Mahir Menjadi Frontend Dev
          </Text>
          <Text style={tw`text-white mt-2 text-base`}>
            Bergabung dengan kelas mahir menjadi frontend dev, maka kamu sudah
            mendapatkan fundamental menjadi seorang programmer, dan pada kelas
            ini kamu akan mendalami itu.
          </Text>
          <View style={tw`flex-row items-center gap-6 mt-3`}>
            <View style={tw`flex-row items-center`}>
              <AntDesign name="star" size={20} color="#FFD700" />
              <Text style={tw`text-gray-400 ml-1`}>4.5 (825)</Text>
            </View>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-gray-400`}>4 Module</Text>
            </View>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-gray-400`}>Programmer</Text>
            </View>
          </View>

          <View style={tw`mt-6 bg-gray-300 rounded-xl p-4`}>
            {moduleItems.map((item) => (
              <View key={item.id} style={tw`flex-row items-center py-3 mb-3`}>
                <Image source={item.image} style={tw`w-16 h-16 rounded-lg`} />
                <View style={tw`ml-4 flex-1`}>
                  <Text style={tw`text-black font-medium text-base`}>
                    {item.title}
                  </Text>
                  <Text style={tw`text-gray-500 mt-1`}>{item.duration}</Text>
                </View>
              </View>
            ))}
          </View>
          <View style={tw`mt-6`}>
          <Button text="Ikuti Kelas" variant="filled" rute="/home" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}