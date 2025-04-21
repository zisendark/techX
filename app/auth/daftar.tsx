import { Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React from 'react';
import ButtonPrimary from '@/components/ButtonPrimary';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const daftar = () => {
  const navigation = useRouter();

  return (
    <ScrollView style={tw`bg-black`}>
      <View style={tw`mx-5`}>
        <View style={tw`mt-10`}>
          <Image source={require("@/assets/images/TechX.png")} style={tw`h-6 w-40 mt-20`} />

          <View style={tw`mt-10 gap-6`}>
            <TextInput
              style={tw`border border-slate-600 rounded-md text-white py-3 px-4`}
              placeholder='Masukan Nama Lengkap'
              placeholderTextColor={'white'}
            />
            <TextInput
              style={tw`border border-slate-600 rounded-md text-white py-3 px-4`}
              placeholder='Masukan Email'
              placeholderTextColor={'white'}
            />
            <TextInput
              style={tw`border border-slate-600 rounded-md text-white py-3 px-4`}
              placeholder='Masukan Password'
              placeholderTextColor={'white'}
              secureTextEntry
            />
            <TextInput
              style={tw`border border-slate-600 rounded-md text-white py-3 px-4`}
              placeholder='Konfirmasi Password'
              placeholderTextColor={'white'}
              secureTextEntry
            />

            <View style={tw`flex-row items-center justify-between mt-2`}>
              <View style={tw`flex-row items-center gap-2`}>
                <FontAwesome name="square-o" size={18} color="white" />
                <Text style={tw`text-white text-base`}>Ingat aku ya</Text>
              </View>
              <Text style={tw`text-[#2D53FF] text-base`}>Lupa Password?</Text>
            </View>

            <View style={tw`items-center mt-3`}>
              <ButtonPrimary
                title="Daftar"
                bgBtn="[#0086FF]"
                bgText="white"
                rute="/auth/survey" // Note the leading forward slash
              />
            </View>

            <View style={tw`items-center`}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-white`}>Belum punya akun? </Text>
                <TouchableOpacity onPress={() => navigation.push("/auth/login")}>
                  <Text style={tw`text-[#0086FF] font-semibold`}>Masuk</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={tw`items-center mt-10`}>
              <Text style={tw`text-white`}>Atau mau masuk melalui?</Text>
              <View style={tw`border border-white w-2/3 mt-2`} />
            </View>

            <View style={tw`mt-4 gap-4 items-center`}>
              <TouchableOpacity style={tw`bg-white flex-row items-center px-4 py-3 rounded-lg w-4/5`}>
                <AntDesign name="google" size={20} color="#DB4437" style={tw`mr-2`} />
                <Text style={tw`text-black font-semibold`}>Masuk dengan Google</Text>
              </TouchableOpacity>

              <TouchableOpacity style={tw`bg-white flex-row items-center px-4 py-3 rounded-lg w-4/5`}>
                <FontAwesome name="facebook" size={20} color="#1877F2" style={tw`mr-2`} />
                <Text style={tw`text-black font-semibold`}>Masuk dengan Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default daftar;
