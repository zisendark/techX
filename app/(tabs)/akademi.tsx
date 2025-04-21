import { Image, StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import React from 'react';
import { useRouter } from 'expo-router';

const courses = [
    {
        id: 1,
        title: 'Fundamental Belajar Design',
        description: 'Belajar design itu ga langsung gambar aja, belajar dasarnya.',
        image: require('@/assets/images/imageTechX1.png')
      },
  {
    title: 'Fundamental Belajar MySQL',
    description: 'Belajar database itu ga langsung ngoding loh, ada dasarnya.',
    image: require('@/assets/images/imageTechX1.png')
  },
  {
    title: 'Fundamental Belajar Jaringan',
    description: 'Belajar jaringan itu ga langsung nyambungin kabel, ada dasarnya.',
    image: require('@/assets/images/imageTechX1.png')
  },
  {
    title: 'Fundamental Belajar Jaringan',
    description: 'Belajar jaringan itu ga langsung nyambungin kabel, ada dasarnya.',
    image: require('@/assets/images/imageTechX1.png')
  },
  {
    title: 'Fundamental Belajar Jaringan',
    description: 'Belajar jaringan itu ga langsung nyambungin kabel, ada dasarnya.',
    image: require('@/assets/images/imageTechX1.png')
  },
  {
    title: 'Mahir menjadi frontend',
    description: 'Kalau kamu udah jago fundamentalnya, yuk masuk ke spesialisasi frontend.',
    image: require('@/assets/images/imageTechX1.png')
  }
];

export default function HomeScreen() {
    const router = useRouter();
  
    const renderHeader = () => (
      <View style={tw`p-4 flex-row justify-between items-center bg-black`}> 
        <View style={tw`flex-row items-center`}>  
          <Text style={tw`text-white text-xl font-bold`}>𒀱echXperience</Text>
        </View>
      </View>
    );
  
    const renderCourses = () => (
      <View style={tw`px-4 mt-2 flex-row flex-wrap justify-between`}>
        {courses.map((course, index) => (
          <View key={index} style={tw`bg-gray-900 rounded-lg overflow-hidden w-[48%] mb-4`}>
            <Image source={course.image} style={tw`w-full h-30`} resizeMode="cover" />
            <View style={tw`p-3`}>
              <Text style={tw`text-white font-bold`}>{course.title}</Text>
              <Text style={tw`text-gray-400 text-sm mt-1`}>{course.description}</Text>
              <TouchableOpacity 
                style={tw`mt-2 flex-row items-center justify-end`}
                onPress={() => router.push('/auth/detail')}
              >
                <Text style={tw`text-white font-bold`}>Mulai Belajar </Text>
                <FontAwesome5 name="arrow-circle-right" size={16} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    );
  
    return (
      <SafeAreaView style={tw`flex-1 bg-black`}>
        <ScrollView>
          {renderHeader()}
          {renderCourses()}
        </ScrollView>
      </SafeAreaView>
    );
  }

