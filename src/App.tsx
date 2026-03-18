/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Mail } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function App() {
  return (
    <main className="relative min-h-screen w-full bg-charcoal overflow-x-hidden film-grain">
      {/* 1. The 'Cover Story' Header (Top 25%) */}
      <section className="relative h-[45vh] w-full overflow-hidden">
        {/* Background Image (Photo 4 Placeholder) */}
        <div className="absolute inset-0 noir-grade">
          <img 
            src="https://picsum.photos/seed/ciao4/1920/1080" 
            alt="Cover Story" 
            className="w-full h-full object-cover object-center scale-110"
            referrerPolicy="no-referrer"
          />
          {/* 60% black-to-transparent gradient from bottom up */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />
        </div>

        {/* Typography Overlay */}
        <div className="relative h-full flex flex-col items-center justify-center pt-12 px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-serif text-4xl md:text-7xl lg:text-8xl tracking-[0.5em] uppercase text-white font-light"
          >
            Ciao Stardus
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-6 font-sans text-[8px] md:text-[10px] italic uppercase tracking-[0.3em] text-sand"
          >
            The New Standard of Visual Allure: 90-Day Impact Report
          </motion.p>
        </div>
      </section>

      {/* 2. The 'Power Metric' Horizontal Belt (Center 15%) */}
      <section className="relative z-10 w-full py-12 bg-terracotta flex flex-col items-center justify-center shadow-2xl">
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-terracotta"
        />
        <div className="relative flex flex-col items-center">
          <div className="flex items-center gap-4 md:gap-8 font-serif text-5xl md:text-8xl lg:text-9xl font-medium gold-foil tracking-tighter">
            <span>77</span>
            <span className="w-px h-12 md:h-24 bg-white/20" />
            <span>633</span>
            <span className="w-px h-12 md:h-24 bg-white/20" />
            <span>371</span>
          </div>
          <p className="mt-4 font-sans text-[10px] md:text-xs tracking-[0.4em] text-white/80 uppercase">
            Qualified Impressions
          </p>
        </div>
      </section>

      {/* 3. The 'Conversion' Asymmetrical Grid (Center 40%) */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Data Hook */}
        <div className="lg:col-span-7 space-y-12">
          <div className="relative">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 0.15, x: 0 }}
              viewport={{ once: true }}
              className="font-serif text-[120px] md:text-[200px] lg:text-[280px] leading-none text-white absolute -top-20 -left-10 select-none pointer-events-none"
            >
              2,001%
            </motion.h2>
            <div className="relative pt-12">
              <h3 className="font-serif text-4xl md:text-6xl text-gold mb-6">2,001%</h3>
              <div className="max-w-md">
                <p className="font-serif italic text-xl md:text-2xl text-sand leading-relaxed">
                  Conversion-First Influence: While reach scales, intent follows. 
                  A 2,001% surge in link engagement proves a high-intent audience ready for luxury acquisition.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-sand/60">Reach Expansion</p>
              <p className="font-serif text-3xl text-white">+202.2%</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-sand/60">Global Shares</p>
              <p className="font-serif text-3xl text-white">1.9M</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-sand/60">Profile Visits</p>
              <p className="font-serif text-3xl text-white">2.9M</p>
            </div>
          </div>
        </div>

        {/* Right Side: Photo 7 */}
        <div className="lg:col-span-5 relative h-[600px] lg:h-[800px] -mr-6 lg:-mr-24">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full h-full noir-grade overflow-hidden"
          >
            <img 
              src="https://picsum.photos/seed/ciao7/800/1200" 
              alt="Editorial Portrait" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. The 'Audience Discovery' Pillar (Lower Side Column) */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
        <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
          <motion.div 
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="w-full h-full rounded-full overflow-hidden border border-gold/30 p-2"
          >
            <div className="w-full h-full rounded-full overflow-hidden noir-grade">
              <img 
                src="https://picsum.photos/seed/ciao1/600/600" 
                alt="Discovery Portrait" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          {/* Wrapped text effect (simulated with absolute positioning) */}
          <div className="absolute -top-4 -right-4 bg-charcoal p-4 border border-gold/20 backdrop-blur-sm">
            <p className="font-serif text-4xl text-gold">89.8%</p>
            <p className="text-[8px] uppercase tracking-tighter">Non-Follower Reach</p>
          </div>
        </div>

        <div className="max-w-xl space-y-6">
          <h4 className="font-serif text-3xl md:text-5xl text-white italic">The Discovery Engine.</h4>
          <p className="font-sans text-sm md:text-base text-sand/80 leading-relaxed tracking-wide">
            89.8% of engagement originates from new, unique audiences, providing brands with 
            unprecedented market penetration beyond the existing core.
          </p>
        </div>
      </section>

      {/* 5. The 'Editorial' Footer (Bottom 10%) */}
      <footer className="relative w-full bg-black py-16 px-8 mt-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
            <p className="font-serif text-2xl md:text-3xl text-gold tracking-widest uppercase mb-4">
              For Curation & Partnership Inquiries
            </p>
            <div className="h-px w-24 bg-gold/30 mx-auto" />
          </motion.div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-sand/60">
            <div className="flex items-center gap-2">
              <Instagram size={14} className="text-gold" />
              <span>@ciaostardus</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-gold" />
              <span>maya@ciaostardus.com</span>
            </div>
          </div>
        </div>
        
        {/* Final Touch: 1px horizontal gold line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gold/40" />
      </footer>
    </main>
  );
}
