import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
} from "react-native";

import { motivational_phrases, caps } from '../../data.json';
import capitalize from 'capitalize-pt-br';

export default function HomeScreen() {
  function raffle(max: number, min: number = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
      <ScrollView className="text-left m-4">
        <View className="mt-12">
          <Text className="text-3xl font-bold">Olá, tudo bem?</Text>
          <Text className="text-sx">Seja bem-vindo ao seu lugar seguro</Text>

          <View className="flex justify-center bg-sky-500 rounded-2xl p-5 mt-6">
          <Text className="text-white text-center text-lg p-2">{motivational_phrases[raffle((motivational_phrases.length - 1))]}</Text>
          </View>
        </View>

        <View className="mt-12">
          <View className="flex flex-row">
            <Text className="text-3xl font-bold">Caps em Recife</Text>
            <Text className="grow"></Text>
            <View className="bg-blue-200 rounded-xl">
              <Text className="font-semibold text-sky-700 my-2 mx-4">Locais</Text>
            </View>
          </View>

          <View className="mt-6">
            {caps.map((cap, index) => {
              return (
                <View className="px-3 py-2 my-2 bg-red-100 rounded-2xl" key={index}>
                  <Text className="text-lg font-semibold">{capitalize(cap.nome_oficial)}</Text>
                  <Text className="text-sm"><Text className='font-semibold'>Endereço: </Text>{capitalize(cap.endereço)}</Text>
                  <Text className="text-sm"><Text className='font-semibold'>Telefone: </Text>{cap.fone}</Text>
                  <Text className="text-sm"><Text className='font-semibold'>Horário de Funcionamento: </Text>{cap.horario}</Text>
                  <Text className="text-sm"><Text className='font-semibold'>Como usar: </Text>{cap.como_usar}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
  );
}
