import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useRouter } from 'expo-router';

const ButtonPrimary = ({title, bgBtn, bgText, bgborder, rute}: any) => {
    const navigation = useRouter();
  return (
    <TouchableOpacity style={tw`bg-${bgBtn} border border-${bgborder} px-4 py-2 rounded mx-12 w-90 h-10`} onPress={() => navigation.navigate(rute)}>
      <Text style={tw`text-${bgText} text-center`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({})