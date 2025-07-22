import CardDetails from '@/components/CardDetails';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function CardDetailsScreen() {
  const params = useLocalSearchParams();
  // params: { title, poster, description }
  return (
    <View style={{ flex: 1, backgroundColor: '#181818' }}>
      <CardDetails
        id={params.id as number}
        title={params.title as string}
        poster={params.poster}
        description={params.description as string}
        onPlay={() => router.push({ pathname: "/playvideo", params })} // Pass the VideoPlayer component directly
      />
    </View>
  );
}
