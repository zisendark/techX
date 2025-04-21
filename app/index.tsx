import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonPrimary from '@/components/ButtonPrimary'
import tw from 'twrnc'
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const navigation = useRouter();
  return (
    <SafeAreaView style={tw`h-full bg-black  p-4`}>
      <View style={tw`w-full items-center justify-center mt-30`}> 
        <Image 
          source={require('@/assets/images/TechX.png')}
          style={tw`w-80 h-80`}
          resizeMode='contain'
        />
      </View>

      <Text style={tw`text-white text-xl font-bold text-center mt--10`}>
      Belajar Technology & Dapatkan Pengalamannya 
      </Text>
      <Text style={tw`text-gray-400 text-sm text-center mt-3 px-6`}>
      Belajar di Techxperience ini kamu dapat belajar berbagai bidang teknologi seperti pemrograman, desain grafis, dan jaringan.
      </Text>

      <View style={tw`w-full items-center mt-30 mb-4 `}>
        <ButtonPrimary 
          title="Mulai Belajar Sekarang" 
          bgBtn="transparant" 
          bgText="white" 
          bgborder="white"
          rute="/(tabs)/home"
        />  
         <View style={tw`w-full items-center mb-4 `}></View>
        <ButtonPrimary 
          title="Masuk" 
          bgBtn="[#0086FF]" 
          bgText="white"
          customStyle="border border-white mt-4 "
          rute="/auth/login"
        />
        
      </View>
      <View style={tw`w-full items-center `}>
      <Text style={tw`text-white`}>#Dari 1 Baris Pertama, Sampai 1 Project Pertama</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
