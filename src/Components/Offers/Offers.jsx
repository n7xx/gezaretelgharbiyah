import React, { useState , useEffect } from 'react'
import styles from './Offers.module.css' 


import { Flame, Phone, MessageCircle, Clock } from "lucide-react";
import meat380 from "../../assets/meat-380.jpg";
import beefsteak from "../../assets/beefsteak-420.jpg";
import kabab from "../../assets/kabab-420.jpg";
import meatKhodar from "../../assets/meat-khodar-380.jpg";
import ketf from "../../assets/ketf-350.jpg";
import sogo2 from "../../assets/sogo2-330.jpg";

const offers = [
  { id: 1, title: "لحمة مليس", description: "لحم بلدي طازة بدون عظم", price: "380 جنيه/كيلو", image: meat380, badge: "الأكثر طلبًا" },
  { id: 2, title: "لحمة خضار", description: "لحم بلدي مقطع للخضار", price: "380 جنيه/كيلو", image: meatKhodar, badge: "عرض مميز" },
  { id: 3, title: "بفتيك", description: "شرائح بفتيك مميزة", price: "420 جنيه/كيلو", image: beefsteak, badge: "جودة ممتازة" },
  { id: 4, title: "كباب حلة", description: "قطع كباب للطبخ", price: "420 جنيه/كيلو", image: kabab, badge: "مميز" },
  { id: 5, title: "كتف", description: "لحم كتف طازة", price: "350 جنيه/كيلو", image: ketf, badge: "سعر خاص" },
  { id: 6, title: "سجق", description: "سجق بلدي طازة", price: "330 جنيه/كيلو", image: sogo2, badge: "شعبي" },
];

const Offers = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 py-12 text-center text-white relative">
        <div className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 rounded-full px-4 py-2 mb-4 mx-auto">
          <Flame className="w-5 h-5" /> <span className="font-bold">أسعار اليوم</span>
        </div>
        <h1 className="text-4xl font-black mb-4">أسعار لحوم الغربية</h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          أسعار ثابتة وجودة مضمونة - ملوك اللحمة البلدي في مصر
        </p>
        <div className="flex items-center justify-center gap-2 mt-4 text-yellow-500">
          <Clock className="w-5 h-5" /> <span>الأسعار محدثة يوميًا</span>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1 border border-gray-200">
              <div className="relative aspect-square">
                <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">{offer.badge}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-500 mb-4">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-blue-600">{offer.price}</span>
                  <a href="tel:19026" className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 transition">
                    <Phone className="w-4 h-4" /> اطلب
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gray-200">
        <div className="max-w-4xl mx-auto bg-blue-600 rounded-2xl p-8 text-center text-white relative">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">عايز تطلب كمية؟</h2>
          <p className="text-white/80 mb-6">اتصل بينا وهنعملك سعر خاص على الكميات الكبيرة</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:19026" className="flex-1 px-4 py-3 bg-yellow-500 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-600 transition">
              <Phone className="w-5 h-5" /> الخط الساخن 19026
            </a>
            <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-3 bg-green-500 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition">
              <MessageCircle className="w-5 h-5" /> واتساب
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
