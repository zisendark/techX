import { Text, View, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import ButtonPrimary from '@/components/ButtonPrimary';

const SurveyScreen = () => {
    const navigation = useRouter();
    const [selectedOption, setSelectedOption] = useState('');

    const options: string[] = [
        'Co-Founders',
        'Instagram',
        'Tiktok',
        'Youtube',
        'Website',
        'Lainnya',
    ];

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <SafeAreaView style={tw`bg-black h-full`}>
            <View style={tw`p-5`}>
                <Text style={tw`text-white text-lg mb-4`}>Bagaimana kamu tahu tentang TechXperience?</Text>
                <View style={tw`mb-10`}>
                    {options.map((option) => (
                        <TouchableOpacity
                            key={option}
                            style={tw`flex-row justify-between items-center border border-gray-700 p-4 rounded-lg mb-2`}
                            onPress={() => handleOptionSelect(option)}
                        >
                            <Text style={tw`text-white`}>{option}</Text>
                            <FontAwesome
                                name={selectedOption === option ? "dot-circle-o" : "circle-o"}
                                size={20}
                                color={selectedOption === option ? "#0086FF" : "white"}
                            />
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity
                    style={tw`bg-[#0086FF] py-3 px-20 rounded-lg items-center self-center`}
                    onPress={() => navigation.push("/(tabs)/home")}
                >
                    <Text style={tw`text-white text-base`}>Selanjutnya</Text>
                </TouchableOpacity>


            </View>
        </SafeAreaView>
    );
};

export default SurveyScreen;
