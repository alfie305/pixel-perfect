import { motion } from 'framer-motion';
import { useLatestPost } from '@/hooks/usePosts';

const getReadTime = (text?: string | null) => {
  if (!text) return '~3 min read';
  const words = text.trim().split(/\s+/).length;
  return `~${Math.max(1, Math.ceil(words / 200))} min read`;
};

const FeaturedLog = () => {
  const { data: post, isLoading } = useLatestPost();

  const formattedDate = post?.publish_date
    ? new Date(post.publish_date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  const readTime = getReadTime(post?.preview_text ?? post?.subtitle);

  return (
    <section className="container mx-auto px-4 py-12">
      <motion.h2
        className="font-display font-bold text-2xl text-ink mb-8 relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Latest Field Log
        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-ink/30" style={{ borderRadius: '50%' }} />
      </motion.h2>

      <motion.div
        className="ink-card rounded-lg overflow-hidden flex flex-col md:flex-row"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        {/* Thumbnail */}
        <div className="md:w-[40%] overflow-hidden">
          {isLoading ? (
            <div className="w-full h-[280px] md:h-full bg-ink/10 animate-pulse" />
          ) : post?.thumbnail_url ? (
            <motion.img
              src={post.thumbnail_url}
              alt={post.title ?? 'Featured log'}
              className="w-full h-[280px] md:h-full object-cover"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          ) : (
            <div className="w-full h-[280px] md:h-full bg-ink/5 flex items-center justify-center">
              <span className="font-mono text-xs text-gray-2">No image yet</span>
            </div>
          )}
        </div>

        {/* Content */}
        <motion.div
          className="md:w-[60%] p-6 md:p-8 flex flex-col justify-center space-y-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          {isLoading ? (
            <>
              <div className="h-5 w-36 bg-ink/10 animate-pulse rounded" />
              <div className="h-3 w-32 bg-ink/10 animate-pulse rounded" />
              <div className="h-7 w-full bg-ink/10 animate-pulse rounded" />
              <div className="h-4 w-4/5 bg-ink/10 animate-pulse rounded" />
              <div className="h-4 w-2/3 bg-ink/10 animate-pulse rounded" />
              <div className="h-9 w-36 bg-ink/10 animate-pulse rounded-md" />
            </>
          ) : post ? (
            <>
              {/* Transmission badge */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-[10px] uppercase tracking-widest text-orange border border-orange/40 px-2 py-0.5 rounded-sm">
                  Latest Transmission
                </span>
                <span className="font-mono text-[10px] text-gray-2">{readTime}</span>
              </div>

              {/* Date */}
              <div className="font-mono text-xs text-gray-2">{formattedDate}</div>

              <h3 className="font-display font-bold text-xl md:text-2xl text-ink">{post.title}</h3>

              <p className="font-body text-text-body text-sm leading-relaxed">
                {post.subtitle ?? post.preview_text}
              </p>

              <a
                href={post.web_url ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start bg-orange hover:bg-orange-dark text-white font-display font-bold text-sm px-6 py-2.5 rounded-md border border-ink transition-colors"
              >
                Read Full Log →
              </a>
            </>
          ) : (
            <p className="font-body text-text-body text-sm">No posts published yet.</p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedLog;
