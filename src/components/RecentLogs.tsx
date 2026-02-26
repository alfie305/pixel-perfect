import { motion } from 'framer-motion';
import { useRecentPosts } from '@/hooks/usePosts';

const getReadTime = (text?: string | null) => {
  if (!text) return '~3 min read';
  const words = text.trim().split(/\s+/).length;
  return `~${Math.max(1, Math.ceil(words / 200))} min read`;
};

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {isLoading
          ? skeletons.map((_, i) => (
              <div key={i} className="ink-card rounded-lg overflow-hidden">
                <div className="w-full h-44 bg-ink/10 animate-pulse" />
                <div className="p-4 space-y-3">
                  <div className="flex gap-2">
                    <div className="h-5 w-14 bg-ink/10 animate-pulse rounded" />
                    <div className="h-5 w-16 bg-ink/10 animate-pulse rounded" />
                  </div>
                  <div className="h-4 w-4/5 bg-ink/10 animate-pulse rounded" />
                  <div className="h-3 w-full bg-ink/10 animate-pulse rounded" />
                  <div className="h-3 w-3/4 bg-ink/10 animate-pulse rounded" />
                  <div className="h-3 w-1/2 bg-ink/10 animate-pulse rounded" />
                </div>
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
              const readTime = getReadTime(post.preview_text ?? post.subtitle);

              return (
                <motion.a
                  key={post.id}
                  href={post.web_url ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ink-card rounded-lg overflow-hidden cursor-pointer block hover:border-orange/60 transition-colors duration-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  {/* Full-width thumbnail */}
                  <div className="w-full h-44 overflow-hidden bg-ink/5">
                    {post.thumbnail_url ? (
                      <img
                        src={post.thumbnail_url}
                        alt={post.title ?? ''}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-ink/5">
                        <span className="font-mono text-xs text-gray-2">No image</span>
                      </div>
                    )}
                  </div>

                  {/* Card content */}
                  <div className="p-4 space-y-2">
                    {/* Badge + reading time */}
                    <div className="flex items-center gap-2">
                      <span className="bg-orange/10 text-orange font-mono text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-sm">
                        Intel
                      </span>
                      <span className="font-mono text-[10px] text-gray-2">{readTime}</span>
                    </div>

                    {/* Title */}
                    <h4 className="font-display font-bold text-base text-ink leading-snug line-clamp-2">
                      {post.title}
                    </h4>

                    {/* Preview */}
                    <p className="font-body text-xs text-text-body leading-relaxed line-clamp-2">
                      {post.subtitle ?? post.preview_text}
                    </p>

                    {/* Date + arrow */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-mono text-[10px] text-gray-2">{date}</span>
                      <span className="font-mono text-[10px] text-orange">→</span>
                    </div>
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
