"use client";
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import Contect from './_components/Contect';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';

const Page = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const scaleOnHover = {
    scale: 1.05,
    transition: { duration: 0.3 }
  };

  return (
    <div className="perspective-1000">
      <Head>
        <title>NxtMock</title>
        <meta name="description" content="Crack your next interview with AI-powered mock interviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen relative">
        {/* Header Section with Glass Effect */}
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="w-full py-8 backdrop-blur-md bg-white/80 fixed top-0 z-50 shadow-lg"
        >
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <motion.h1 
              whileHover={{ scale: 1.1 }}
              className="text-3xl font-bold text-indigo-700"
            >
              NxtMock
            </motion.h1>
            <nav className="flex flex-col sm:flex-row flex-wrap items-center justify-between mt-4 md:mt-0 space-y-4 sm:space-y-0 sm:space-x-4">
             

             

              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0">
                {['Features', 'Testimonials', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-lg text-indigo-700 mx-2 md:mx-4 relative overflow-hidden"
                    whileHover={{
                      scale: 1.1,
                      color: '#4338CA'
                    }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
              <motion.div whileHover={scaleOnHover}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/UdaykiranRegimudi"
                >
                  <FaGithub className="w-10 h-8 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 rounded-3xl" />
                </a>
              </motion.div>
            </nav>
          </div>
        </motion.header>

        {/* Hero Section with Gradient */}
        <motion.section 
          className="flex flex-col items-center justify-center text-center py-32 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 px-6 md:px-0 relative overflow-hidden"
          style={{
            backgroundPosition: `50% ${scrollY * 0.5}px`
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-white"
              animate={{ 
                textShadow: ["0 0 5px #C7D2FE", "0 0 15px #C7D2FE", "0 0 5px #C7D2FE"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Crack Your Next Interview
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl md:text-2xl text-indigo-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Practice with NxtMock and get personalized feedback
            </motion.p>
            <motion.div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
              <motion.a
                href="/dashboard"
                className="px-8 py-4 text-lg font-semibold bg-white text-indigo-700 rounded-lg shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(199, 210, 254, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              <motion.a
                href="#features"
                className="px-8 py-4 text-lg font-semibold border border-indigo-200 text-white rounded-lg"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(199, 210, 254, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Features Section with 3D Cards */}
        <section id="features" className="py-20 bg-gradient-to-b from-white to-indigo-50 px-6 md:px-0">
          <div className="container mx-auto text-center">
            <motion.h2 
              {...fadeInUp}
              className="text-4xl font-bold text-indigo-900"
            >
              Features
            </motion.h2>
            <motion.p 
              {...fadeInUp}
              className="mt-4 text-lg text-indigo-700"
            >
              Our AI Mock Interview platform offers a range of powerful features:
            </motion.p>
            <div className="flex flex-wrap justify-center mt-12 gap-8">
              {[
                {
                  title: "AI Mock Interviews",
                  description: "Experience realistic interview scenarios with our advanced AI.",
                  gradient: "from-indigo-50 to-purple-100"
                },
                {
                  title: "Instant Feedback",
                  description: "Get instant, personalized feedback to improve your performance.",
                  gradient: "from-purple-50 to-indigo-100"
                },
                {
                  title: "Comprehensive Reports",
                  description: "Receive detailed reports highlighting your strengths and weaknesses.",
                  gradient: "from-indigo-50 to-purple-100"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="w-full md:w-1/3 max-w-sm"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <motion.div
                    className={`bg-gradient-to-br ${feature.gradient} rounded-xl p-8 shadow-xl transform-gpu`}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 10,
                      rotateX: 10,
                      boxShadow: "0 20px 30px rgba(79, 70, 229, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-semibold text-indigo-800 mb-4">{feature.title}</h3>
                    <p className="text-indigo-600">{feature.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section with Floating Cards */}
        <section id="testimonials" className="py-20 bg-gradient-to-b from-indigo-50 to-purple-100 px-6 md:px-0 overflow-hidden">
          <div className="container mx-auto text-center">
            <motion.h2 
              {...fadeInUp}
              className="text-4xl font-bold text-indigo-900 mb-12"
            >
              What Our Users Say
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  text: "The AI mock interviews were incredibly helpful. I felt much more confident going into my real interview.",
                  author: "Alex Johnson"
                },
                {
                  text: "The feedback was spot on and helped me improve my answers. Highly recommend this service!",
                  author: "Sarah Williams"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="w-full md:w-2/5"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    className="bg-white rounded-xl p-8 shadow-lg"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 30px rgba(79, 70, 229, 0.2)"
                    }}
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <p className="text-indigo-700 text-lg italic">{testimonial.text}</p>
                    <h4 className="mt-6 text-lg font-semibold text-indigo-600">- {testimonial.author}</h4>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white px-6 md:px-0">
          <Contect />
        </section>
      </main>

      <motion.footer 
        className="py-8 bg-indigo-900 text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <p>© 2025 NxtMock. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default Page;