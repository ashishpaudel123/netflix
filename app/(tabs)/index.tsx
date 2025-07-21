
import { Colors } from '@/constants/Colors';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const featured = [
  { id: 1, title: 'Stranger Things', poster: require('@/assets/images/posters/hero1.png') },
  { id: 2, title: 'Money Heist', poster: require('@/assets/images/posters/hero1.png') },
  { id: 3, title: 'Squid Game', poster: require('@/assets/images/posters/hero1.png') },
];

const categories = [
  {
    title: 'Trending Now',
    items: [
      { id: 4, poster: require('@/assets/images/posters/poster1.png') },
      { id: 5, poster: require('@/assets/images/posters/poster2.png') },
      { id: 6, poster: require('@/assets/images/posters/poster3.png') },
      { id: 7, poster: require('@/assets/images/posters/poster4.png') },
    ],
  },
  {
    title: 'Top Picks for You',
    items: [
      { id: 7, poster: require('@/assets/images/posters/poster5.png') },
      { id: 8, poster: require('@/assets/images/posters/poster6.png') },
      { id: 9, poster: require('@/assets/images/posters/poster7.png') },
      { id: 10, poster: require('@/assets/images/posters/poster8.png') },
    ],
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/netflixIcon.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.featuredContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featured.map((item, idx) => (
              <View key={item.id} style={styles.featuredPosterWrapper}>
                <Image
                  source={item.poster}
                  style={styles.featuredPoster}
                  resizeMode="cover"
                />
                {/* Overlay for visibility */}
                <View style={styles.featuredOverlay} />
                {/* Title and buttons at bottom of image */}
                <View style={styles.heroMetaAbsolute}>
                  <Text style={styles.heroTitle}>{item.title}</Text>
                  <View style={styles.heroActions}>
                    <TouchableOpacity style={styles.heroActionBtn}>
                      <Text style={styles.heroActionText}>My List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.heroActionBtn, styles.playBtn]}>
                      <Text style={styles.playBtnText}>▶ Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.heroActionBtn}>
                      <Text style={styles.heroActionText}>Info</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        {categories.map(category => (
          <View key={category.title} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category.title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {category.items.map(item => (
                <TouchableOpacity key={item.id}>
                  <Image
                    source={item.poster}
                    style={styles.categoryPoster}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brand.secondary[700],
    paddingTop: 32,
    marginStart: 16,
  },
  logo: {
    width: 120,
    height: 40,
    alignSelf: 'center',
    marginBottom: 16,
  },
  heroMetaContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  heroActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginBottom: 8,
  },
  heroActionBtn: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
  },
  heroActionText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  playBtn: {
    backgroundColor: Colors.brand.primary[500],
  },
  playBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  featuredContainer: {
    marginBottom: 24,
  },
  featuredPosterWrapper: {
    position: 'relative',
    width: width * 0.9,
    height: 400,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: Colors.brand.secondary[900],
  },
  featuredPoster: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  featuredOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  heroMetaAbsolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  categoryContainer: {
    marginBottom: 24,
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 8,
  },
  categoryPoster: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: Colors.brand.secondary[900],
  },
});
