import { Image, StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import tw from 'twrnc';
import React from 'react';

const menuItems = [
  { name: 'Techxperience Career', icon: 'book-outline' },
  { name: 'Pengembangan Usaha', icon: 'people-outline' },
  { name: 'Beasiswa Kuliah', icon: 'ticket-outline' },
  { name: 'Techxperience Roadmap', icon: 'chatbubbles-outline' }
];

const menuItems2 = [
  {
    name: 'Program Bootcamp',
    image: require('@/assets/images/investment.png')
  },
  {
    name: 'Tech Workshop',
    image: require('@/assets/images/money-bag.png')
  },
  {
    name: 'Tech Mentoring',
    image: require('@/assets/images/transfer.png')
  },
  {
    name: 'Tech Projects',
    image: require('@/assets/images/accounting.png')
  }
];

const courses = [
  {
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
    title: 'Mahir menjadi frontend',
    description: 'Kalau kamu udah jago fundamentalnya, yuk masuk ke spesialisasi frontend.',
    image: require('@/assets/images/imageTechX1.png')
  }
];

const eventCategories = ['Hackaton', 'Design Web', 'Workshop', 'Lainnya'];

const events = [
  { image: require('@/assets/images/imageTechX1.png') },
  { image: require('@/assets/images/imageTechX1.png') },
  { image: require('@/assets/images/imageTechX1.png') },
  { image: require('@/assets/images/imageTechX1.png') },
  { image: require('@/assets/images/imageTechX1.png') }
];

export default function HomeScreen() {
  const renderHeader = () => (
    <View style={tw`p-4 flex-row justify-between items-center bg-black`}>
      <View style={tw`flex-row items-center`}>
        <Image source={require('@/assets/images/TechX.png')} style={tw`w-40 h-10 ml-2`} />
      </View>
      <View style={tw`flex-row items-center`}>
        <Ionicons name="search" size={24} color="white" style={tw`mr-4`} />
        <Ionicons name="notifications-outline" size={24} color="white" style={tw`mr-4`} />
        <Ionicons name="person-circle-outline" size={30} color="white" />
      </View>
    </View>
  );

  const renderNotificationBanner = () => (
    <View style={tw`flex-row items-center bg-[#1A1A1A] mx-4 mt-4 p-4 rounded-xl`}>
      <View style={tw`bg-[#333333] p-2 rounded-full`}>
        <MaterialCommunityIcons name="bell" size={24} color="white" />
      </View>
      <View style={tw`flex-1 ml-2`}>
        <Text style={tw`text-white`}>
          Nikmati insight, berita dan update terkini,{' '}
          <Text style={tw`text-green-500 underline`}>nyalakan notifikasi</Text>
        </Text>
      </View>
      <MaterialCommunityIcons name="close" size={24} color="white" />
    </View>
  );

  const renderFeaturedCarousel = () => (
    <View style={tw`px-4 mt-4`}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={tw`gap-4`}
      >
        <Image
          source={require('@/assets/images/imageTechX1.png')}
          style={tw`w-80 h-45 rounded-lg`}
          resizeMode="cover"
        />
        <Image
          source={require('@/assets/images/imageTechX1.png')}
          style={tw`w-70 h-45 rounded-lg`}
          resizeMode="cover"
        />
        <Image
          source={require('@/assets/images/imageTechX1.png')}
          style={tw`w-80 h-45 rounded-lg`}
          resizeMode="cover"
        />
      </ScrollView>
    </View>
  );

  const renderMenuButtons = () => (
    <View style={tw`px-4 mt-4`}>
      <View style={tw`flex-row flex-wrap justify-between`}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={tw`bg-gray-900 w-[48%] p-4 rounded-xl mb-4 flex-row items-center justify-between border-l-4 border-green-500`}
          >
            <View style={tw`flex-row items-center`}>
              <Ionicons name={item.icon} size={24} color="white" style={tw`mr-2`} />
              <Text style={tw`text-white text-base font-medium`}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderCourses = () => (
    <View style={tw`px-4 mt-4 flex-row flex-wrap justify-between`}>
      {courses.map((course, index) => (
        <View key={index} style={tw`bg-gray-900 rounded-lg overflow-hidden w-[48%] mb-4`}>
          <Image source={course.image} style={tw`w-full h-30`} resizeMode="cover" />
          <View style={tw`p-3`}>
            <Text style={tw`text-white font-bold`}>{course.title}</Text>
            <Text style={tw`text-gray-400 text-sm mt-1`}>{course.description}</Text>
            <TouchableOpacity style={tw`mt-2 flex-row items-center justify-end`}>
              <Text style={tw`text-white font-bold`}>Mulai Belajar </Text>
              <FontAwesome5
                name="arrow-circle-right" size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );

  const renderEvents = () => (
    <View style={tw`mt-6`}>
      <View style={tw`p-4 flex-row justify-between items-center bg-black`}>
        <Text style={tw`text-white text-xl font-bold`}>Ikuti Event Terdekat</Text>
        <TouchableOpacity>
          <Text style={tw`text-yellow-400 text-sm`}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`px-4`}>
        {eventCategories.map((category, index) => (
          <TouchableOpacity key={index} style={tw`bg-gray-800 px-4 py-2 rounded-full mr-2`}>
            <Text style={tw`text-white text-sm`}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={tw`px-4 mt-4`}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          contentContainerStyle={tw`gap-4`}
        >
          <Image
            source={require('@/assets/images/imageTechX1.png')}
            style={tw`w-80 h-45 rounded-lg`}
            resizeMode="cover"
          />
          <Image
            source={require('@/assets/images/imageTechX1.png')}
            style={tw`w-70 h-45 rounded-lg`}
            resizeMode="cover"
          />
          <Image
            source={require('@/assets/images/imageTechX1.png')}
            style={tw`w-80 h-45 rounded-lg`}
            resizeMode="cover"
          />
        </ScrollView>
      </View>
      <View style={tw`px-4 mt-4`}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`gap-4`}
        >
          <Image
            source={require('@/assets/images/imageTechX1.png')}
            style={tw`w-80 h-45 rounded-lg`}
            resizeMode="cover"
          />
          <Image
            source={require('@/assets/images/imageTechX1.png')}
            style={tw`w-70 h-45 rounded-lg`}
            resizeMode="cover"
          />
          <Image
            source={require('@/assets/images/imageTechX1.png')}
            style={tw`w-80 h-45 rounded-lg`}
            resizeMode="cover"
          />
        </ScrollView>
      </View>

      {/* <View key={index} style={tw`bg-gray-900 w-50 h-45 rounded-lg mr-4`}>
            <Image
              source={event.image}
              style={tw`w-full h-full rounded-lg`}
              resizeMode="cover"
            />
          </View> */}
    </View>
  );

  const renderMenuButtons2 = () => (
    <View style={tw`px-4 mt-4`}>
      <View style={tw`p-4 flex-row justify-between items-center bg-black`}>
        <Text style={tw`text-white text-xl font-bold`}>Ikuti Event Terdekat</Text>
        <TouchableOpacity>
          <Text style={tw`text-yellow-400 text-sm`}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={tw`flex-row items-center`}>
          {menuItems2.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={tw`bg-gray-900 p-3 rounded-xl items-center mx-2 w-20 border-r-4 border-green-500`}
            >
              <Image
                source={item.image}
                style={tw`w-12 h-12 rounded-lg mb-1`}
                resizeMode="cover"
              />
              <Text
                style={tw`text-white text-xs font-medium text-center`}
                numberOfLines={2}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </View>
  );

  // bg-gray-900 w-[48%] p-4 rounded-xl mb-4 items-center border-l-4 border-green-500 ml-2


  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <ScrollView>
        {renderHeader()}
        {renderNotificationBanner()}
        {renderFeaturedCarousel()}
        {renderMenuButtons()}
        {renderCourses()}
        {renderEvents()}
        {renderMenuButtons2()}
      </ScrollView>
    </SafeAreaView>
  );
}


