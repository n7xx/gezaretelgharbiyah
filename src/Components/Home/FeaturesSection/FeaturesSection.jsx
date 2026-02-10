import React, { useState , useEffect } from 'react'
import styles from './FeaturesSection.module.css' 


import { Truck, Shield, Clock, Percent, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "جودة مضمونة",
    description: "لحوم بلدي طازة من أجود المصادر",
  },
  {
    icon: Truck,
    title: "توصيل سريع",
    description: "نوصلك لحد البيت في أسرع وقت",
  },
  {
    icon: Percent,
    title: "أسعار منافسة",
    description: "أفضل الأسعار في السوق مع عروض مستمرة",
  },
  {
    icon: Clock,
    title: "متاحين دائمًا",
    description: "من 8 الصبح لـ 12 بالليل كل يوم",
  },
  {
    icon: Award,
    title: "خبرة سنين",
    description: "خبرة طويلة في مجال الجزارة والمشويات",
  },
  {
    icon: Users,
    title: "آلاف العملاء",
    description: "ثقة آلاف الأسر في الإسكندرية",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            ليه تختار جزارة الغربية؟
          </h2>

          <p className="text-gray-600 text-lg">
            أسباب تخليك تثق فينا دايمًا
          </p>

          <div className="mt-4 h-1 w-24 bg-green-600 mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition hover:-translate-y-2 cursor-pointer"
              >
                {/* icon */}
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-green-600" size={26} />
                </div>

                <h3 className="font-bold text-lg mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
