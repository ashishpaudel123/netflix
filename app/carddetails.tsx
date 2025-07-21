import CardDetails from '@/components/CardDetails';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function CardDetailsScreen() {
  const params = useLocalSearchParams();
  // params: { title, poster, description }
  return (
    <View style={{ flex: 1, backgroundColor: '#181818' }}>
      <CardDetails
        title={params.title as string}
        poster={params.poster}
        description={params.description as string}
      />
    </View>
  );
}
