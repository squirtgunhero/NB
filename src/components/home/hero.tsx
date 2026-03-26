"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video / Image Fallback */}
      <div className="absolute inset-0">
        {/* Video — replace src with actual ambient video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-fallback.svg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/nyc-aerial.mp4" type="video/mp4" />
        </video>
        {/* Ken Burns fallback for when video doesn't load */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center animate-[kenburns_20s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage: "url('/images/hero-fallback.svg')",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/30 to-midnight/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12px] font-medium uppercase tracking-[0.25em] text-champagne mb-6"
        >
          Sotheby&apos;s International Realty
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-[88px] text-ivory leading-[1.05] max-w-4xl"
        >
          Your New York Story
          <br />
          Starts Here
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg md:text-xl text-stone-300 max-w-xl"
        >
          Luxury real estate advisory for the world&apos;s most discerning
          clientele
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/properties"
            className="px-8 py-4 bg-champagne text-midnight text-[13px] font-medium uppercase tracking-[0.1em] rounded-[4px] hover:bg-champagne-light transition-colors duration-200"
          >
            Explore Properties
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border border-champagne text-champagne text-[13px] font-medium uppercase tracking-[0.1em] rounded-[4px] hover:bg-champagne/10 transition-colors duration-200"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ivory/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-ivory/50"
          >
            <path
              d="M8 3V13M8 13L3 8M8 13L13 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Ken Burns animation */}
      <style jsx>{`
        @keyframes kenburns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }
      `}</style>
    </section>
  );
}
