import React, { useState , useEffect } from 'react'
import styles from './HeroSection.module.css' 


import { Phone, MessageCircle, Truck, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../../../assets/grilled-meat.jpg";
import Logo from "../../../assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-700 to-red-900 min-h-[600px] flex items-center">
      <div className="container mx-auto px-4 py-12 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-center lg:text-right"
        >
          <img
            src={Logo}
            alt="logo"
            className="h-32 mx-auto lg:mx-0 mb-6"
          />

          <h1 className="text-4xl lg:text-6xl font-black mb-4 leading-tight">
            ملوك اللحمة البلدي  
            <span className="block text-yellow-400">في مصر</span>
          </h1>

          <p className="text-lg text-gray-200 mb-8">
            جزارة الغربية - اختيارك الأول للحوم الطازة.  
            توصيل سريع لجميع مناطق الإسكندرية.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            
            <a
              href="tel:19026"
              className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl transition"
            >
              <Phone size={20} />
              الخط الساخن 19026
            </a>

            <a
              href="https://wa.me/201234567890"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl transition"
            >
              <MessageCircle size={20} />
              اطلب واتساب
            </a>
          </div>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm">
            <div className="flex items-center gap-2">
              <Truck className="text-yellow-400" />
              توصيل سريع
            </div>

            <div className="flex items-center gap-2">
              <Clock className="text-yellow-400" />
              متاحين يوميًا
            </div>

            <div className="flex items-center gap-2">
              <Shield className="text-yellow-400" />
              جودة مضمونة
            </div>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <img
            src={heroImage}
            alt="meat"
            className="rounded-2xl shadow-2xl max-w-md w-full"
          />

          {/* PRICE BADGE */}
          <div className="absolute -bottom-5 -right-5 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
            <p className="text-sm">كيلو اللحمة</p>
            <p className="text-2xl font-black">380 جنيه</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
