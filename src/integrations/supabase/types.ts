export interface Post {
  id: string;
  beehiiv_id: string;
  title: string | null;
  subtitle: string | null;
  slug: string | null;
  status: string | null;
  web_url: string | null;
  thumbnail_url: string | null;
  preview_text: string | null;
  publish_date: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: Post;
        Insert: Omit<Post, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Post, 'id'>>;
      };
    };
  };
}
