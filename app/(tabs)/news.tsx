import { Image, StyleSheet, ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import React from 'react';

const newsItems = [
  {
    title: 'India sebar developernya keseluruh dunia, dengan bayaran murah',
    date: '23 Februari 2025',
    image: require('@/assets/images/imageTechX1.png')
  },
  {
    title: 'Inggris sebar developernya keseluruh dunia, dengan bayaran murah',
    date: '23 Februari 2025',
    image: require('@/assets/images/imageTechX1.png')
  },
  {
    title: 'Inggris sebar developernya keseluruh dunia, dengan bayaran murah',
    date: '23 Februari 2025',
    image: require('@/assets/images/imageTechX1.png')
  }
];

export default function HomeScreen() {
    const renderHeader = () => (
        <View style={tw`p-4 flex-row justify-between items-center bg-black`}> 
          <View style={tw`flex-row items-center`}> 
            <Image source={require('@/assets/images/imageTechX1.png')} style={tw`w-10 h-10 mr-2`} /> 
            <Text style={tw`text-white text-xl font-bold`}>TechXperience</Text>
          </View>
          <View style={tw`flex-row items-center`}> 
            <Ionicons name="search" size={24} color="white" style={tw`mr-4`} />
            <Ionicons name="notifications-outline" size={24} color="white" style={tw`mr-4`} />
            <Ionicons name="person-circle-outline" size={30} color="white" />
          </View>
        </View>
      );

  const renderNews = () => (
    <View style={tw`px-4 mt-4`}>
      <Text style={tw`text-white text-xl font-bold mb-2`}>News</Text>
      <TextInput placeholder="Mau cari berita apa hari ini?" placeholderTextColor="gray" style={tw`bg-gray-800 text-white p-3 rounded-lg mb-4`} />
      {newsItems.map((news, index) => (
        <View key={index} style={tw`flex-row mb-4`}>
          <Image source={news.image} style={tw`w-20 h-20 rounded-lg mr-3`} />
          <View>
            <Text style={tw`text-white font-bold`}>{news.title}</Text>
            <Text style={tw`text-gray-400 text-sm`}>{news.date}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <ScrollView>
        {renderHeader()}
        {renderNews()}
      </ScrollView>
    </SafeAreaView>
  );
}
