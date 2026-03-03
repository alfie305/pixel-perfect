import { motion } from 'framer-motion';
import { useLatestPost } from '@/hooks/usePosts';
import { ArrowRight } from 'lucide-react';

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
    <section className="container mx-auto px-4 py-16 md:py-20 max-w-6xl">
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl text-ink">
          Latest Field Log
        </h2>
      </motion.div>

      <motion.div
        className="glass-card rounded-2xl overflow-hidden flex flex-col md:flex-row group max-w-5xl mx-auto transition-all duration-300 hover:shadow-clay-hover"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, delay: 0.1 }}
      >
        {/* Thumbnail */}
        <div className="md:w-[45%] overflow-hidden relative bg-card">
          {/* Latest Issue Badge */}
          <div className="absolute top-5 left-5 z-10 bg-orange px-4 py-1.5 rounded-lg">
            <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">
              Latest Issue
            </span>
          </div>

          {isLoading ? (
            <div className="w-full h-[320px] md:h-full bg-card animate-pulse" />
          ) : post?.thumbnail_url ? (
            <motion.img
              src={post.thumbnail_url}
              alt={post.title ?? 'Featured log'}
              className="w-full h-[320px] md:h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          ) : (
            <div className="w-full h-[320px] md:h-full bg-card/50 flex items-center justify-center">
              <span className="font-mono text-xs text-text-muted">No image yet</span>
            </div>
          )}
        </div>

        {/* Content */}
        <motion.div
          className="md:w-[55%] p-8 md:p-10 lg:p-12 flex flex-col justify-center space-y-5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {isLoading ? (
            <>
              <div className="h-5 w-36 bg-card/50 animate-pulse rounded" />
              <div className="h-3 w-32 bg-card/50 animate-pulse rounded" />
              <div className="h-8 w-full bg-card/50 animate-pulse rounded" />
              <div className="h-4 w-4/5 bg-card/50 animate-pulse rounded" />
              <div className="h-4 w-2/3 bg-card/50 animate-pulse rounded" />
              <div className="h-10 w-40 bg-card/50 animate-pulse rounded-lg" />
            </>
          ) : post ? (
            <>
              {/* Meta info */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-[11px] text-orange uppercase tracking-wide">{formattedDate}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-wide">{readTime}</span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-[26px] md:text-[28px] text-ink leading-tight">
                {post.title}
              </h3>

              {/* Description */}
              <p className="font-body text-text text-[14px] leading-relaxed line-clamp-3 max-w-[90%]">
                {post.subtitle ?? post.preview_text}
              </p>

              {/* CTA Button */}
              <a
                href={post.web_url ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start group/btn inline-flex items-center gap-2 bg-orange text-white font-display font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 hover:translate-y-[-2px] hover:shadow-glow-sm"
              >
                Read Full Log
                <ArrowRight className="w-[15px] h-[15px] group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
              </a>
            </>
          ) : (
            <p className="font-body text-text text-sm">No posts published yet.</p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedLog;
