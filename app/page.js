"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Lock, Star, ArrowRight, Link as LinkIcon } from "lucide-react";
import { useState, useEffect } from "react";
import localFont from "next/font/local";
import Link from 'next/link'

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {


  return (
    <>
      {/* Hero Section */}
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 min-h-[70vh] md:min-h-[80vh] relative overflow-hidden">
        <section className="grid grid-cols-1 gap-4 h-full py-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 items-center justify-center px-4 py-8 md:py-0">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 drop-shadow-lg font-poppins ${poppins.className}`}>
              The best URL shortener in the Market
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="px-0 md:px-8 lg:px-12 text-center text-sm md:text-base text-gray-700 dark:text-gray-300 drop-shadow">
              We are the most straightforward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener.
            </motion.p>
            <motion.div 
              className='flex flex-col sm:flex-row gap-4 justify-center w-full'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}>
              <Link href="/shorten">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className='bg-white text-purple-600 dark:text-purple-400 rounded-xl shadow-xl px-8 py-4 font-bold text-lg font-poppins hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 hover:shadow-2xl transition-all duration-300 border border-purple-200 dark:border-purple-700'>
                  Try Now → 
                </motion.button>
              </Link>
              <Link href="/github">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className='bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl shadow-xl px-8 py-4 font-bold text-lg font-poppins hover:from-purple-600 hover:to-indigo-600 hover:shadow-2xl transition-all duration-300 border border-transparent'>
                  GitHub
                </motion.button>
              </Link>
            </motion.div>

            {/* Mini Features */}
            <motion.div 
              className='mt-12 grid grid-cols-3 gap-6 w-full max-w-2xl'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}>
              <motion.div 
                className='glass rounded-2xl p-6 backdrop-blur-xl shadow-glass hover:shadow-glow hover:scale-105 transition-all cursor-default'
                whileHover={{ y: -5 }}>
                <Zap className='text-4xl mx-auto mb-3 text-yellow-400 animate-pulse-slow' />
                <p className='font-bold text-lg font-poppins dark:text-white'>Lightning Fast</p>
              </motion.div>
              <motion.div 
                className='glass rounded-2xl p-6 backdrop-blur-xl shadow-glass hover:shadow-glow hover:scale-105 transition-all cursor-default'
                whileHover={{ y: -5 }}>
                <Lock className='text-4xl mx-auto mb-3 text-emerald-400' />
                <p className='font-bold text-lg font-poppins dark:text-white'>Privacy First</p>
              </motion.div>
              <motion.div 
                className='glass rounded-2xl p-6 backdrop-blur-xl shadow-glass hover:shadow-glow hover:scale-105 transition-all cursor-default'
                whileHover={{ y: -5 }}>
                <Star className='text-4xl mx-auto mb-3 text-amber-400 animate-glow' />
                <p className='font-bold text-lg font-poppins dark:text-white'>Super Simple</p>
              </motion.div>
            </motion.div>
          </motion.div>      </section>      </motion.main>


      {/* Features Section */}
      <motion.section 
        id="features"
        className='bg-gradient-to-b from-white/90 to-purple-50/90 dark:from-gray-900/95 dark:to-gray-800/95 py-20'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div className='text-center mb-20'>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 dark:from-purple-400 dark:via-purple-300 dark:to-indigo-400 bg-clip-text text-transparent mb-6 font-poppins ${poppins.className}`}>
              Why Choose BitLinks?
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed'>
              Powerful features designed for speed, privacy, and ease of use.
            </p>
          </motion.div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <motion.div 
              className='glass p-8 rounded-3xl shadow-2xl backdrop-blur-xl group hover:shadow-glow cursor-default'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}>
              <Zap className='text-6xl mx-auto mb-6 text-yellow-400 group-hover:animate-bounce' />
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 font-poppins'>Ultra Fast</h3>
              <p className='text-gray-600 dark:text-gray-400 text-lg leading-relaxed'>
                Millisecond redirects with global CDN. No delays, no nonsense.
              </p>
            </motion.div>

            <motion.div 
              className='glass p-8 rounded-3xl shadow-2xl backdrop-blur-xl group hover:shadow-glow cursor-default'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}>
              <Lock className='text-6xl mx-auto mb-6 text-emerald-400 group-hover:rotate-12 transition-transform duration-300' />
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 font-poppins'>Privacy First</h3>
              <p className='text-gray-600 dark:text-gray-400 text-lg leading-relaxed'>
                Zero tracking, zero logs, zero sign-up. Your data never leaves your control.
              </p>
            </motion.div>

            <motion.div 
              className='glass p-8 rounded-3xl shadow-2xl backdrop-blur-xl group hover:shadow-glow cursor-default'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}>
              <LinkIcon className='text-6xl mx-auto mb-6 text-blue-400 animate-spin slow' />
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 font-poppins'>Custom Links</h3>
              <p className='text-gray-600 dark:text-gray-400 text-lg leading-relaxed'>
                Brand your links with custom aliases. Perfect for marketing campaigns.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className='relative py-24 overflow-hidden bg-gradient-to-br from-purple-600/95 via-indigo-600/95 to-purple-800/95 dark:from-gray-900/95 dark:via-slate-900/95 dark:to-gray-800/95'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 dark:from-gray-900 dark:to-slate-900' />
        <div className='relative max-w-4xl mx-auto px-4 text-center'>
          <motion.h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-white/90 mb-8 font-poppins ${poppins.className}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}>
            Ready to Transform Your Links?
          </motion.h2>
          <motion.p 
            className='text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}>
            Join thousands of users creating beautiful, fast, and private short links every day.
          </motion.p>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}>
            <Link href="/shorten">
              <motion.button 
                whileHover={{ scale: 1.1, boxShadow: "0 25px 50px -12px rgba(255,255,255,0.25)" }}
                whileTap={{ scale: 0.95 }}
                className='glass bg-white/20 backdrop-blur-3xl text-white rounded-3xl shadow-2xl px-12 py-6 text-2xl font-black font-poppins border border-white/30 hover:border-white/50 hover:bg-white/30 transition-all duration-500 min-w-[280px] shadow-glow'>
                Create Your First Link <ArrowRight className='inline ml-3 w-8 h-8 group-hover:translate-x-2 transition-transform' />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

