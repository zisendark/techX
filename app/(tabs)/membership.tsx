import { Image, StyleSheet, ScrollView, Text, TouchableOpacity, View, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import tw from 'twrnc';
import React, { useState, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const MembershipScreen = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const scaleAnimation = useRef(new Animated.Value(1)).current;

    const features = [
        {
            icon: <FontAwesome5 name="book" size={24} color="#60A5FA" />,
            text: "Akses ke Semua Modul Pembelajaran",
            description: "Lebih dari 100+ modul premium"
        },
        {
            icon: <Ionicons name="school" size={24} color="#60A5FA" />,
            text: "Jalur Pembelajaran Profesional",
            description: "Dibimbing langsung oleh expert"
        },
        {
            icon: <MaterialCommunityIcons name="account-group" size={24} color="#60A5FA" />,
            text: "Mentoring Intensif",
            description: "4x pertemuan setiap bulan"
        },
        {
            icon: <FontAwesome5 name="award" size={24} color="#60A5FA" />,
            text: "Sertifikat Profesional",
            description: "Diakui industri teknologi"
        }
    ];

    const plans = [
        {
            duration: "12 Bulan",
            savings: "Hemat 42%",
            price: "599.000,00",
            weekly: "12.475,00",
            tag: "BEST DEAL"
        },
        {
            duration: "4 Bulan",
            price: "260.000,00",
            weekly: "16.250,00",
            tag: "POPULAR"
        },
        {
            duration: "1 Bulan",
            price: "95.000,00",
            weekly: "23.750,00"
        }
    ];

    const handlePlanSelect = (index) => {
        setSelectedPlan(index);
        Animated.sequence([
            Animated.timing(scaleAnimation, {
                toValue: 0.95,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnimation, {
                toValue: 1,
                friction: 4,
                useNativeDriver: true,
            })
        ]).start();
    };

    return (
        <SafeAreaView style={tw`flex-1 bg-[#0A0A0A]`}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <LinearGradient
                    colors={['rgba(59, 130, 246, 0.1)', 'transparent']}
                    style={tw`p-6`}
                >
                    <View style={tw`items-center mb-8`}>
                        <Text style={tw`text-4xl font-bold text-white mb-2`}>Premium Access</Text>
                        <Text style={tw`text-lg text-gray-400 text-center`}>
                            Level up your skills with TechXperience
                        </Text>
                    </View>

                    <View style={tw`bg-[#1A1A1A] rounded-2xl p-6 mb-8 shadow-lg`}>
                        {features.map((feature, index) => (
                            <View key={index} style={tw`flex-row items-center mb-6`}>
                                <View style={tw`w-12 h-12 bg-blue-500/10 rounded-full items-center justify-center mr-4`}>
                                    {feature.icon}
                                </View>
                                <View style={tw`flex-1`}>
                                    <Text style={tw`text-white font-bold text-lg`}>{feature.text}</Text>
                                    <Text style={tw`text-gray-400 text-sm mt-1`}>{feature.description}</Text>
                                </View>
                            </View>
                        ))}
                    </View>

                    <View style={tw`space-y-4`}>
                        {plans.map((plan, index) => (
                            <Animated.View key={index} style={{ transform: [{ scale: selectedPlan === index ? scaleAnimation : 1 }] }}>
                                <TouchableOpacity
                                    style={tw`${
                                        selectedPlan === index 
                                        ? 'bg-blue-600' 
                                        : 'bg-[#1A1A1A]'
                                    } p-5 rounded-2xl ${plan.tag ? 'border-2 border-blue-500' : ''}`}
                                    onPress={() => handlePlanSelect(index)}
                                >
                                    {plan.tag && (
                                        <View style={tw`absolute -top-3 right-4 bg-blue-500 px-3 py-1 rounded-full`}>
                                            <Text style={tw`text-white text-xs font-bold`}>{plan.tag}</Text>
                                        </View>
                                    )}
                                    <View style={tw`flex-row justify-between items-center`}>
                                        <View>
                                            <Text style={tw`text-white font-bold text-xl`}>{plan.duration}</Text>
                                            {plan.savings && (
                                                <Text style={tw`text-blue-300 font-semibold`}>{plan.savings}</Text>
                                            )}
                                        </View>
                                        <View style={tw`items-end`}>
                                            <Text style={tw`text-white font-bold text-2xl`}>Rp {plan.price}</Text>
                                            <Text style={tw`text-gray-400`}>Rp {plan.weekly} / minggu</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </Animated.View>
                        ))}
                    </View>

                    <TouchableOpacity style={tw`mt-8`}>
                        <LinearGradient
                            colors={['#3B82F6', '#2563EB']}
                            style={tw`py-4 rounded-xl`}
                        >
                            <Text style={tw`text-white text-center font-bold text-lg`}>
                                Mulai Trial 7 Hari Gratis
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <View style={tw`mt-6 flex-row justify-center space-x-4`}>
                        <Text style={tw`text-gray-400 text-sm`}>Syarat & Ketentuan</Text>
                        <Text style={tw`text-gray-400 text-sm`}>•</Text>
                        <Text style={tw`text-gray-400 text-sm`}>Kebijakan Privasi</Text>
                    </View>
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MembershipScreen;
