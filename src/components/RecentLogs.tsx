import { motion } from 'framer-motion';
import { useRecentPosts } from '@/hooks/usePosts';

const RecentLogs = () => {
  const { data: posts, isLoading } = useRecentPosts(6);
  const skeletons = Array.from({ length: 6 });

  return (
    <section className="container mx-auto px-4 py-12">
      <motion.h2
        className="font-display font-bold text-2xl text-ink mb-8 relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Recent Logs
        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-ink/30" />
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading
          ? skeletons.map((_, i) => (
              <div key={i} className="ink-card rounded-lg p-5 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-full bg-ink/10 animate-pulse shrink-0" />
                  <div className="h-3 w-8 bg-ink/10 animate-pulse rounded" />
                </div>
                <div className="h-4 w-4/5 bg-ink/10 animate-pulse rounded" />
                <div className="h-3 w-full bg-ink/10 animate-pulse rounded" />
                <div className="h-3 w-3/4 bg-ink/10 animate-pulse rounded" />
              </div>
            ))
          : (posts ?? []).map((post, i) => {
              const date = post.publish_date
                ? new Date(post.publish_date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })
                : '—';

              return (
                <motion.a
                  key={post.id}
                  href={post.web_url ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ink-card rounded-lg p-5 space-y-3 hover:shadow-md transition-shadow cursor-pointer block"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start justify-between">
                    {post.thumbnail_url ? (
                      <img
                        src={post.thumbnail_url}
                        alt={post.title ?? ''}
                        className="w-10 h-10 rounded-full object-cover shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full dashed-placeholder text-[7px] shrink-0">
                        Thumb
                      </div>
                    )}
                  </div>
                  <h4 className="font-display font-bold text-sm text-ink leading-snug">
                    {post.title}
                  </h4>
                  <p className="font-body text-xs text-text-body leading-relaxed line-clamp-2">
                    {post.subtitle ?? post.preview_text}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-gray-2">{date}</span>
                  </div>
                </motion.a>
              );
            })}
      </div>

      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <button className="px-6 py-2.5 rounded-full border border-ink text-sm font-body text-ink hover:bg-ink/5 transition-colors">
          View Full Log Index →
        </button>
      </motion.div>
    </section>
  );
};

export default RecentLogs;
