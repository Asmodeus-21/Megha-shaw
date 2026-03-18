/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { clsx, type ClassValue } from 'clsx';
import { Camera, Instagram, Link2, Mail, Sparkles, Video } from 'lucide-react';
import { motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function App() {
    return (
        <main className="relative min-h-screen w-full bg-charcoal overflow-x-hidden film-grain">
            {/* 1. The 'Cover Story' Header */}
            <section className="relative h-[55vh] w-full overflow-hidden">
                <div className="absolute inset-0 noir-grade">
                    <img
                        src="/photos/PAP08436.JPG"
                        alt="Cover Story"
                        className="w-full h-full object-cover object-[center_10%] scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col items-center justify-center pt-12 px-4 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-sans text-[10px] uppercase tracking-[0.5em] text-gold mb-4"
                    >
                        Media Kit 2026
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="font-serif text-5xl md:text-7xl lg:text-9xl tracking-[0.3em] uppercase text-white font-light"
                    >
                        Megha Shaw
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-6 font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-sand/80"
                    >
                        Digital Muse · Spicy-Aesthetic Pioneer · Viral Storyteller
                    </motion.p>
                </div>
            </section>

            {/* 2. The 'Aura' - About/Bio Section */}
            <section className="relative w-full max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left: Vertical Portrait */}
                <div className="lg:col-span-5 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative h-[500px] lg:h-[700px] -ml-6 lg:-ml-16"
                    >
                        <div className="w-full h-full noir-grade overflow-hidden">
                            <img
                                src="/photos/PAP08464.JPG"
                                alt="Maya Portrait"
                                className="w-full h-full object-cover object-[center_15%]"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Right: Bio + Power Metrics */}
                <div className="lg:col-span-7 space-y-12">
                    {/* The Aura Bio Card - Now separate, not on photo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-charcoal/80 backdrop-blur-sm p-8 lg:p-10 border border-gold/20"
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">The Aura</p>
                        <p className="font-serif italic text-lg md:text-2xl text-sand leading-relaxed">
                            "Megha (@ciaostardus) is a digital muse at the intersection of high-fashion allure
                            and viral storytelling. Defining the 'Spicy-Aesthetic' movement, she creates immersive,
                            dreamlike content that captivates a global audience of millions."
                        </p>
                        <div className="mt-6 pt-4 border-t border-white/10">
                            <p className="font-sans text-sm text-sand/60 leading-relaxed">
                                Megha doesn't just post; she sets a mood that converts curiosity into deep brand loyalty.
                            </p>
                        </div>
                    </motion.div>

                    {/* Power Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="relative">
                            <span className="font-serif text-[100px] md:text-[180px] leading-none text-white/5 absolute -top-8 -left-4 select-none pointer-events-none">
                                77M
                            </span>
                            <div className="relative">
                                <p className="text-[10px] uppercase tracking-[0.3em] text-sand/60 mb-2">Qualified Impressions</p>
                                <p className="font-serif text-5xl md:text-7xl gold-foil">77,633,371</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                            <div className="space-y-1">
                                <p className="text-[9px] uppercase tracking-widest text-sand/50">Link Engagement</p>
                                <p className="font-serif text-2xl md:text-3xl text-gold">+2,001%</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[9px] uppercase tracking-widest text-sand/50">Reach Growth</p>
                                <p className="font-serif text-2xl md:text-3xl text-white">+202.2%</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[9px] uppercase tracking-widest text-sand/50">Global Shares</p>
                                <p className="font-serif text-2xl md:text-3xl text-white">1.9M</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[9px] uppercase tracking-widest text-sand/50">Profile Visits</p>
                                <p className="font-serif text-2xl md:text-3xl text-white">2.9M</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. The 'Power Metric' Belt - Discovery Engine */}
            <section className="relative z-10 w-full py-16 bg-terracotta">
                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="text-center lg:text-left">
                        <p className="font-serif text-6xl md:text-8xl gold-foil">89.8%</p>
                        <p className="font-sans text-xs uppercase tracking-[0.4em] text-white/80 mt-2">Non-Follower Reach</p>
                    </div>
                    <div className="max-w-lg text-center lg:text-right">
                        <h3 className="font-serif text-2xl md:text-4xl text-white italic mb-4">The Discovery Engine.</h3>
                        <p className="font-sans text-sm text-white/70 leading-relaxed">
                            89.8% of engagement originates from new, unique audiences—providing brands with
                            unprecedented market penetration beyond the existing core.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Visual Portfolio - Editorial Gallery */}
            <section className="relative w-full py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
                    >
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-2">Visual Portfolio</p>
                            <h2 className="font-serif text-4xl md:text-6xl text-white italic">The Aesthetic.</h2>
                        </div>
                        <p className="font-sans text-xs text-sand/50 max-w-xs">
                            Curated visuals that define the spicy-aesthetic movement
                        </p>
                    </motion.div>
                </div>

                {/* Row 1: Hero Image Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-[70vh] mb-4 group overflow-hidden"
                >
                    <div className="w-full h-full noir-grade">
                        <img
                            src="/photos/PAP08522.JPG"
                            alt="Hero Editorial"
                            className="w-full h-full object-cover object-[center_30%] transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                        <p className="text-[9px] uppercase tracking-[0.3em] text-gold/80 mb-1">Featured</p>
                        <p className="font-serif text-2xl md:text-4xl text-white italic">The Signature Look</p>
                    </div>
                </motion.div>

                {/* Row 2: Two Asymmetric Images */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-12 gap-4 mb-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="col-span-12 md:col-span-7 relative h-[500px] group overflow-hidden"
                        >
                            <div className="w-full h-full noir-grade">
                                <img
                                    src="/photos/PAP08523.JPG"
                                    alt="Lifestyle"
                                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="col-span-12 md:col-span-5 relative h-[500px] group overflow-hidden"
                        >
                            <div className="w-full h-full noir-grade">
                                <img
                                    src="/photos/PAP08537.JPG"
                                    alt="Motion"
                                    className="w-full h-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Row 3: Three Equal with Text Overlay */}
                    <div className="grid grid-cols-12 gap-4 mb-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="col-span-6 md:col-span-4 relative h-[400px] group overflow-hidden"
                        >
                            <div className="w-full h-full noir-grade">
                                <img
                                    src="/photos/PAP08562.JPG"
                                    alt="Close-up"
                                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="col-span-6 md:col-span-4 relative h-[400px] flex items-center justify-center bg-terracotta/20 border border-gold/10"
                        >
                            <div className="text-center px-8">
                                <p className="font-serif text-5xl md:text-6xl gold-foil mb-2">77M+</p>
                                <p className="text-[9px] uppercase tracking-[0.3em] text-sand/60">Impressions</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="col-span-12 md:col-span-4 relative h-[400px] group overflow-hidden"
                        >
                            <div className="w-full h-full noir-grade">
                                <img
                                    src="/photos/PAP08563.JPG"
                                    alt="Portrait"
                                    className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Row 4: Wide Cinematic */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[300px] md:h-[400px] mb-4 group overflow-hidden"
                    >
                        <div className="w-full h-full noir-grade">
                            <img
                                src="/photos/10-DSCF0171.jpg"
                                alt="Wide Shot"
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/70" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="font-serif text-3xl md:text-5xl text-white/90 italic tracking-wide">Cinematic Storytelling</p>
                        </div>
                    </motion.div>

                    {/* Row 5: Three Column Asymmetric */}
                    <div className="grid grid-cols-12 gap-4 mb-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="col-span-12 md:col-span-5 relative h-[600px] group overflow-hidden"
                        >
                            <div className="w-full h-full noir-grade">
                                <img
                                    src="/photos/15-DSCF0218.jpg"
                                    alt="Editorial 2"
                                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-[9px] uppercase tracking-[0.2em] text-gold/80">Editorial Series</p>
                            </div>
                        </motion.div>
                        <div className="col-span-12 md:col-span-7 grid grid-rows-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative h-[290px] group overflow-hidden"
                            >
                                <div className="w-full h-full noir-grade">
                                    <img
                                        src="/photos/26-DSCF9951.jpg"
                                        alt="Editorial 3"
                                        className="w-full h-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="relative h-[290px] group overflow-hidden"
                            >
                                <div className="w-full h-full noir-grade">
                                    <img
                                        src="/photos/33-DSCF0229.jpg"
                                        alt="Feature"
                                        className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Caption Strip */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-8 py-8 border-t border-b border-white/10 mt-12"
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] text-sand/40">High-Fashion</span>
                        <span className="w-1 h-1 rounded-full bg-gold/50" />
                        <span className="text-[10px] uppercase tracking-[0.3em] text-sand/40">Editorial</span>
                        <span className="w-1 h-1 rounded-full bg-gold/50" />
                        <span className="text-[10px] uppercase tracking-[0.3em] text-sand/40">Lifestyle</span>
                        <span className="w-1 h-1 rounded-full bg-gold/50" />
                        <span className="text-[10px] uppercase tracking-[0.3em] text-sand/40">Cinematic</span>
                    </motion.div>
                </div>
            </section>

            {/* 5. Brand Pedigree - Collaborations & Content */}
            <section className="relative w-full bg-black/50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Brand Pedigree</p>
                        <h2 className="font-serif text-2xl md:text-4xl text-white italic">
                            "Elevating global brands through cinematic storytelling."
                        </h2>
                    </motion.div>

                    {/* Content Offerings */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-center p-6 border border-white/10 hover:border-gold/30 transition-colors"
                        >
                            <Video size={28} className="text-gold mx-auto mb-4" />
                            <h4 className="font-serif text-lg text-white mb-2">Cinematic Reels</h4>
                            <p className="text-[11px] text-sand/60 leading-relaxed">
                                Viral-engineered short-form video content
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center p-6 border border-white/10 hover:border-gold/30 transition-colors"
                        >
                            <Camera size={28} className="text-gold mx-auto mb-4" />
                            <h4 className="font-serif text-lg text-white mb-2">Aesthetic Stills</h4>
                            <p className="text-[11px] text-sand/60 leading-relaxed">
                                High-resolution editorial photography
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-center p-6 border border-white/10 hover:border-gold/30 transition-colors"
                        >
                            <Sparkles size={28} className="text-gold mx-auto mb-4" />
                            <h4 className="font-serif text-lg text-white mb-2">Whitelisted Content</h4>
                            <p className="text-[11px] text-sand/60 leading-relaxed">
                                High-performance ad creative for brand handles
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-center p-6 border border-white/10 hover:border-gold/30 transition-colors"
                        >
                            <Link2 size={28} className="text-gold mx-auto mb-4" />
                            <h4 className="font-serif text-lg text-white mb-2">Link-in-Bio Funneling</h4>
                            <p className="text-[11px] text-sand/60 leading-relaxed">
                                Targeted traffic to exclusive landing pages
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. Global Reach - Demographics */}
            <section className="relative w-full max-w-7xl mx-auto px-6 py-24">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-2">Global Reach</p>
                    <h2 className="font-serif text-3xl md:text-5xl text-white italic">The Audience.</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        <p className="text-[9px] uppercase tracking-[0.3em] text-sand/50">Discovery Rate</p>
                        <p className="font-serif text-4xl text-gold">89.8%</p>
                        <p className="text-xs text-sand/60">Non-Follower Reach</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <p className="text-[9px] uppercase tracking-[0.3em] text-sand/50">Top Territories</p>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-serif text-lg text-white">USA</span>
                                <span className="text-xs text-sand/60">38%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-serif text-lg text-white">UK</span>
                                <span className="text-xs text-sand/60">22%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-serif text-lg text-white">Western EU</span>
                                <span className="text-xs text-sand/60">18%</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4"
                    >
                        <p className="text-[9px] uppercase tracking-[0.3em] text-sand/50">Gender Split</p>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-serif text-lg text-white">Male</span>
                                <span className="text-xs text-gold">65%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-serif text-lg text-white">Female</span>
                                <span className="text-xs text-sand/60">35%</span>
                            </div>
                        </div>
                        <p className="text-[10px] text-sand/40 italic">Luxury "Male Gaze" market</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4"
                    >
                        <p className="text-[9px] uppercase tracking-[0.3em] text-sand/50">Key Demographics</p>
                        <p className="font-serif text-4xl text-white">21-35</p>
                        <p className="text-xs text-sand/60">High-disposable income bracket</p>
                    </motion.div>
                </div>
            </section>

            {/* 7. Editorial Footer - Ecosystem & Rates */}
            <footer className="relative w-full bg-black py-20 px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Digital Ecosystem */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-8 text-center">Digital Ecosystem</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center p-6 border border-white/5">
                                <Instagram size={24} className="text-gold mx-auto mb-3" />
                                <p className="font-serif text-lg text-white mb-1">@ciaostardus</p>
                                <p className="text-[10px] text-sand/50 uppercase tracking-wider">Primary Hub</p>
                            </div>
                            <div className="text-center p-6 border border-white/5">
                                <svg className="w-6 h-6 text-gold mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579 1.205-6.333 3.508-8.181C6.932 2.143 9.786 1.313 13.353 1.313h.011c2.466.017 4.59.616 6.313 1.782a9.51 9.51 0 0 1 2.418 2.387l-2.13 1.452a6.897 6.897 0 0 0-1.755-1.726c-1.307-.885-2.937-1.334-4.847-1.336h-.008c-2.659-.024-4.726.706-6.148 2.172-1.418 1.464-2.167 3.553-2.226 6.211v.013c.058 2.66.81 4.748 2.233 6.212 1.425 1.467 3.492 2.197 6.148 2.173h.007c2.056-.012 3.696-.523 4.876-1.52 1.003-.847 1.682-2.016 2.024-3.48h-6.889v-2.559h9.424c.07.502.105 1.017.105 1.541 0 2.682-.926 4.945-2.618 6.39-1.525 1.303-3.643 2.018-6.158 2.018z" />
                                </svg>
                                <p className="font-serif text-lg text-white mb-1">Threads</p>
                                <p className="text-[10px] text-sand/50 uppercase tracking-wider">Relatable Spicy / Persona</p>
                            </div>
                            <div className="text-center p-6 border border-white/5">
                                <svg className="w-6 h-6 text-gold mx-auto mb-3" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                <p className="font-serif text-lg text-white mb-1">Snapchat</p>
                                <p className="text-[10px] text-sand/50 uppercase tracking-wider">Raw / BTS Content</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Rate Card */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16 py-12 border-y border-white/10"
                    >
                        <p className="text-[10px] uppercase tracking-[0.4em] text-gold mb-6">Investment</p>
                        <p className="font-serif italic text-lg md:text-xl text-sand/80 max-w-2xl mx-auto leading-relaxed">
                            "Partnerships are bespoke and tailored to campaign KPIs. Inquire for custom rate packages.
                            Base rates available for Viral Reel Bundles and Long-term Brand Ambassadorships."
                        </p>
                    </motion.div>

                    {/* Contact */}
                    <div className="flex flex-col items-center space-y-8">
                        <p className="font-serif text-2xl md:text-3xl text-gold tracking-widest uppercase">
                            For Partnership Inquiries
                        </p>
                        <div className="flex items-center gap-3 text-sm text-sand/80">
                            <Mail size={16} className="text-gold" />
                            <a href="mailto:megha.mgmt@gmail.com" className="hover:text-gold transition-colors">
                                megha.mgmt@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-sand/80">
                            <Instagram size={16} className="text-gold" />
                            <span>@ciaostardus</span>
                        </div>
                    </div>
                </div>

                {/* Final gold line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gold/40" />
            </footer>
        </main>
    );
}
