import CardDetails from '@/components/CardDetails';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function CardDetailsScreen() {
  const params = useLocalSearchParams();
  // params: { title, poster, description, subtitle, year, duration, cast, rating, matchPercentage, videoSource }
  return (
    <View style={{ flex: 1, backgroundColor: '#181818' }}>
      <CardDetails
        id={params.id as any}
        title={params.title as string}
        poster={params.poster}
        description={params.description as string}
        subtitle={params.subtitle as string}
        year={params.year as number | string}
        duration={params.duration as string}
        cast={params.cast as string}
        rating={params.rating as string}
        category={params.category as string}
        onPlay={() => router.push({ pathname: "/playvideo", params })}
      />
    </View>
  );
}
