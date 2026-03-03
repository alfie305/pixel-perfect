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
    <section className="container mx-auto px-4 py-16 md:py-20">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mb-3">
          Latest Field Log
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange to-transparent mx-auto" />
      </motion.div>

      <motion.div
        className="glass-card-hover rounded-2xl overflow-hidden flex flex-col md:flex-row group shadow-lift max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.75, delay: 0.1 }}
      >
        {/* Thumbnail */}
        <div className="md:w-[45%] overflow-hidden relative">
          {/* Latest Issue Badge */}
          <div className="absolute top-4 left-4 z-10 bg-orange px-4 py-1.5 rounded-full shadow-glow-sm">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Latest Issue
            </span>
          </div>

          {isLoading ? (
            <div className="w-full h-[320px] md:h-full bg-card/50 animate-pulse" />
          ) : post?.thumbnail_url ? (
            <motion.img
              src={post.thumbnail_url}
              alt={post.title ?? 'Featured log'}
              className="w-full h-[320px] md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          ) : (
            <div className="w-full h-[320px] md:h-full bg-gradient-to-br from-orange/10 to-purple-500/10 flex items-center justify-center">
              <span className="font-mono text-sm text-text-muted">No image yet</span>
            </div>
          )}
        </div>

        {/* Content */}
        <motion.div
          className="md:w-[55%] p-8 md:p-10 flex flex-col justify-center space-y-5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
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
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-mono text-xs text-orange">{formattedDate}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="font-mono text-xs text-text-muted">{readTime}</span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-2xl md:text-3xl text-ink leading-tight">
                {post.title}
              </h3>

              {/* Description */}
              <p className="font-body text-text text-base leading-relaxed line-clamp-3">
                {post.subtitle ?? post.preview_text}
              </p>

              {/* CTA Button */}
              <a
                href={post.web_url ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start group/btn inline-flex items-center gap-2 bg-orange hover:scale-105 text-white font-display font-bold text-sm px-6 py-3 rounded-lg border border-orange-dark transition-all duration-300 shadow-glow-sm hover:shadow-glow-md"
              >
                Read Full Log
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
