export interface VideoPlayerScreenProps {
  videoSource: string;
  title?: string;
  description?: string;
  subtitle?: string;
  year?: number | string;
  duration?: string;
  cast?: string;
  rating?: string;
  category?: string;
};

export interface MovieProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  poster: string;
  videoSource: string | null;
  subtitles: Array<{
    language: string;
    uri: string | null;
  }>;
}