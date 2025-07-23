export interface VideoPlayerScreenProps {
  videoSource: string;
  title?: string;
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