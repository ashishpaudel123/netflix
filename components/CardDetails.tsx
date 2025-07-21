import { Colors } from '@/constants/Colors';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface CardDetailsProps {
  title: string;
  poster: any;
  description?: string;
  onPlay?: () => void;
  onAddToList?: () => void;
  onInfo?: () => void;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  title,
  poster,
  description,
  onPlay,
  onAddToList,
  onInfo,
}) => {
  return (
    <View style={styles.container}>
      <Image source={poster} style={styles.poster} resizeMode="cover" />
      <View style={styles.overlay} />
      <View style={styles.metaContainer}>
        <Text style={styles.title}>{title}</Text>
        {description ? <Text style={styles.description}>{description}</Text> : null}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionBtn} onPress={onAddToList}>
            <Text style={styles.actionText}>My List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, styles.playBtn]} onPress={onPlay}>
            <Text style={styles.playBtnText}>▶ Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn} onPress={onInfo}>
            <Text style={styles.actionText}>Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 400,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: Colors.brand.secondary[900],
  },
  poster: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  metaContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginBottom: 8,
  },
  actionBtn: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
  },
  actionText: {
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
});

export default CardDetails;
