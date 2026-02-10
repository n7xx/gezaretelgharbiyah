import React, { useState , useEffect } from 'react'
import styles from './DeliverySection.module.css' 
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const areas = [
  "سيدي جابر",
  "سموحة",
  "العصافرة",
  "المنتزه",
  "الأنفوشي",
  "محرم بك",
  "كرموز",
  "العجمي",
  "المندرة",
  "جليم",
  "رشدي",
  "كامب شيزار",
];
const DeliverySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2">
            
            {/* Content */}
            <div className="p-8 lg:p-12">

              {/* badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <MapPin size={20} />
                <span className="font-semibold">خدمة التوصيل</span>
              </motion.div>

              {/* title */}
              <h2 className="text-3xl font-bold mb-4">
                نوصلك لحد البيت
              </h2>

              <p className="text-gray-600 text-lg mb-6">
                توصيل سريع لجميع مناطق الإسكندرية. اطلب دلوقتي واستلم في أسرع وقت!
              </p>

              {/* areas */}
              <div className="mb-8">
                <h3 className="font-bold mb-3">
                  المناطق اللي بنوصلها:
                </h3>

                <div className="flex flex-wrap gap-2">
                  {areas.map((area) => (
                    <span
                      key={area}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* buttons */}
              <div className="flex flex-col sm:flex-row gap-3">

                <a
                  href="tel:+201234567890"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
                >
                  <Phone size={18} />
                  اتصل للطلب
                </a>

                <a
                  href="https://wa.me/201234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-green-600 text-green-700 hover:bg-green-50 px-6 py-3 rounded-xl transition"
                >
                  <MessageCircle size={18} />
                  اطلب واتساب
                </a>

              </div>
            </div>

            {/* Map */}
            <div className="min-h-[350px] lg:min-h-full">
              <iframe
                src="https://maps.google.com/maps?q=alexandria&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                title="map"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;