import React, { useState , useEffect } from 'react'
import styles from './CtaSection.module.css' 
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../../../assets/logo.png";

const CTASection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-700 to-red-900 rounded-3xl p-8 lg:p-14 text-center relative overflow-hidden"
        >
          
          {/* circles */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10">

            <motion.img
              src={Logo}
              alt="logo"
              className="h-24 mx-auto mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
            />

            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              جاهز تطلب؟
            </h2>

            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              اتصل بينا دلوقتي أو ابعتلنا على واتساب وهنوصلك طلبك في أسرع وقت.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href="tel:19026"
                className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl transition"
              >
                <Phone size={22} />
                الخط الساخن 19026
              </a>

              <a
                href="https://wa.me/201234567890"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition"
              >
                <MessageCircle size={22} />
                واتساب
              </a>

            </div>

            <p className="text-white/60 text-sm mt-6">
              متاحين يوميًا من 8 صباحًا - 12 منتصف الليل
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;
