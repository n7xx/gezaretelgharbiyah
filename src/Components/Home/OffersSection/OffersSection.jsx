import React, { useState , useEffect } from 'react'
import styles from './OffersSection.module.css' 

import { Link } from "react-router-dom";
import { Flame, ArrowLeft } from "lucide-react";

import meatKhodar from "../../../assets/meat-khodar-380.jpg";
import meat380 from "../../../assets/meat-380.jpg";
import beefsteak from "../../../assets/beefsteak-420.jpg";


const offers = [
  {
    id: 1,
    title: "لحمة خضار",
    description: "لحم بلدي طازة مقطع للخضار",
    price: "380 جنيه/كيلو",
    image: meatKhodar,
    badge: "عرض مميز",
  },
  {
    id: 2,
    title: "لحمة مليس",
    description: "لحم بلدي بدون عظم",
    price: "380 جنيه/كيلو",
    image: meat380,
    badge: "الأكثر طلبًا",
  },
  {
    id: 3,
    title: "بفتيك",
    description: "شرائح بفتيك مميزة",
    price: "420 جنيه/كيلو",
    image: beefsteak,
    badge: "جودة ممتازة",
  },
];

const OffersSection = () => {
  return (
    <section className="py-20 bg-amber-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-500 text-white rounded-full px-4 py-2 mb-4 justify-center">
            <Flame className="w-5 h-5" />
            <span className="font-bold">أسعار اليوم</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900">
            أسعار لحوم الغربية
          </h2>
          <p className="text-gray-600 text-lg">أفضل الأسعار مع أعلى جودة</p>
        </div>

        {/* Offers grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {offer.badge}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600 mb-3">{offer.description}</p>
                <span className="text-2xl font-black text-green-500">
                  {offer.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center">
          <Link
            to="/offers"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-green-600 transition"
          >
            شوف كل الأسعار
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
