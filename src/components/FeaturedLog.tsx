import { useLatestPost } from '@/hooks/usePosts';

const FeaturedLog = () => {
  const { data: post, isLoading } = useLatestPost();

  const formattedDate = post?.publish_date
    ? new Date(post.publish_date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="font-display font-bold text-2xl text-ink mb-8 relative inline-block">
        Latest Field Log
        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-ink/30" style={{ borderRadius: '50%' }} />
      </h2>

      <div className="ink-card rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Thumbnail */}
        <div className="md:w-[40%]">
          {isLoading ? (
            <div className="w-full h-[250px] md:h-full bg-ink/10 animate-pulse" />
          ) : post?.thumbnail_url ? (
            <img
              src={post.thumbnail_url}
              alt={post.title ?? 'Featured log'}
              className="w-full h-[250px] md:h-full object-cover"
            />
          ) : (
            <div className="dashed-placeholder w-full h-[250px] md:h-full rounded-md p-6">
              No thumbnail yet
            </div>
          )}
        </div>

        {/* Content */}
        <div className="md:w-[60%] p-6 md:p-8 flex flex-col justify-center space-y-4">
          {isLoading ? (
            <>
              <div className="h-3 w-48 bg-ink/10 animate-pulse rounded" />
              <div className="h-7 w-full bg-ink/10 animate-pulse rounded" />
              <div className="h-4 w-4/5 bg-ink/10 animate-pulse rounded" />
              <div className="h-4 w-2/3 bg-ink/10 animate-pulse rounded" />
              <div className="h-9 w-36 bg-ink/10 animate-pulse rounded-md" />
            </>
          ) : post ? (
            <>
              <div className="font-mono text-xs text-gray-2">
                {formattedDate}
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-ink">
                {post.title}
              </h3>
              <p className="font-body text-text-body text-sm leading-relaxed">
                {post.subtitle ?? post.preview_text}
              </p>
              <a
                href={post.web_url ?? '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start bg-orange hover:bg-orange-dark text-primary-foreground font-display font-bold text-sm px-6 py-2.5 rounded-md border border-ink transition-colors"
              >
                Read Full Log
              </a>
            </>
          ) : (
            <p className="font-body text-text-body text-sm">No posts published yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLog;
