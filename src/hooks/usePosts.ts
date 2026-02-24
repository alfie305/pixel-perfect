import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { Post } from '@/integrations/supabase/types';

export function useLatestPost() {
  return useQuery<Post | null>({
    queryKey: ['posts', 'latest'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'confirmed')
        .order('publish_date', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) throw error;
      return data;
    },
  });
}

export function useRecentPosts(limit = 6) {
  return useQuery<Post[]>({
    queryKey: ['posts', 'recent', limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'confirmed')
        .order('publish_date', { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data ?? [];
    },
  });
}
