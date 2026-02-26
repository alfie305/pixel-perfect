import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const benefits = [
  "Weekly market intelligence, decoded",
  "No noise. No filler. 100% signal.",
  "Unsubscribe in one click, anytime",
];

const BottomCTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;
    setStatus('loading');
    try {
      const { error } = await supabase.functions.invoke('subscribe-beehiiv', {
        body: { email },
      });
      if (error) {
        setStatus('error');
      } else {
        setStatus('success');
        setEmail('');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="bg-ink/5 py-16">
      <motion.div
        className="container mx-auto px-4 text-center max-w-lg space-y-5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
      >
        <motion.h2 variants={fadeUp} className="font-display font-bold text-3xl text-ink">
          Receive Field Logs Directly
        </motion.h2>

        <motion.p variants={fadeUp} className="font-body text-text-body">
          Structured intelligence. No noise. No hype.
        </motion.p>

        {/* Benefit bullets */}
        <motion.ul variants={fadeUp} className="space-y-1.5 text-left max-w-xs mx-auto">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-2 font-body text-sm text-text-body">
              <span className="text-orange font-bold">✓</span>
              {b}
            </li>
          ))}
        </motion.ul>

        <motion.form
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={handleSubscribe}
        >
          {status === 'success' ? (
            <div className="flex-1 px-4 py-3 rounded-md border border-orange/40 bg-orange/5 font-mono text-sm text-orange text-center">
              ✓ Welcome to the transmission.
            </div>
          ) : (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
                className="flex-1 px-4 py-3 rounded-md border border-ink bg-paper font-body text-sm text-ink placeholder:text-gray-2 focus:outline-none focus:ring-2 focus:ring-orange"
                required
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-orange hover:bg-orange-dark text-primary-foreground font-display font-bold text-sm px-6 py-3 rounded-md border border-ink transition-colors whitespace-nowrap disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Join Transmission'}
              </button>
            </>
          )}
          {status === 'error' && (
            <p className="text-xs text-red-500 font-mono mt-1 w-full text-center">
              Something went wrong — try again.
            </p>
          )}
        </motion.form>

        <motion.p variants={fadeUp} className="font-mono text-[11px] text-gray-2">
          Free · No clickbait · Unsubscribe anytime
        </motion.p>
      </motion.div>
    </section>
  );
};

export default BottomCTA;
